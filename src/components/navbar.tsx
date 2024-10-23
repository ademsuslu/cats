import { BiSolidCat } from "react-icons/bi";
import { PiDog } from "react-icons/pi";

import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div className='space-x-8 flex w-full h-16  items-center justify-between'>
        <Link href="/">
          <h1 className="text-xl font-bold">Animals</h1>
        </Link>
        <div className='flex items-center justify-between gap-6'>
            <Link href="/cat"><BiSolidCat className="w-8 h-8" /></Link>
            <Link href="/dog"><PiDog className="w-8 h-8"/></Link>
        </div>
    </div>
  )
}

export default Navbar