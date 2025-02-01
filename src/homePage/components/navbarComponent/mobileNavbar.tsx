import CokeCompanyLogo from '../../../assets/cokeCompanyLogo.svg';
import { Modal, useDisclosure } from "@heroui/react"
import { FiMenu } from "react-icons/fi";
import MobileModal from "./mobileModal";
import React from "react";

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
                <a href={import.meta.env.VITE_LINK_PORTFOLIO} target="_blank">
                    <img src={CokeCompanyLogo} alt="Coke Company Logo" />
                </a>

                <FiMenu className="ml-auto flex justify-end mt-2 mr-10" id='Menu' type='button' onClick={() => handleOpen(size)} size={24} />

                <Modal className='bg-white flex items-center justify-center fixed inset-0 font-KometaBold' isOpen={isOpen} size={"full"} onClose={onClose} hideCloseButton={true} >
                    <MobileModal onClose={onClose} />
                </Modal>
            </div>
        </nav>
    );
}