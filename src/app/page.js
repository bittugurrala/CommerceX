import Image from "next/image";
import ProductsList from "@/components/ProductsList";

export default async function Home({searchParams}) {

  const category = (await searchParams)?.category 

  return (
    <div className=" flex flex-col gap-10">
      <div className="relative w-full aspect-3/1">
        <Image src = "/newly_featured.png" alt = "featured image"fill />
      </div>
      <ProductsList category={category} params = {"homepage"}/>
      
    </div>
  );
}

// as this is SSR page so we use searchParams
// if this was a CCR page we would have used useSearchParams
