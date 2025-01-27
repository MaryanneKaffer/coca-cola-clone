import CokeCompanyLogo from '../../../assets/cokeCompanyLogoWhite.svg'
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { LEGAL_DATA } from '../../../config/data.ts';

export default function PcFooter() {   

    return (
        <div className="hidden lg:block bg-black w-full absolute mt-15">
            <div className="mx-[42vh] relative">
                <img src={CokeCompanyLogo} alt="cokeCompanyLogo" className="mt-13 mb-10" />
                <div className="bg-white h-px w-full "></div>
                <div className='text-md font-bold scale-y-95'>
                    <div className='flex gap-6'>
                        <div className="w-[200px]">
                            <p className="flex items-center justify-between text-white mt-10 text-xs opacity-80"> HELP </p>
                            <div className='text-white leading-9 font-bold mt-3 grid'>
                                <a href='#'> FAQs </a>
                                <a href='#'> Sitemap </a>
                                <a href='#'> Contact Us </a>
                                <a href='#'> Order Status </a>
                                <a href='#'> Shipping </a>
                            </div>
                        </div>
                        <div className="w-[250px]">
                            <a className="flex items-center justify-between text-white mt-10 text-xs opacity-80"> Shop & Visit </a>
                            <div className='text-white leading-9 font-bold mt-3 grid'>
                                <a href='#'> Coca-Cola Store Online </a>
                                <a href='#'> Coca-Cola Int'l Store Online </a>
                                <a href='#'> Coca-Cola Store Atlanta </a>
                                <a href='#'> Coca-Cola Store Orlando </a>
                                <a href='#'> Coca-Cola Store Las Vegas </a>
                                <a href='#'> World of Coca-Cola Attraction </a>
                                <a href='#'> Android App </a>
                                <a href='#'> Apple App </a>
                            </div>
                        </div>
                        <div className="w-[250px]">
                            <a className="flex items-center justify-between text-white mt-10 text-xs opacity-80"> Legal </a>
                            <div className='text-white leading-9 font-bold mt-3 grid'>
                                {LEGAL_DATA.map((data, index) => (
                                    <a key={index} href={data.link} target="_blank" rel="noopener noreferrer" > {data.name} </a>
                                ))}
                            </div>
                        </div>
                        <div className='flex gap-4 ml-50 mt-10'>
                            <div className="flex justify-center items-center w-8 h-8 bg-transparent border-2 border-white rounded-full">
                                <a href='#'>
                                    <BsTwitterX size={15} className='text-white' />
                                </a>
                            </div>
                            <div className="flex justify-center items-center w-8 h-8 bg-transparent border-2 border-white rounded-full">
                                <a href='#'>
                                    <FaInstagram size={18} className='text-white' />
                                </a>
                            </div>
                            <div className="flex justify-center items-center w-8 h-8 bg-transparent border-2 border-white rounded-full">
                                <a href='#'>
                                    <FaYoutube size={16} className='text-white' />
                                </a>
                            </div>
                            <div className="flex justify-center items-center w-8 h-8 bg-transparent border-2 border-white rounded-full">
                                <a href='#'>
                                    <FaFacebookF size={15} className='text-white' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white h-px w-full mt-10 mb-6"></div>


            </div>
            <p className='text-white text-sm mt-6 mb-15 flex mx-[42vh] justify-end'> © 2025 <a href='#' className="underline"> The Coca-Cola Company </a> . All rights reserved. </p>
        </div>

    )
}