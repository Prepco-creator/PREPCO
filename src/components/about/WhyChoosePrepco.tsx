import React from 'react'
import { images } from '../../../public/assets';
import { CardProps } from '@/types';
import Card from './Card';

const WhyChoosePrepco = () => {

    const features: CardProps[] = [
        {
            title: "Expert Guidance",
            content: "Real pros, real solutions—delivered by healthcare experts who know their stuff.",
            icon: images.gifs.threeGuys, // Replace with the actual GIF path
        },
        {
            title: "Holistic Approach",
            content: "We’re not just about check-ups—we’re about tune-ups for your whole well-being.",
            icon: images.gifs.twoGuys, // Replace with the actual GIF path
        },
        {
            title: "Innovative Care",
            content: "Cutting-edge tools and evidence-based practices that keep you ahead of the curve.",
            icon: images.gifs.innovationBulb, // Replace with the actual GIF path
        },
        {
            title: "Tailored Solutions",
            content: "Your health, your way. Plans designed just for you because one-size-fits-all doesn’t work in healthcare.",
            icon: images.gifs.tabletGuy, // Replace with the actual GIF path
        },
    ];


    return (
        <section className='px-8 py-16 lg:px-16'>
            <header className='mb-6'>
                <h3 className='text-center text-custom-40 bg-custom-gradient bg-clip-text text-transparent'>Why Choose Prepco?</h3>
            </header>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {
                    features?.map((feature: CardProps, index: number) => (
                        <Card
                            key={index}
                            title={feature.title}
                            icon={feature.icon}
                            content={feature.content}
                        />
                    ))
                }
            </section>
        </section>
    )
}

export default WhyChoosePrepco