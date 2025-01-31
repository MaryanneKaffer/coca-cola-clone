import { useState, useEffect } from "react";
import MobileExplore from "./exploreComponent/mobileExplore";
import PcExplore from "./exploreComponent/pcExplore";

export default function Explore() {
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
      {isMobile ? <MobileExplore /> : <PcExplore />}
    </>
  );
}
