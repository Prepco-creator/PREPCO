import React from 'react'
import HeroSection from './HeroSection'
import MissionAndVision from './MissionAndVision'
import WhyChoosePrepco from './WhyChoosePrepco'
import AboutCTA from './AboutCTA'
import Footer from '../comman/Footer'
import { videos } from '../../../public/assets'
import ImageBanner from '../comman/ImageBanner'
import { images } from '../../../public/assets'

const About = () => {

    return (
        <>
            <ImageBanner data={[{ image: images.jpgs.AboutUsBanner, alt: "About Us Banner" }]} />
            <HeroSection />
            <AboutCTA
                description=" From fitness guides that keep you moving to wellness plans that work for you, Prepco is your partner in living your healthiest, happiest life."
                title="Let Prepco show you how easy taking care of yourself can really be. Because your health deserves the best—and so do you."
                data={{
                    tamilVideo: videos.aboutUsTamil,
                    englishVideo: videos.aboutUsEnglish,
                    keyFeatures: [
                        "Over 7,000 families have placed their trust in Prepco’s care-first commitment.",
                        "Nine years strong in making prevention the first line of defense.",
                        "Expanding wellness access across 10+ cities and growing.",
                        "98% of our members feel more secure about their health year after year.",
                        "Every solution we offer begins with honesty and ends in trust.",

                    ],
                    ctaBtn: {
                        btnLink: "https://calendly.com/bdm-prepcohealthcare/30min",
                        btnName: "Book free consultation",
                        externalCTA: true
                    }
                }}
            />
            <MissionAndVision />
            <AboutCTA
                title="Our Story"
                description="From fitness guides that keep you moving to wellness plans that work for you, Prepco is your partner in living your healthiest, happiest life."
                data={{
                    tamilVideo: videos.ourStoryTamil,
                    englishVideo: videos.ourStoryEnglish,
                    keyFeatures:
                        [
                            "Technology and compassion meet to create meaningful care.",
                            "Healthcare that reaches you — not the other way around.",
                            "We listen with heart before we act with care.",
                            "We believe the best treatment is avoiding illness in the first place.",
                            "Wellness is not a service — it’s a movement we grow together.",
                        ],
                    ctaBtn: {
                        btnLink: "https://calendly.com/bdm-prepcohealthcare/30min",
                        btnName: "Book free consultation",
                        externalCTA: true
                    }
                }}
            />
            <WhyChoosePrepco />

            <Footer />
        </>
    )
}

export default About