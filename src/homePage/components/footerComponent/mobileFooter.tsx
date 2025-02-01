import CokeCompanyLogo from '../../../assets/cokeCompanyLogoWhite.svg';
import { VISIT_DATA } from '../../../config/visitData';
import { LEGAL_DATA } from '../../../config/legalData';
import { MobileNavigation } from './footerNavigation';
import { HELP_DATA } from '../../../config/helpData';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { StoreApps } from './socialMedia';
import SocialMedia from './socialMedia';

export default function MobileFooter() {
    return (
        <section className="lg:hidden bg-black w-full absolute mt-15">
            <header className="mx-5">
                <a href={import.meta.env.VITE_LINK_PORTFOLIO} target="_blank" className='flex w-[249px]'>
                    <img src={CokeCompanyLogo} alt="cokeCompanyLogo" className="mt-13 mb-10" />
                </a>
                <div className="bg-white h-px w-full "></div>
            </header>

            <div className='text-3xl font-bold scale-y-95 mx-5'>
                <MobileNavigation data={HELP_DATA} sectionName='Help' />
                <MobileNavigation data={VISIT_DATA} sectionName='Shop & Visit' />
                <MobileNavigation data={LEGAL_DATA} sectionName='Legal' />
            </div>

            <footer className='mx-5'>
                <div className="bg-white h-px w-full mt-10 mb-6"></div>
                <div className='flex gap-4 mb-7'>
                    <SocialMedia Name='X' Icon={BsTwitterX} />
                    <SocialMedia Name='Instagram' Icon={FaInstagram} />
                    <SocialMedia Name='Youtube' Icon={FaYoutube} />
                    <SocialMedia Name='Facebook' Icon={FaFacebookF} />
                </div>
                <StoreApps />
                <p className='text-white text-sm mt-6 mb-15'>
                    © 2025&nbsp; <a href={import.meta.env.VITE_LINK_PORTFOLIO} target="_blank" className="underline"> The Coca-Cola Company </a> . All rights reserved.
                </p>
            </footer>
        </section>
    )
}