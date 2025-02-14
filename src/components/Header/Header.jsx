import React from 'react'
import { Link, NavLink } from 'react-router-dom'

/**
 * Header component for the app
 * 
 * Displays the logo, navigation links to "Home", "About", and "Contact"
 * pages, and action links for "Log in" and "Get Started".
 * 
 * @returns {JSX.Element} Header component JSX
 */

const Header = () => {


    return (
        <header className='shadow sticky top-0 flex z-50 bg-white border-gray-200 w-screen items-center'>
            <div className='flex w-[15%] items-center ml-[5%]'>
                <Link to="/">
                 <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" className="h-14" />
                </Link>
            </div>

            <nav className='flex w-[70%] items-center justify-between mx-[10%]'>
                <div className='flex gap-4 font-bold'>
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-700" : "text-gray-700"}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-orange-700" : "text-gray-700"}>About</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "text-orange-700" : "text-gray-700"}>Contact</NavLink>
                </div>

                <div className='flex items-center gap-4 font-bold'>
                    <Link to="#">Log in</Link>
                    <Link to="#">Get Started</Link>
                </div>
                

                
            </nav>
        </header>
    )
}

export default Header