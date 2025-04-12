import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Madel from './pages/Madel'
import Categories from './pages/Categories'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <Header /> {/* всегда отображается */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model/:brand" element={<Madel />} />
        <Route path="/categories/:phoneId" element={<Categories />} />
      </Routes>

      <Footer /> {/* тоже всегда отображается */}
    </Router>
  )
}

export default App
