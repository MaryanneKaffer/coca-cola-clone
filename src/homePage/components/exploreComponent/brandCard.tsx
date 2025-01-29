import { Button } from "@heroui/react";

interface BrandCardProps {
    image: string;
    link: string;
    name?: string;
}

export function PcBrandCard({ image, link, name }: BrandCardProps) {
    return (
        <div className="flex justify-center ">
            <a href={link} target="_blank">
                <Button className="h-[15vw] w-[15vw] rounded-lg p-5 mx-3 shadow-md shadow-gray-300 cursor-pointer">
                    <img src={image} alt={name} />
                </Button>
            </a>
        </div>
    );
}

export function MobileBrandCard({ image, link, name }: BrandCardProps)  {
    return (
        <div className="flex justify-center">
            <a href={link} target="_blank">
                <Button className="h-[40vw] w-[40vw] rounded-lg p-5 mx-3 shadow-md shadow-gray-300">
                    <img src={image} alt={name} />
                </Button>
            </a>
        </div>
    );
}