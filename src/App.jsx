import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'
import Category from './pages/category/category'
import Info from './pages/info/Info'
import Allproduct from './pages/All Product/Allproduct'
import Buscket from './pages/bascket/Buscket'
function App() {

  let router=createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[
        {
          index:true,
          element:<Home />
        },
        {
          path:'category',
          element:<Category />
        },
        {
          path:'info/:id',
          element:<Info />
          
        },
        {
 path:'allproduct',
          element:<Allproduct />
        },
        {
 path:'buscket',
          element:<Buscket />
        }
      ]
    }

  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
   
  )
}

export default App



