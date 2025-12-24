import { useState } from 'react';
import './App.css';
import Home from './components/home';
import Dashboard from './components/dashboard';
import About from './components/about';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/navbar';
import Starting from './components/starting';



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar/>
      <Starting/>
      </div>
  },
   {
    path: "/Home",
    element: <div>
      <Navbar/>
      <Home/>
      </div>
  },
  {
    path:"/About",
    element:<div>
      <Navbar/>
      <About/>
      </div>
  },
  {
    path:"/Dashboard",
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
