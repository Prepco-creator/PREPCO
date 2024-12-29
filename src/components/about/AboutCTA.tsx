import React from 'react'
import { videos } from '../../../public/assets'

const AboutCTA = () => {
    return (
        <section className='px-8 py-16 lg:px-16 flex flex-col gap-4 bg-accent-2 text-primaryDark'>
            <h3 className='text-custom-20-bold lg:text-custom-32'>
                At Prepco, we get it—life is busy, and health can feel like an afterthought. That’s where we come in.
            </h3>
            <p className='text-custom-14 lg:text-custom-20-2'>
                From fitness guides that keep you moving to wellness plans that work for you, Prepco is your partner in living your healthiest, happiest life.
            </p>
            <button
                className="w-full p-3 lg:py-3 lg:px-6 bg-custom-gradient shadow-double-inset text-white lg:font-semibold text-custom-16-bold lg:text-lg custom-border-radius"
            >
                Book a consultation
            </button>
            <video
                src={videos.hero}
                className="inset-0 w-full h-full object-cover border-none rounded-3xl"
                autoPlay
                loop
                muted
                preload="auto"
            >
                <source src={videos.hero} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='space-x-2 text-center px-2 lg:px-16'>
                <h5 className='text-custom-20-bold lg:text-custom-32'>so why wait</h5>
                <p className='text-custom-14 lg:text-custom-20'>Let Prepco show you how easy taking care of yourself can really be. Because your health deserves the best—and so do you.</p>
            </div>
        </section>
    )
}

export default AboutCTA