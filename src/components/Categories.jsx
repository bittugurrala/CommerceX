"use client"
import React from 'react'
import { ShoppingBasket, Shirt, Footprints, Glasses, Briefcase,Venus, Hand } from 'lucide-react';
import { useRouter,useSearchParams } from 'next/navigation';

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];

const Categories = () => {

    const Cat = useSearchParams()   //This Hook is to access the Search params of the URL
    const router = useRouter()   //This Hook is to push a param to the URL

    const selectedCat = Cat.get("category")
    console.log(selectedCat)

    // To handle the category clicking action so that the UseRouter pushes the category in to the URL
    const ClickHandler = (slug) =>{ 
        router.push(`/?category=${slug}`)
    }

    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 p-2 rounded-lg mb-4 text-sm bg-gray-200'>
            {categories.map((category) =>( 
                <div className= {`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md ${category.slug===selectedCat ? "bg-white text-black" : "text-gray-500"}`} key = {category.name} onClick = {() => ClickHandler(category.slug)}>
                    {category.icon}
                    {category.name}
                </div>
            )
        )}
            
        </div>
  )
}

export default Categories


// onClick = {() => ClickHandler(category.slug)} as we are calling the function with parameters we cannot using direct call 
// so we use a callback for this

//  ${category.slug===selectedCat ? "bg-white text-black" : "text-gray-500"}`}  based on the Slug that is in the URL we change the color of the catergory

// by using the Router Hook we can push the concerened URL param and so that as a result the color changes 

