import React from 'react'

function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-green-700 mb-4 text-center">
        About Us
      </h1>
      <p className="text-gray-700 text-center max-w-2xl mb-4">
        Our application is designed to give users a seamless experience
        navigating through different pages. We focus on clarity, simplicity,
        and responsiveness.
      </p>
      <p className="text-gray-700 text-center max-w-2xl">
        This About page can contain company info, team details, mission,
        vision, and any other relevant content about the application or
        project.
      </p>
    </div>
  )
}

export default About
