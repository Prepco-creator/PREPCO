import React from 'react'
import Banner from '../comman/Banner'
import HeroSection from './HeroSection'
import GoogleMap from './GoogleMap'
import LoadingAnimation from '../loaders/LoadingAnimation'

const Contact = () => {
    return (
        <>
            <LoadingAnimation />
            <Banner title='Contact us' />
            <HeroSection />
            <GoogleMap />
        </>
    )
}

export default Contact