import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { PcSlideContent } from './slideContent';
import { SwiperDataPc } from '../../../config/swiperData';

export default function PcSwiper() {
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
                {SwiperDataPc.map((data, index) => (
                    <SwiperSlide key={index}>
                        <PcSlideContent
                            image={data.image}
                            link={data.link}
                            title={data.title || ""}
                            description={data.description || ""}
                            button={data.button || ""}
                            name={data.name}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}