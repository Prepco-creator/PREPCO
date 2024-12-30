import React from 'react'
import { images, videos } from '../../../public/assets'
import { FeaturesProps, PlanFeature } from '@/types'
import Image from 'next/image'


const Features: React.FC<FeaturesProps> = ({ membersCount, duration, features, description }) => {

    const timeline = duration === 12 ? "One Year" : duration === 6 ? "6 Month" : "Not - Defined"

    const featureIcon = membersCount == 1
        ? images.gifs.oneMemberPlan
        : images.gifs.threeMemberPlan

    return (
        <section className='px-4 py-8 lg:p-16 bg-accent-1'>
            <h3 className='text-center text-custom-20-bold lg:text-custom-40-2 text-primary mb-2'>Plan Validation {timeline} - 2 Members</h3>
            <p className='text-custom-14 lg:text-custom-20-2 text-secondaryDark text-center mb-10'>{description}</p>
            <section className='flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-end'>
                <div>
                    {
                        features.map((feature: PlanFeature, index: number) => (
                            <div key={index} className='flex flex-row gap-2 mb-2 lg:mb-8 items-center'>
                                <Image unoptimized width={32} height={32} src={featureIcon} alt={feature.id} />
                                <p className='text-custom-14 lg:text-custom-20-2 text-secondaryDark'>{feature.content}</p>
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