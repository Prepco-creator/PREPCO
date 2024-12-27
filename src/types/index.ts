// Home Page Props 

import { StaticImageData } from "next/image";
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
    id: string;
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
    description: string;
    category: string;
    duration: number; // e.g., "1 month", "1 year"
    pricing: number; // e.g., 199.99
    discountPricing: number;
    isSpecial: boolean; // e.g., true for featured or premium plans
    features: PlanFeature[];
    bigDescription?: string
}


interface PlanHeroProps {
    title: string;
    duration: number;
    pricing: number;
}

interface PlanTitleProps {
    title: string;
}

interface FeaturesProps {
    duration: number;
    features: PlanFeature[];
}

interface PlanDetailProps {
    title: string,
    bigDescription: string
    healthPackages: HealthPackageDetails[]
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
}