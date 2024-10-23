import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='space-x-8 flex w-full h-16  items-center justify-between'>
        <Link href="/">Animals</Link>
        <div className='flex items-center justify-between gap-2'>
            <Link href="/cat">Kedi</Link>
            <Link href="/dog">Köpek</Link>
        </div>
    </div>
  )
}

export default Navbar