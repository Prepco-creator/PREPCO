import React from 'react'
import Hero from './Hero'
// import PopupModal from '../comman/PopupModal'
import tags from '@/data/tags'
import MarqueeTags from '../comman/MarqueeTags'


const Home = () => {
   
      
    return (
        <section className='relative min-h-screen bg-gradient-to-br from-[#E8FDFD] via-[#D9FCFB] to-[#C0F8F7]'>
            {/* <PopupModal /> */}
            <Hero tags={tags} />
            <MarqueeTags tags={tags} className="absolute bottom-5 bg-transparent" tagClassName="text-[#017F7E]" />
        </section>
    )
}

export default Home