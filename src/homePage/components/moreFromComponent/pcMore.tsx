import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { PcContentCard } from './contentCard';
import { MoreFromCocaCola } from "../../../config/moreFromCocaColaData.ts";

export default function PcMore() {

    return (
        <section className="hidden lg:block w-full">
            <p className="text-center text-4xl font-bold -mt-100 mb-14 scale-y-95">More from Coca‑Cola®</p>
            <Swiper
                modules={[Pagination]}
                slidesPerView={3}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                    renderBullet: (_index, className) => {
                        return `<span class="${className} custom-bullet" style="background-color: transparent; border: 2px solid black; border-radius: 50%; margin: 4px; transition: all 0.3s ease; background-color: black; width: 20px; height: 20px; border: none;"></span>`;
                    }
                }}
                loop={true}
                className="relative pb-10 max-w-[70%]"
            >
                {MoreFromCocaCola.map((data, index) => (
                    <SwiperSlide key={index}>
                        <PcContentCard
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