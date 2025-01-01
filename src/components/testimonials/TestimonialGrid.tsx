import { SwiperComponent1Props } from '@/types';
import React from 'react';
import TestimonialCard from './TestimonialCard';
import { Testimonial } from '@/types';

const TestimonialGrid: React.FC<SwiperComponent1Props> = ({ testimonials }) => {
    return (
        <section>
            <div className="p-8 lg:p-16 lg:pb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {testimonials.map((testimonial: Testimonial, index: number) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </div>
        </section>
    );
};

export default TestimonialGrid;
