'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import StarRating from '../components/StarRating';
import FavoritesButton from '../components/FavoritesButton';
import { tools, categories } from '../../lib/tools';

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredTools, setFilteredTools] = useState(tools);

  useEffect(() => {
    let filtered = tools;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }

    // Filter by search query (name and description)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query)
      );
    }

    setFilteredTools(filtered);
  }, [searchQuery, selectedCategory]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Tools Directory</h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore our curated collection of AI tools across different categories.
          </p>
          
          {/* Filters Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-8 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 items-end">
              {/* Search Input */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  🔍 Search tools
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder="Search by name or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>

              {/* Category Filter */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by category
                </label>
                <select
                  id="category"
                  value={selectedCategory || ''}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count & Reset */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-gray-100">
              <div className="text-sm text-gray-600">
                Found {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}
              </div>
              {(searchQuery || selectedCategory) && (
                <button
                  onClick={resetFilters}
                  className="text-sm text-gray-600 hover:text-gray-900 font-medium flex items-center gap-1"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool) => (
              <div key={tool.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">{tool.name}</h2>
                  <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {tool.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <StarRating rating={tool.averageRating} size="sm" readonly />
                  <span className="text-xs text-gray-500 font-medium">
                    {tool.averageRating.toFixed(1)} ({tool.reviewCount})
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <FavoritesButton tool={tool} className="flex-shrink-0" />
                  <span className="text-sm text-gray-500 flex-1 text-center">{tool.pricing}</span>
                  <div className="space-x-2">
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Visit Site
                    </a>
                    <Link
                      href={`/tools/${tool.id}`}
                      className="text-gray-600 hover:text-gray-800 font-medium"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No tools found</h3>
            <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria.</p>
            <button
              onClick={resetFilters}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
