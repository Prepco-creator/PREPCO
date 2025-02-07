import React from 'react'
import Hero from './Hero'
import PopupModal from '../comman/PopupModal'
import tags from '@/data/tags'
import MarqueeTags from '../comman/MarqueeTags'


const Home = () => {
   
      
    return (
        <>
            <PopupModal />
            <Hero tags={tags} />
                 <MarqueeTags tags={tags} className=" bottom-10" tagClassName="text-[#017F7E]" />
        </>
    )
}

export default Home