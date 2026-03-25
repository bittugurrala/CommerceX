import ProductsList from '@/components/ProductsList'
import React from 'react'

const ProductsPage =({searchParams}) => {


    const category = searchParams?.category

    return (
        <div>
            <ProductsList category={category}  params = {"products"}/>    
        </div>
  )
}

export default ProductsPage
