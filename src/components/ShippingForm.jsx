import ShippingSchema from '@/lib/validations/ShippingSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation'

// React hook form for creating the shipping address form
// Kindha unna code antha documentation lo undi


export default function ShippingForm({setShipForm}){

    const {
        register,
        handleSubmit,
        formState:{ errors },

    } = useForm({
        resolver:zodResolver(ShippingSchema),
    })

    const router = useRouter()

    const submitHandler = (data)=>{
        setShipForm(data)
        router.push("/cart?step=3")
        
    }

    return(
        <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-4' >
            <div className='flex flex-col gap-1'>
                <label htmlFor='cardHolder' className='text-sm font-medium text-gray-500'>Name</label>
                <input className='border border-gray-300 rounded-md focus:outline-none cursor-pointer p-1 text-md' {...register("name")} placeholder='Bittu Gurrala' />
                {errors.name && (<p className= "text-sm text-red-500">{errors.name.message}</p> )}
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='cardHolder' className='text-sm font-medium text-gray-500'>Email</label>
                <input className='border border-gray-300 rounded-md p-1 focus:outline-none cursor-pointer text-md' {...register("email")} placeholder='commerceX@gmail.com' />
                {errors.email && (<p className= "text-sm text-red-500">{errors.email.message}</p> )}
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='cardHolder' className='text-sm font-medium text-gray-500'>Phone</label>
                <input className='border border-gray-300 rounded-md p-1 focus:outline-none cursor-pointer text-md' {...register("phone")} placeholder='9876543210' />
                {errors.phone && (<p className= "text-sm text-red-500">{errors.phone.message}</p> )}
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='cardHolder' className='text-sm font-medium text-gray-500'>Address</label>
                <input className='border border-gray-300 rounded-md p-1 focus:outline-none cursor-pointer text-md' {...register("address")} placeholder='Telangana' />
                {errors.address && (<p className= "text-sm text-red-500">{errors.address.message}</p> )}
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='cardHolder' className='text-sm font-medium text-gray-500'>City</label>
                <input className='border border-gray-300 rounded-md p-1 focus:outline-none cursor-pointer text-md' {...register("city")} placeholder='Hyderabad' />
                {errors.city && (<p className= "text-sm text-red-500">{errors.city.message}</p> )}
            </div>

            <button type = "submit" className='bg-gray-800 rounded-lg text-white p-2 cursor-pointer transition-all duration-400 hover:bg-[#4FA3A5]'>Submit</button>

        </form>
    )
}
