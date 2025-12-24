import React from 'react'
import { Link, NavLink } from 'react-router-dom';   
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';

function Navbar() {
  return (
    <div className='flex md:justify-evenly justify-between bg-white h-10 items-center text-black font-mono'>
                   
         <div className='px-2'><NavLink to="/home" className={({isActive})=> `hover:text-white hover:bg-black p-1 border-black border-2 ${isActive?"text-orange-500":"text-black"}`}>HOME</NavLink></div>
         <div ><NavLink to="/about" className={({isActive})=> `hover:text-white hover:bg-black p-1 border-black border-2 ${isActive?"text-orange-500":"text-black"}`}>About</NavLink></div>
         <div className='px-2'><NavLink to="/dashboard" className={({isActive})=> `hover:text-white hover:bg-black p-1 border-black border-2 ${isActive?"text-orange-500":"text-black"}`}>Dashboard</NavLink></div>
          
             
    </div>
  )
}

export default Navbar
