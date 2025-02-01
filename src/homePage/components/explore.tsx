import { useState, useEffect } from "react";
import MobileExplore from "./exploreComponent/mobileExplore";
import PcExplore from "./exploreComponent/pcExplore";

export default function Explore() {
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
      {isMobile ? <MobileExplore /> : <PcExplore />}
    </>
  );
}
