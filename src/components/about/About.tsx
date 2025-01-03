import React from 'react'
import Banner from '../comman/Banner'
import HeroSection from './HeroSection'
import MissionAndVision from './MissionAndVision'
import WhyChoosePrepco from './WhyChoosePrepco'
import AboutCTA from './AboutCTA'
import Footer from '../comman/Footer'

const About = () => {
    return (
        <>
            <Banner title='About' />
            <HeroSection />
            <MissionAndVision />
            <WhyChoosePrepco />
            <AboutCTA />
            <Footer/>
        </>
        // our mission & vision
        // why choose prepco
        // video + content 
    )
}

export default About