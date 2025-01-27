import { Button, Card, CardBody } from "@heroui/react";
import Feature1 from "../../../assets/feature1pc.webp";
import Feature2 from "../../../assets/feature2pc.webp";

export default function PcFeatures() {
    return (
        <div className="hidden lg:block">
            <p className="text-center text-4xl font-bold mt-15 mb-14 scale-y-95">Features</p>
            <div className="justify-center flex max-h-[840px]">
                <div className="relative mr-110 mt-35">
                    <img src={Feature1} alt="Feature1" className="h-[500px] rounded-2xl" />
                    <Card className="relative -top-143 left-130 mx-6 bg-white rounded-2xl shadow-gray-300 shadow-2xl w-135 h-132 p-12">
                        <CardBody className="flex flex-col justify-between h-full">
                            <div>
                                <p className="text-4xl font-bold mb-5">A new blend that’s simply gold.</p>
                                <p className="text-xl leading-5">
                                    Part tea. Part fruit. All natural. Have you tried Simply Gold Peak yet?
                                </p>
                            </div>
                            <Button className="border-black border-2 text-black rounded-3xl font-bold px-4 py-2 mt-auto w-82">
                                Try Now
                            </Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="justify-center flex gap-10">
                <div className="relative mr-310">
                    <img src={Feature2} alt="Feature1" className="h-[500px] rounded-2xl ml-260" />
                    <Card className="relative -top-134 left-130 mx-6 bg-white rounded-2xl shadow-gray-300 shadow-2xl w-140 h-132 p-12">
                        <CardBody className="flex flex-col justify-between h-full">
                            <div>
                                <p className="text-4xl font-bold mb-5">Coca‑Cola® 20oz bottles are now made from 100% recycled plastic (excluding cap and label) nationwide.</p>
                            </div>
                            <Button className="border-black border-2 text-black rounded-3xl font-bold px-4 py-2 mt-auto w-88 text-lg">
                                Click to read more
                            </Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}
