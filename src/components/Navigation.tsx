import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className='h-[50px] flex justify-between px-5 items-center  bg-blue-500 text-white '>
        <span className='font-bold'>React 2022</span>

        <span>
            <Link to='/' className='mr-2'>Products</Link>
            <Link to='/about'>About</Link>
        </span>
    </nav>
  )
}
