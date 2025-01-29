import { Tooltip, Listbox, ListboxItem, Button } from "@heroui/react";
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import CokeCompanyLogo from '../../../assets/cokeCompanyLogo.svg';
import { GoPerson } from "react-icons/go";
import { useState } from 'react';

export default function PcNavbar() {
    const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
    const [isImpactOpen, setIsImpactOpen] = useState(false);

    return (
        <nav className='hidden lg:block '>
            <div className="max-w-[1440px] mx-auto px-21 h-[80px] flex items-center gap-12 font-bold text-md ">
                <img src={CokeCompanyLogo} alt="Coke Company Logo" className='items-center' />

                <a href='#' className='ml-4 relative after:block after:absolute after:left-0 after:bottom-[-25px] after:h-[4px] after:w-0 after:bg-black hover:after:w-[53px]'>  Brands </a>

                <Tooltip color="secondary" content={(
                    <Listbox className='text-sm leading-3 bg-white w-[280px] h-[120px] p-6 mt-4'>
                        <ListboxItem href=''> +one app </ListboxItem>
                        <ListboxItem href=''> World Of Coca-Cola Attraction </ListboxItem>
                        <ListboxItem href=''> Offerings </ListboxItem>
                    </Listbox>
                )} placement={"bottom-start"}>
                    <a href='#' className='flex items-center gap-1 relative after:block after:absolute after:left-0 after:bottom-[-25px] after:h-[4px] after:w-0 after:bg-black hover:after:w-[68px]'
                        onMouseEnter={() => setIsDiscoverOpen(true)}
                        onMouseLeave={() => setIsDiscoverOpen(false)}
                    >
                        Discover {isDiscoverOpen ? <IoIosArrowDown size={15} /> : <IoIosArrowForward size={15} />}
                    </a>
                </Tooltip>

                <Tooltip color="secondary" content={(
                    <Listbox className='text-sm leading-3 bg-white w-[180px] h-[100px] p-6 mt-4'>
                        <ListboxItem href=''> Social </ListboxItem>
                        <ListboxItem href=''> Sustainability </ListboxItem>
                    </Listbox>
                )} placement={"bottom-start"}>
                    <a href='#' className='flex items-center gap-1 relative after:block after:absolute after:left-0 after:bottom-[-25px] after:h-[4px] after:w-0 after:bg-black hover:after:w-[55px]'
                        onMouseEnter={() => setIsImpactOpen(true)}
                        onMouseLeave={() => setIsImpactOpen(false)}
                    >
                        Impact {isImpactOpen ? <IoIosArrowDown size={15} /> : <IoIosArrowForward size={15} />}
                    </a>
                </Tooltip>

                <a href='#' className='relative after:block after:absolute after:left-0 after:bottom-[-25px] after:h-[4px] after:w-0 after:bg-black hover:after:w-[40px]'> Shop </a>

                <Tooltip color="secondary" content={(
                    <Listbox className='text-sm bg-white w-[370px] min-h-[100px] p-6' >
                        <ListboxItem>
                            <div className="flex flex-wrap whitespace-normal break-words max-w-full">Want a personalized experience and access to exclusive content?</div> </ListboxItem>
                        <ListboxItem>
                            <div className="flex space-x-2 text-lg ">
                                <Button className='bg-black text-white rounded-3xl px-4 py-2 w-[150px] font-bold'>
                                    Log in
                                </Button>
                                <Button className='border-black border-2 text-black rounded-3xl px-4 py-2 w-[150px] font-bold'>
                                    Sign Up
                                </Button>
                            </div>
                        </ListboxItem>
                    </Listbox>
                )} placement={"bottom-end"}>

                    <div className="ml-auto cursor-pointer">
                        <GoPerson size={25} className='flex items-center gap-1' />
                    </div>
                </Tooltip>
            </div>
        </nav>
    );
}