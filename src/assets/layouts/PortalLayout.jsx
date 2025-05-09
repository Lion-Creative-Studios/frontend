import React from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'

const PortalLayout = () => {
  return (
    <div className="portal-wrapper">
        <Nav />
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default PortalLayout