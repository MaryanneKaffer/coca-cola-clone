import MoreFromCocaCola from "./components/moreFromCocaCola";
import Features from "./components/features";
import Explore from "./components/explore";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Swiper from "./components/swiper";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Swiper />
            <section>
                <Features />
                <MoreFromCocaCola />
            </section>
            <Explore />
            <Footer />
        </>
    );
}