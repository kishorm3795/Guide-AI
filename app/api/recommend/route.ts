import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { tools } from '../../../lib/tools';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured. Please set OPENAI_API_KEY in environment variables.' },
        { status: 500 }
      );
    }

    // Available AI tools data formatted for the LLM
    const toolsContext = tools.map(t => ({
      id: t.id,
      name: t.name,
      category: t.category,
      description: t.description,
      features: t.features.slice(0, 3), // Limit features for token efficiency
      pricing: t.pricing,
      useCases: t.useCases.slice(0, 3)  // Limit use cases for token efficiency
    }));

    // Parse request body
    const body = await request.json();
    const { query, useCase, budget, category } = body;

    // Validate input
    if (!query && !useCase && !category) {
      return NextResponse.json(
        { error: 'Please provide a query, use case, or category preference.' },
        { status: 400 }
      );
    }

    // Build context-aware prompt
    const systemPrompt = `You are an AI tool recommendation expert. You have access to a curated list of AI tools with their details. Your task is to recommend the most suitable tools based on the user's needs.

Here are the available tools:
${JSON.stringify(toolsContext, null, 2)}

Provide recommendations in a friendly, helpful manner. For each recommended tool, include:
1. Tool name
2. Why it's a good fit for the user's needs
3. Key features relevant to their use case
4. Pricing information
5. A brief explanation of how it helps

Format your response as valid JSON ONLY with the following structure:
{
  "recommendations": [
    {
      "toolId": "tool-id",
      "reason": "Why this tool fits the user's needs",
      "relevantFeatures": ["feature1", "feature2"],
      "pricing": "pricing information",
      "howItHelps": "brief explanation"
    }
  ],
  "summary": "Overall summary of recommendations"
}`;

    const userPrompt = `I'm looking for an AI tool with the following preferences:
${query ? `- Query: ${query}` : ''}
${useCase ? `- Use case: ${useCase}` : ''}
${budget ? `- Budget: ${budget}` : ''}
${category ? `- Category: ${category}` : ''}

Please recommend the best tools from your list that match these needs.`;

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Call OpenAI API with a more modern and cost-effective model
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Keeping current model but ensuring JSON format
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    let response = completion.choices[0]?.message?.content || '{}';

    // Robust JSON parsing: Remove markdown code blocks if present
    if (response.includes('```json')) {
      response = response.split('```json')[1].split('```')[0].trim();
    } else if (response.includes('```')) {
      response = response.split('```')[1].split('```')[0].trim();
    }

    // Parse and return the response
    try {
      const recommendations = JSON.parse(response);
      return NextResponse.json(recommendations);
    } catch {
      // If JSON parsing fails, return a safe error message with the raw response for debugging
      console.error('Failed to parse AI response:', response);
      return NextResponse.json({
        recommendations: [],
        summary: "I'm sorry, I couldn't format the recommendations correctly. Please try again.",
        rawResponse: response
      });
    }

  } catch (error) {
    
    if (error instanceof OpenAI.APIError) {
      if (error.status === 401) {
        return NextResponse.json(
          { error: 'Invalid API key. Please check your configuration.' },
          { status: 401 }
        );
      }
      if (error.status === 429) {
        return NextResponse.json(
          { error: 'Rate limit exceeded. Please try again later.' },
          { status: 429 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to get recommendations. Please try again.' },
      { status: 500 }
    );
  }
}

