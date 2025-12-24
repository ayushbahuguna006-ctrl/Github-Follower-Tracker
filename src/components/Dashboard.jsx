import React from 'react'

function Dashboard() {
const 









  return (
    <div className='min-h-screen  flex flex-col items-center justify-center py-10 bg-blue-50'>
          <div className="w-[90%] md:w-[32%] h-50 bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
>
                   <div className='flex flex-col items-center'><label><h1 className='font-medium text-xl text-black text-center pt-10'>Enter your Github username</h1><div className='text-center border-purple-200 border mt-3 rounded-lg h-7'><input type="text" required   placeholder="                         Here!" className='w-full h-full'/></div><div className='text-center pt-8'><button className='bg-blue-200 p-2 w-1/2 rounded-xl hover:bg-green-200  '>GET</button></div></label></div>



          </div>
           <div id='ani1' className="w-[90%] md:w-[32%] h-50 bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
           
           
           
           
           
           </div>



    </div>
  )
}

export default Dashboard

// https://api.github.com/users/{user}