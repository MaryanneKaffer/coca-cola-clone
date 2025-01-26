import { Button, Card, CardBody } from "@heroui/react";
import Feature1 from "../../../assets/feature1.webp";
import Feature2 from "../../../assets/feature2.webp";

export default function FeaturesMobile() {
  return (
    <div className="lg:hidden">
      <p className="text-center text-4xl font-bold mt-10 mb-14">Features</p>

      {/* Primeiro bloco com imagem e card */}
      <div className="relative">
        <img src={Feature1} alt="Feature1" className="w-full" />
        <Card className="absolute top-63 mx-6 bg-white rounded-2xl p-4 shadow-gray-300 shadow-2xl">
          <CardBody>
            <p className="text-3xl font-bold mb-2">A new blend that’s simply gold.</p>
            <p className="text-lg mb-8 leading-5">
              Part tea. Part fruit. All natural. Have you tried Simply Gold Peak yet?
            </p>
            <Button className="border-black border-2 text-black rounded-3xl font-bold px-4 py-2">
              Try Now
            </Button>
          </CardBody>
        </Card>
      </div>

      {/* Segundo bloco com imagem e card */}
      <div className="relative mt-60">
        <img src={Feature2} alt="Feature2" className="w-full" />
        <Card className="absolute top-57 mx-6 bg-white rounded-2xl p-4 shadow-gray-400 shadow-2xl">
          <CardBody>
            <p className="text-3xl font-bold mb-8">
              Coca‑Cola® 20oz bottles are now made from 100% recycled plastic (excluding cap and label) nationwide.
            </p>
            <Button className="border-black border-2 text-black rounded-3xl font-bold px-4 py-2">
              Click to read more
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
