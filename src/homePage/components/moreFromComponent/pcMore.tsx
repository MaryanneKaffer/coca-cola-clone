import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@heroui/react";
import plusOneApp from '../../../assets/+oneApp.webp';
import WorldOfCocaCola from '../../../assets/worldOfCocaCola.webp';
import { IoArrowForward } from "react-icons/io5";
import RefreshingFilms from '../../../assets/refreshingFilms.webp';
import Vending from '../../../assets/vending.webp';
import DrinkUp from '../../../assets/drinkUp.webp';
export default function PcMore() {
    return (
        <div className="hidden lg:block w-full">
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
                loop={true}
                className="relative shadow-lg pb-10 max-w-[70%]"
            >
                <SwiperSlide >
                    <div className="flex justify-center ">
                        <Card className="rounded-2xl">
                            <CardHeader className="flex">
                                <Image
                                    src={plusOneApp}
                                    className='rounded-t-2xl'
                                />
                            </CardHeader>
                            <Divider />
                            <CardBody className='px-7 scale-y-98'>
                                <h1 className='text-2xl font-bold mb-2'> you plus +one</h1>
                                <h2 className='text-xl'> Have you downlodaded it yet? The +one app brings the universe of Coca-Cola® into the palm of your hand. Start earning rewards today!</h2>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <Link href="#" className='font-bold underline mb-20 mt-24 ml-4 text-lg'>
                                    Download Now <IoArrowForward className='ml-2' size={16} />
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="flex justify-center">
                        <Card className="w-[100%] rounded-2xl">
                            <CardHeader className="flex gap-3">
                                <Image
                                    src={WorldOfCocaCola}
                                    className='rounded-t-2xl'
                                />
                            </CardHeader>
                            <Divider />
                            <CardBody className='px-7 scale-y-98'>
                                <h1 className='text-2xl font-bold mb-2'> Discover the World of Coca‑Cola </h1>
                                <h2 className='text-lg'> Journey through the storied history of the iconic beverage brand, interact with a variety of exhibits, and sample beverages from around the world. Oh, and chill with the world's bubbliest polar bear. </h2>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <Link href="#" className='font-bold underline mb-20 ml-4 mt-2 text-lg'>
                                    Learn More <IoArrowForward className='ml-2' size={16} />
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="flex justify-center">
                        <Card className="w-[100%] rounded-2xl">
                            <CardHeader className="flex gap-3">
                                <Image
                                    src={RefreshingFilms}
                                    className='rounded-t-2xl'
                                />
                            </CardHeader>
                            <Divider />
                            <CardBody className='px-7 scale-y-98'>
                                <h1 className='text-2xl font-bold mb-2'> Coca‑Cola Refreshing Films </h1>
                                <h2 className='text-xl'> Coca‑Cola® Refreshing Films provides students the opportunity to create content for the big screen. </h2>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <Link href="#" className='font-bold underline mb-20 ml-4 mt-24 text-lg'>
                                    Check It Out <IoArrowForward className='ml-2' size={16} />
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="flex justify-center">
                        <Card className="w-[100%] rounded-2xl">
                            <CardHeader className="flex gap-3">
                                <Image
                                    src={Vending}
                                    className='rounded-t-2xl'
                                />
                            </CardHeader>
                            <Divider />
                            <CardBody className='px-7 scale-y-98'>
                                <h1 className='text-2xl font-bold mb-2'> Coca‑Cola Vending </h1>
                                <h2 className='text-xl'> Each time you make a purchase with your mobile wallet at select Coca‑Cola vending machines, you’ll be one step closer to earning a drink reward. </h2>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <Link href="#" className='font-bold underline mb-20 ml-4 mt-17 text-lg'>
                                    Start Earning Today <IoArrowForward className='ml-2' size={16} />
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="flex justify-center">
                        <Card className="w-[100%] rounded-2xl">
                            <CardHeader className="flex gap-3">
                                <Image
                                    src={DrinkUp}
                                    className='rounded-t-2xl'
                                />
                            </CardHeader>
                            <Divider />
                            <CardBody className='px-7 scale-y-98'>
                                <h1 className='text-2xl font-bold mb-2'> Drink up what we’ve dreamed up! </h1>
                                <h2 className='text-xl'> Coca‑Cola Freestyle gives you the freedom to explore, pour, and enjoy your perfect drinks. </h2>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <Link href="#" className='font-bold underline mb-20 ml-4 mt-23 text-lg'>
                                    Explore and Pour <IoArrowForward className='ml-2' size={16} />
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}