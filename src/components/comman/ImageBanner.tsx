'use client'

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ImageBannerProps } from '@/types';
import { Autoplay } from 'swiper/modules';

const ImageBanner: React.FC<{ data: ImageBannerProps[] }> = ({ data }) => {
    const isMultiple = data.length > 1;

    if (!isMultiple) {
        const { image, alt = 'banner-image' } = data[0];
        return (
            <header className='w-full h-auto md:h-[40vh] relative'>
                <Image
                    src={image}
                    alt={alt}
                    className='w-full h-full object-center lg:object-cover'
                    width={1024}
                    height={700}
                />
            </header>
        );
    }

    console.log(data)

    return (
        <header className='w-full h-40vh relative'>
            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="h-full"
            >
                {data.map(({ image, alt = 'banner-image' }, index) => (
                    <SwiperSlide key={index} className='h-full'>
                        <div className="relative w-full h-full">
                            <Image
                                src={image}
                                alt={alt}
                                className='w-full h-full object-center lg:object-cover'
                                fill
                                priority
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </header>

    );
};

export default ImageBanner;
