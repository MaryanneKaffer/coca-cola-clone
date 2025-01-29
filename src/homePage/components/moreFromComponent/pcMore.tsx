import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { PcContentCard } from './contentCard';
import { MoreFromCocaCola } from "../../../config/moreFromCocaColaData.ts";

export default function PcMore() {
    const firstCardData = MoreFromCocaCola[0];
    const secondCardData = MoreFromCocaCola[1];
    const thirdCardData = MoreFromCocaCola[2];
    const fourthCardData = MoreFromCocaCola[3];
    const fifthCardData = MoreFromCocaCola[4];

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
                className="relative shadow-lg pb-10 max-w-[70%]"
            >
                <SwiperSlide >
                    <PcContentCard
                        image={firstCardData.image}
                        link={firstCardData.link}
                        title={firstCardData.title || ""}
                        description={firstCardData.description || ""}
                        actionLink={firstCardData.actionLink || ""}
                        name={firstCardData.name}
                    />
                </SwiperSlide>

                <SwiperSlide >
                    <PcContentCard
                        image={secondCardData.image}
                        link={secondCardData.link}
                        title={secondCardData.title || ""}
                        description={secondCardData.description || ""}
                        actionLink={secondCardData.actionLink || ""}
                        name={secondCardData.name}
                    />
                </SwiperSlide>

                <SwiperSlide >
                    <PcContentCard
                        image={thirdCardData.image}
                        link={thirdCardData.link}
                        title={thirdCardData.title || ""}
                        description={thirdCardData.description || ""}
                        actionLink={thirdCardData.actionLink || ""}
                        name={thirdCardData.name}
                    />
                </SwiperSlide>

                <SwiperSlide >
                    <PcContentCard
                        image={fourthCardData.image}
                        link={fourthCardData.link}
                        title={fourthCardData.title || ""}
                        description={fourthCardData.description || ""}
                        actionLink={fourthCardData.actionLink || ""}
                        name={fourthCardData.name}
                    />
                </SwiperSlide>

                <SwiperSlide >
                    <PcContentCard
                        image={fifthCardData.image}
                        link={fifthCardData.link}
                        title={fifthCardData.title || ""}
                        description={fifthCardData.description || ""}
                        actionLink={fifthCardData.actionLink || ""}
                        name={fifthCardData.name}
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}