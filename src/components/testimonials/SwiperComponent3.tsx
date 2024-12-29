'use client'

import React from 'react';
import { images } from '../../../public/assets';
import Image from 'next/image';
import { SwiperComponent1Props, Testimonial } from '@/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './testimonials.css'


const SwiperComponent3: React.FC<SwiperComponent1Props> = ({ testimonials }) => {
    return (
        <section className='py-8 lg:py-16'>
            <Swiper
                modules={[Pagination, Navigation, Autoplay, EffectCreative]}
                pagination={false}
                navigation={false}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                draggable={true}
                loop={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={1}
            >
                {testimonials.map((testimonial: Testimonial, index: number) => (
                    <SwiperSlide key={index}>
                        <section className='flex flex-col lg:flex-row items-center bg-white p-4 lg:p-0'>
                            <div className='flex-1 h-full'>
                                <Image width={720} height={382} src={images.jpgs.testimonialImage} alt="testimonial" />
                            </div>
                            <div className='flex-1 py-4 lg:p-12 flex flex-col gap-8 items-start justify-start'>
                                <Image width={40} height={40} src={images.svgs.doubleQuote} alt='double-quote' />
                                <div className='text-left'>
                                    <h4 className="text-custom-20-bold bg-custom-gradient bg-clip-text text-transparent">{testimonial.testimonee}</h4>
                                    <p className="text-custom-14 text-primary1">{testimonial.position || 'Customer'}</p>
                                </div>
                                <p className='text-custom-16 text-left'>
                                    {testimonial.testimonial}
                                </p>
                            </div>
                        </section>

                    </SwiperSlide>
                ))}
            </Swiper>
        </section >
    );
};

export default SwiperComponent3;

