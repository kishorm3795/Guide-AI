import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export const dynamic = 'force-dynamic';

// Available AI tools data to provide context to the AI
const toolsContext = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'AI Assistants',
    description: 'A powerful AI chatbot for conversation, writing, and problem-solving.',
    features: ['Natural language processing', 'Code generation', 'Creative writing', 'Research assistance'],
    pricing: 'Free tier available, premium plans start at $20/month',
    useCases: ['Writing assistance', 'Coding help', 'Brainstorming ideas', 'Learning new topics']
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    category: 'Productivity',
    description: 'AI-powered writing and automation features within Notion workspaces.',
    features: ['Smart writing', 'Summarization', 'Translation', 'Task automation'],
    pricing: 'Included in Notion plans, starts at $8/month',
    useCases: ['Note-taking', 'Project management', 'Knowledge base', 'Team collaboration']
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    category: 'Writing',
    description: 'AI-powered code completion and generation tool for developers.',
    features: ['Code suggestions', 'Function completion', 'Documentation', 'Test generation'],
    pricing: '$10/month or $100/year',
    useCases: ['Software development', 'Code review', 'Learning programming', 'Rapid prototyping']
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    category: 'Automation',
    description: 'AI image generation tool for creating stunning visuals from text prompts.',
    features: ['Text-to-image', 'Style variations', 'High resolution', 'Discord integration'],
    pricing: 'Free trial, plans from $10/month',
    useCases: ['Graphic design', 'Marketing materials', 'Concept art', 'Social media content']
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    category: 'Research',
    description: 'AI-powered search engine that provides sourced answers to questions.',
    features: ['Source citations', 'Follow-up questions', 'Pro search', 'API access'],
    pricing: 'Free basic, Pro at $20/month',
    useCases: ['Research', 'Fact-checking', 'Learning', 'Professional inquiries']
  }
];

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured. Please set OPENAI_API_KEY in environment variables.' },
        { status: 500 }
      );
    }

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

Format your response as JSON with the following structure:
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

    // Create OpenAI client only during request
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY not set');
    }
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const response = completion.choices[0]?.message?.content || '{}';

    // Parse and return the response
    try {
      const recommendations = JSON.parse(response);
      return NextResponse.json(recommendations);
    } catch (parseError) {
      // If JSON parsing fails, return the raw response
      return NextResponse.json({
        rawResponse: response,
        message: response
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

