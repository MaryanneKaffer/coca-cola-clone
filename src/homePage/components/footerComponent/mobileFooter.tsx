import { Listbox, ListboxItem } from '@heroui/react';
import React from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import CokeCompanyLogo from '../../../assets/cokeCompanyLogoWhite.svg'
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import GooglePlay from '../../../assets/googlePlay.png';
import AppStore from '../../../assets/appStore.png';
export default function MobileFooter() {
    const [isHelpOpen, setHelpOpen] = React.useState(false);
    const [isShopOpen, setShopOpen] = React.useState(false);
    const [isLegalOpen, setLegalOpen] = React.useState(false);

    const openHelp = () => {
        setHelpOpen((prevState) => !prevState);
    };

    const openShop = () => {
        setShopOpen((prevState) => !prevState);
    };

    const openLegal = () => {
        setLegalOpen((prevState) => !prevState);
    };

    return (
        <div className="lg:hidden bg-black w-full absolute mt-15">
            <div className="mx-5">
                <img src={CokeCompanyLogo} alt="cokeCompanyLogo" className="mt-13 mb-10" />
                <div className="bg-white h-px w-full "></div>
                <div className='text-3xl font-bold scale-y-95'>
                    <a onClick={openHelp} className="flex items-center justify-between w-full text-white mt-10"> Help {isHelpOpen ? <IoIosArrowDown size={30} /> : <IoIosArrowForward size={30} />} </a>
                    {isHelpOpen && (
                        <Listbox className='text-lg ml-5 text-white leading-4 font-bold mt-3' >
                            <ListboxItem href='#'> FAQs </ListboxItem>
                            <ListboxItem href='#'> Sitemap </ListboxItem>
                            <ListboxItem href='#'> Contact Us </ListboxItem>
                            <ListboxItem href='#'> Order Status </ListboxItem>
                            <ListboxItem href='#'> Shipping </ListboxItem>
                        </Listbox>
                    )}
                    <a onClick={openShop} className="flex items-center justify-between w-full text-white mt-10"> Shop & Visit {isShopOpen ? <IoIosArrowDown size={30} /> : <IoIosArrowForward size={30} />} </a>
                    {isShopOpen && (
                        <Listbox className='text-lg ml-5 text-white leading-4 font-bold mt-3' >
                            <ListboxItem href='#'> Coca-Cola Store Online </ListboxItem>
                            <ListboxItem href='#'> Coca-Cola Int'l Store Online </ListboxItem>
                            <ListboxItem href='#'> Coca-Cola Store Atlanta </ListboxItem>
                            <ListboxItem href='#'> Coca-Cola Store Orlando </ListboxItem>
                            <ListboxItem href='#'> Coca-Cola Store Las Vegas </ListboxItem>
                            <ListboxItem href='#'> World of Coca-Cola Attraction </ListboxItem>
                            <ListboxItem href='#'> Android App </ListboxItem>
                            <ListboxItem href='#'> Apple App </ListboxItem>
                        </Listbox>
                    )}
                    <a onClick={openLegal} className="flex items-center justify-between w-full text-white mt-10"> Legal {isLegalOpen ? <IoIosArrowDown size={30} /> : <IoIosArrowForward size={30} />} </a>
                    {isLegalOpen && (
                        <Listbox className='text-lg ml-5 text-white leading-4 font-bold mt-3' >
                            <ListboxItem href='#'> Company </ListboxItem>
                            <ListboxItem href='#'> Careers </ListboxItem>
                            <ListboxItem href='#'> Privacy Policy </ListboxItem>
                            <ListboxItem href='#'> Cookies Policy </ListboxItem>
                            <ListboxItem href='#'> All Promotion Official Rules </ListboxItem>
                            <ListboxItem href='#'> Notice At Collection </ListboxItem>
                            <ListboxItem href='#'> Do Not Sell or Share My Personal Information </ListboxItem>
                            <ListboxItem href='#'> Terms of Service </ListboxItem>
                            <ListboxItem href='#'> Cookie Settings </ListboxItem>
                            <ListboxItem href='#'> Consumer Health Data Privacy Policy </ListboxItem>
                        </Listbox>
                    )}
                </div>
                <div className="bg-white h-px w-full mt-10 mb-6"></div>
                <div className='flex gap-4'>
                    <div className="flex justify-center items-center w-8 h-8 bg-transparent border-2 border-white rounded-full">
                        <BsTwitterX size={15} className='text-white' />
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 bg-transparent border-2 border-white rounded-full">
                        <FaInstagram size={18} className='text-white' />
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 bg-transparent border-2 border-white rounded-full">
                        <FaYoutube size={16} className='text-white' />
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 bg-transparent border-2 border-white rounded-full">
                        <FaFacebookF size={15} className='text-white' />
                    </div>
                </div>
                <div className='flex mt-8 gap-3'>
                    <a href="#">
                        <img src={AppStore} className='h-[5vh] w-[18vh]' />
                    </a>
                    <a href="#">
                        <img src={GooglePlay} className='h-[5vh] w-[18vh]' />
                    </a>
                </div>
                <p className='text-white text-sm mt-6 mb-15'> © 2025 <span className="underline"> The Coca-Cola Company </span> . All rights reserved. </p>
            </div>
        </div>
    )
}