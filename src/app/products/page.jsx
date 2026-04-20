import ProductsList from '@/components/ProductsList'
import React from 'react'

export const dynamic = "force-dynamic";

const ProductsPage =async ({searchParams}) => {


    const category = (await searchParams)?.category

    return (
        <div>
            <ProductsList category={category}  params = {"products"}/>    
        </div>
  )
}

export default ProductsPage
