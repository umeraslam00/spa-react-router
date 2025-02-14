import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

/**
 * The main layout component for the app
 * 
 * Includes the header, outlet and footer
 * 
 * @returns {JSX.Element} The layout component
 */
const Layout = () => {
  return (
    <>
       <Header />
       <Outlet />
       <Footer />
    </>
  )
}

export default Layout