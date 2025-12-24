import React from 'react'

function Dashboard() {
  return (
      <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white border rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <p className="text-gray-600">Track the number of active users and new sign-ups.</p>
        </div>

        <div className="p-6 bg-white border rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Revenue</h2>
          <p className="text-gray-600">Monitor the latest revenue and transactions.</p>
        </div>

        <div className="p-6 bg-white border rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Reports</h2>
          <p className="text-gray-600">Generate insights and export reports quickly.</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
