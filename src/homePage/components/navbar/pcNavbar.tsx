import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import CokeCompanyLogo from '../../../assets/cokeCompanyLogo.svg';
import { Tooltip, Listbox, ListboxItem } from "@heroui/react";
import { GoPerson } from "react-icons/go";

export default function PcNavbar() {
    const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
    const [isImpactOpen, setIsImpactOpen] = useState(false);

    return (
        <header className='hidden sm:block'>
            <div className="max-w-[1440px] mx-auto px-21 h-[80px] flex items-center gap-10 font-bold text-md ">
                <img src={CokeCompanyLogo} alt="Coke Company Logo" className='items-center' />

                <a href='#' className='ml-4'> Brands </a>

                <Tooltip
                    color="secondary"
                    content={(
                        <Listbox className='text-sm'>
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
                        <Listbox className='text-sm'>
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

                <GoPerson size={25} className='ml-auto' />
            </div>
        </header>
    );
}
