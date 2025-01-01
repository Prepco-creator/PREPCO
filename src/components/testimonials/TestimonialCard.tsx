import { TestimonialCardProps } from '@/types'
import React from 'react'
import { images } from '../../../public/assets'
import Image from 'next/image'

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className="p-12 testimonial-card relative bg-white shadow-lg rounded-xl flex flex-col items-start text-start">
            <Image
                width={200}
                height={173}
                className="absolute top-0 right-0"
                src={images.webp.testimonialClipImage}
                alt={'clip-img'}
            />

            <div className="testimonial-card__header flex items-center">
                <div className="testimonial-card__image-wrapper relative">
                    {/* Profile Image with Gradient Border */}
                    <div className="relative rounded-full p-[3px] bg-custom-gradient-1">
                        <Image
                            width={115}
                            height={115}
                            src={images.jpgs.testimonialImage}
                            alt="Client"
                            className="rounded-full bg-white"
                        />
                    </div>
                </div>
                <div className="testimonial-card__details ml-4">
                    <h3 className="text-lg font-bold text-gray-800">Hallen Smith</h3>
                    <p className="text-sm text-blue-500 uppercase tracking-wide">Director</p>
                </div>
            </div>
            <div className="testimonial-card__review mt-4">
                <div className="flex justify-center text-yellow-500">
                    {/* Star Rating */}
                    {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa fa-star"></i>
                    ))}
                </div>
                <p className="mt-4 text-gray-600 text-custom-20 font-normal text-secondaryDark">
                    Pellentesque habitant morbi tristique senectus netus et malesuada fames ac turp egestas. Aliquam
                    viverra arcu. Donec aliquet blandit enim feugiat mattis.
                </p>
            </div>
        </div>
    )
}

export default TestimonialCard
