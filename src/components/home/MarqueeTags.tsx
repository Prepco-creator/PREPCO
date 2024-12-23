import React from 'react';
import { MarqueeTagsProps } from '@/types';
import Image from 'next/image';

const MarqueeTags: React.FC<MarqueeTagsProps> = ({ tags }) => {
  return (
    <div className="absolute bottom-10 w-full overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee text-xl font-bold text-white bg-white bg-opacity-20 px-4 py-2 rounded-lg shadow-md">
        {/* First set of tags */}
        {tags.map((tag, index) => (
          <span key={`first-${index}`} className="mx-4 flex flex-row items-center space-x-2">
            <Image width={32} height={32} src={tag.gifRoute} alt={tag.name} className="h-8 w-8" />
            <span>{tag.name}</span>
          </span>
        ))}
        {/* Duplicate the tags for a seamless loop */}
        {tags.map((tag, index) => (
          <span key={`second-${index}`} className="mx-4 flex flex-row items-center space-x-2">
            <Image width={32} height={32} src={tag.gifRoute} alt={tag.name} className="h-8 w-8" />
            <span>{tag.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTags;
