import { SwiperDataMobile } from '../../../config/data/swiperData';
import { MobileSlideContent } from './slideContent';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Skeleton } from '@heroui/react';
import { Suspense } from 'react';

export default function MobileSwiper() {
    return (
        <section className="lg:hidden mt-7">
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
                className="w-[80%]"
            >
                {SwiperDataMobile.map((data, index) => (
                    <SwiperSlide key={index}>
                        <Suspense fallback={<Skeleton className="w-full h-full rounded-2xl" />}>
                            <MobileSlideContent
                                image={data.image}
                                link={data.link}
                                title={data.title || ""}
                                description={data.description || ""}
                                button={data.button || ""}
                                name={data.name}
                            />
                        </Suspense>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}