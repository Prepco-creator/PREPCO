import React from 'react'
import { images } from '../../../public/assets'
import Card from './Card'

const MissionAndVision = () => {
    return (
        <section className='bg-accent-3 gap-8 p-4 flex flex-row px-8 lg:px-16 py-12'>
            <Card
                title='Our Vision'
                icon={images.gifs.bulb}
                content='To create a world where wellness isn’t a luxury but a lifestyle. At Prepco, we’re rethinking healthcare by making it proactive, practical, and accessible for everyone.'
                className='flex-1'
                hClassName='text-custom-20 lg:text-custom-40'
            />
            <Card
                title='Our Mission'
                icon={images.gifs.hollowCircles}
                content='To create a world where wellness isn’t a luxury but a lifestyle. At Prepco, we’re rethinking healthcare by making it proactive, practical, and accessible for everyone.'
                className='flex-1'
                hClassName='text-custom-20 lg:text-custom-40'
            />
        </section>
    )
}

export default MissionAndVision