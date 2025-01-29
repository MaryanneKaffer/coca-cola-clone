import { Divider } from "@heroui/divider";
import { Card, CardHeader, CardBody, CardFooter, Link } from "@heroui/react";
import { IoArrowForward } from "react-icons/io5";

interface CardProps {
    image: string;
    link: string;
    title: string;
    description: string;
    actionLink: string;
    name: string;
}

export function MobileContentCard({ image, link, title, description, actionLink, name }: CardProps) {
    return (
        <div className="flex justify-center">
            <Card className="w-[90%] rounded-2xl">
                <CardHeader className="flex gap-3">
                    <img
                        src={image}
                        className='rounded-t-2xl'
                        alt={name}
                    />
                </CardHeader>
                <Divider />
                <CardBody className='px-7 scale-y-98'>
                    <h1 className='text-2xl font-bold mb-2'> {title}</h1>
                    <h2 className='text-xl'> {description}</h2>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link href={link} className='font-bold underline mb-20 mt-24 ml-4 text-lg'>
                        {actionLink} <IoArrowForward className='ml-2' size={16} />
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}