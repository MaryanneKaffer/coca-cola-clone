import { useEffect, useState } from "react";
import MobileSwiper from "./swiperComponent/mobileSwiper";
import PcSwiper from "./swiperComponent/pcSwiper";

export default function Swiper() {
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
      {isMobile ? <MobileSwiper/> :  <PcSwiper/>}
    </>
  )
}