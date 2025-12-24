import React from 'react'
import { Link, NavLink } from 'react-router-dom';   
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';

function Navbar() {
  return (
    <div className='flex md:justify-evenly justify-between bg-gradient-to-r from-blue-200 to-purple-200 h-10 items-center text-black font-mono'>
                   
         <div className='px-2'><NavLink to="/home" className={({isActive})=> ` p-1 border-black hover:bg-gray-100 border-2 font-bold  ${isActive?"text-orange-500":"text-black"}`}>HOME</NavLink></div>
          <div><NavLink to="/dashboard" className={({isActive})=> ` p-1 hover:bg-gray-100 font-bold border-black border-2 ${isActive?"text-orange-500":"text-black"}`}>DASHBOARD</NavLink></div>
         <div className='px-2'><NavLink to="/about" className={({isActive})=> ` p-1 border-black border-2 hover:bg-gray-100 font-bold ${isActive?"text-orange-500":"text-black"}`}>ABOUT</NavLink></div>
        
          
             
    </div>
  )
}

export default Navbar;
