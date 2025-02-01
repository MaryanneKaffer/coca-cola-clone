import "react-lazy-load-image-component/src/effects/blur.css"

interface SlideProps {
    image: string;
    link: string;
    title: string;
    description: string;
    button: string;
    name: string;
}

export function MobileSlideContent({ image, link, title, description, button, name, }: SlideProps) {
    return (
        <div className="text-white">
            <a href={link} aria-label="Go to merch page" target="_blank" className="w-full h-full">
                <div className="absolute left-0 right-0 top-0 text-center p-10 z-10">
                    <h1 className="text-4xl font-bold mb-4">{title}</h1>
                    <h2 className="text-xl mb-7 leading-6 mx-4">{description}</h2>
                    {button &&
                        <span className="bg-white text-black font-bold py-2 px-6 rounded-full shadow-md inline-block text-lg w-full">
                            {button}
                        </span>
                    }
                </div>
                <img src={image} alt={name} loading="eager" className="w-full h-full object-cover rounded-xl" />
            </a>
        </div>
    );
}

export function PcSlideContent({ image, link, title, description, button, name, }: SlideProps) {
    return (
        <div className="relative text-white h-[620px]">
            <a href={link} aria-label="Go to merch page" target="_blank" className="w-full h-full block">
                <div className="absolute z-10 top-40 w-[45%] left-20">
                    <h1 className="text-5xl font-bold mb-4">{title}</h1>
                    <h2 className="text-xl mb-6 leading-6">{description}</h2>
                    {button &&
                        <span className="bg-white text-black font-bold py-3 rounded-full shadow-md text-lg px-20" >
                            {button}
                        </span>
                    }
                </div>
                <img loading="eager" src={image} alt={name} className="w-full h-[90%] object-cover rounded-3xl" />
            </a>
        </div>
    );
}