import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Home component for the app
 * 
 * Contains the hero section with a title, a image and a call to action to download the app
 * 
 * @returns {JSX.Element} Home component
 */
const Home = () => {
  return (
    <div className='shadow'>

      {/* Hero Section */}
      <div className='flex items-center justify-around mt-20'>
        {/* Left side */}
        <div>
        <img src="https://images.prismic.io/etvasweb/9f37552b-3a13-4a4c-b1d5-5461a9caf2aa_Remote2.png" className="h-80" />
        </div>

        {/* Right Side */}
        <div className='flex flex-col'>
          <h2 className='text-4xl font-bold'>Download Now</h2>
          <span className='text-3xl'>Lorem Ipsum</span>
          <Link to="/">
           <img src="src\assets\download now.png" className='h-18 mt-9'/>
          </Link>
        </div>
      </div>

      <div className='flex flex-col items-center mt-30'>
        <img src="https://globalvoices.org/wp-content/uploads/2021/05/Remote1-1-800x465.png" className="w-[40%]"/>
        <span className='text-center text-2xl sm:text-4xl py-13'>Lorem Ipsum Yojo</span>
      </div>
      
    </div>
  )
}

export default Home