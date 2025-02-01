import { SwiperDataPc } from '../../../config/swiperData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PcSlideContent } from './slideContent';
import { Pagination } from 'swiper/modules';
import { Skeleton } from '@heroui/react';
import { Suspense } from 'react';

export default function PcSwiper() {
    return (
        <section className="max-w-[1350px] mx-auto hidden lg:block mt-7">
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
                className="h-[630px]"
            >
                {SwiperDataPc.map((data, index) => (
                    <SwiperSlide key={index}>
                        <Suspense fallback={<Skeleton className="w-full h-full rounded-2xl" />}>
                            <PcSlideContent
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