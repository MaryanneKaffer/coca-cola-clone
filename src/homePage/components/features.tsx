import { useEffect, useState } from "react";
import MobileFeatures from "./featuresComponent/mobileFeatures";
import PcFeatures from "./featuresComponent/pcFeatures";

export default function Features() {
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
      {isMobile ? <MobileFeatures /> : <PcFeatures />}
    </>
  );
}