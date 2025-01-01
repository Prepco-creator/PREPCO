'use client'

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import './style.css'; // Import the regular CSS file
import Image from 'next/image';
import { images } from '../../../public/assets';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const LoadingAnimation: React.FC = () => {
    useEffect(() => {
        const timeline = gsap.timeline();

        timeline.to('.milPreloaderAnimation', {
            opacity: 1,
        });

        timeline.fromTo(
            '.milAnimation1 .milH3',
            {
                y: "30px",
                opacity: 0,
            },
            {
                y: "0px",
                opacity: 1,
                stagger: 0.4,
            }
        );

        timeline.to('.milAnimation1 .milH3', {
            opacity: 0,
            y: '-30',
        }, "+=.3");

        timeline.fromTo('.milRevealBox', 0.1, {
            opacity: 0,
        }, {
            opacity: 1,
            x: '-30',
        });

        timeline.to('.milRevealBox', 0.45, {
            width: "100%",
            x: 0,
        }, "+=.1");

        timeline.to('.milRevealBox', {
            right: "0",
        });

        timeline.to('.milRevealBox', 0.3, {
            width: "0%",
        });

        timeline.fromTo('.milAnimation2 .milH3', {
            opacity: 0,
        }, {
            opacity: 1,
        }, "-=.5");

        timeline.to('.milAnimation2 .milH3', 0.6, {
            opacity: 0,
            y: '-30',
        }, "+=.5");

        timeline.to('.milPreloader', 0.8, {
            opacity: 0,
            ease: 'sine',
        }, "+=.2");

        timeline.fromTo('.milUp', 0.8, {
            opacity: 0,
            y: 40,
            scale: .98,
            ease: 'sine',
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            onComplete: function () {
                const preloaderElement = document.querySelector('.milPreloader') as HTMLElement;
                preloaderElement.classList.add('milHidden');
            },
        }, "-=1");
    }, []);

    return (
        <div className="milPreloader">
            <div className="milPreloaderAnimation">
                <div className="milPosAbs milAnimation1">
                    <p className="milH3 milBla milThin" id="color-mil-txt">Coverage</p>
                    <p className="milH3 milMaroon" id="color-mil-txt" style={{ color: '#018380' }}>Wellness</p>
                    <p className="milH3 milBlack milThin" id="color-mil-txt">Protection</p>
                </div>
                <div className="milPosAbs milAnimation2">
                    <div className="milRevealFrame">
                        <p className="milRevealBox"></p>
                        <div className="milH3 milMaroon milThin minWebHeader">
                            <Image src={images.svgs.logo} alt='logo' width={300} height={300} className='w-[300px] h-auto'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingAnimation;
