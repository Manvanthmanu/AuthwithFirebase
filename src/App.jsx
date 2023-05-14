import { useState } from 'react'
import './App.css'
import LandingPage from './Pages/LandingPage'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path:"/login",
      element:<Login />
    },
    {
      path:'signup',
      element:<Signup />
    }
  ]);

  return (
      <RouterProvider router={router} />
      
  )
}

export default App
