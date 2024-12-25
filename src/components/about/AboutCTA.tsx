import React from 'react'
import { videos } from '../../../public/assets'

const AboutCTA = () => {
    return (
        <section className='p-16 flex flex-col gap-4 bg-accent-2 text-primaryDark'>
            <h3 className='text-custom-32'>
                At Prepco, we get it—life is busy, and health can feel like an afterthought. That’s where we come in.
            </h3>
            <p className='text-custom-20-2'>
                From fitness guides that keep you moving to wellness plans that work for you, Prepco is your partner in living your healthiest, happiest life.
            </p>
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
            <div></div>
        </section>
    )
}

export default AboutCTA