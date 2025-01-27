import { Button } from "@heroui/react";
import CocaCola from "../../../assets/cocaCola.webp";
import CokeDiet from "../../../assets/cokeDiet.webp";
import Sprite from "../../../assets/sprite.webp";
import Fanta from "../../../assets/fanta.webp";
import SmartWater from "../../../assets/smartWater.webp";
import MinuteMaid from "../../../assets/minuteMaid.webp";
export default function PcExplore() {
    return (
        <div className="hidden lg:block">
            <p className="text-center text-4xl font-bold mt-10 mb-14 scale-y-95"> Explore our Brands </p>
            <div className="flex justify-center">
                <Button className="h-[15vw] w-[15vw] rounded-lg p-5 mx-3 shadow-md shadow-gray-300"> <img src={CocaCola}></img> </Button>
                <Button className="h-[15vw] w-[15vw] rounded-lg p-5 mx-3 shadow-md shadow-gray-300"> <img src={CokeDiet}></img> </Button>
                <Button className="h-[15vw] w-[15vw] rounded-lg p-5 mx-3 shadow-md shadow-gray-300"> <img src={Sprite}></img> </Button>
            </div>
            <div className="flex justify-center">
                <Button className="h-[15vw] w-[15vw] rounded-lg p-5 mx-3 shadow-md shadow-gray-300"> <img src={Fanta}></img> </Button>
                <Button className="h-[15vw] w-[15vw] rounded-lg p-5 mx-3 shadow-md shadow-gray-300"> <img src={SmartWater}></img> </Button>
                <Button className="h-[15vw] w-[15vw] rounded-lg p-5 mx-3 shadow-md shadow-gray-300"> <img src={MinuteMaid}></img> </Button>
            </div>
            <div className="flex justify-center">
                <Button className="border-black border-2 text-black text-lg rounded-3xl font-bold px-4 py-2 w-[25%] mx-5 mt-8">
                    View All
                </Button>
            </div>
        </div>
    );
}