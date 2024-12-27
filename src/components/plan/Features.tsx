import React from 'react'
import { images, videos } from '../../../public/assets'
import { FeaturesProps, PlanFeature } from '@/types'
import Image from 'next/image'


const Features: React.FC<FeaturesProps> = ({ duration, features }) => {

    const timeline = duration === 12 ? "One Year" : duration === 6 ? "6 Month" : "Not - Defined"

    return (
        <section className='p-16 bg-accent-1'>
            <h3 className='text-center text-custom-40-2 text-primary mb-10'>Plan Validation {timeline} - 2 Members</h3>
            <section className='flex flex-row gap-4 justify-between items-end'>
                <div>
                    {
                        features.map((feature: PlanFeature, index: number) => (
                            <div key={index} className='flex flex-row gap-2 mb-8'>
                                <Image width={32} height={32} src={images.pngs.walkingCouple} alt={feature.id} />
                                <p className='text-custom-20-2 text-secondaryDark'>{feature.content}</p>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <video
                        src={videos.hero}
                        className="inset-0 aspect-square w-full h-full object-cover border-none rounded-[30px]"
                        autoPlay
                        loop
                        muted
                        preload="auto"
                    >
                        <source src={videos.hero} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
        </section >
    )
}

export default Features