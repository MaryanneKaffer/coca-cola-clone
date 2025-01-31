import { useState, useEffect } from "react";
import MobileFooter from "./footerComponent/mobileFooter";
import PcFooter from "./footerComponent/pcFooter";

export default function Footer() {
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
      {isMobile ? <MobileFooter/> :  <PcFooter />}
    </>
  )
}