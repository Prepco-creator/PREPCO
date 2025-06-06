import React, { useState } from 'react'
import ResponsiveYouTube from '../comman/ResponsiveYoutube';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

interface PlanSecondSectionProps {
    tamilVideo: string;
    englishVideo: string;
    keyFeatures: string[];
    paymentGatewayLink: string;
}

const PlanSecondSection: React.FC<PlanSecondSectionProps> = ({ tamilVideo, englishVideo, keyFeatures, paymentGatewayLink }) => {

    const [isTamil, setIsTamil] = useState<boolean>(false);

    const handleLanguageSwitch = (language: boolean) => {
        setIsTamil(language);
    };

    return (
        <section className="px-8 lg:px-16 flex flex-col lg:flex-row gap-6 justify-between">
            <div className="left-section  lg:w-1/2 flex flex-col gap-4 h-full">
                <div className="overflow-x-hidden relative">
                    <ResponsiveYouTube
                        videoURL={isTamil ? tamilVideo : englishVideo}
                    />
                </div>
            </div>
            <div className="right-section lg:w-1/2 flex flex-col gap-4 lg:gap-7 relative h-full">
                <div className="container mx-auto text-center text-white space-y-4">
                    <div className="flex w-full justify-center">
                        <button
                            className={`px-6 py-3 font-medium text-sm shadow-lg border-[2px] border-teal-600 transition-all duration-300 transform ${!isTamil ? "bg-gradient-to-b from-teal-400 to-teal-800 text-white shadow-double-inset" : "bg-white text-primary"
                                } rounded-l-3xl border-r-0 w-1/2 md:w-fit`}
                            onClick={() => handleLanguageSwitch(false)}
                        >
                            English
                        </button>
                        <button
                            className={`px-6 py-3 font-medium text-sm shadow-lg border-[2px] border-teal-600 transition-all duration-300 transform ${isTamil ? "bg-gradient-to-b from-teal-400 to-teal-800 text-white shadow-double-inset" : "bg-white text-primary"
                                } rounded-r-3xl border-l-0 w-1/2 md:w-fit`}
                            onClick={() => handleLanguageSwitch(true)}
                        >
                            தமிழ்
                        </button>
                    </div>
                </div>
                <ul className='space-y-2 h-auto'>
                    {
                        keyFeatures?.map((feature: string, index: number) => (
                            <li key={index} className='text-custom-16 lg:text-custom-20 flex items-center gap-3 font-normal text-primary'>
                                <FaStar /> {feature}
                            </li>
                        ))
                    }
                </ul>
                <Link href={paymentGatewayLink}>
                    <button className="w-full text-custom-16-bold lg:text-custom-24 bg-primary text-white p-5 shadow-double-inset rounded-tl-br-30 border-2 border-transparent hover:text-primary hover:border-primary hover:shadow-none hover:border-2 hover:bg-transparent active:opacity-70 transition-all">
                        Buy Now
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default PlanSecondSection