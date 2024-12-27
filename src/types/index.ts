// Home Page Props 

import { StaticImageData } from "next/image";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

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
    icon: StaticImageData;
    content: string;
}

interface PlanProps {
    id: string; // e.g., plan_1, plan_2
    title: string;
    description: string;
    category: string;
    duration: string; // e.g., "1 month", "1 year"
    pricing: number; // e.g., 199.99
    isSpecial: boolean; // e.g., true for featured or premium plans
    features: PlanFeature[];
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
}