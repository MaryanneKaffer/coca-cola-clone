
import { FeaturesData } from "../../../config/featuresData";
import { MobileFeaturesCard } from "./featuresCard";

export default function MobileFeatures() {
  return (
    <div className="">
      <p className="text-center text-3xl font-bold mb-14 scale-y-95 w-full mt-10">Features</p>
      {FeaturesData.map((data, index) => (
        <MobileFeaturesCard
          key={`mobile-${index}`}
          image={data.image}
          title={data.title}
          description={data.description}
          button={data.button}
          link={data.link}
          name={data.name}
        />
      ))}
    </div>
  );
}

