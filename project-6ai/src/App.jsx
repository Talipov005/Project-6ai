import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Madel from './pages/Madel'
import Categories from './pages/Categories'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Products from './pages/Products'



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

      </Routes>

      <Footer /> {/* тоже всегда отображается */}
    </Router>
  )
}

export default App
