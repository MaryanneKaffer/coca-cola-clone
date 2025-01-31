import { useEffect, useState } from "react";
import MobileFeatures from "./featuresComponent/mobileFeatures";
import PcFeatures from "./featuresComponent/pcFeatures";

export default function Features() {
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
      {isMobile ? <MobileFeatures/> :  <PcFeatures />}
    </>
  )
}