// Home Page Props 

import { StaticImageData } from "next/image";
import React from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";


interface Tags {
    name: string;
    gifRoute: StaticImageData;
}

interface MarqueeTagsProps {
    tags: Tags[];
    className?: string;
    tagClassName?: string;
}

interface HealthPackageDetails {
    id?: string;
    title: string;
    description: string;
    iconSrc: string | StaticImageData
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

interface InputFieldProps<TFormValues extends FieldValues> {
    id: Path<TFormValues>;
    label: string;
    placeholder: string;
    required?: boolean;
    type?: string;
    error?: string;
    register: UseFormRegister<TFormValues>;
    className?:string;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
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

interface PlanFeature {
    id: string;
    icon?: string;
    content: string;
}

interface PlanProps {
    id: string; // e.g., plan_1, plan_2
    title: string;
    tagline: string;
    description: string;
    category: string;
    duration: number; // e.g., "1 month", "1 year"
    pricing: number; // e.g., 199.99
    discountPricing: number;
    isSpecial: boolean; // e.g., true for featured or premium plans
    features: PlanFeature[];
    bigDescription?: string
    membersCount?: number;
    memberType?: string;
    featuresDisplay: string[];
    videoLinkEnglish: string;
    videoLinkTamil: string;
    imgSrc: string | StaticImageData;
}


interface PlanHeroProps {
    title: string;
    imageSrc: string | StaticImageData
    duration: number;
    pricing: number;
    membersCount?: number;
    memberType?: string;
    planId:string;
}

interface PlanTitleProps {
    title: string;
}

interface FeaturesProps {
    duration: number;
    features: PlanFeature[];
    description: string;
    membersCount?: number;
    memberType?: string;
    tamilVideo: string;
    englishVideo: string;
}

interface PlanDetailProps {
    title: string,
    bigDescription: string
    healthPackages: HealthPackageDetails[]
}

type YoutubeIframeProps = {
    src: string;
    width?: string;
    height?: string;
    title?: string;
    allow?: string;
    frameBorder?: string;
    allowFullScreen?: boolean;
    referrerPolicy?: React.HTMLAttributeReferrerPolicy;
};


interface PlanServices {
    planId: string;
    services: {
        title: string;
        description: string;
        iconSrc: string | StaticImageData;
    }[];
}



export type {
    MarqueeTagsProps,
    BannerProps,
    CardProps,
    InputFieldProps,
    FormValues,
    Testimonial,
    SwiperComponent1Props,
    PlanProps,
    PlanFeature,
    PlanHeroProps,
    PlanTitleProps,
    FeaturesProps,
    Tags,
    HealthPackageDetails,
    PlanDetailProps,
    TestimonialCardProps,
    YoutubeIframeProps,
    PlanServices,
}
