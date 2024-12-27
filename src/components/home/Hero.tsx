import React from 'react';
import MarqueeTags from '../comman/MarqueeTags';
import { videos } from '../../../public/assets';
import tags from '@/data/tags';

const Hero: React.FC = () => {


  return (
    <section className="relative w-full h-screen">
      {/* Video background */}
      <video
        src={videos.hero}
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        autoPlay
        loop
        muted
        preload="auto"
      >
        <source src={videos.hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-center">
          Have you ever had a healthcare plan, or are you living dangerously?
        </h1>

        {/* Buttons */}
        <div className="flex space-x-4 mb-6">
          {/* First Button: Glass effect, No Background Color, Left-Bottom */}
          <button
            className="px-6 py-3 text-primary font-semibold rounded-tr-3xl rounded-bl-3xl shadow-md glass-morph-effect border-tl-3xl border-br-3xl transition duration-300"
          >
            No, I like to keep things interesting.
          </button>

          {/* Second Button: bg-primary, Left-Bottom */}
          <button
            className="px-6 py-3 text-white font-semibold rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-primary to-secondary border-bl-3xl border-tr-3xl transition duration-300"
          >
            Yes, I would like to try.
          </button>

        </div>
      </div>

      {/* Marquee Tags Component */}
      <MarqueeTags tagClassName='glass-morph-effect gap-1 px-2' className='absolute bottom-10' tags={tags} />
    </section>
  );
};

export default Hero;
