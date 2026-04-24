import React from 'react'
import Image from 'next/image';
import ProductInteraction from '@/components/ProductInteraction';
import products from '@/lib/Products';



export const generateMetadata = async ({ params }) => {
    // currently no DB so local data
    const {id} = await params    //Fetch the id from URL as string
    const item = products.find((p) => p.id === Number(id));

    if (!item) {
        return {
        title: "Product not found",
        };
    }

    return {
        title: item.name,
        description: item.description,
    };
};

const ProductPage = async ({params, searchParams}) => {
    const {id} = await params
    const item = products.find((p) => p.id === Number(id));

    const { size, color } = searchParams;

    const selectedSize = size || item.sizes[0];
    const selectedColor = color || item.colors[0];

    return (
    <div className='flex flex-col lg:flex-row md:gap-12 mt-12'>
        {/* IMAGE */}
        <div className='w-full lg:w-5/12 relative aspect-2/3'>
            <Image src = {item.images[selectedColor]} alt = {item.name} fill className = "object-contain ruonded-md"></Image>
        </div>
        {/* DETAILS */}
        <div className='w-full lg:w-7/12 flex flex-col gap-4'>
            <h1 className='text-2xl font-medium'>{item.name}</h1>
            <p className='text-gray-500'>{item.description}</p>
            <h2 className='text-2xl font-semibold'>₹{item.price.toFixed(2)}</h2>
            <ProductInteraction items = {item} selectedSize = {selectedSize} selectedColor = {selectedColor}/>
            {/* CARD INFO */}
            <div className='flex items-center gap-2 mt-4'>
                <Image src = "/paymentOptions/visa-icon.png" alt = 'Visa card icon' width={50} height={50}></Image>
                <Image src = "/paymentOptions/rupay-logo-icon.png" alt = 'Rupay card Icon' width={50} height={50}></Image>
                <Image src = "/paymentOptions/paytm-icon.png" alt = 'Paytm Icon' width={50} height={50}></Image>
            </div>
            <p className="text-gray-500 text-xs">
                By clicking Pay Now, you agree to our{" "}
                <span className="underline hover:text-black">Terms & Conditions</span>{" "}
                and <span className="underline hover:text-black">Privacy Policy</span>
                . You authorize us to charge your selected payment method for the
                total amount shown. All sales are subject to our return and{" "}
                <span className="underline hover:text-black">Refund Policies</span>.
            </p>


        </div>
    </div>
    )
}

export default ProductPage
