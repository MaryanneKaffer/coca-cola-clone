import { Button } from "@heroui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"
interface BrandCardProps {
    image: string;
    link: string;
    name?: string;
}

export function PcBrandCard({ image, link, name }: BrandCardProps) {
    const navigation = name ? `Go to ${name} site` : "Go to brand site";
    return (
        <div className="flex justify-center ">
            <a href={link} target="_blank" aria-label={navigation}>
                <Button className="h-[15vw] w-[15vw] rounded-lg p-5 mx-3 shadow-md shadow-gray-300 cursor-pointer" id={navigation} type="button" >
                    <img className="object-cover" src={image} alt={name || "Brand image"} />
                </Button>
            </a>
        </div>
    );
}

export function MobileBrandCard({ image, link, name }: BrandCardProps) {
    const navigation = name ? `Go to ${name} site` : "Go to brand site";
    return (
        <div className="flex justify-center">
            <a href={link} target="_blank" aria-label={navigation}>
                <Button className="h-[40vw] w-[40vw] rounded-lg p-5 mx-3 shadow-md shadow-gray-300" id={navigation} type="button" >
                    <LazyLoadImage className="object-cover" src={image} alt={name || "Brand image"} effect="blur" />
                </Button>
            </a>
        </div>
    );
}