import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
    <div className="bg-gray-900 min-h-screen">
    <Header />
    <Outlet />
    <Footer />
    </div>

    </>
  )
}

export default App
