import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Starting from './components/Starting';



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar/>
      <Starting/>
      </div>
  },
   {
    path: "/home",
    element: <div>
      <Navbar/>
      <Home/>
      </div>
  },
  {
    path:"/about",
    element:<div>
      <Navbar/>
      <About/>
      </div>
  },
  {
    path:"/dashboard",
    element:<div>
      <Navbar/>
      <Dashboard/>
      </div>
  }
]);


function App() {
  

  return (
    <>
         <RouterProvider router={router} />

    </>
  )
}

export default App
