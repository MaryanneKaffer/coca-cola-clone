import { useState, useEffect } from "react";
import { Skeleton } from "@heroui/skeleton"; 

interface SlideProps {
    image: string;
    link: string;
    title: string;
    description: string;
    button: string;
    name: string;
}

export function MobileSlideContent({ image, link, title, description, button, name, }: SlideProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if ( image ) {
            setLoading(false); 
        }
    }, [image, title, description, button]);

    return (
        <div className="flex text-white rounded-4xl relative transition-all duration-500 transform hover:scale-110">
            <a href={link} target="_blank" className="w-full h-full">
            <div className="absolute left-0 right-0 top-0 text-center p-10">
                {loading ? (
                    <Skeleton className="w-3/4 h-8 mb-4" /> ) : (  <h2 className="text-4xl font-bold mb-4">{title}</h2> 
                )}
                {loading ? (
                    <Skeleton className="w-5/6 h-6 mb-7" /> ) : ( <p className="text-xl mb-7 leading-6 mx-4">{description}</p>
                )}
                {loading || !button ? (
                    <Skeleton className="w-32 h-10 inline-block mt-4" /> ) : ( 
                    <span className="bg-white text-black font-bold py-2 px-6 rounded-full shadow-md inline-block text-lg w-full" >
                        {button}
                    </span>
                )}
            </div>
            {loading ? ( <Skeleton className="w-full h-56 rounded-xl" /> ) : (
                <img src={image} alt={name} className="w-full h-full object-cover rounded-xl"/>
            )}
            </a>
        </div>
    );
}

export function PcSlideContent({ image, link, title, description, button, name, }: SlideProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if ( image ) {
            setLoading(false); 
        }
    }, [image, title, description, button]);

    return (
        <div className="flex items-center justify-between text-white h-[620px] rounded-4xl">
            <a href={link} target="_blank" className="w-full h-full">
            <div className="absolute m-25 w-150 scale-y-95">
                {loading ? (
                    <Skeleton className="w-3/4 h-8 mb-4" /> ) : (  <h1 className="text-5xl font-bold mb-4">{title}</h1> 
                )}
                {loading ? (
                    <Skeleton className="w-5/6 h-6 mb-7" /> ) : ( <h2 className="text-xl mb-6 leading-6">{description}</h2>
                )}
                {loading || !button ? (
                    <Skeleton className="w-32 h-10 inline-block mt-4" /> ) : ( 
                    <span className="bg-white text-black font-bold py-3 px-6 rounded-full shadow-md w-70 text-lg p-6" >
                        {button}
                    </span>
                )}
            </div>
            {loading ? ( <Skeleton className="w-full h-56 rounded-xl" /> ) : (
                <img src={image} alt={name} className="w-full h-full object-cover rounded-xl"/>
            )}
            </a>
        </div>
    );
}