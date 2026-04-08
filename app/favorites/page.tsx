'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { tools } from '../../lib/tools';
import FavoritesButton from '../components/FavoritesButton';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [favoriteTools, setFavoriteTools] = useState(tools);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('favorites');
      if (saved) {
        const ids = JSON.parse(saved) as string[];
        setFavorites(ids);
        const favTools = tools.filter(tool => ids.includes(tool.id));
        setFavoriteTools(favTools);
      }
    } catch (e) {
      // Ignore localStorage errors
    }
  }, []);

  const updateFavorites = (toolId: string) => {
    try {
      const newFavorites = favorites.filter(id => id !== toolId);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setFavorites(newFavorites);
      const newFavTools = tools.filter(tool => newFavorites.includes(tool.id));
      setFavoriteTools(newFavTools);
    } catch (e) {
      // Ignore localStorage errors
    }
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-20 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-7xl mb-6">💖</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">No favorites yet</h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover tools you love and add them to your favorites collection.
          </p>
          <Link
            href="/tools"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Browse Tools
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            💖 My Favorites ({favorites.length})
          </h1>
          <p className="text-xl text-gray-600">
            Your saved AI tools. Click the heart to remove from favorites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoriteTools.map((tool) => (
            <div key={tool.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-gray-900 flex-1 pr-4">{tool.name}</h2>
                <FavoritesButton 
                  tool={tool} 
                  onToggle={() => updateFavorites(tool.id)}
                  className="flex-shrink-0" 
                />
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">{tool.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{tool.pricing}</span>
                <div className="space-x-2">
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Visit →
                  </a>
                  <Link href={`/tools/${tool.id}`} className="text-gray-600 hover:text-gray-800 font-medium">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

