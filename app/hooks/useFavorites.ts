'use client';

import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const loadFavorites = () => {
      try {
        const saved = localStorage.getItem(FAVORITES_KEY);
        if (saved) {
          setFavorites(JSON.parse(saved));
        }
      } catch (e) {
        console.error('Failed to load favorites', e);
      }
    };

    loadFavorites();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === FAVORITES_KEY) {
        setFavorites(e.newValue ? JSON.parse(e.newValue) : []);
      }
    };

    const handleCustomChange = () => {
      loadFavorites();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('favorites-updated', handleCustomChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('favorites-updated', handleCustomChange);
    };
  }, []);

  const toggleFavorite = (toolId: string) => {
    const isFav = favorites.includes(toolId);
    const newFavorites = isFav 
      ? favorites.filter(id => id !== toolId)
      : [...favorites, toolId];
    
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      setFavorites(newFavorites);
      window.dispatchEvent(new CustomEvent('favorites-updated'));
    } catch (e) {
      console.error('Failed to save favorites', e);
    }
  };

  const isFavorite = (toolId: string) => favorites.includes(toolId);

  return {
    favorites,
    isFavorite,
    toggleFavorite,
    favoritesCount: favorites.length
  };
}

export function useFavoritesCount() {
  const [favoritesCount, setFavoritesCount] = useState(0);

  useEffect(() => {
    const loadCount = () => {
      const favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]') as string[];
      setFavoritesCount(favorites.length);
    };

    loadCount();
    window.addEventListener('favorites-updated', loadCount);
    window.addEventListener('storage', loadCount);
    
    return () => {
      window.removeEventListener('favorites-updated', loadCount);
      window.removeEventListener('storage', loadCount);
    };
  }, []);

  return favoritesCount;
}


