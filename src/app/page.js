import Image from "next/image";
import ProductsList from "@/components/ProductsList";

export default function Home() {
  return (
    <div className=" flex flex-col gap-10">
      <div className="relative w-full aspect-3/1">
        <Image src = "/featured.png" alt = "featured image"fill />
      </div>
      <ProductsList/>
    </div>
  );
}
