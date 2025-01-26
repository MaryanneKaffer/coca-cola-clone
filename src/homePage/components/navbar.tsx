import MobileNavbar from "./navbarComponent/mobileNavbar";
import PcNavbar from "./navbarComponent/pcNavbar";
export default function Navbar(){
    return(
       <>
       <PcNavbar/>
       <MobileNavbar/>
       </>
    )
}