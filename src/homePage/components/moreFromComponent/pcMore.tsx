import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { MoreFromCocaCola } from "../../../config/moreFromCocaColaData.ts";
import { Skeleton } from '@heroui/react';
import { Suspense } from 'react';
import React from 'react';

export default function PcMore() {
    const PcContentCard = React.lazy(() => import("./contentCard").then(module => ({ default: module.PcContentCard }))); 
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
                className="relative pb-10 max-w-[70%]"
            >
                {MoreFromCocaCola.map((data, index) => (
                    <SwiperSlide key={index}>
                        <Suspense fallback={<Skeleton className="w-full h-[180px] rounded-t-2xl" />}>
                            <PcContentCard
                                image={data.image}
                                link={data.link}
                                title={data.title || ""}
                                description={data.description || ""}
                                actionLink={data.actionLink || ""}
                                name={data.name}
                            />
                        </Suspense>
                    </SwiperSlide>

                ))}
            </Swiper>
        </section>
    )
}