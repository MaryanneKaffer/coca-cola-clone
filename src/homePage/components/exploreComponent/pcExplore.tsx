import { PcBrandCard } from "./brandCard";
import { Button } from "@heroui/react";
import { Brand } from "../../../config/brandsData.ts";

export default function PcExplore() {
    return (
        <section className="hidden lg:block">
            <p className="text-center text-4xl font-bold mt-10 mb-14 scale-y-95"> Explore our Brands </p>
            <div className="flex justify-center">
                {Brand.slice(0, 3).map((data, index) => (
                    <PcBrandCard key={index} link={data.link} image={data.image} />
                ))}
            </div>
            <div className="flex justify-center">
                {Brand.slice(3, 6).map((data, index) => (
                    <PcBrandCard key={index} link={data.link} image={data.image} />
                ))}
            </div>
            <div className="flex justify-center">
                <a href={import.meta.env.VITE_LINK_PORTFOLIO} target="_blank" className="w-[25%]">
                    <Button className="border-black border-2 text-black text-lg rounded-3xl font-bold px-4 py-2 w-full mx-5 mt-8 cursor-pointer">
                        View All
                    </Button>
                </a>
            </div>
        </section>
    );
}