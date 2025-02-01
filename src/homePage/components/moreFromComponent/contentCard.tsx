import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import { Skeleton } from "@heroui/skeleton";
import { IoArrowForward } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface CardProps {
    image: string;
    link: string;
    title: string;
    description: string;
    actionLink: string;
    name: string;
}

export function MobileContentCard({ image, link, title, description, actionLink, name, }: CardProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (image && title && description && actionLink) {
            setLoading(false);
        }
    }, [image, title, description, actionLink]);

    return (
        <div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex justify-center">
                <Card className="rounded-2xl">
                    <CardHeader>
                        {loading ? (<Skeleton className="w-full h-[180px] rounded-t-2xl" />) : (<LazyLoadImage effect="blur" src={image} className="rounded-t-2xl" alt={name || "Image description"} />)}
                    </CardHeader>

                    <CardBody className="px-7 h-[250px]">
                        <h1 className="text-2xl font-bold mb-2"> {loading ? <Skeleton className="w-3/4 h-6" /> : title} </h1>
                        <h2 className="text-xl"> {loading ? <Skeleton className="w-full h-4 mt-2" /> : description} </h2>
                    </CardBody>

                    <CardFooter className="flex justify-start px-7 pb-6 mb-12"> {loading ? (<Skeleton className="w-[150px] h-6" />) : (
                        <span className="font-bold underline text-lg flex items-center">
                            {actionLink} <IoArrowForward className="ml-2 mt-1" size={16} />
                        </span>)}
                    </CardFooter>
                </Card>
            </a>
        </div>
    );
}

export function PcContentCard({ image, link, title, description, actionLink, name, }: CardProps) {

    return (
        <div className="flex justify-center">
            <a href={link} target="_blank" rel="noopener noreferrer">
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
