import React from 'react'
import { BannerProps } from '@/types'

const Banner: React.FC<BannerProps> = ({ title }) => {
    return (
        <header className='flex justify-center items-center p-4 bg-accent-3 font-bold'>
            <h1 className='capitalize bg-custom-gradient bg-clip-text text-transparent p-4 text-custom-24 lg:text-custom-64'>{title}</h1>
        </header>
    )
}

export default Banner;