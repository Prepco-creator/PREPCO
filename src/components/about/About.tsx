import React from 'react'
import Banner from '../comman/Banner'
import HeroSection from './HeroSection'
import MissionAndVision from './MissionAndVision'
import WhyChoosePrepco from './WhyChoosePrepco'
import AboutCTA from './AboutCTA'
import PopupModal from '../comman/PopupModal'

const About = () => {
    return (
        <>
            <PopupModal />
            <Banner title='About' />
            <HeroSection />
            <MissionAndVision />
            <WhyChoosePrepco />
            <AboutCTA />
        </>
        // our mission & vision
        // why choose prepco
        // video + content 
    )
}

export default About