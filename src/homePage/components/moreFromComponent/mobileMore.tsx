import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { MobileContentCard } from './contentCard';
import { MoreFromCocaCola } from "../../../config/moreFromCocaColaData.ts";

export default function MobileMore() {

    return (
        <section className="lg:hidden">
            <p className="text-center text-3xl font-bold mt-1 mb-14 scale-y-95 w-full">More from Coca‑Cola®</p>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                    renderBullet: (_index, className) => {
                        return `<span class="${className} custom-bullet" style="background-color: transparent; border: 2px solid black; border-radius: 50%; margin: 4px; transition: all 0.3s ease; background-color: black; width: 20px; height: 20px; border: none;"></span>`;
                    }
                }}
                loop={true}
                className="w-[80%]"
            >
                {MoreFromCocaCola.map((data, index) => (
                    <SwiperSlide key={index}>
                        <MobileContentCard
                            image={data.image}
                            link={data.link}
                            title={data.title || ""}
                            description={data.description || ""}
                            actionLink={data.actionLink || ""}
                            name={data.name}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}