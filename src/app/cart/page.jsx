"use client"

import { useParams, useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'
import {ArrowRight, Trash2} from 'lucide-react'
import ShippingForm from '@/components/ShippingForm'
import PaymentForm from '@/components/PaymentForm'

import React from 'react'


// Steps object
const Steps = [
        {
            id : 1,
            title : "Shopping Cart"
        }, 
        {
            id: 2,
            title : "Shipping Address"
        },
        {
            id: 3,
            title: "Payment Method"
        }
    ]

// Temporary cart items
const CartItems = [
    {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 399,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "gray"
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 599,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "gray"
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 699,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "black"
  },
  {
    id: 4,
    name: "Nike Dri Flex T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 299,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: { white: "/products/4w.png", pink: "/products/4p.png" },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "pink"
  }
]
const Cartpage = () => {

    const searchparams = useSearchParams()
    const router = useRouter()
    const [shipForm, setShipForm] = useState(null)

    const activeStep = parseInt(searchparams.get("step") || "1")

    return (

        <div>
            <div className='flex flex-col gap-8 items-center justify-center mt-12'>
                {/* Title */}
                <h1 className='text-2xl font-medium'>Your Shopping Cart</h1>

                {/* steps */}
                <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
                    {Steps.map(step => (
                        <div key = {step.id} className={`flex gap-2 items-center border-b-2 pb-4 ${step.id === activeStep? "border-[#4FA3A5]" : "border-gray-200"}`}>
                            <div className={`w-6 h-6 text-white flex items-center justify-center text-sm rounded-xl ${step.id === activeStep? "bg-[#4FA3A5]" : "bg-gray-400"}`}>{step.id}</div>
                            <p className={`text-sm font-medium ${step.id === activeStep? "text-gray-800": "text-gray-400"}`}>{step.title}</p>
                        </div>
                    ))}
                </div>
                {/* steps and details */}
                <div className='w-full flex flex-col lg:flex-row gap-16'>

                    {/* steps(Products that are in the cart) */}
                    <div className='w-full lg:w-7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8'>
                        {activeStep === 1 ? 
                        (CartItems.map(item => (
                            <div key = {item.id} className='flex items-center justify-between'>
                                <div className='flex gap-16 items-center'>
                                    {/* Images */}
                                    <div className='flex gap-8 '>
                                        <div className='relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden'>
                                            <Image src ={item.images[item.selectedColor]} alt = {item.name} fill className='object-contain'/>
                                        </div>
                                    </div>
                                    {/* Details of the items in the Cart */}
                                    <div className='text-sm font-medium flex flex-col justify-between'>
                                        {/* Details */}
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-sm font-medium'>{item.name}</p>
                                            <p className='text-xs text-gray-500'>Quantity:{" "}{item.quantity}</p>
                                            <p className='text-xs text-gray-500'>Size:{" "}{item.selectedSize.toUpperCase()}</p>
                                            <p className='text-xs text-gray-500'>Color:{" "}{item.selectedColor?.charAt(0).toUpperCase() + item.selectedColor?.slice(1)}</p>
                                        </div>
                                        {/* price */}
                                        <p className='font-medium mt-5'>₹{item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                

                                {/* Delete button */}
                                <button className='w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-500 flex items-center justify-center '><Trash2 className='w-4 h-4'/></button>
                            </div>

                            
                        ))) 
                        : activeStep === 2? (<ShippingForm setShipForm = {setShipForm}/>) : activeStep=== 3 && shipForm? (<PaymentForm/>) : <p className='text-gray-500 text-sm'>Please fill in the Shipping details</p> }
                    </div>

                    {/* details */}
                    <div className='w-full lg:w-5/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max'>
                        <h2 className='font-semibold'>Card Details</h2>
                        <div className='flex flex-col gap-4'>
                            <div className='flex justify-between text-sm'>
                                <p className='text-gray-500'>Sub total</p>
                                <p className='font-medium'>₹
                                    {CartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}
                                </p>
                            </div>
                            <div className='flex justify-between text-sm'>
                                <p className='text-gray-500'>Discount(10%)</p>
                                <p className='font-medium'>₹100</p>
                            </div>
                            <div className='flex justify-between text-sm'>
                                <p className='text-gray-500'>Shipping Cost</p>
                                <p className='font-medium'>₹1000</p>
                            </div>
                            <hr className='text-gray-200'/>
                            <div className='flex justify-between'>
                                <p className='text-gray-800 font-semibold'>Total</p>
                                <p className='font-medium'>₹
                                    {CartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}
                                </p>
                            </div>

                        </div>
                       {activeStep === 1 && <button onClick = {() => {router.push("/cart?step=2",{scroll:false})}} className='bg-gray-800 rounded-lg text-white p-2 cursor-pointer flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-110 hover:bg-gray-500'>
                            Continue<span ><ArrowRight className='w-3 h-3'/></span>
                        </button>}

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Cartpage
