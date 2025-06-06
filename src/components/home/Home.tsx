import React from 'react'
import Hero from './Hero'
import tags from '@/data/tags'
import TrustedPartners from '../comman/TrustedParnters'


const Home = () => {


    return (
        <section className='relative bg-gradient-to-br from-[#E8FDFD] via-[#D9FCFB] to-[#C0F8F7]'>
            {/* <PopupModal /> */}
            <Hero tags={tags} />
            <TrustedPartners />
        </section>
    )
}

export default Home