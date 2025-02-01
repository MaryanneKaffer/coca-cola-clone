import { FeaturesData } from "../../../config/data/featuresData";
import { MobileFeaturesCard } from "./featuresCard";
import { Skeleton } from "@heroui/react";
import { Suspense } from "react";

export default function MobileFeatures() {
  return (
    <div>
      <p className="text-center text-3xl font-bold mb-14 scale-y-95 w-full mt-10">Features</p>
      {FeaturesData.map((data, index) => (
        <Suspense fallback={<Skeleton className="w-full h-full rounded-t-2xl" />}>
          <MobileFeaturesCard
            key={`mobile-${index}`}
            image={data.image}
            title={data.title}
            description={data.description}
            button={data.button}
            link={data.link}
            name={data.name}
          />
        </Suspense>
      ))}
    </div>
  );
}

