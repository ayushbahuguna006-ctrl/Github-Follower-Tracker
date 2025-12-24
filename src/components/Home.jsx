import React from 'react'

function Home() {
  return (
      <div className="min-h-[calc(100vh-2.5rem)] flex flex-col justify-center items-center bg-gray-50">
      
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        Welcome to Home
      </h1>

      <p className="text-gray-600 text-center max-w-xl mb-6">
        This is the Home page of your application. From here, users can
        navigate to different sections like About and Dashboard using the
        navigation bar above.
      </p>

      <div className="flex gap-4">
        <div className="px-6 py-2 border-2 border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition">
          Explore
        </div>

        <div className="px-6 py-2 border-2 border-gray-600 text-gray-600 rounded-md hover:bg-gray-600 hover:text-white transition">
          Learn More
        </div>
      </div>

    </div>
  )
}

export default Home
