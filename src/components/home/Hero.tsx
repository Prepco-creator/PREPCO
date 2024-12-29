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
      <div className="relative p-4 lg:p-16 z-10 flex flex-col items-center justify-center h-full text-white">
        {/* Heading */}
        <h1 className="text-custom-24 font-semibold lg:text-custom-48 lg:font-bold mb-6 text-center">
          Have you ever had a healthcare plan, or are you living dangerously?
        </h1>

        {/* Buttons */}
        <div className="flex flex-col-reverse md:flex-row gap-4 w-[95%] lg:w-3/5">
          {/* First Button: Glass effect, No Background Color, Left-Bottom */}
          <button
            className="px-6 py-3 text-custom-16 font-bold text-primary lg:font-semibold rounded-tr-[50px] rounded-bl-[50px] shadow-md glass-morph-effect border-tl-3xl border-br-3xl transition duration-300 w-full lg:w-1/2"
          >
            No, I like to keep things interesting.
          </button>

          <button
            className="px-6 py-3 text-custom-16 font-bold lg:font-semibold rounded-tl-[50px] rounded-br-[50px]  bg-primary text-white p-3 shadow-double-inset border-bl-3xl border-tr-3xl transition duration-300 w-full lg:w-1/2"
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
