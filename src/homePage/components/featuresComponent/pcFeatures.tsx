import { LazyLoadImage } from "react-lazy-load-image-component";
import { FeaturesData } from "../../../config/data/featuresData";
import { PcFeaturesCard } from "./featuresCard";
import { Card, Skeleton } from "@heroui/react";
import { Suspense } from "react";

export default function PcFeatures() {
    return (
        <div className="hidden lg:block">
            <p className="text-center text-4xl font-bold mt-15 mb-14 scale-y-95">Features</p>

            <div className="justify-center flex max-h-[840px]">
                <div className="relative mr-310 mt-30">
                    <LazyLoadImage effect="blur" src={FeaturesData[0].image} alt={FeaturesData[0].name} className="h-[500px] rounded-2xl ml-260" />
                    <Suspense fallback={<Skeleton className="w-full h-full rounded-t-2xl" />}>
                        <Card className="relative -top-143 left-135 mx-6 bg-white rounded-2xl shadow-gray-300 shadow-2xl w-135 h-132 p-12">
                            <PcFeaturesCard link={FeaturesData[0].link} title={FeaturesData[0].title} description={FeaturesData[0].description} button={FeaturesData[0].button} />
                        </Card>
                    </Suspense>
                </div>
            </div>
            <div className="justify-center flex max-h-[840px]">
                <div className="relative mr-110 -mt-5">
                    <LazyLoadImage effect="blur" src={FeaturesData[1].image} alt={FeaturesData[1].name} className="h-[500px] rounded-2xl" />
                    <Suspense fallback={<Skeleton className="w-full h-full rounded-t-2xl" />}>
                        <Card className="relative -top-143 left-130 mx-6 bg-white rounded-2xl shadow-gray-300 shadow-2xl w-135 h-132 p-12">
                            <PcFeaturesCard link={FeaturesData[1].link} title={FeaturesData[1].title} description={FeaturesData[1].description} button={FeaturesData[1].button} />
                        </Card>
                    </Suspense>
                </div>
            </div>
            <div className="justify-center flex gap-10">
                <div className="relative mr-310 -mt-35">
                    <LazyLoadImage effect="blur" src={FeaturesData[2].image} alt={FeaturesData[2].name} className="h-[500px] rounded-2xl ml-260" />
                    <Suspense fallback={<Skeleton className="w-full h-full rounded-t-2xl" />}>
                        <Card className="relative -top-134 left-130 mx-6 bg-white rounded-2xl shadow-gray-300 shadow-2xl w-140 h-132 p-12">
                            <PcFeaturesCard link={FeaturesData[2].link} title={FeaturesData[2].title} description={FeaturesData[2].description} button={FeaturesData[2].button} />
                        </Card>
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
