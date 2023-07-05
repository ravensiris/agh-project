import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import CustomerList from './routes/customer_list'
import CustomerAdd from './routes/add_customer'
import './main.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/customers',
    element: <CustomerList />,
  },
  {
    path: '/add-customer',
    element: <CustomerAdd />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
