import { useState, useEffect } from "react";
import MobileFooter from "./footerComponent/mobileFooter";
import PcFooter from "./footerComponent/pcFooter";

export default function Footer() {
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
      {isMobile ? <MobileFooter /> : <PcFooter />}
    </>
  );
}