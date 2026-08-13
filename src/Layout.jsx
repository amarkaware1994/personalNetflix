import React from 'react'
import NavBar from './components/navBar'
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
        <NavBar />
        <main className="min-h-screen bg-[#0B1120]">
          <Outlet />
        </main>

    </>
  )
}

export default Layout
