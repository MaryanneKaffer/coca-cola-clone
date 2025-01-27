import Features from "./components/features";
import Navbar from "./components/navbar";
import Swiper from "./components/swiper";
import MoreFromCocaCola from "./components/moreFromCocaCola";
import Explore from "./components/explore";
import Footer from "./components/footer";

export default function HomePage() {
    return (
        <>
        <Navbar />
        <Swiper />
        <Features />
        <MoreFromCocaCola />
        <Explore />
        <Footer />
        </>
    );
}