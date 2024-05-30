import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <nav className=' z-0 fixed top-0  w-full flex items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-1' >
      <Link to={'/'}>
        <div className='ml-5'>
          <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
            REDUX SHOPPING CART
          </h1>
        </div>
      </Link>
      <ul className="flex list-none items-center space-x-4 text-red-800 font-semibold ml-1">
        <Link to='/'>
          <li className='cursor-pointer list-none'>Home</li>
        </Link>
        <Link to='/Contact'>
          <li className='cursor-pointer list-none'>Cart</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Index
