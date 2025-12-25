import React, { useEffect, useState } from 'react'

function Dashboard() {
const [user,setuser]=useState()
const [followers,setfolllowers]=useState()
const [loading, setLoading] = useState(true);
const [data, setData] = useState({});
const github=async ()=>{
setLoading(true)
const res=await fetch (`https://api.github.com/users/${user}`)
const fdata=await res.json()
setData(fdata)
setfolllowers(fdata.followers)
setLoading(false)
console.log(fdata)
}








  return (
    <div className='min-h-screen  flex flex-col items-center justify-center py-10 bg-blue-50'>
          <div className="w-[90%] md:w-[32%] h-50 bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
>
                   <div className='flex flex-col items-center'><label><h1 className='font-bold text-xl text-stone-900  text-center pt-10'>Enter your Github username</h1><div className='text-center border-purple-200 border-2 mt-3 rounded-lg h-10'><input type="text" required value={user} onChange={(e)=>setuser(e.target.value)}   placeholder="                      Here!" className='w-full h-full rounded-lg outline-none px-2'/></div><div className='text-center pt-8'><button onClick={github} className='bg-gradient-to-br from-slate-100 via-purple-300 to-slate-100 p-2 w-1/2 rounded-xl hover:bg-green-200 cursor-pointer  '>GET</button></div></label></div>



          </div>
           <div id='ani1' className="w-[90%] md:w-[32%] h-50 bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex justify-center items-center">
           
            {data.message === "Not Found" ?(<p className='text-base text-red-500 font-bold'>Enter a Valid Username</p>):loading?(<p className=' p-1 border-y-red-200 border text-purple-700 border-x-purple-200 bg-blue-50'>REACT IS FUN </p>):(<p className='p-2 border-y-red-200 border-2 text-purple-500'>{`${user} has ${followers} followers`}</p>)}
            
           
           
           </div>



    </div>
  )
}

export default Dashboard

// https://api.github.com/users/{user}