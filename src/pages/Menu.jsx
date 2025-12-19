import React from 'react'
import Packages from '../components/Packages'

export default function Menu(){
  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold">Our Menu</h2>
        <p className="text-gray-600 mt-2">Choose from curated packages or request custom menus.</p>
      </div>
      <Packages />
    </div>
  )
}
