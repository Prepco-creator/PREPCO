import React from 'react'
import { CardProps } from '@/types'
import Image from 'next/image'


const Card: React.FC<CardProps> = ({ title, icon, content, className, hClassName }) => {
  return (
    <section className={`${className} rounded-3xl flex flex-col items-center justify-center gap-4 lg:gap-8 p-7 text-center bg-custom-gradient shadow-double-inset text-primaryLight hover:scale-105 transition-all duration-75 ease-in-out`}>
      <Image unoptimized width={84} height={84} src={icon} alt={title} />
      <header className={hClassName ? hClassName : 'text-custom-16-bold lg:text-custom-24'}>{title}</header>
      <p className='text-custom-14 lg:text-custom-20-2'>{content}f</p>
    </section>
  )
}

export default Card