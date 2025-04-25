import { createContext, useState, useContext, useEffect } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.find((item) => item.id === product.id);
      if (isAlreadyFavorite) {
        return prevFavorites; // Если товар уже в избранном, не добавляем
      }
      return [...prevFavorites, { ...product, quantity: 1 }];
    });
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== productId));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}