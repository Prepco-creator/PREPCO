import { StaticImageData } from "next/image";
import { images } from "../../public/assets";

export interface HealthPlan {
    title: string;
    tagline: string;
    description: string;
    membersCount: number;
    keyFeatures: string[];
    ytVideoLinks: {
        tamil: string;
        english: string;
    }
    memberType?: string;
    paymentGatewayLink: string;
    imgSrc: string | StaticImageData;
    duration: number;
    pricing: number;
}

export const plansv2: HealthPlan[] = [
    {
        title: "Ultimate Health Plan",
        tagline: "Good Health Starts Here!",
        membersCount: 5,
        duration: 12,
        imgSrc: images.jpgs.Plan_V2_QuadPro,
        description: "Say hello to Prepco’s Ultimate Health Plan – your complete, cashless, preventive healthcare package. From multi-specialty doctor consultations and doorstep master health checkups to big savings on unlimited hospital services, lab tests, and medicines — we’ve got your health covered that includes Wellness Benefits for body & mindend-to-end.",
        keyFeatures: [
            "Save up to 90% annually (> INR 100000)",
            "26 Cashless Vouchers for Preventive Care",
            "20 Cashless Doctor Consultations (multi-specialty)",
            "Unlimited Discounts on Inpatient Treatments",
            "Unlimited Discounts on OutpatientTreatments",
            "Unlimited Service Discounts on lab Services",
            "Rs.2500/- worth Medicines @door step delivery & 3 Cashless Home Based Physio Treatments",
        ],
        ytVideoLinks: {
            tamil: "",
            english: ""
        },
        paymentGatewayLink: "",
        pricing: 14999
    },
    {
        title: "Indian Health Plan",
        tagline: "Affordable Health. Assured Care.",
        membersCount: 4,
        description: "Presenting the Indian Health Plan by PREPCO – a smart and budget-friendly preventive healthcare package. Enjoy doctor consultations, essential health checkups, exclusive unlimited service discounts on Inpatient and Outpatient Treatments, wellness support, and more — all tailored for families seeking real value and real results.",
        keyFeatures: [
            "Save up to 89% annually (INR 48000)",
            "12 Cashless Vouchers for preventive care",
            "16 Cashless Doctor Consultations (multi-specialty)",
            "Unlimited Discounts on Inpatient Treatments",
            "Unlimited Discounts on OutpatientTreatments",
            "Unlimited Service Discounts on labs & Rs.1000/- worth Medicines @door step delivery",
        ],
        ytVideoLinks: {
            tamil: "",
            english: ""
        },
        paymentGatewayLink: "",
        imgSrc: images.jpgs.Plan_V2_QuadPlan,
        duration: 12,
        pricing: 9999
    },
    {
        title: "Diamond Health Plan",
        tagline: "Premium Health. Exceptional Value.",
        membersCount: 3,
        description: "Introducing the Diamond Health Plan by PREPCO — a premium preventive healthcare package designed for families who seek top-notch wellness, smart healthcare savings, and holistic benefits. From doctor consultations and health checkups to big discounts unlimited Inpatient, Outpatient & Lab Services. This plan delivers excellence and affordability in one powerful Discounting.",
        keyFeatures: [
            "Save up to 80% annually (INR 24,000)",
            "20 Cashless Vouchers for preventive health & wellness care",
            "16+ Doctor Consultations across specialties (OPD & virtual)",
            "Unlimited Outpatient treatments Discounts",
            "Unlimited Inpatient treatments Discounts",
            "Unlimited Laboratory Service & Home-Based Physio Treatment Discounts",
        ],
        ytVideoLinks: {
            tamil: "",
            english: ""
        },
        paymentGatewayLink: "",
        imgSrc: images.jpgs.Plan_V2_DiamondHealthPlan,
        duration: 12,
        pricing: 7999
    },
    {
        title: "Platinum Health Plan",
        tagline: "Small Family, Stronger Health.",
        membersCount: 2,
        description: "Introducing the Platinum Health Plan by PREPCO — your compact yet powerful preventive healthcare package – ideal for couples or small families. Enjoy doctor consultations, Unlimited times Discounts on Lab services, Inpatient Services, Out patient Services, health checkups, Medicines vouchers, wellness benefits, and exclusive discounts on outpatient.",
        keyFeatures: [
            "Save up to 77% annually (Approx. ₹16,000 in healthcare savings)",
            "5 Cashless Vouchers for core Preventive Care",
            "9 Doctor Consultations across specialties",
            "Unlimited Outpatient treatments Discounts",
            "Unlimited Laboratory Service Discount",
        ],
        ytVideoLinks: {
            tamil: "",
            english: ""
        },
        paymentGatewayLink: "",
        imgSrc: images.jpgs.Plan_V2_JustforTwoPLan,
        duration: 6,
        pricing: 5999
    },
    {
        title: "Gold Health Plan",
        tagline: "Your First Step Towards Preventive Health.",
        membersCount: 1,
        description: "Introducing the Gold Health Plan by PREPCO – an essential plan curated for individuals who want to take control of their health proactively. With doctor consultations, Unlimited diagnostic checkups, and wellness sessions, this is the perfect entry point into preventive healthcare.",
        keyFeatures: [
            "Save up to 60% annually (Approx. ₹6,000 in healthcare value)",
            "3 Cashless Vouchers focused on personal preventive care",
            "4 Doctor Consultations (In-person + virtual)",
            "Discounts on Unlimited lab services",
            "Live Fitness Benefits to support your wellness journey",
        ],
        ytVideoLinks: {
            tamil: "",
            english: ""
        },
        paymentGatewayLink: "",
        imgSrc: images.jpgs.Plan_V2_GoldHealthPlan,
        duration: 6,
        pricing: 3999
    },
];
