import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Button } from "@heroui/react";
import Swiper1 from '../../../assets/swiper1mobile.webp';
import Swiper2 from '../../../assets/swiper2mobile.jpg';

export default function MobileSwiper() {
    return (
        <div className="mx-auto px-4 lg:hidden mt-7">
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
                className="relative shadow-lg "
            >
                <SwiperSlide>
                    <div className="transition-all duration-500 transform hover:scale-110">
                        <img
                            src={Swiper1}
                            alt="Coca Cola Merch"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex text-white rounded-4xl relative transition-all duration-500 transform hover:scale-110">
                        <div className="absolute left-0 right-0 top-0 text-center p-10">
                            <h2 className="text-4xl font-bold mb-4">Take A Sip Down Memory Lane!</h2>
                            <p className="text-xl mb-7 leading-6 mx-4">
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