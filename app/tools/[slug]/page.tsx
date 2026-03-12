'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { tools } from '../../../lib/tools';
import ToolReviews from '../../components/ToolReviews';
import StarRating from '../../components/StarRating';

interface ToolPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = tools.find(t => t.id === slug);

  if (!tool) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/tools"
          className="text-blue-600 hover:text-blue-800 mb-8 inline-block"
        >
          ← Back to Tools
        </Link>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          {/* Header with Rating */}
          <div className="mb-6">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{tool.name}</h1>
                <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded mt-2 inline-block">
                  {tool.category}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <StarRating rating={tool.averageRating} size="md" readonly />
                <span className="text-lg font-semibold text-gray-900">
                  {tool.averageRating.toFixed(1)} ({tool.reviewCount})
                </span>
              </div>
            </div>
            <p className="text-lg text-gray-600">{tool.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Visit {tool.name}
            </a>
            <button className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold text-center hover:bg-gray-800 transition-colors">
              Add to Favorites
            </button>
          </div>

          {/* Features & Use Cases */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-2">
                {tool.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Use Cases</h2>
              <ul className="space-y-2">
                {tool.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></span>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing, Pros, Cons */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Pricing</h2>
              <p className="text-gray-700 text-lg">{tool.pricing}</p>
            </div>
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Pros</h2>
                  <ul className="space-y-2">
                    {tool.pros.map((pro, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="text-green-600 mr-3 flex-shrink-0">✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Cons</h2>
                  <ul className="space-y-2">
                    {tool.cons.map((con, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="text-red-600 mr-3 flex-shrink-0">✗</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Alternatives */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Alternatives</h2>
            <div className="flex flex-wrap gap-2">
              {tool.alternatives.map((alt, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-200 transition-colors">
                  {alt}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <ToolReviews tool={tool} />
      </div>
    </div>
  );
}

