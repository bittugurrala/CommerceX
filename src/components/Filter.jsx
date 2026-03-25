"use client"
import React from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'


const Filter = () => {

    const searchParams = useSearchParams()   //This Hook is to access the Search params of the URL
    const router = useRouter()   //This Hook is to push a param to the URL
    const pathName = usePathname() 

    const handlerFilter = (slug) =>{ 
        const params = new URLSearchParams(searchParams)
        // console.log(params)
        params.set("sort", slug )
        // router.push(`${pathName}?${params.toString()}`)
        router.replace(`${pathName}?${params.toString()}`, {scroll:false})
    }
    return (
        <div className='flex items-center justify-end gap-2 text-sm text-gray-500 my-6 '>
            <span>Sort by:</span>
            <select name= "sort" className='ring-1 ring-gray-200 shadow-md p-1 rounded-sm' onChange={(e) => handlerFilter(e.target.value)}>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
            
        </div>
  )
}

export default Filter
