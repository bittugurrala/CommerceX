import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, House, Bell, ShoppingCart } from 'lucide-react'

const Navigation = () => {
    return (
        <nav className='flex items-center justify-between py-4 border-b border-gray-200' >
            {/* Left */}
            <Link href = "/" className='flex items-center'>
                <Image src = "/logo.png" alt = "CommerceX logo" width = {36} height={36} className="h-6 w-6 md:h-9 md:w-9 transition-transform duration-200 hover:scale-110"/>
                <h3 className='text-xl'>CommerceX</h3>
            </Link>
            {/* Right */}

            <div className='flex gap-5'>
                <div className='hidden md:flex gap-2 px-2 items-center shadow-md rounded-md ring-1 ring-gray-200'>
                    <Search className='w-4 h-4  text-gray-500 ' />
                    <input placeholder='Search...' className='outline-none py-1 text-gray-600'/>
                </div>
                <div className='flex items-center gap-5'>
                    <Link href= "/"><House className='w-4 h-4 text-gray-600' /></Link>
                    <Bell className='w-4 h-4 text-gray-600' />
                    <ShoppingCart className='w-4 h-4 text-gray-600'/>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
