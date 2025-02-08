import React from 'react';
import { MarqueeTagsProps } from '@/types';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const MarqueeTags: React.FC<MarqueeTagsProps> = ({ tags, className, tagClassName }) => {
  return (
    <div className={`w-full bg-gradient-to-br from-[#E8FDFD] via-[#D9FCFB] to-[#C0F8F7] py-4 ${className}`}>
      <Marquee
        gradient={false}
        speed={30}
        className="overflow-hidden"
      >
        {tags.map((tag, index) => (
          <div
            key={`first-${index}`}
            className={`
              group
              flex 
              items-center 
              gap-2 
              bg-white 
              rounded-full 
              px-3 
              py-2 
              mx-3 
              shadow-md 
              hover:shadow-lg 
              transition-all 
              duration-300 
              transform 
              hover:-translate-y-1 
              border 
              border-[#00ADA9]/10 
                cursor-pointer
              ${tagClassName}
            `}
          >
            <Image
              width={32}
              height={32}
              unoptimized
              src={tag.gifRoute}
              alt={tag.name}
              className="
                h-8 
                w-8 
                rounded-full 
                border-2 
                border-[#00ADA9]/20 
                group-hover:scale-110 
                transition-transform
                "
            />
            <span className="
              text-[#017F7E] 
              font-semibold 
              text-sm 
              group-hover:text-[#00ADA9] 
              transition-colors
            ">
              {tag.name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeTags;