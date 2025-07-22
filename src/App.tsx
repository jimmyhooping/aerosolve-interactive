import React from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
            🚀
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AeroSolve Interactive
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Aerospace Learning Platform - Download the complete source code
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Download Project</h2>
            <p className="text-gray-600 mb-6">
              Get the complete source code for this aerospace learning platform. 
              Includes React components, TypeScript files, and all configuration.
            </p>
            
            <a
              href="/aero-flight-lab-main.zip"
              download
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              📦 Download ZIP File
            </a>

            <div className="mt-6 text-sm text-gray-500">
              <p><strong>What's included:</strong></p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>✅ React + TypeScript</div>
                <div>✅ Tailwind CSS</div>
                <div>✅ Component Library</div>
                <div>✅ Ready to Run</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">Quick Start:</h3>
            <div className="text-left text-sm text-gray-700 space-y-1">
              <div>1. Download and extract the ZIP</div>
              <div>2. Run: <code className="bg-gray-200 px-2 py-1 rounded">bun install</code></div>
              <div>3. Run: <code className="bg-gray-200 px-2 py-1 rounded">bun dev</code></div>
              <div>4. Open: <code className="bg-gray-200 px-2 py-1 rounded">http://localhost:3000</code></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App