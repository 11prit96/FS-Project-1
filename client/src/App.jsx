import './App.css'
import CartPage from './pages/CartPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ItemStore from './pages/ItemStore.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'store',
        element: <ItemStore />
      },
      {
        path: 'cart',
        element: <CartPage />
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
