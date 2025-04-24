import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Garant from './pages/Garant';
import Dostavka from './pages/Dostavka';
import Komponi from './pages/Komponi';
import Kontact from './pages/Kontact';
import Madel from './pages/Madel';
import Categories from './pages/Categories';
import Login from './pages/Login';
import SigIn from './pages/SigIn';
import Products from './pages/Products';
import Corzina from './pages/Corzina';
import Proses from './pages/Proses';
import Mastera from './pages/Mastera';
import Rabota from './pages/Rabota';
import Sovet from './pages/Sovet';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const myRouter = createBrowserRouter([
    {
      path: '/',
      element: <Layout cartItems={cartItems} />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'garant', element: <Garant /> },
        { path: 'dostavka', element: <Dostavka /> },
        { path: 'komponi', element: <Komponi /> },
        { path: 'kontact', element: <Kontact /> },
        { path: 'model/:brand', element: <Madel /> },
        { path: 'categories/:phoneId', element: <Categories /> },
        { path: 'login', element: <Login /> },
        { path: 'sigin', element: <SigIn /> },
        { path: 'proses', element: <Proses /> },
        { path: 'mastera', element: <Mastera /> },
        { path: 'rabota', element: <Rabota /> },
        { path: 'sovet', element: <Sovet /> },
        { path: 'products/:id', element: <Products addToCart={handleAddToCart} /> },
        { path: 'corzina', element: <Corzina cartItems={cartItems} /> }
      ],
    },
  ]);

  return <RouterProvider router={myRouter} />;
}

export default App;
