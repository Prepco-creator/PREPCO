import React from 'react';
import { MarqueeTagsProps } from '@/types';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const MarqueeTags: React.FC<MarqueeTagsProps> = ({ tags }) => {
  return (
    <div className="absolute bottom-10 w-full overflow-hidden">
      <Marquee>
        {/* First set of tags */}
        {tags.map((tag, index) => (
          <span key={`first-${index}`} className="glass-morph-effect rounded-full gap-4 mx-4 p-1 flex flex-row items-center space-x-2">
            <Image width={32} height={32} src={tag.gifRoute} alt={tag.name} className="h-8 w-8 rounded-full" />
            <span>{tag.name}</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeTags;
