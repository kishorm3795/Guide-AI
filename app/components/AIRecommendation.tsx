'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Recommendation {
  toolId: string;
  reason: string;
  relevantFeatures: string[];
  pricing: string;
  howItHelps: string;
}

interface AIRecommendationProps {
  tools: {
    id: string;
    name: string;
    category: string;
    description: string;
    link: string;
  }[];
}

export default function AIRecommendation({ tools }: AIRecommendationProps) {
  const [query, setQuery] = useState('');
  const [recommendations, setRecommendations] = useState<{
    recommendations: Recommendation[];
    summary: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get recommendations');
      }

      setRecommendations(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const getToolDetails = (toolId: string) => {
    return tools.find(tool => tool.id === toolId);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          🤖 AI Tool Recommendations
        </h2>
        <p className="text-gray-600 text-lg">
          Tell us what you need, and our AI will suggest the perfect tools for you!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., I need help with coding and writing documentation, or I want to create AI images for marketing"
            className="flex-1 px-5 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-lg"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Analyzing...
              </span>
            ) : (
              'Get Recommendations'
            )}
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-3">
          💡 Tip: Include details about your use case, budget, or specific features you need
        </p>
      </form>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-700 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </p>
        </div>
      )}

      {recommendations && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">📋 Summary</h3>
            <p className="text-gray-700">{recommendations.summary}</p>
          </div>

          <div className="grid gap-6">
            {recommendations.recommendations.map((rec, index) => {
              const toolDetails = getToolDetails(rec.toolId);
              if (!toolDetails) return null;

              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-xl font-semibold text-blue-600">
                          {toolDetails.name}
                        </h4>
                        <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                          {toolDetails.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-3">{rec.reason}</p>
                      
                      <div className="bg-green-50 rounded-lg p-4 mb-3">
                        <h5 className="font-semibold text-green-800 mb-2">✨ How it helps</h5>
                        <p className="text-green-700">{rec.howItHelps}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {rec.relevantFeatures.map((feature, i) => (
                          <span
                            key={i}
                            className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 md:items-end">
                      <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded">
                        💰 {rec.pricing}
                      </span>
                      <Link
                        href={`/tools/${rec.toolId}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        View Details →
                      </Link>
                      <a
                        href={toolDetails.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-green-600 hover:text-green-800 font-medium text-sm"
                      >
                        Visit Website →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/tools"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Browse All Tools
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

