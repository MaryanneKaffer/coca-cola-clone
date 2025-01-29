import CokeCompanyLogo from '../../../assets/cokeCompanyLogoWhite.svg'
import { LEGAL_DATA } from '../../../config/legalData.ts';
import { VISIT_DATA } from '../../../config/visitData.ts';
import { HELP_DATA } from '../../../config/helpData.ts';
import { FaFacebookF } from "react-icons/fa6";
import SocialMedia from './socialMedia.tsx';
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { PcNavigation } from './footerNavigation.tsx';

export default function PcFooter() {
    return (
        <section className="hidden lg:block bg-black w-full absolute mt-15">
            <header className="mx-[20%]">
                <a href={import.meta.env.VITE_LINK_PORTFOLIO} target="_blank" className='flex w-[249px]'>
                    <img src={CokeCompanyLogo} alt="cokeCompanyLogo" className="mt-13 mb-10" />
                </a>
                <div className="bg-white h-px w-full "></div>
            </header>

            <div className="flex justify-between items-start mx-[20%]">
                <div className='flex gap-6'>
                    <PcNavigation data={HELP_DATA} sectionName={'HELP'} />
                    <PcNavigation data={VISIT_DATA} sectionName={'SHOP & VISIT'} />
                    <PcNavigation data={LEGAL_DATA} sectionName={'LEGAL'} />
                </div>
                <div className='flex gap-4 mt-10'>
                    <SocialMedia Name='X' Icon={BsTwitterX} />
                    <SocialMedia Name='Instagram' Icon={FaInstagram} />
                    <SocialMedia Name='Youtube' Icon={FaYoutube} />
                    <SocialMedia Name='Facebook' Icon={FaFacebookF} />
                </div>
            </div>

            <footer className='mx-[20%]'>
                <div className="bg-white h-px w-full mt-10 mb-6"></div>
                <p className='text-white text-sm mt-6 mb-15 flex justify-end'>
                    © 2025&nbsp; <a href={import.meta.env.VITE_LINK_PORTFOLIO} target="_blank" className="underline"> The Coca-Cola Company </a> . All rights reserved.
                </p>
            </footer>
        </section>
    )
}