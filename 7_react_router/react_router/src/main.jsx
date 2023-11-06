import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Contact from './routes/Contact.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Home from './routes/Home.jsx';
// 7 - rota dinamica
import Product from './routes/Product.jsx';

import Info from './routes/Info.jsx';
import Search from './routes/Search.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    // 3 - componente base
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      // 7 - rota dinamica
      {
        path: 'products/:id',
        element: <Product />
      },
      {
        path: 'products/:id/info',
        element: <Info />
      },
      // 9 - search
      {
        path: 'search',
        element: <Search />
      },
      {
        path: 'teste',
        element: <Navigate to='/' />
      }
    ]
  },
  // {
  //   path: 'contact',
  //   element: <Contact />
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
