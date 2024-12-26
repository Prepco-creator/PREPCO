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


const SwiperComponent2: React.FC<SwiperComponent1Props> = ({ testimonials }) => {
    return (
        <section className='p-16'>
            <h1 className='capitalize text-custom-40 text-primary text-center mb-4'>our client likes us</h1>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                pagination={{
                    clickable: true,
                }}

                navigation={false}
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={1}
            >
                {testimonials.map((testimonial: Testimonial, index: number) => (
                    <SwiperSlide key={index}>
                        <div className="bg-accent-1 rounded-full border-[2px] border-solid border-primary1 text-primaryDark w-3/4 flex flex-col gap-4 items-center justify-center px-16 py-12 mx-auto">
                            <div className='text-center'>
                                <h4 className="text-custom-20-bold bg-custom-gradient bg-clip-text text-transparent">{testimonial.testimonee}</h4>
                                <p className="text-custom-14 text-primary1">{testimonial.position || 'Customer'}</p>
                            </div>
                            <p className='text-custom-16 text-center'>
                                {testimonial.testimonial}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section >
    );
};

export default SwiperComponent2;
