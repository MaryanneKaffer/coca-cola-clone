import { CardBody, Button, Card } from "@heroui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface FeaturesProps {
    link: string;
    title: string;
    description: string;
    button: string;
    image?: string;
    name?: string;
}

export function PcFeaturesCard({ link, title, description, button }: FeaturesProps) {
    return (
        <CardBody className="flex flex-col justify-between h-full">
            <div>
                <p className="text-4xl font-bold mb-5"> {title} </p>
                <p className="text-xl leading-5"> {description} </p>
            </div>
            <a href={link} target="_blank">
                <Button className="border-black border-2 text-black text-lg rounded-3xl font-bold px-4 py-2 mt-auto w-82">
                    {button}
                </Button>
            </a>
        </CardBody>
    );
}

export function MobileFeaturesCard({ link, title, description, button, image, name }: FeaturesProps) {
    return (
        <div className="relative">
            <LazyLoadImage effect="blur" src={image} alt={name} className="" />
            <Card className="relative -top-20 mx-6 bg-white rounded-2xl shadow-gray-300 shadow-2xl w-[90%] h-auto p-4">
                <CardBody className="flex flex-col justify-between h-full">
                    <div>
                        <p className="text-3xl font-bold mb-2"> {title} </p>
                        <p className="text-lg mb-8 leading-5"> {description} </p>
                    </div>
                    <a href={link} aria-label="Go to the product page" target="_blank">
                        <Button className="border-black border-2 text-black rounded-3xl font-bold px-4 py-2 w-full">
                            {button}
                        </Button>
                    </a>
                </CardBody>
            </Card>
        </div>
    );
}