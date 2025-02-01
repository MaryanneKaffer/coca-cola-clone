import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/react"
import CokeCompanyLogo from '../../../assets/cokeCompanyLogo.svg';
import { SlLocationPin } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";
import { Button } from '@heroui/react';
import { FiX } from "react-icons/fi";
import React from "react";
import { NavbarDiscover } from "./navbarNavigation";
import { NavbarImpact } from "./navbarNavigation";

export default function MobileNavbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState("md");

    const handleOpen = (full: React.SetStateAction<string>) => {
        setSize(full);
        onOpen();
    };

    return (
        <nav className='lg:hidden'>
            <div className="h-[72px] items-center flex ml-6">
                <img src={CokeCompanyLogo} alt="Coke Company Logo" />

                <FiMenu className="ml-auto flex justify-end mt-2 mr-10" id='Menu' type='button' onClick={() => handleOpen(size)} size={24} />

                <Modal className='bg-white flex items-center justify-center fixed inset-0 font-KometaBold' isOpen={isOpen} size={"full"} onClose={onClose} hideCloseButton={true} >
                    <ModalContent>
                        <ModalHeader >
                            <Button onPress={onClose} className="absolute top-4 -right-2 p-2 "> <FiX size={23} /> </Button>
                        </ModalHeader>

                        <ModalBody>
                            <div className="font-bold text-3xl">
                                <a href={import.meta.env.VITE_LINK_PORTFOLIO}><p className="mt-6"> Brands </p></a>
                                <NavbarDiscover />
                                <NavbarImpact />
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

                        <ModalFooter />

                    </ModalContent>
                </Modal>
            </div>
        </nav>
    );
}