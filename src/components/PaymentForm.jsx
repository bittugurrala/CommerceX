import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation'
import PaymentSchema from '@/lib/validations/PaymentSchema'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'



export default function PaymentForm({setShipForm}){

    const {
        register,
        handleSubmit,
        watch,
        formState:{ errors },

    } = useForm({
        resolver:zodResolver(PaymentSchema),
    })

    const router = useRouter()

    const submitHandler = (data)=>{
        // setShipForm(data)
        // router.push("/cart?step=3")
        
    }

    return(
        <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-4' >
            <div className='flex flex-col gap-1'>
                <label htmlFor='cardHolder' className='text-sm font-medium text-gray-500'>Card Holder's name</label>
                <input className='border border-gray-300 rounded-md p-1 focus:outline-none cursor-pointer text-md' {...register("cardHolder")} placeholder='Bittu Gurrala' />
                {errors.cardHolder && (<p className= "text-sm text-red-500">{errors.cardHolder.message}</p> )}
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='cardNumber' className='text-sm font-medium text-gray-500'>Card Number</label>
                <input className='border border-gray-300 rounded-md p-1 focus:outline-none cursor-pointer text-md' {...register("cardNumber")} placeholder='1234 5678 9123 4567' />
                {errors.cardNumber && (<p className= "text-sm text-red-500">{errors.cardNumber.message}</p> )}
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='expireDate' className='text-sm font-medium text-gray-500'>Expire date</label>
                <input className='border border-gray-300 rounded-md p-1 focus:outline-none cursor-pointer text-md' {...register("expireDate")} placeholder='MM/YY' />
                {errors.expireDate && (<p className= "text-sm text-red-500">{errors.expireDate.message}</p> )}
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='cvv' className='text-sm font-medium text-gray-500'>CVV</label>
                <input className='border border-gray-300 rounded-md p-1 focus:outline-none cursor-pointer text-md' {...register("cvv")} placeholder='123' />
                {errors.cvv && (<p className= "text-sm text-red-500">{errors.cvv.message}</p> )}
            </div>
            <div className='flex flex-row gap-3'>
                <Image src = "/paymentOptions/american-express-icon.svg" alt = 'AmeX' width={50} height={50}></Image>
                <Image src = "/paymentOptions/visa-icon.png" alt = 'Visa card icon' width={50} height={50}></Image>
                <Image src = "/paymentOptions/master-card-icon.png" alt = 'Master card Icon' width={50} height={50}></Image>
                <Image src = "/paymentOptions/rupay-logo-icon.png" alt = 'Rupay card Icon' width={50} height={50}></Image>
                <Image src = "/paymentOptions/paytm-icon.png" alt = 'Paytm Icon' width={50} height={50}></Image>
                <Image src = "/paymentOptions/bank-building-icon.png" alt = 'bank building Icon' width={50} height={50}></Image>
                
            </div>

            

    
            <button type = "submit" className='flex items-center justify-center gap-1 bg-gray-800 rounded-lg text-white p-2 cursor-pointer transition-all duration-400 hover:bg-[#4FA3A5]'>Checkout
                <ShoppingCart className='w-3 h-3'/>
            </button>

        </form>
    )
}
