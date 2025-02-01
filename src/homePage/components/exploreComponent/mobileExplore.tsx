import { Brand } from "../../../config/brandsData.ts";
import { MobileBrandCard } from "./brandCard";
import { Button } from "@heroui/react";

export default function MobileExplore() {
    return (
        <section>
            <p className="text-center text-3xl font-bold mt-5 mb-14 scale-y-95"> Explore our Brands </p>
            <div className="flex justify-center">
                {Brand.slice(0, 2).map((data, index) => (
                    <MobileBrandCard key={index} link={data.link} image={data.image} />
                ))}
            </div>
            <div className="flex justify-center">
                {Brand.slice(2, 4).map((data, index) => (
                    <MobileBrandCard key={index} link={data.link} image={data.image} />
                ))}
            </div>
            <div className="flex justify-center">
                {Brand.slice(4, 6).map((data, index) => (
                    <MobileBrandCard key={index} link={data.link} image={data.image} />
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <a href={import.meta.env.VITE_LINK_PORTFOLIO} target="_blank" className="w-[90%] relative  h-10">
                    <Button className="border-black border-2 text-black text-lg rounded-3xl font-bold px-4 py-2 w-full mt-8 absolute -top-8" id="View All Brands">
                        View All
                    </Button>
                </a>
            </div>
        </section>
    );
}