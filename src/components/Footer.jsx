import Link from "next/link"
import Image from "next/image"

export default function Footer(){
    return(
        <div className="mt-16 flex flex-col items-center justify-between gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg ">
            <div className="flex flex-col items-center gap-3">
                <Link href = "/" className='flex items-center justify-center hover:gap-1'>
                    <Image  src = "/logo.png" alt = "CommerceX logo" width = {30} height={30} className="text-gray-300 filter invert h-12 w-12 md:h-9 md:w-9 transition-transform duration-200 hover:scale-110"/>
                    <h3 className='hidden md:block text-gray-300 text-xl tracking-wider'>CommerceX</h3>
                </Link>
                <p className="text-gray-400 text-xs">© 2026 CommerceX.</p>
                <p className="text-gray-400 text-xs">All rights reserved.</p>
            </div>
            <div className=" text-xs flex flex-col items-center justify-center gap-3">
                <p className="text-white ">Links</p>
                <Link className="text-gray-400" href = "/">Homepage</Link>
                <Link className="text-gray-400" href = "/">Contact</Link>
                <Link className="text-gray-400" href = "/">Terms of Service</Link>
                <Link className="text-gray-400" href = "/">Privacy Policy</Link>
            </div>
            <div className=" text-xs flex flex-col  items-center justify-center gap-3">
                <p className="text-white ">Products</p>
                <Link className="text-gray-400" href = "/">All Products</Link>
                <Link className="text-gray-400" href = "/">New Arrivals</Link>
                <Link className="text-gray-400" href = "/">Best Sellers</Link>
                <Link className="text-gray-400" href = "/">Sale</Link>
            </div>
            <div className=" text-xs flex flex-col items-center justify-center gap-3">
                <p className="text-white ">Company</p>
                <Link className="text-gray-400" href = "/">About</Link>
                <Link className="text-gray-400" href = "/">Contact</Link>
                <Link className="text-gray-400" href = "/">Blog</Link>
                <Link className="text-gray-400" href = "/">Affilate Program</Link>
            </div>
        </div>
    )
}