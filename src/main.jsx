import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/Home/MainLayout.jsx';
import Category from './components/Category/Category.jsx';
import Details from './components/Details/details.jsx';
import Home from './components/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/category",
        loader: () => fetch(`https://dummyjson.com/products`),
        element: <Category></Category>
      }, {
        path: "/category/:id",
        loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`),
        element: <Details></Details>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
