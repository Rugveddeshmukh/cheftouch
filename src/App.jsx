import React from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import AppRoutes from './routes'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <AppRoutes />
      </main>
      {/* <Footer /> */}
    </div>
  )
}
