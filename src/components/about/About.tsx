import React from 'react'
import Banner from '../comman/Banner'
import HeroSection from './HeroSection'
import MissionAndVision from './MissionAndVision'
import WhyChoosePrepco from './WhyChoosePrepco'
import AboutCTA from './AboutCTA'
import Footer from '../comman/Footer'
import { videos } from '../../../public/assets'

const About = () => {
    return (
        <>
            <Banner title='About' />
            <HeroSection />
            <AboutCTA
                description=" From fitness guides that keep you moving to wellness plans that work for you, Prepco is your partner in living your healthiest, happiest life."
                title="Let Prepco show you how easy taking care of yourself can really be. Because your health deserves the best—and so do you."
                tamilVideo={videos.hero}
                englishVideo={videos.hero2}
            />
            <MissionAndVision />
            <AboutCTA
                description="From fitness guides that keep you moving to wellness plans that work for you, Prepco is your
partner in living your healthiest, happiest life."
                title="Our Story"
                tamilVideo={videos.hero}
                englishVideo={videos.hero2}
            />
            <WhyChoosePrepco />

            <Footer />
        </>
        // our mission & vision
        // why choose prepco
        // video + content 
    )
}

export default About