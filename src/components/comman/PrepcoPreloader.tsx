'use client';

import React, { useEffect, useState } from 'react';
import { images } from '../../../public/assets';
import Image from 'next/image';

const PrepcoPreloader = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 4000); // Set the preloader animation duration

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`preloader-container ${isLoaded ? 'loaded' : ''}`}>
            <div className="logo-container">
                <div className="logo-wrapper">
                    <Image
                        src={images.svgs.logoIcon}
                        alt="logo"
                        width={120}
                        height={157}
                        className="logo"
                    />
                    <div className="logo-text baumans-regular text-custom-32 lg:text-custom-48">PREPCO</div>
                </div>
                <div className="bottom-line text-custom-14 lg:text-custom-20">this comes under it</div>
            </div>
        </div>
    );
};

export default PrepcoPreloader;
