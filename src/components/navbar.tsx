import { BiSolidCat } from "react-icons/bi";
import { PiDog } from "react-icons/pi";

import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div className='space-x-8 flex w-full h-16  items-center justify-between'>
        <Link href="/">Animals</Link>
        <div className='flex items-center justify-between gap-2'>
            <Link href="/cat"><BiSolidCat className="w-4 h-4" /></Link>
            <Link href="/dog"><PiDog className="w-4 h-4"/></Link>
        </div>
    </div>
  )
}

export default Navbar