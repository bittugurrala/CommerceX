"use client"
import React from 'react'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

const ShoppingCartIcon = () => {
  return (
    <div>
        <Link href = "/cart" className='relative'>
          <ShoppingCart className=' w-4 h-4 text-gray-600 transition-transform duration-200 hover:scale-110 '/>
          <span className='absolute -top-3 -right-3 w-4 h-4 bg-[#4FA3A5] text-white flex items-center justify-center text-xs font-medium rounded-xl transition-transform duration-200 hover:scale-110'>0</span>
        </Link>
        
    </div>
  )
}

export default ShoppingCartIcon
