import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/react"
import CokeCompanyLogo from '../../../assets/cokeCompanyLogo.svg';
import { Listbox, ListboxItem } from "@heroui/react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";
import { Button } from '@heroui/react';
import { FiX } from "react-icons/fi";
import React from "react";

export default function MobileNavbar() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState("md");
    const [isImpactOpen, setImpactOpen] = React.useState(false);
    const [isDiscoverOpen, setDiscoverOpen] = React.useState(false);

    const handleOpen = (full: React.SetStateAction<string>) => {
        setSize(full);
        onOpen();
    };
    const openDiscover = () => {
        setDiscoverOpen((prevState) => !prevState);
        setImpactOpen(false);
    };
    const openImpact = () => {
        setImpactOpen((prevState) => !prevState);
        setDiscoverOpen(false);
    };

    return (
        <nav className='lg:hidden'>
            <div className="w-full h-[72px] items-center flex ml-6  ">
                <img src={CokeCompanyLogo} alt="Coke Company Logo" />

                <Button className="absolute -right-6 top-[11px] mr-6 mt-2" id='Menu' type='button' onPress={() => handleOpen(size)}>
                    <FiMenu className="absolute" size={24} />
                </Button>

                <Modal className='bg-white flex items-center justify-center fixed inset-0 font-KometaBold' isOpen={isOpen} size={"full"} onClose={onClose} hideCloseButton={true} >
                    <ModalContent>
                        <ModalHeader >
                            <Button onPress={onClose} className="absolute top-4 -right-2 p-2 ">
                                <FiX size={23} />
                            </Button>
                        </ModalHeader>
                        <ModalBody >
                            <div className='grid ml-1 text-[27px] gap-3 font-bold scale-y-90'>

                                <a href='' className='mt-6'> Brands </a>

                                <a onClick={openDiscover} className="flex items-center justify-between w-full"> Discover {isDiscoverOpen ? <IoIosArrowDown size={21} /> : <IoIosArrowForward size={21} />} </a>
                                {isDiscoverOpen && (
                                    <Listbox className='text-lg ml-3' >
                                        <ListboxItem href=''> +one app </ListboxItem>
                                        <ListboxItem href=''> World Of Coca-Cola Attraction </ListboxItem>
                                        <ListboxItem href=''> Offerings </ListboxItem>
                                    </Listbox>
                                )}

                                <a onClick={openImpact} className="flex items-center justify-between w-full"> Impact  {isImpactOpen ? <IoIosArrowDown size={21} /> : <IoIosArrowForward size={21} />}</a>
                                {isImpactOpen && (
                                    <Listbox className='text-lg ml-3' >
                                        <ListboxItem href=''> Social</ListboxItem>
                                        <ListboxItem href=''> Sustainability </ListboxItem>
                                    </Listbox>
                                )}
                                <a href='' > Shop </a>
                            </div>
                            <div className=''>
                                <p className='mt-14 tracking-wider text-md'> Want a personalized experience and access to exclusive content?</p>
                                <div className='flex gap-3 mt-6 text-lg scale-y-90'>
                                    <Button className='bg-black text-white  rounded-3xl w-1/2 max-w-[250px] font-bold h-12'  > Log in </Button>
                                    <Button className='border-black border-2 text-black  rounded-4xl w-1/2 max-w-[250px] font-bold h-12' > Sign Up </Button>
                                </div>
                            </div>
                            <div className="bg-gray-300 h-px w-full m-6"></div>
                            <div className='grid ml-1 font-bold gap-3 mt-1'>
                                <p className="text-sm mb-2 text-gray-400"> SELECT LOCATION </p>
                                <Button className='border-black border-2 text-black text-lg rounded-3xl min-w-[360px] max-w-[500px] font-bold' > <SlLocationPin size={21} /> United States | EN </Button>
                            </div>
                        </ModalBody>
                        <ModalFooter />
                    </ModalContent>
                </Modal>
            </div>
        </nav>
    );
}