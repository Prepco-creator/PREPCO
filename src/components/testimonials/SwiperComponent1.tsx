'use client'

import React from 'react';
import { images } from '../../../public/assets';
import Image from 'next/image';
import { SwiperComponent1Props, Testimonial } from '@/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './testimonials.css'


const SwiperComponent1: React.FC<SwiperComponent1Props> = ({ testimonials }) => {
    return (
        <section className='p-16'>
            <Swiper
                modules={[Pagination, Navigation,Autoplay]}
                pagination={{
                    clickable: true,
                }}

                navigation={false}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={1}
            >
                {testimonials.map((testimonial: Testimonial, index: number) => (
                    <SwiperSlide key={index}>
                        <div
                            style={{ borderRadius: '100px 100px 0px 100px' }}
                            className="bg-primary1 text-primaryDark w-3/4 flex flex-row gap-4 items-start px-16 py-12 mx-auto"
                        >
                            <Image width={73} height={96} src={images.svgs.logoIcon} alt="logo" />
                            <div className="flex flex-col gap-4 flex-1">
                                <h1 className="text-custom-48-bold">Our Client Says</h1>
                                <p className="text-custom-16">{testimonial.testimonial}</p>
                                <div>
                                    <h4 className="text-custom-20-bold">{testimonial.testimonee}</h4>
                                    <p className="text-custom-14">{testimonial.position || 'Customer'}</p>
                                </div>
                            </div>
                            <Image width={64} height={64} src={images.svgs.doubleQuote} alt="double-quote" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default SwiperComponent1;
