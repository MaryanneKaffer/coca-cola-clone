import { IoIosArrowForward } from 'react-icons/io';
import { motion } from 'framer-motion';
import CokeCompanyLogo from '../../../assets/cokeCompanyLogo.svg';
import { Tooltip, Listbox, ListboxItem } from "@heroui/react";
import discoverData from "../../../config/data/discoverData.ts";
import { ImpactData } from "../../../config/data/impactData.ts";
import { useState } from 'react';
import Profile from "./profile";

export default function PcNavbar() {
    const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
    const [isImpactOpen, setIsImpactOpen] = useState(false);

    return (
        <nav className='hidden lg:block'>
            <div className="h-[80px] flex items-center gap-12 font-bold text-md mx-60">
                <a href={import.meta.env.VITE_LINK_PORTFOLIO} target="_blank">
                    <img src={CokeCompanyLogo} alt="Coke Company Logo" className='items-center' />
                </a>

                <a href={import.meta.env.VITE_LINK_PORTFOLIO} target="_blank" className='ml-4 relative after:block after:absolute after:left-0 after:bottom-[-25px] after:h-[4px] after:w-0 after:bg-black hover:after:w-[53px]'>  Brands </a>

                <Tooltip color="secondary" content={(
                    <Listbox className='text-sm leading-3 bg-white w-[280px] h-[120px] p-6 mt-4'>
                        {discoverData.map((item: any, index: number) => (
                            <ListboxItem key={index}>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    {item.title}
                                </a>
                            </ListboxItem>
                        ))}
                    </Listbox>
                )} placement={"bottom-start"}>
                    <p className='flex items-center gap-1 relative after:block after:absolute after:left-0 after:bottom-[-25px] after:h-[4px] after:w-0 after:bg-black hover:after:w-[68px] cursor-pointer'
                        onMouseEnter={() => setIsDiscoverOpen(true)}
                        onMouseLeave={() => setIsDiscoverOpen(false)}
                    >
                        Discover
                        <motion.div
                            animate={{ rotate: isDiscoverOpen ? 90 : 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            <IoIosArrowForward size={15} />
                        </motion.div>
                    </p>
                </Tooltip>

                <Tooltip color="secondary" content={(
                    <Listbox className='text-sm leading-3 bg-white w-[180px] h-[100px] p-6 mt-4'>
                        {ImpactData.map((item: any, index: number) => (
                            <ListboxItem key={index}>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    {item.name}
                                </a>
                            </ListboxItem>
                        ))}
                    </Listbox>
                )} placement={"bottom-start"}>
                    <p className='flex items-center gap-1 relative after:block after:absolute after:left-0 after:bottom-[-25px] after:h-[4px] after:w-0 after:bg-black hover:after:w-[55px] cursor-pointer'
                        onMouseEnter={() => setIsImpactOpen(true)}
                        onMouseLeave={() => setIsImpactOpen(false)}
                    >
                        Impact
                        <motion.div
                            animate={{ rotate: isImpactOpen ? 90 : 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            <IoIosArrowForward size={15} />
                        </motion.div>
                    </p>
                </Tooltip>

                <a href={import.meta.env.VITE_LINK_PORTFOLIO} target="_blank" className='relative after:block after:absolute after:left-0 after:bottom-[-25px] after:h-[4px] after:w-0 after:bg-black hover:after:w-[40px]'> Shop </a>

                <Profile />
            </div>
        </nav>
    );
}
