
import { useEffect, useState } from "react";
import MobileMore from "./moreFromComponent/mobileMore";
import PcMore from "./moreFromComponent/pcMore";

export default function MoreFromCocaCola() {
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
            {isMobile ? <MobileMore /> : <PcMore />}
        </>
    )
}