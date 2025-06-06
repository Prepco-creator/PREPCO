import { IconType } from "react-icons";
import {
    AiOutlineHome,
    AiOutlineHeart,
    AiOutlineMedicineBox,
} from "react-icons/ai";
import {
    FaStethoscope,
    FaUserInjured,
    FaTooth,
    FaEye,
    FaPills,
    FaProcedures,
    FaBug,
    FaAppleAlt,
    FaWeight,
    FaRunning,
    FaYinYang,
    FaMoneyBillWave,
    FaFlask,
} from "react-icons/fa";

import { MdPsychology, MdOutlineVideoCall } from "react-icons/md";


export interface EnhancedFeatureType {
    title: string;
    description: string;
    iconSrc: IconType;
}

export interface PlanPackagesProps {
    planName: string;
    enhancedFeatures: EnhancedFeatureType[]
}

export const plans_packages: PlanPackagesProps[] = [
    {
        planName: "Ultimate Health Plan",
        enhancedFeatures: [{
            title: "Master Health Check-up – Doorstep & Detailed",
            description:
                "Comprehensive Health Check-ups for up to 5 members, each covering 70+ essential tests for a complete health assessment—all done from the comfort of your home.",
            iconSrc: AiOutlineHome,
        },
        {
            title: "Outpatient Treatment Discounts",
            description:
                "Enjoy up to 25% Discounts on Unlimited Outpatient Treatments including consultations, minor procedures, and follow-ups at top hospitals and clinics. Affordable care, right when you need it.",
            iconSrc: FaStethoscope,
        },
        {
            title: "Inpatient Treatment Benefits",
            description:
                "Hospital bills can be overwhelming—The discount of 5 to 20% Discount on inpatient procedures is a major savings to all classes of people and their families.",
            iconSrc: FaUserInjured,
        },
        {
            title: "Laboratory Savings",
            description:
                "From basic blood tests to advanced diagnostics, unlock 10% to 30% discounts on radiology and pathology services at India’s most trusted labs. Transparent pricing. No hidden fees.",
            iconSrc: AiOutlineMedicineBox,
        },
        {
            title: "Dental Consultations & Cleaning",
            description:
                "Smile confidently! Access up to 10 Cashless Dental Consultation Vouchers (in-person & virtual) covering check-ups, cleaning, and preventive care with top dental experts.",
            iconSrc: FaTooth,
        },
        {
            title: "Eye Care Consultations",
            description:
                "See clearly with expert-led eye checkups at premium eye hospitals—cashless and covered under your health plan.",
            iconSrc: FaEye,
        },
        {
            title: "Psychological Wellness Sessions",
            description:
                "Mental health matters. Connect with professional psychologists to address stress, anxiety, burnout, and emotional well-being—confidential and judgment-free.",
            iconSrc: MdPsychology,
        },
        {
            title: "Virtual Doctor Consultations",
            description:
                "Health support anytime, anywhere. Use exclusive teleconsultation vouchers to connect with general physicians directly from your phone—ideal for follow-ups and quick concerns.",
            iconSrc: MdOutlineVideoCall,
        },
        {
            title: "Medicine Vouchers",
            description:
                "Enjoy ₹2500 worth of Medicine vouchers, redeemable for medicines with home delivery included—because convenience matters.",
            iconSrc: FaPills,
        },
        {
            title: "Home-Based Physiotherapy",
            description:
                "Recover faster with personalized physiotherapy consultations at home, led by certified therapists who tailor treatment to your needs.",
            iconSrc: FaProcedures,
        },
        {
            title: "Pest Control Services",
            description:
                "Protect your home from unwanted guests! So, this plan Includes consultations and eco-safe treatments for kitchen and consultations for full home hygiene.",
            iconSrc: FaBug,
        },
        {
            title: "Personalized Nutritionist Consultations",
            description:
                "Get custom diet plans crafted by certified experts—with long-term follow-up, lifestyle adjustments, and support that works.",
            iconSrc: FaAppleAlt,
        },
        {
            title: "Weight Loss Program (90 Days)",
            description:
                "Transform your fitness journey with structured diets, personalized workouts, weekly tracking, and guidance from our expert panel. Safe, goal-driven, and sustainable.",
            iconSrc: FaWeight,
        },
        {
            title: "Live Fitness, Yoga & Zumba Sessions",
            description:
                "Stay active with unlimited live sessions hosted by certified trainers—energize your body and mind from the comfort of your home.",
            iconSrc: FaRunning,
        },
        {
            title: "Fix Your Problem With Yoga",
            description:
                "Target specific concerns like gut issues, insomnia, stress, and more through guided therapeutic yoga curated by experts.",
            iconSrc: FaYinYang,
        },
        {
            title: "Massive Annual Savings",
            description:
                "Your health should not cost a fortune. Save up to 90% annually with Prepco’s bundled care model, giving you unmatched value on preventive and wellness care.",
            iconSrc: FaMoneyBillWave,
        },
        ]
    },
    {
        planName: "Indian Health Plan",
        enhancedFeatures: [
            {
                title: "Master Health checkup",
                description:
                    "A comprehensive health check-up for all 4members, with each package covering 61test vouchers for complete health assessment. (Add a link that has those 61 tests with details)",
                iconSrc: AiOutlineHeart,
            },
            {
                title: "Out Patient Doctor Consultations",
                description:
                    "Getexpert doctor consultations across multiple specialties—completely cashless and hassle-free.",
                iconSrc: FaStethoscope,
            },
            {
                title: "Dental Outpatient Consultations& Cleaning",
                description:
                    "Get the Smile You Deserve – Enjoy 4 In-Person consultations completely cashless with our exclusive dental care voucher.",
                iconSrc: FaTooth,
            },
            {
                title: "Eye Consultations",
                description:
                    "Stay sharp with expert eye consultations at top partner hospitals. Enjoy cashless visits and clear vision care—all covered under your Prepco plan.",
                iconSrc: FaEye,
            },
            {
                title: "Virtual /Tele General Consultation",
                description:
                    "Unlock exclusive Virtual/Tele OPD vouchers, Discountering consultations with expert general physicians, all from the comfort and convenience of your home.",
                iconSrc: MdOutlineVideoCall,
            },
            {
                title: "MedicineVoucher",
                description:
                    "Get 2 Medicine vouchers, each worth Rs. 500, to use for medicine purchases& home delivery.",
                iconSrc: AiOutlineMedicineBox,
            },
            {
                title: "Home Based Treatment With Consultation (Physiotherapy)",
                description:
                    "Recover in comfort with our Home-Based Physiotherapy Consultations.Expert therapists provide personalized treatment plans right at your doorstep for faster, safer healing.",
                iconSrc: FaPills,
            },
            {
                title: "Pest Control Services",
                description:
                    "Ensure a healthy home with our reliable Pest Control Consultations for home. Safe, eco-friendly treatments to protect your family from unwanted pests and infections.",
                iconSrc: FaBug,
            },
            {
                title: "Nutritionist Consultation",
                description:
                    "Take advantage of the ultimate Discounter—receive personalized diet plans and expert guidance for all members, with continuous follow-up support throughout the year.",
                iconSrc: FaAppleAlt,
            },
            {
                title: "Laboratory Discounts",
                description:
                    "Discover unbeatable Discounters with discounts from 10% to 30% on our radiology and pathology services.",
                iconSrc: FaProcedures,
            },
            {
                title: "Outpatient Procedure discounts",
                description:
                    "The discount of up to 25% on outpatient procedures is an add-on service and is not included as part of the standard plan.",
                iconSrc: FaStethoscope,
            },
            {
                title: "In-patient Discounts",
                description:
                    "The discount of 5 to 20% on inpatient procedures is an optional benefit and isn't covered under the standard plan.",
                iconSrc: FaProcedures,
            },
            {
                title: "Physiotherapy Consultation & Unlimited Home-Based Treatment Discounts",
                description:
                    "Get consultations with expert physiotherapists, plus special discounts on home-based treatments—personalized care to aid your healing and mobility.",
                iconSrc: FaWeight,
            },
            {
                title: "Live Fitness, Yoga & Zumba",
                description:
                    "Stay fit with live fitness, yoga, and Zumba sessions from home!.Led by expert trainers, perfect for all levels—move, stretch, and feel great every day.",
                iconSrc: FaRunning,
            },
            {
                title: "Fix Your Problem With Yoga",
                description:
                    "Heal naturally through yoga—relieve gut issues, insomnia, anxiety, and more with expert-guided sessions tailored to your needs",
                iconSrc: FaYinYang,
            },
            {
                title: "Health Care Annual Savings",
                description: "Save up to 89% on your healthcare expenses.",
                iconSrc: FaMoneyBillWave,
            },
        ]
    },

    {
        planName: "Diamond Health Plan",
        enhancedFeatures: [{
            title: "Master Health Checkup",
            description:
                "A comprehensive health check-up for all 3 members, with each package covering 61test vouchers for complete health assessment. (Add a link that has those 61 tests with details)",
            iconSrc: AiOutlineHeart,
        },
        {
            title: "Laboratory Discounts",
            description:
                "Discover unbeatable Discounters with discounts from 10% to 30% on our radiology and pathology services.",
            iconSrc: FaFlask,
        },
        {
            title: "Outpatient Procedure discounts",
            description:
                "The discount of up to 25% on outpatient procedures is an add-on service and is not included as part of the standard plan.",
            iconSrc: FaStethoscope,
        },
        {
            title: "Out Patient Doctor Consultations",
            description:
                "Getexpert doctor consultations across multiple specialties—completely cashless and hassle-free.",
            iconSrc: FaStethoscope,
        },
        {
            title: "Dental Outpatient Consultations& Cleaning",
            description:
                "Get the Smile You Deserve – Enjoy 4 In-Person consultations completely cashless with our exclusive dental care voucher.",
            iconSrc: FaTooth,
        },
        {
            title: "Physiotherapy Consultation & Unlimited Home-Based Treatment Discounts",
            description:
                "Get consultations with expert physiotherapists, plus special discounts on home-based treatments—personalized care to aid your healing and mobility.",
            iconSrc: FaWeight,
        },
        {
            title: "Eye Consultations",
            description:
                "Stay sharp with expert eye consultations at top partner hospitals. Enjoy cashless visits and clear vision care—all covered under your Prepco plan.",
            iconSrc: FaEye,
        },
        {
            title: "Virtual /Tele General Consultation",
            description:
                "Unlock exclusive Virtual/Tele OPD vouchers, Discountering consultations with expert general physicians, all from the comfort and convenience of your home.",
            iconSrc: MdOutlineVideoCall,
        },
        {
            title: "Medicine Voucher",
            description:
                "Get 1Medicines voucher, worth Rs. 500, to use for medicine purchases& home delivery.",
            iconSrc: AiOutlineMedicineBox,
        },
        {
            title: "Nutritionist Consultation",
            description:
                "Take advantage of the ultimate Discounter—receive personalized diet plans and expert guidance for all members, with continuous follow-up support throughout the year.",
            iconSrc: FaAppleAlt,
        },
        {
            title: "Live Fitness, Yoga & Zumba",
            description:
                "Stay fit with live fitness, yoga, and Zumba sessions from home! Led by expert trainers, perfect for all levels—move, stretch, and feel great every day.",
            iconSrc: FaRunning,
        },
        {
            title: "Health Care Annual Savings",
            description: "Save up to 80% on your healthcare expenses.",
            iconSrc: FaMoneyBillWave,
        },
        ]
    },
    {
        planName: "Platinum Health Plan",
        enhancedFeatures: [
            {
                title: "Master Health Check-up",
                description:
                    "Stay ahead of health issues with 2 Master Health Check-ups, each covering 61 vital blood tests. Delivered right to your doorstep.",
                iconSrc: AiOutlineHeart,
            },
            {
                title: "Lab Discounts",
                description:
                    "Enjoy up to 30% Discount on all lab diagnostics—pathology, radiology, and more—at Prepco’s trusted partner labs.",
                iconSrc: FaFlask,
            },
            {
                title: "Outpatient Discounts",
                description:
                    "Receive up to 25% discounts on outpatient treatments such as minor procedures, therapies, and specialist services at select clinics and hospitals.",
                iconSrc: FaStethoscope,
            },
            {
                title: "Outpatient Doctor Consultations",
                description:
                    "Enjoy 3 in-person OPD vouchers for consultations with doctors across various specialties—completely cashless and effortless.",
                iconSrc: FaStethoscope,
            },
            {
                title: "Dental & Eye Care",
                description:
                    "2 Dental Consultations + 1 Dental Cleaning – keep your smile bright and healthy.1 Eye Consultation to ensure your vision stays sharp and strong",
                iconSrc: FaTooth,
            },
            {
                title: "Virtual/Tele Consultations",
                description:
                    "Stay connected to care, even from home. 3 cashless virtual consultations included—speak to general physician’s online for common concerns, follow-ups, and more.",
                iconSrc: MdOutlineVideoCall,
            },
            {
                title: "Medicine Voucher",
                description:
                    "Get 1 Medicine voucher worth ₹500, redeemable for doorstep delivery of your prescribed medicines—quick, reliable, and convenient.",
                iconSrc: AiOutlineMedicineBox,
            },
            {
                title: "Personalized Diet Consultation",
                description:
                    "Get 1 expert diet consultation with a 6-month follow-up plan. Ideal for weight management, lifestyle changes, and long-term wellness.",
                iconSrc: FaAppleAlt,
            },
            {
                title: "Fitness & Yoga Live Sessions",
                description:
                    "Stay active from home with Live Fitness + Yoga sessions included for 1 Member (6 Months). Train with experts for strength, flexibility, and mindfulness.",
                iconSrc: FaRunning,
            },
            {
                title: "Annual Healthcare Savings",
                description:
                    "Enjoy potential savings of up to ₹16,000 a year through vouchers, discounts, and wellness support.",
                iconSrc: FaMoneyBillWave,
            },
        ]
    },
    {
        planName: "Gold Health Plan",
        enhancedFeatures: [
            {
                title: "Master Health Check-up",
                description:
                    "Includes 1 Master Health Check-up with 61 essential blood tests, delivered at your doorstep. Perfect for early detection and health tracking.",
                iconSrc: AiOutlineHeart,
            },
            {
                title: "Outpatient Doctor Consultations",
                description:
                    "Get 2 in-person OPD consultations for your most common health concerns—no hassle, no extra charges.",
                iconSrc: FaStethoscope,
            },
            {
                title: "Dental & Eye Consultations",
                description:
                    ", 1 Cashless Dental Consultation for routine dental care 1Cashless Eye Consultation to ensure healthy vision with our network partners",
                iconSrc: FaTooth,
            },
            {
                title: "Virtual/Tele Consultations",
                description:
                    "Health concerns from home? No problem. Enjoy 1 virtual doctor consultation with our trusted physicians—simple, private, and convenient.",
                iconSrc: MdOutlineVideoCall,
            },
            {
                title: "Medicine Voucher",
                description:
                    "Enjoy savings with home-delivered medicines worth ₹500 through 1 exclusive Medicines voucher.",
                iconSrc: AiOutlineMedicineBox,
            },
            {
                title: "Personalized Diet Plan",
                description:
                    "Stay on track with 1 expert diet consultation that includes a 3-month follow-up plan for a healthier, fitter lifestyle.",
                iconSrc: FaAppleAlt,
            },
            {
                title: "Laboratory Discounts",
                description:
                    "Get up to 30% Discount on lab diagnostics—ideal for regular checkups and preventive care tests.",
                iconSrc: FaFlask,
            },
            {
                title: "Fitness Live Sessions",
                description:
                    "Stay motivated with Live Fitness Sessions for 1 Member (3 Months). Includes strength, mobility, and cardio-based training from home.",
                iconSrc: FaRunning,
            },
            {
                title: "Annual Healthcare Savings",
                description:
                    "Save up to ₹6,000 annually through bundled services, expert care, and added value.",
                iconSrc: FaMoneyBillWave,
            },
        ]
    }
]
