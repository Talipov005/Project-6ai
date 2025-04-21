import React, { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { myRouter } from './router'

function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <RouterProvider router={myRouter} />
  )
}

export default App