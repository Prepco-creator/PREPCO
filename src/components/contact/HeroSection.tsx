import React from 'react'
import ContactForm from './ContactForm'
import CTA from '../comman/CTA'
import { images } from '../../../public/assets'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section className='flex flex-col lg:flex-row gap-8 px-8 lg:px-12 py-12 pb-20 text-left justify-start'>
            <section className='flex-1 flex flex-col gap-4 items-start'>
                <div className='flex flex-row gap-1 items-center justify-start'>
                    <div className='w-2 h-3 bg-accent-2 rounded-full'></div>
                    <div className='w-3 h-3 bg-accent-1 rounded-full'></div>
                    <div className='w-4 h-4 bg-primary rounded-full'></div>
                    <h5 className='text-custom-24 font-normal'>Contact Us</h5>
                    <div className='w-4 h-4 bg-primary rounded-full'></div>
                    <div className='w-3 h-3 bg-accent-1 rounded-full'></div>
                    <div className='w-2 h-3 bg-accent-2 rounded-full'></div>
                </div>
                <h1 className='text-custom-48-bold capitalize bg-custom-gradient bg-clip-text text-transparent'>
                    Feel free to get in touch with exrperts
                </h1>
                <div className='space-y-4'>
                    <div className='flex flex-row gap-2 items-center'>
                        <Image width={48} height={48} src={images.pngs.phoneIcon} alt="prepco-phone" />
                        <p className='text-custom-20 text-primary'>+98 928 82 929</p>
                    </div>

                    <div className='flex flex-row gap-2 items-center'>
                        <Image width={48} height={48} src={images.pngs.mailIcon} alt="prepco-mail" />
                        <p className='text-custom-20 text-primary'>xyz@company.com</p>
                    </div>

                </div>
                <p className='text-secondaryDark text-custom-20'>
                    Lorem ipsum dolor sit amet consectetur. Non felis eget in viverra pharetra pharetra.
                </p>
            </section>
            <section className='flex-1'>
                <ContactForm />
            </section>
            <CTA className='bg-white absolute w-11/12 bottom-[-20%] left-1/2 transform -translate-x-1/2' />
        </section>
    )
}

export default HeroSection