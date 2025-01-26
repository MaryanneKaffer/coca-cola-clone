import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import CokeCompanyLogo from '../../../assets/cokeCompanyLogo.svg';
import { Tooltip, Listbox, ListboxItem, Button } from "@heroui/react";
import { GoPerson } from "react-icons/go";

export default function PcNavbar() {
    const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
    const [isImpactOpen, setIsImpactOpen] = useState(false);

    return (
        <header className='hidden lg:block'>
            <div className="max-w-[1440px] mx-auto px-21 h-[80px] flex items-center gap-10 font-bold text-md">
                <img src={CokeCompanyLogo} alt="Coke Company Logo" className='items-center' />

                <a href='#' className='ml-4'> Brands </a>

                <Tooltip
                    color="secondary"
                    content={(
                        <Listbox className='text-sm leading-3'>
                            <ListboxItem href=''> +one app </ListboxItem>
                            <ListboxItem href=''> World Of Coca-Cola Attraction </ListboxItem>
                            <ListboxItem href=''> Offerings </ListboxItem>
                        </Listbox>
                    )}
                    placement={"bottom-start"}
                >
                    <a
                        href='#'
                        className='flex items-center gap-1'
                        onMouseEnter={() => setIsDiscoverOpen(true)}
                        onMouseLeave={() => setIsDiscoverOpen(false)}
                    >
                        Discover {isDiscoverOpen ? <IoIosArrowDown size={15} /> : <IoIosArrowForward size={15} />}
                    </a>
                </Tooltip>

                <Tooltip
                    color="secondary"
                    content={(
                        <Listbox className='text-sm leading-3'>
                            <ListboxItem href=''> Social </ListboxItem>
                            <ListboxItem href=''> Sustainability </ListboxItem>
                        </Listbox>
                    )}
                    placement={"bottom-start"}
                >
                    <a
                        href='#'
                        className='flex items-center gap-1'
                        onMouseEnter={() => setIsImpactOpen(true)}
                        onMouseLeave={() => setIsImpactOpen(false)}
                    >
                        Impact {isImpactOpen ? <IoIosArrowDown size={15} /> : <IoIosArrowForward size={15} />}
                    </a>
                </Tooltip>

                <a href='#' className=''> Shop </a>

                <Tooltip
                    color="secondary"
                    content={(
                        <Listbox className='text-sm'>
                            <ListboxItem> Want a personalized experience and access to exclusive content? </ListboxItem>
                            <ListboxItem>
                                <div className="flex space-x-2">
                                    <Button className='bg-black text-white rounded-3xl font-bold px-4 py-2'>
                                        Log in
                                    </Button>
                                    <Button className='border-black border-2 text-black rounded-3xl font-bold px-4 py-2'>
                                        Sign Up
                                    </Button>
                                </div>
                            </ListboxItem>
                        </Listbox>
                    )}
                    placement={"bottom-start"}
                >
                    <Button className="ml-auto">
                        <GoPerson size={25} className='flex items-center gap-1' href='#' />
                    </Button>
                </Tooltip>

            </div>
        </header>
    );
}
