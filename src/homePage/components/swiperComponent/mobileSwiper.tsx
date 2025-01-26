import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Slide1 from '../../../assets/Slide1.webp';
import Slide2 from '../../../assets/Slide2.webp';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


export default function MobileSwiper() {
    return (
        <div className='mx-10'>
            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                effect="fade"
                loop={true}
            >
                <SwiperSlide className='flex justify-center items-center w-[326px] h-[537px]'>
                    <img
                        className="rounded-2xl w-[100%] max-w-[400px] h-auto md:w-[50%] lg:w-[40%] xl:w-[30%] object-cover mx-auto"
                        src={Slide1}
                        alt="Slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center w-[326px] h-[537px]'>
                    <img
                        className="rounded-2xl w-[80%] max-w-[400px] h-[528px] md:w-[50%] lg:w-[40%] xl:w-[30%] object-cover mx-auto"
                        src={Slide2}
                        alt="Slide 2"
                    />
                </SwiperSlide>


            </Swiper>
        </div>
    );
}