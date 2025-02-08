import { TestimonialCardProps } from '@/types'
import React from 'react'
import { images } from '../../../public/assets'
import Image from 'next/image'

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className="p-10 md:p-12 overflow-hidden testimonial-card relative bg-white shadow-lg rounded-3xl flex flex-col items-start text-start transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group">
            <Image
                width={200}
                height={173}
                className="absolute -top-7 -right-8  grayscale transition-all duration-300 group-hover:grayscale-0"
                src={images.pngs.pattern}
                alt={'clip-img'}
            />

            <div className="testimonial-card__header flex flex-col md:flex-row items-start md:items-center">
                <div className="testimonial-card__image-wrapper relative">
                    {/* Profile Image with Gradient Border */}
                    <div className="relative rounded-full p-[3px] bg-custom-gradient-1">
                        <Image
                            width={115}
                            height={115}
                            src={images.pngs.testimoneeProfile}
                            alt="Client"
                            className="rounded-full bg-white aspect-square object-cover"
                        />
                    </div>
                </div>
                <div className="testimonial-card__details md:ml-4">
                    <h3 className="text-lg font-bold text-gray-800">{testimonial.testimonee}</h3>
                    <p className="text-base lg:text-sm text-primary uppercase tracking-wide">{testimonial.position}</p>
                </div>
            </div>
            <div className="testimonial-card__review mt-4">
                <div className="flex justify-center text-yellow-500">
                    {/* Star Rating */}
                    {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa fa-star"></i>
                    ))}
                </div>
                <p className="mt-4 text-gray-600 text-custom-16 md:text-custom-20 font-normal text-secondaryDark">
                    {testimonial.testimonial}
                </p>
            </div>
        </div>
    )
}

export default TestimonialCard
