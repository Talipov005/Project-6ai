// src/App.jsx
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { router } from './router';

function App() {
  return (
    <FavoritesProvider>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
    </FavoritesProvider>
  );
}

export default App;