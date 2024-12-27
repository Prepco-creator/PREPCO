import React from 'react';
import { MarqueeTagsProps } from '@/types';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const MarqueeTags: React.FC<MarqueeTagsProps> = ({ tags, className, tagClassName }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <Marquee>
        {/* First set of tags */}
        {tags.map((tag, index) => (
          <span key={`first-${index}`} className={`rounded-full mx-4 p-1 flex flex-row items-center gap-1 ${tagClassName} `}>
            <Image width={32} height={32} unoptimized src={tag.gifRoute} alt={tag.name} className="h-8 w-8 rounded-full" />
            <span>{tag.name}</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeTags;
