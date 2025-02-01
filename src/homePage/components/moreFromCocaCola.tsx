
import { useEffect, useState } from "react";
import MobileMore from "./moreFromComponent/mobileMore";
import PcMore from "./moreFromComponent/pcMore";

export default function MoreFromCocaCola() {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {isMobile ? <MobileMore /> : <PcMore />}
        </>
    );
}