import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { MobileSlideContent } from './slideContent';
import { SwiperDataMobile } from '../../../config/swiperData';

export default function MobileSwiper() {
    const firstSlideData = SwiperDataMobile[0];
    const secondSlideData = SwiperDataMobile[1];

    return (
        <section className="mx-auto px-4 lg:hidden mt-7">
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
                className="relative shadow-lg "
            >
                <SwiperSlide>
                    <MobileSlideContent
                        image={firstSlideData.image}
                        link={firstSlideData.link}
                        title={firstSlideData.title || ""}
                        description={firstSlideData.description || ""}
                        button={firstSlideData.button || ""}
                        name={firstSlideData.name}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <MobileSlideContent
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