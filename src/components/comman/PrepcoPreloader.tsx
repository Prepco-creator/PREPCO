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
                        src={images.svgs.whiteLogoIcon}
                        alt="logo"
                        width={120}
                        height={157}
                        className="logo"
                    />
                    <div className="logo-text">PREPCO</div>
                </div>
                <div className="bottom-line-text">The Right Choice for Real Peace of Mind.</div>
            </div>
        </div>
    );
};

export default PrepcoPreloader;
