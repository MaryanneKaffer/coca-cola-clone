import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoArrowForward } from "react-icons/io5";

interface CardProps {
    image: string;
    link: string;
    title: string;
    description: string;
    actionLink: string;
    name: string;
}

export function MobileContentCard({ image, link, title, description, actionLink, name, }: CardProps) {
    return (
        <div>
            <a href={link} aria-label="Go to page" target="_blank" rel="noopener noreferrer" className="flex justify-center">
                <Card className="rounded-2xl">
                    <CardHeader>
                        <LazyLoadImage effect="blur" src={image} className="rounded-t-2xl" alt={name || "Image description"} />
                    </CardHeader>

                    <CardBody className="px-7 h-[250px]">
                        <h1 className="text-2xl font-bold mb-2"> {title} </h1>
                        <h2 className="text-xl"> {description} </h2>
                    </CardBody>

                    <CardFooter className="flex justify-start px-7 pb-6 mb-12">
                        <span className="font-bold underline text-lg flex items-center">
                            {actionLink} <IoArrowForward className="ml-2 mt-1" size={16} />
                        </span>
                    </CardFooter>
                </Card>
            </a>
        </div>
    );
}

export function PcContentCard({ image, link, title, description, actionLink, name, }: CardProps) {
    return (
        <div className="flex justify-center">
            <a href={link} aria-label="Go to page" target="_blank" rel="noopener noreferrer">
                <Card className="rounded-2xl">
                    <CardHeader className="flex">
                        <LazyLoadImage effect="blur" src={image} className='rounded-t-2xl' alt={name || "Image description"} />)
                    </CardHeader>

                    <CardBody className='px-7 scale-y-98 h-[280px]'>
                        <h1 className='text-2xl font-bold mb-2'> {title} </h1>
                        <h2 className='text-xl'> {description} </h2>
                    </CardBody>

                    <CardFooter className="flex justify-start px-7 pb-6 mb-12">
                        <span className='font-bold underline text-lg flex items-center'>
                            {actionLink} <IoArrowForward className='ml-2 mt-1' size={16} />
                        </span>
                    </CardFooter>
                </Card>
            </a>
        </div>
    );
}
