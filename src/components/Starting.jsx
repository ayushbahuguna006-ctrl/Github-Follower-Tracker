import React from 'react'

function Starting() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-orange-200 to-green-600 p-6">
      <h1 className="text-5xl font-bold text-white mb-6 text-center">
        Welcome to Our Website
      </h1>
      <p className="text-white text-center max-w-xl mb-4">
        This is the front page users will see when they first visit the website.
        Navigate using the links above to explore Home, About, and Dashboard.
      </p>
      <p className="text-white text-center max-w-xl">
        Enjoy a smooth user experience with React Router and Tailwind CSS!
      </p>
    </div>
  )
}

export default Starting
