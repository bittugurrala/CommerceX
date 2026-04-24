"use client"
import React from 'react'
import useCartStore from '@/stores/cartStore'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { toast } from "react-toastify";

const ProductInteraction = ({items, selectedSize, selectedColor}) => {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [quantity, setQuantity] = useState(1)

    const { addToCart } = useCartStore();

    const handleTypeChange = (type, value)=>{

        const params = new URLSearchParams(searchParams.toString())
        params.set(type, value)
        router.push(`${pathname}?${params.toString()}`, {scroll:false})

    }

    const handleQuantityChange = (type) => {
        if (type === "increment") {
        setQuantity((prev) => prev + 1);
        } else {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
        }
    }

    const handleAddToCart = () => {
    addToCart({
      ...items,
      quantity,
      selectedColor,
      selectedSize,
    });
    toast.success("Product added to cart")
  };


    return (
    <div className='flex flex-col gap-4 mt-4'>
        {/* SIZE */}
        <div className='flex flex-col gap-2 text-xs'>
            <span className='text-gray-500'>Size</span>
            <div className='flex items-center gap-2'>
                {items.sizes.map((size) =>{
                return <div key = {size} onClick={() => handleTypeChange("size", size)} className={`cursor-pointer border p-0.5 ${selectedSize === size ? "border-gray-600" : "border-gray-300"}`}>
                    <div className={`w-6 h-6 text-center flex items-center justify-center ${selectedSize === size? "bg-black text-white" : "bg-white text-black"}`}>{size.toUpperCase()}</div>
                </div>
                } 

                )}
            </div>
            
        </div>
        {/* COLOR */}
        <div className='flex flex-col gap-2 text-sm'>
            <span className='text-gray-500'>Color</span>
            <div className='flex items-center gap-2'>
                {items.colors.map((color) =>{
                return <div key = {color} onClick={() => handleTypeChange("color", color)} className={`cursor-pointer border p-0.5 ${selectedColor === color ? "border-gray-600" : "border-white"}`}>
                    <div className={`w-6 h-6`} style={{ backgroundColor: color }} />
                </div>
                } 

                )}
            </div>
        </div>
        {/* Quality */}
        <div className='flex flex-col gap-2 text-sm'>
            <span className="text-gray-500">Quantity</span>
            <div className="flex items-center gap-2">
            <button
                className="cursor-pointer border border-gray-300 p-1 rounded-lg"
                onClick={() => handleQuantityChange("decrement")}
            >
                <Minus className="w-4 h-4" />
            </button>
            <span>{quantity}</span>
            <button
                className="cursor-pointer border border-gray-300 p-1 rounded-lg"
                onClick={() => handleQuantityChange("increment")}
            >
                <Plus className="w-4 h-4" />
            </button>
            </div>
            
        </div>
        {/* BUTTONS */}
    
        <button onClick={handleAddToCart} className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm font-medium transition-all duration-400 hover:bg-[#4FA3A5]">
            <Plus className="w-4 h-4" />
            Add to Cart
        </button>
        <button className="ring-1 ring-gray-400 shadow-lg text-gray-800 px-4 py-2 rounded-md flex items-center justify-center cursor-pointer gap-2 text-sm font-medium ">
            <ShoppingCart className="w-4 h-4" />
            Buy this Item
        </button>
    </div>

        
    
    )
}

export default ProductInteraction
