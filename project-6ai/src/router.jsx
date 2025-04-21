import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Garant from './pages/Garant'
import Dostavka from './pages/Dostavka'
import Komponi from './pages/Komponi'
import Kontact from './pages/Kontact'
import Madel from './pages/Madel'
import Categories from './pages/Categories'
import Login from './pages/Login'
import SigIn from './pages/SigIn'
import Products from './pages/Products'

export const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      { path: '/', element: <Home /> },
      { path: 'garant', element: <Garant /> },
      { path: 'dostavka', element: <Dostavka /> },
      { path: 'komponi', element: <Komponi /> },
      { path: 'kontact', element: <Kontact /> },
      { path: 'model/:brand', element: <Madel /> },
      { path: 'categories/:phoneId', element: <Categories /> },
      { path: 'products/:categoryId', element: <Products /> },
      { path: 'login', element: <Login /> },
      { path: 'sigin', element: <SigIn /> }
    ]
  }
])