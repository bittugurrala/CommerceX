import ShippingSchema from '@/lib/validations/ShippingSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation'



export default function ShippingForm({setShipForm}){

    const {
        register,
        handleSubmit,
        watch,
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
        <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-3' >
            <input className='border border-gray-300 rounded-md p-1 focus:outline-none cursor-pointer text-md' {...register("name")} placeholder='Name' />
            <p className= "text-sm text-red-500">{errors.name?.message}</p>

            <input className='border border-gray-300 rounded-md p-1 focus:outline-none cursor-pointer text-md' {...register("email")} placeholder='Email' />
            <p className= "text-sm text-red-500">{errors.email?.message}</p>

            <input className='border border-gray-300 rounded-md p-1 focus:outline-none cursor-pointer text-md' {...register("phone")} placeholder='Phone' />
            <p className= "text-sm text-red-500">{errors.phone?.message}</p>

            <input className='border border-gray-300 rounded-md p-1 focus:outline-none cursor-pointer text-md' {...register("address")} placeholder='Address' />
            <p className= "text-sm text-red-500">{errors.address?.message}</p>

            <input className='border border-gray-300 rounded-md p-1 focus:outline-none cursor-pointer text-md' {...register("city")} placeholder='City' />
            <p className= "text-sm text-red-500">{errors.city?.message}</p>

            <button type = "submit" className='bg-gray-800 rounded-lg text-white p-2 cursor-pointer transition-transform duration-200 hover:scale-110 hover:bg-gray-500'>Submit</button>

        </form>
    )
}
