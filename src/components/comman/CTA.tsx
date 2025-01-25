import React from 'react'
import { images } from '../../../public/assets';
import Image from 'next/image';

interface CTAProps {
    className: string;
}

const CTA: React.FC<CTAProps> = ({ className }) => {


    return (
        <section className={`p-6 shadow-multi-layer flex flex-col lg:flex-row items-start lg:items-center justify-center gap-4 lg:gap-12 ${className}`}>
            <h1 className='flex-[3] text-custom-16 lg:text-custom-24 font-medium text-primary'>Find a local insurance agent</h1>
            <div className='flex flex-row gap-2 items-center text-custom-14'>
                <Image width={48} height={48} className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px] hover:-translate-y-2 transition-transform duration-200' src={images.pngs.phoneIcon} alt="" />
                <p className='text-primary text-custom-14 lg:text-custom-20'>+996 210 7102</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
                <Image width={48} height={48} className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px] hover:-translate-y-2 transition-transform duration-200' src={images.pngs.mailIcon} alt="" />
                <p className='text-primary text-custom-14 lg:text-custom-20'> info@prepcohealthcare.com</p>
            </div>
            <button
                className="sheen flex-[2] w-full px-1 text-custom-16-bold lg:text-custom-20 py-4 bg-custom-gradient shadow-double-inset text-white font-semibold custom-border-radius relative overflow-hidden"
            >
                Get a Quote
            </button>

        </section>
    )
}

export default CTA