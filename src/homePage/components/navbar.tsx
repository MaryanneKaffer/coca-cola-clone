import { useState, useEffect } from "react";
import MobileNavbar from "./navbarComponent/mobileNavbar";
import PcNavbar from "./navbarComponent/pcNavbar";

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1024px)");
        setIsMobile(mediaQuery.matches);

        const handleResize = () => setIsMobile(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleResize);

        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);
    return (
        <>
            {isMobile ? <MobileNavbar /> : <PcNavbar />}
        </>
    )
}