"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import useCartStore from '@/stores/cartStore'
import { toast } from 'react-toastify'

const ProductCard = ({product}) => {

    // State to manage the color and size
    const [productType, setProductType] = useState({
        size: product.sizes[0],  //intial size 
        color: product.colors[0]    //intial color
    })

    // function to handle the size
    const sizeHandler = (e)=>{
        setProductType(prev => ({
            ...prev, size: e.target.value
        }))
    }

    // function to handle the color
    const colorHandler = (color) => {
        setProductType(prev => ({
            ...prev, color: color
        }))
    }

    const {addToCart} = useCartStore();

    const HandleAddToCart = ()=>{
        addToCart(
            {...product,
            quantity : 1,
            selectedSize: productType.size,
            selectedColor: productType.color}
        )
        toast.success("Prouduct added to the cart!")
    }

    return (
        <div className='shadow-lg rounded-lg overflow-hidden'>
            {/* Link to the image */}
            <Link href = {`/products/${product.id}`}>
                <div className = "relative aspect-2/3">
                    <Image src = {product.images[productType.color]} alt = "product image" fill loading='eager' className = "object-cover ring-1 transition-transform duration-200 hover:scale-105"/>
                </div>
            </Link>
            <div className='flex flex-col gap-4 p-4'>
                <h1 className='font-medium'>{product.name}</h1>
                <p className='font-sm text-gray-500'>{product.shortDescription}</p>
                <div className = "flex items-center gap-4 text-xs">
                    {/* sizes */}
                    <div className='flex flex-col gap-1'>
                        <span className='text-gray-500'>Size</span>
                        <select onChange={sizeHandler} value = {productType.size} className='ring ring-gray-300 rounded-md px-2 py-1' >
                            {product.sizes.map((size, idx) =>(
                                <option key = {idx} value={size}>{size.toUpperCase()}</option>
                            ))}
                        </select>
                    </div>
                    {/* colors */}
                    <div className='flex flex-col gap-1'>
                        <span className='text-gray-500'>Color</span>
                        <div className='flex items-center gap-2'>
                            {product.colors.map((color, idx) => (
                                <div  onClick={() => colorHandler(color)} className = {`cursor-pointer ${productType.color === color? "ring-2 ring-gray-300" : ""} rounded-full p-[1.5px]`} key= {idx}>
                                    <div  className='w-5 h-5 rounded-full' style = {{backgroundColor: color}}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Price and add to cart    */}
                <div className='flex items-center justify-between'>
                    <p className='font-medium'>₹{product.price}</p>
                    <button onClick = {HandleAddToCart} className='flex items-center gap-2 ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 cursor:pointer hover:text-white hover:bg-black transition-all duration-300'>
                        <ShoppingCart className='w-4 h-4'/>Add to Cart</button>
                </div>

            </div>

        </div>
  )
}

export default ProductCard

/*
-> Create the size options and color options
-> Remember the Options using the useState and re-render the UI

*/
