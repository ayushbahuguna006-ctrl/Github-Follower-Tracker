import React from 'react'
import { Link, NavLink } from 'react-router-dom';   

function Navbar() {
  return (
    <div className='flex justify-evenly bg-green-200 h-10 items-center text-black font-mono'>
                   
         <div className='border-black border-2 px-2'><NavLink to="/Home" className={({isActive})=>isActive?"text-orange-500":"text-black"}>HOME</NavLink></div>
         <div className='border-black border-2 px-2'><NavLink to="/About" className={({isActive})=>isActive?"text-orange-500":"text-black"}>About</NavLink></div>
         <div className='border-black border-2 px-2'><NavLink to="/Dashboard" className={({isActive})=>isActive?"text-orange-500":"text-black"}>Dashboard</NavLink></div>
          
             
    </div>
  )
}

export default Navbar
