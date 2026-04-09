'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import StarRating from '../components/StarRating';
import FavoritesButton from '../components/FavoritesButton';
import { tools, categories } from '../../lib/tools';

export default function ToolsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredTools, setFilteredTools] = useState(tools);
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);

  useEffect(() => {
    let filtered = tools;

    if (selectedCategory) {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query)
      );
    }

    setFilteredTools(filtered);
  }, [searchQuery, selectedCategory]);

  const toggleCompare = (toolId: string) => {
    setSelectedForCompare(prev => {
      if (prev.includes(toolId)) {
        return prev.filter(id => id !== toolId);
      }
      if (prev.length >= 4) {
        alert('You can compare up to 4 tools at a time.');
        return prev;
      }
      return [...prev, toolId];
    });
  };

  const handleCompare = () => {
    if (selectedForCompare.length < 2) {
      alert('Please select at least 2 tools to compare.');
      return;
    }
    router.push(`/compare?tools=${selectedForCompare.join(',')}`);
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Tools Directory</h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore our curated collection of AI tools across different categories.
          </p>
          
          <div className="bg-white rounded-xl p-6 shadow-sm mb-8 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 items-end">
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

        {filteredTools.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool) => (
              <div key={tool.id} className="relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 group">
                {/* Compare Checkbox */}
                <div className="absolute top-4 left-4 z-10">
                  <label className="flex items-center cursor-pointer group/check">
                    <input
                      type="checkbox"
                      checked={selectedForCompare.includes(tool.id)}
                      onChange={() => toggleCompare(tool.id)}
                      className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-colors"
                    />
                    <span className="ml-2 text-xs font-medium text-gray-400 group-hover/check:text-blue-600 transition-colors">Compare</span>
                  </label>
                </div>

                <div className="flex justify-between items-start mb-4 mt-6">
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{tool.name}</h2>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                    {tool.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 line-clamp-2 h-12">{tool.description}</p>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <StarRating rating={tool.averageRating} size="sm" readonly />
                    <span className="text-xs text-gray-500 font-semibold">
                      {tool.averageRating.toFixed(1)} <span className="text-gray-300 font-normal">({tool.reviewCount})</span>
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-50">
                    <FavoritesButton tool={tool} />
                    <span className="text-sm font-medium text-gray-700">{tool.pricing}</span>
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/tools/${tool.id}`}
                        className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        Details
                      </Link>
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900 text-white text-sm font-bold px-4 py-2 rounded-xl hover:bg-blue-600 transition-all shadow-md hover:shadow-lg active:scale-95"
                      >
                        Visit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl shadow-inner mb-12">
            <div className="text-7xl mb-6">🔭</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No tools found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">Try adjusting your search or category filters to find what you're looking for.</p>
            <button
              onClick={resetFilters}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Floating Compare Bar */}
      {selectedForCompare.length > 0 && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-full duration-300">
          <div className="bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-8 backdrop-blur-md bg-opacity-95 border border-white/10">
            <div className="flex items-center gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {selectedForCompare.length}
              </span>
              <div>
                <p className="text-sm font-bold">Tools selected</p>
                <p className="text-xs text-gray-400">Compare up to 4 tools</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setSelectedForCompare([])}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Clear
              </button>
              <button
                onClick={handleCompare}
                disabled={selectedForCompare.length < 2}
                className={`
                  px-6 py-2.5 rounded-xl font-bold transition-all
                  ${selectedForCompare.length >= 2 
                    ? 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 active:scale-95' 
                    : 'bg-gray-700 cursor-not-allowed opacity-50'
                  }
                `}
              >
                {selectedForCompare.length < 2 ? 'Add 1 more' : 'Compare Now'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

