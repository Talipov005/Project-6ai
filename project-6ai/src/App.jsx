import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Импорты страниц
import Home from './pages/Home'
import Madel from './pages/Madel'
import Categories from './pages/Categories'
import Products from './pages/Products'
import Garant from './pages/Garant'
import Dostavka from './pages/Dostavka'
import Komponi from './pages/Komponi'
import Kontact from './pages/Kontact'
import Login from './pages/Login'
import SigIn from './pages/SigIn'

// Импорты компонентов
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product])
  }

  return (
    <Router>
      <Header 
        cartItems={cartItems} 
        setCartItems={setCartItems} 
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model/:brand" element={<Madel />} />
        <Route path="/categories/:phoneId" element={<Categories />} />
        <Route path="/products/:categoryId" element={<Products addToCart={addToCart} />} />
        <Route path="/garant" element={<Garant />} />
        <Route path="/dostavka" element={<Dostavka />} />
        <Route path="/komponi" element={<Komponi />} />
        <Route path="/kontact" element={<Kontact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sigin" element={<SigIn/>} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
