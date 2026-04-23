"use client"
import React from 'react'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import useCartStore from '@/stores/cartStore'


const ShoppingCartIcon = () => {

  const {cart, hasHydrated} = useCartStore()
  
  if (!hasHydrated) return null;
  return (
    <div>
        <Link href = "/cart" className='relative'>
          <ShoppingCart className='w-4 h-4 text-gray-600 transition-transform duration-200 hover:scale-110 '/>
          {/* <span className='absolute -top-3 -right-3 sm:-top-3 sm:-right-3 w-3 h-3 md:h-4 md:w-4 p-2 bg-[#4FA3A5] text-white flex items-center justify-center text-xs font-medium rounded-full transition-transform duration-200 hover:scale-110'>0</span> */}
          <span className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#4FA3A5] text-white flex items-center justify-center text-[10px] font-medium rounded-full'>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
        </Link>
        
    </div>
  )
}

export default ShoppingCartIcon
