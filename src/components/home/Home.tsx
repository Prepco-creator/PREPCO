import React from 'react'
import Hero from './Hero'
import PopupModal from '../comman/PopupModal'
import LoadingAnimation from '../loaders/LoadingAnimation'

const Home = () => {
    return (
        <>
            <LoadingAnimation/>
            <PopupModal />
            <Hero />
        </>
    )
}

export default Home