'use client';

import { useState, useEffect } from 'react';
import { Tool } from '../../lib/tools';

interface FavoritesButtonProps {
  tool: Tool;
  onToggle?: () => void;
  className?: string;
}

export default function FavoritesButton({ tool, onToggle, className = '' }: FavoritesButtonProps) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('favorites');
      if (saved) {
        const parsed = JSON.parse(saved) as string[];
        setFavorites(parsed);
        setIsFavorite(parsed.includes(tool.id));
      }
    } catch (e) {
      // Ignore localStorage errors
    }
  }, [tool.id]);

  useEffect(() => {
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (e) {
      // Ignore localStorage errors
    }
  }, [favorites]);

  const toggleFavorite = () => {
    const newFavorites = isFavorite 
      ? favorites.filter(id => id !== tool.id)
      : [...favorites, tool.id];
    
    setFavorites(newFavorites);
    setIsFavorite(!isFavorite);
    onToggle?.();
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`
        p-2 rounded-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-500
        ${isFavorite 
          ? 'bg-yellow-500 text-white shadow-lg hover:bg-yellow-600 hover:shadow-xl' 
          : 'bg-gray-200 text-gray-600 hover:bg-yellow-400 hover:text-white'
        }
        ${className}
      `}
      aria-label={isFavorite ? `Remove ${tool.name} from favorites` : `Add ${tool.name} to favorites`}
      title={isFavorite ? `Remove from favorites (${favorites.length})` : 'Add to favorites'}
    >
      <svg 
        className="w-5 h-5" 
        fill={isFavorite ? 'currentColor' : 'none'} 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={isFavorite ? 0 : 2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
}

