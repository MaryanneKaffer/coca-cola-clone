import { ModalContent, ModalHeader, Button, ModalBody } from "@heroui/react";
import { IoIosArrowForward } from "react-icons/io";
import { NavbarDiscover, NavbarImpact } from "./navbarNavigation";
import { SlLocationPin } from "react-icons/sl";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";

export default function MobileModal({ onClose }: { onClose: () => void }) {
    const [isImpactOpen, setImpactOpen] = useState(false);
    const [isDiscoverOpen, setDiscoverOpen] = useState(false);

    const toggleDiscover = () => {
        setDiscoverOpen((prevState) => !prevState);
    };
    const toggleImpact = () => {
        setImpactOpen((prevState) => !prevState);
    };

    return (
        <ModalContent>
            <ModalHeader >
                <Button onPress={onClose} className="absolute top-4 -right-2 p-2 "> <FiX size={23} /> </Button>
            </ModalHeader>

            <ModalBody>
                <div className="font-bold text-3xl">
                    <a href={import.meta.env.VITE_LINK_PORTFOLIO}><p className="mt-6"> Brands </p></a>
                    <p onClick={toggleDiscover} className="flex items-center justify-between w-full cursor-pointer mt-4" >
                        Discover
                        <motion.div
                            animate={{ rotate: isDiscoverOpen ? 90 : 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            <IoIosArrowForward size={21} />
                        </motion.div>
                    </p>
                    {isDiscoverOpen && (
                        <NavbarDiscover />
                    )}
                    <p onClick={toggleImpact} className="flex items-center justify-between w-full cursor-pointer mt-4" >
                        Impact
                        <motion.div
                            animate={{ rotate: isImpactOpen ? 90 : 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            <IoIosArrowForward size={21} />
                        </motion.div>
                    </p>
                    {isImpactOpen && (
                        <NavbarImpact />
                    )}
                    <a href={import.meta.env.VITE_LINK_PORTFOLIO}><p className="mt-4"> Shop </p></a>
                </div>

                <p className='mt-14 tracking-wider text-md'> Want a personalized experience and access to exclusive content?</p>
                <div className='flex gap-3 mt-6 text-lg scale-y-90'>
                    <Button className='bg-black text-white  rounded-3xl w-1/2 max-w-[250px] font-bold h-12' onPress={() => window.location.href = import.meta.env.VITE_LINK_PORTFOLIO}> Log in </Button>
                    <Button className='border-black border-2 text-black  rounded-4xl w-1/2 max-w-[250px] font-bold h-12' onPress={() => window.location.href = import.meta.env.VITE_LINK_PORTFOLIO}> Sign Up </Button>
                </div>

                <div className="bg-gray-300 h-px w-full m-6"></div>

                <div className='grid ml-1 font-bold gap-3 mt-1'>
                    <p className="text-sm mb-2 text-gray-400"> SELECT LOCATION </p>
                    <Button className='border-black border-2 text-black text-lg rounded-3xl min-w-[360px] max-w-[500px] font-bold' onPress={() => window.location.href = import.meta.env.VITE_LINK_PORTFOLIO} aria-label="Current Location">
                        <SlLocationPin size={21} /> United States | EN
                    </Button>
                </div>
            </ModalBody>
        </ModalContent>
    )
}