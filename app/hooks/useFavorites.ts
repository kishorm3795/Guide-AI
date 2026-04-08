import { useState, useEffect } from 'react';

export function useFavoritesCount() {
  const [favoritesCount, setFavoritesCount] = useState(0);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]') as string[];
    setFavoritesCount(favorites.length);
  }, []);

  return favoritesCount;
}

