import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <header>
        <nav className='flex justify-center mt-3'>
        <Link href="/" className='p-2 bg-amber-600 mr-3 w-32 text-center rounded-md'>Home</Link>
        <Link href="/createnote" className='p-2 bg-amber-600 mr-3 w-32 text-center rounded-md'>New Note</Link>
        </nav>
    </header>
  )
}

export default Navbar