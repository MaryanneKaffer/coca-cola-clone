import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { MobileSlideContent } from './slideContent';
import { SwiperDataMobile } from '../../../config/swiperData';

export default function MobileSwiper() {
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
                className="relative shadow-lg w-[90%] mx-auto"
            >
                {SwiperDataMobile.map((data, index) => (
                    <SwiperSlide key={index}>
                        <MobileSlideContent
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