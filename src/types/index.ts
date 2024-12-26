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

interface InputFieldProps {
    id: string;
    label: string;
    placeholder: string;
    required?: boolean;
    type?: string;
    error?: string;
    register: any; // From React Hook Form's `register`
}


interface FormValues {
    name: string,
    phone: string,
    email?: string,
}

interface Testimonial {
    testimonial: string; // The testimonial text
    testimonee: string;  // The name of the person providing the testimonial
    position?: string;   // The optional position or role of the person
}

interface SwiperComponent1Props {
    testimonials: Testimonial[]
}




export type {
    MarqueeTagsProps,
    BannerProps,
    CardProps,
    InputFieldProps,
    FormValues,
    Testimonial,
    SwiperComponent1Props
}