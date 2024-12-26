import React from 'react'
import Banner from '../comman/Banner'
import SwiperComponent1 from './SwiperComponent1'
import { testimonials1, testimonials2 } from '@/data/testimonials'
import SwiperComponent2 from './SwiperComponent2'
import SwiperComponent3 from './SwiperComponent3'
import CTA from '../comman/CTA'

const Testimonials = () => {
  return (
    <section className='overflow-x-hidden'>
      <Banner title='Testimonials' />
      <SwiperComponent1 testimonials={testimonials1} />
      <SwiperComponent2 testimonials={testimonials2} />
      <SwiperComponent3 testimonials={testimonials2} />
      <CTA className='w-11/12 mx-auto my-8 bg-accent-2 rounded-full shadow-none'/>
    </section>
  )
}

export default Testimonials