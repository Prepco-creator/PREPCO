import React from 'react'
import Banner from '../comman/Banner'
import SwiperComponent1 from './SwiperComponent1'
import { testimonials3 } from '@/data/testimonials'

import CTA from '../comman/CTA'
import TestimonialGrid from './TestimonialGrid'
import LoadingAnimation from '../loaders/LoadingAnimation'

const Testimonials = () => {
  return (
    <section className='overflow-x-hidden bg-[#fefefe]'>
      <LoadingAnimation />
      <Banner title='Testimonials' />
      <SwiperComponent1 testimonials={testimonials3} />
      <TestimonialGrid testimonials={testimonials3} />
      <CTA className='w-11/12 mx-auto my-8 bg-accent-2 rounded-[40px] lg:rounded-full shadow-none' />
    </section>
  )
}

export default Testimonials