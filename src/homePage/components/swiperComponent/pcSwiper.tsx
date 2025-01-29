import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { PcSlideContent } from './slideContent';
import { SwiperDataPc } from '../../../config/swiperData';

export default function PcSwiper() {
    const firstSlideData = SwiperDataPc[0];
    const secondSlideData = SwiperDataPc[1];
    return (
        <section className="max-w-[1350px] max-h-[2000px] mx-auto px-4 hidden lg:block mt-7">
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                    renderBullet: (_index, className) => {
                        return `<span class="${className} custom-bullet" style="background-color: transparent; border: 2px solid black; border-radius: 50%; margin: 0 4px; transition: all 0.3s ease; background-color: black; width: 20px; height: 20px; border: none;"></span>`;
                    }
                }}
                className="h-[680px]"
            >
                <SwiperSlide>
                    <PcSlideContent
                        image={firstSlideData.image}
                        link={firstSlideData.link}
                        title={firstSlideData.title || ""}
                        description={firstSlideData.description || ""}
                        button={firstSlideData.button || ""}
                        name={firstSlideData.name}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <PcSlideContent
                        image={secondSlideData.image}
                        link={secondSlideData.link}
                        title={secondSlideData.title || ""}
                        description={secondSlideData.description || ""}
                        button={secondSlideData.button || ""}
                        name={secondSlideData.name}
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}