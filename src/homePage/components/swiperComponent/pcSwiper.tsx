import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Swiper1 from '../../../assets/swiper1pc.webp';
import Swiper2 from '../../../assets/swiper2pc.webp';
import { Button } from "@heroui/react";

export default function PcSwiper() {
    return (
        <div className="max-w-[1350px] max-h-[2000px] mx-auto px-4 hidden lg:block mt-7">
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
                loop={true}
                className="h-[680px]"
            >
                <SwiperSlide>
                    <div className="flex items-center ">

                        <img
                            src={Swiper1}
                            alt="Coca Cola Merch"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex items-center justify-between bg-[#6d0a0a] text-white h-[620px] rounded-4xl">
                        <div className="absolute m-25 w-150 scale-y-95">
                            <h2 className="text-5xl font-bold mb-4">Take A Sip Down Memory Lane!</h2>
                            <p className="text-xl mb-6 leading-6">
                                Celebrate generations of Coca-Cola products with some vintage and timeless gear. Enter today for your chance to win some awesome limited merch!
                            </p>
                            <Button className="bg-white text-black font-bold py-3 px-6 rounded-full shadow-md w-70 text-lg p-6">
                                ENTER NOW
                            </Button>
                        </div>
                        <img
                            src={Swiper2}
                            alt="Coca Cola Merch"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}