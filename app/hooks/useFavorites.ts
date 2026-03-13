import { useState, useEffect } from 'react';

export function useFavoritesCount() {
  const [favoritesCount, setFavoritesCount] = useState(0);

  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]') as string[];
  const count = favorites.length;
  return count;

  return favoritesCount;
}

