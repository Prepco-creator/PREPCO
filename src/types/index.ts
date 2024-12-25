// Home Page Props 

import { StaticImageData } from "next/image";

interface MarqueeTagsProps {
    tags: { name: string; gifRoute: StaticImageData }[];
}

interface BannerProps {
    title: string;
}

interface CardProps {
    title: string;
    icon: StaticImageData;
    content: string;
    className?: string;
    hClassName?: string;
    pClassName?: string;
}


export type {
    MarqueeTagsProps,
    BannerProps,
    CardProps
}