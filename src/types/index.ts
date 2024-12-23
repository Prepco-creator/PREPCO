// Home Page Props 

import { StaticImageData } from "next/image";

interface MarqueeTagsProps {
    tags: { name: string; gifRoute: StaticImageData }[];
}


export type {
    MarqueeTagsProps
}