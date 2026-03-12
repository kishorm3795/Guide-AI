'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { tools } from '../../lib/tools';
import StarRating from '../../components/StarRating';
import FavoritesButton from '../../components/FavoritesButton';

interface ExtendedTool {
  id: string;
  name: string;
  category: string;
  description: string;
  pricing: string;
  features: string[];
  pros: string[];
  cons: string[];
  averageRating: number;
  reviewCount: number;
  link: string;
}

export default function ComparePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const toolIds = searchParams.get('tools')?.split(',')?.filter(Boolean) || [];
  
  const selectedTools = tools.filter(tool => toolIds.includes(tool.id)) as ExtendedTool[];

  // Limit to max 4 tools
  if (selectedTools.length > 4) {
    const validIds = toolIds.slice(0, 4);
    router.replace(`/compare?tools=${validIds.join(',')}`);
    return <div>Loading...</div>;
  }

  if (selectedTools.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-20 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-7xl mb-6">⚖️</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">No tools selected for comparison</h1>
          <p className="text-xl text-gray-600 mb-8">
            Select tools from the tools page using checkboxes and click "Compare Selected".
          </p>
          <Link
            href="/tools"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Browse Tools →
          </Link>
        </div>
      </div>
    );
  }

  const getTopFeatures = (features: string[]) => features.slice(0, 3).join(', ') + (features.length > 3 ? '...' : '');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ⚖️ Compare {selectedTools.length} Tools
          </h1>
          <div className="flex flex-wrap gap-2 justify-center mb-6 text-sm text-gray-600">
            {selectedTools.map(tool => (
              <span key={tool.id} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {tool.name}
              </span>
            ))}
          </div>
          <Link
            href="/tools"
            className="inline-block bg-gray-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            ← Back to Tools
          </Link>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto mb-8">
          <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Feature
                </th>
                {selectedTools.map(tool => (
                  <th key={tool.id} className="px-4 py-4 text-center">
                    <div className="font-semibold text-gray-900 text-sm">{tool.name}</div>
                    <div className="text-xs text-gray-500">{tool.category}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">Rating</td>
                {selectedTools.map(tool => (
                  <td key={tool.id} className="px-4 py-4 text-sm text-center">
                    <div className="flex items-center justify-center gap-1">
                      <StarRating rating={tool.averageRating} size="sm" readonly />
                      <span>{tool.averageRating.toFixed(1)}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">({tool.reviewCount})</div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">Pricing</td>
                {selectedTools.map(tool => (
                  <td key={tool.id} className="px-4 py-4 text-sm text-center font-medium">
                    {tool.pricing}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">Key Features</td>
                {selectedTools.map(tool => (
                  <td key={tool.id} className="px-4 py-4 text-sm">
                    <div className="max-h-20 overflow-y-auto">
                      {getTopFeatures(tool.features).split(', ').map((feat, i) => (
                        <div key={i} className="text-xs bg-green-50 text-green-800 px-2 py-1 rounded mb-1 last:mb-0">
                          {feat}
                        </div>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">Pros</td>
                {selectedTools.map(tool => (
                  <td key={tool.id} className="px-4 py-4 text-sm">
                    <ul className="text-xs space-y-1">
                      {tool.pros.slice(0, 3).map((pro, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">Cons</td>
                {selectedTools.map(tool => (
                  <td key={tool.id} className="px-4 py-4 text-sm">
                    <ul className="text-xs space-y-1">
                      {tool.cons.slice(0, 3).map((con, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {selectedTools.map((tool) => (
            <div key={tool.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{tool.name}</h3>
                  <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {tool.category}
                  </span>
                </div>
                <FavoritesButton tool={tool} className="ml-4 flex-shrink-0" />
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-medium text-gray-900 mb-1">Rating</div>
                  <div className="flex items-center gap-2">
                    <StarRating rating={tool.averageRating} size="sm" readonly />
                    <span className="font-medium">{tool.averageRating.toFixed(1)}</span>
                  </div>
                </div>
                
                <div>
                  <div className="font-medium text-gray-900 mb-1">Pricing</div>
                  <span className="bg-gray-100 px-3 py-1 rounded font-medium">{tool.pricing}</span>
                </div>
                
                <div>
                  <div className="font-medium text-gray-900 mb-2">Key Features</div>
                  <div className="space-y-1">
                    {tool.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center text-xs">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="pt-4 mt-4 border-t border-gray-200 flex gap-2">
                <a href={tool.link} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-blue-700">
                  Visit
                </a>
                <Link href={`/tools/${tool.id}`} className="flex-1 text-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-sm text-gray-500">
          <p>💡 Tip: Compare up to 4 tools at once. Use checkboxes on the tools page.</p>
        </div>
      </div>
    </div>
  );
}

