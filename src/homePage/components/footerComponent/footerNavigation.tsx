import { IoIosArrowForward } from 'react-icons/io';
import { Listbox, ListboxItem } from "@heroui/react";
import React from "react";
import { motion } from 'framer-motion';

interface SectionProps {
    data: { name: string; link: string }[];
    sectionName: string;
}

export function PcNavigation({ data, sectionName }: SectionProps) {
    return (
        <section>
            <div className="w-auto">
                <p className="flex items-center justify-between text-white mt-10 text-xs opacity-80">{sectionName}</p>
                <div className="text-white leading-9 font-bold mt-3 grid w-auto">
                    {data.map((item: any, index: number) => (
                        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function MobileNavigation({ data, sectionName }: SectionProps) {
    const [isOpen, setOpen] = React.useState(false);

    const open = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <>
            <p onClick={open} className="flex items-center justify-between w-full text-white mt-10 cursor-pointer"> {sectionName}
                <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                    <IoIosArrowForward size={30} />
                </motion.div> </p>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden mt-2"
                >
                    <Listbox className="text-lg ml-5 text-white leading-4 font-bold mt-3">
                        {data.map((item: any, index: number) => (
                            <ListboxItem key={index}>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    {item.name}
                                </a>
                            </ListboxItem>
                        ))}
                    </Listbox>
                </motion.div>
            )}
        </>
    );
}