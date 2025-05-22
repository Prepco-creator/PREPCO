import { PlanProps } from "@/types";
import { images, videos } from "../../public/assets";

export const mockData: PlanProps[] = [
  {
    id: 'plan_2',
    title: 'Just for Two Plan ',
    imgSrc: images.pngs.justForTwo,
    tagline: 'Care starts with two',
    description: 'This plan is perfect for two people looking to prioritize their health together. It includes:',
    bigDescription: 'This plan offers a balanced healthcare service for two individuals. It includes a variety of health services, ensuring both members have access to essential care and personalized wellness plans.',
    category: 'semi-annual',
    paymentGatewayLink: "https://com.rpy.club/cop/1qvmlppPGs",
    duration: 6,
    pricing: 9500,
    discountPricing: 4848, // Example discount (optional)
    isSpecial: false,
    videoLinkEnglish: videos.justForTwoPlan_english,
    videoLinkTamil: videos.justForTwoPlan_tamil,
    membersCount: 2,
    featuresDisplay: [
      "Master Health Check-up @ Home",
      "6 Expert Outpatient Consultations - Anytime, Anywhere",
      "Nutritionist Consultation with a 6-Month Personalized Diet Plans",
      "Unlimited Lab Tests & Outpatient Treatments – Your Health, Fully Covered",
      "Live & Recorded Yoga and Fitness Sessions"
    ]
    ,
    features: [
      { id: "feature_9", content: "2 Master Health Check-Up – Free Voucher" },
      { id: "feature_10", content: "1 General OPD Consultation - Free Voucher" },
      { id: "feature_11", content: "2 Virtual General OPD Consultation - Free Vouchers" },
      { id: "feature_12", content: "1 Virtual Dental OPD Consultation - Free Voucher" },
      { id: "feature_13", content: "1 Virtual Physiotherapist Consultation - Free Voucher" },
      { id: "feature_14", content: "1 Free Medicine Voucher - ₹500" },
      { id: "feature_15", content: "Nutritionist Consultation + Diet Chart" },
      { id: "feature_16", content: "Live & Recorded Yoga Sessions : 6-Months - 1 person" },
      { id: "feature_17", content: "Live & Recorded Fitness Sessions : 6-Months - 1 person" },
      { id: "feature_18", content: "Unlimited Laboratory Services - Up To 30% Discount" },
      { id: "feature_19", content: "Unlimited Outpatient Services - Up To 25% Discount" }
    ],
    
  },
  {
    id: "plan_3",
    title: "Tri Me Plan ",
    imgSrc: images.pngs.triMe,
    tagline: "Essential care for three.",
    description: "A balanced plan offering healthcare services for three members.",
    bigDescription: "A balanced plan offering healthcare services for three members. This plan includes a variety of consultations, check-ups, and wellness activities for families or small groups.",
    category: "annual",
    paymentGatewayLink: "https://com.rpy.club/cop/A7Hzhhsg5r",
    duration: 12,
    pricing: 14500,
    discountPricing: 5858,
    isSpecial: true,
    videoLinkEnglish: videos.triMePlan_english,
    videoLinkTamil: videos.triMePlan_tamil,
    membersCount: 3,
    featuresDisplay: [
      "Master Health Check-up @ Home",
      "8 Expert Outpatient Consultations - Anytime, Anywhere",
      "Unlimited Outpatient Treatments — Expert Care without Limits",
      "Diagnostic & Lab Services without Limits — Because Your Health Deserves",
      "Live & Recorded Yoga and Fitness Sessions"
    ],
    
    features: [
      { id: "feature_19", content: "3 Master Health Check-Up – Free Voucher" },
      { id: "feature_20", content: "1 Dental OPD Consultation : 1 Free Voucher" },
      { id: "feature_21", content: "1 General OPD Consultation - Free Vouchers" },
      { id: "feature_22", content: "2 Virtual General OPD Consultation - Free Vouchers" },
      { id: "feature_23", content: "1 Virtual Dental OPD Consultation - Free Voucher" },
      { id: "feature_24", content: "1 Virtual Physiotherapist Consultation - Free Voucher" },
      { id: "feature_25", content: "Nutritionist Consultation + Diet Chart" },
      { id: "feature_26", content: "1 Free Medicine Voucher - ₹500" },
      { id: "feature_27", content: "1 Virtual Dermatologist Consultation - Free Voucher" },
      { id: "feature_28", content: "Live & Recorded Yoga Sessions : 6-Months For 1person" },
      { id: "feature_29", content: "Live & Recorded Fitness Sessions : 6-Months For 1person" },
      { id: "feature_30", content: "Unlimited Laboratory Services - Up To 30% Discount" },
      { id: "feature_31", content: "Unlimited Outpatient Services - Up To 25% Discount" }
    ]
    

  },
  {
    id: 'plan_1',
    title: 'Just For You Plan ',
    imgSrc: images.pngs.justForYou,
    tagline: 'Your health, your priority.',
    description: 'Perfect for individuals seeking to take control of their health.',
    bigDescription: 'This plan includes a comprehensive health package for individuals looking to prioritize their well-being. Solo Care Plan offers personalized healthcare services to ensure you stay on top of your health.',
    category: 'semi-annual',
    paymentGatewayLink: "https://com.rpy.club/cop/a00PCMQeKf",
    duration: 6,
    pricing: 7500,
    discountPricing: 3838, // Example discount (optional)
    isSpecial: true,
    videoLinkEnglish: videos.justForYouPlan_english,
    videoLinkTamil: videos.justForYouPlan_tamil,
    featuresDisplay: [
      "Master Health Check-up @ Home",
      "5 Expert Outpatient Consultations - Anytime, Anywhere",
      "Nutritionist Consultation with Personalized Diet Plans – 6 Months",
      "Medicine Benefits Worth ₹500 @ Door Step",
      "Unlimited Diagnostic & Laboratory Services"
    ],    
    membersCount: 1,
    features: [
      { id: 'feature_1', content: '1 Master Health Check-Up – Free Voucher' },
      { id: 'feature_2', content: '2 Virtual General OPD Consultation - Free Vouchers' },
      { id: 'feature_3', content: '1 Virtual Dental OPD Consultation - Free Voucher' },
      { id: 'feature_4', content: '1 Virtual Physiotherapist Consultation - Free Voucher' },
      { id: 'feature_5', content: '1 Virtual Dermatologist Consultation - Free Voucher' },
      { id: 'feature_6', content: '1 Free Medicine Voucher - ₹500' },
      { id: 'feature_7', content: 'Nutritionist Consultation + Diet Chart' },
      { id: 'feature_8', content: 'Unlimited Laboratory Services - Up To 30% Discount' },
    ]
    ,
  },
  {
    "id": "plan_4",
    "title": "Quad Plan ",
    imgSrc: images.pngs.quadPlan,
    "tagline": "One family. One plan. Complete peace of mind.",
    "description": "A foundational plan designed to cater to families of four, offering essential healthcare services.",
    "bigDescription": "This foundational plan is designed for families of four. Offering essential healthcare services, this plan ensures your family receives the support they need for a healthier lifestyle.",
    "category": "annual",
    paymentGatewayLink: "https://com.rpy.club/cop/6dhlxsDdI9",
    "duration": 12,
    "pricing": 19500,
    "discountPricing": 7777,
    "isSpecial": false,
    "videoLinkEnglish": videos.quadPlan_english,
    "videoLinkTamil": videos.quadPlan_tamil,
    "membersCount": 4,
    "featuresDisplay": [
      "Master Health Check-up @ Home",
      "12 Expert Outpatient Consultations - Anytime, Anywhere",
      "Expert Nutritionist Consultation + Personalized Diet Plan for One",
      "Unlimited Outpatient Services – Expert Treatment",
      "Comprehensive Diagnostic & Lab Services – Unlimited Access"
    ],
   "features": [
  { "id": "feature_32", "content": "4 Master Health Check-Up – Free Voucher" },
  { "id": "feature_33", "content": "2 Dental OPD Consultation – Free Voucher" },
  { "id": "feature_34", "content": "2 General OPD Consultation – Free Vouchers" },
  { "id": "feature_35", "content": "2 Virtual General OPD Consultation – Free Vouchers" },
  { "id": "feature_36", "content": "2 Virtual Dental OPD Consultation – Free Voucher" },
  { "id": "feature_37", "content": "2 Virtual Physiotherapist Consultation – Free Voucher" },
  { "id": "feature_38", "content": "1 Personalized Nutritionist Consultation & Diet Plan" },
  { "id": "feature_39", "content": "1 Free Medicine Voucher – ₹500" },
  { "id": "feature_40", "content": "2 Virtual Dermatologist Consultation – Free Voucher" },
  { "id": "feature_41", "content": "Live & Recorded Yoga Sessions – 6-Months for 1 person" },
  { "id": "feature_42", "content": "Live & Recorded Fitness Sessions – 6-Months for 1 person" },
  { "id": "feature_43", "content": "Live & Recorded Zumba Sessions – 6-Months for 1 person" },
  { "id": "feature_44", "content": "Unlimited Laboratory Services – Up to 30% Discount" },
  { "id": "feature_45", "content": "Unlimited Outpatient Services – Up to 25% Discount" }
]
,

  },


  {
    "id": "plan_5",
    "title": "Shero Plan",
    imgSrc: images.pngs.sheroPlan,
    "tagline": "Tailored care for women’s health.",
    "description": "A plan exclusively designed for individual women seeking personalized healthcare.",
    "bigDescription": "This plan offers comprehensive healthcare services for women, including consultations, wellness sessions, and discounts on various services.",
    "category": "annual",
    paymentGatewayLink: "https://com.rpy.club/cop/WGpnf8UTT4",
    "duration": 12,
    "pricing": 22222,
    "discountPricing": 8888,
    "isSpecial": false,
    "videoLinkEnglish": videos.sheroPlan_english,
    "videoLinkTamil": videos.sheroPlan_tamil,
    "membersCount": 1,
    "featuresDisplay": [
  "4 Master Health Check-up @ Home - Free",
  "10 Expert Outpatient Consultations - Anytime, Anywhere",
  "Avail Professional Dental Cleaning Service Today",
  "Unlimited Access - Comprehensive Diagnostic & Lab Services",
  "Unlock Unlimited Inpatient & Outpatient Treatments – Enjoy Great Discounts"
],
"features": [
  { "id": "feature_46", "content": "3 Master Health Check-Up – Free Voucher" },
  { "id": "feature_47", "content": "1 General OPD Consultation - Free Vouchers" },
  { "id": "feature_48", "content": "2 Virtual General OPD Consultation - Free Vouchers" },
  { "id": "feature_49", "content": "1 Virtual Dental OPD Consultation - Free Voucher" },
  { "id": "feature_50", "content": "3 Virtual Physiotherapist Consultation - Free Voucher" },
  { "id": "feature_51", "content": "1 Professional Dental Cleaning – For a Brighter, Healthier Smile" },
  { "id": "feature_52", "content": "Personalized Nutritionist Consultation & Diet Plan" },
  { "id": "feature_53", "content": "1 Free Medicine Voucher - ₹500" },
  { "id": "feature_54", "content": "2 Virtual Dermatologist Consultation - Free Voucher" },
  { "id": "feature_55", "content": "Live & Recorded Yoga Sessions" },
  { "id": "feature_56", "content": "Live & Recorded Fitness Sessions" },
  { "id": "feature_57", "content": "Live & Recorded Zumba Sessions" },
  { "id": "feature_58", "content": "1 Home-Based Physiotherapy Treatment - Free Voucher" },
  { "id": "feature_59", "content": "Unlimited Laboratory Services - Up To 30% Discount" },
  { "id": "feature_60", "content": "Unlimited Outpatient Services - Up To 25% Discount" },
  { "id": "feature_61", "content": "Unlimited Inpatient Services Up To 25% Discount" }
]

  },
  {
    "id": "plan_6",
    "title": "Quad Pro Plan",
    imgSrc: images.pngs.quadPlanPro,
    "tagline": "Your everyday boost for a healthier, happier family.",
    "description": "This plan supports families in adopting a healthier lifestyle with added benefits like consultations, wellness kits, and more.",
    "bigDescription": "A comprehensive healthcare plan for families, offering extensive services including consultations, treatments, and wellness benefits.",
    "category": "annual",
    paymentGatewayLink: "https://com.rpy.club/cop/o95Pj9Q00L",
    "duration": 12,
    "pricing": 25000,
    "discountPricing": 9999,
    "isSpecial": false,
    "videoLinkEnglish": videos.quadProPlan_english,
    "videoLinkTamil": videos.quadProPlan_tamil,
    "membersCount": 4,
  "featuresDisplay": [
  "4 Master Health Check-up @ Home - Free",
  "16 Expert Outpatient Consultations - Anytime, Anywhere",
  "Expert Nutritionist Consultation + Personalized Diet Plan for Two",
  "Unlimited Access - Comprehensive Diagnostic & Lab Services",
  "Unlimited Inpatient & Outpatient Treatments – Enjoy Great Discounts"
],
"features": [
  { "id": "feature_62", "content": "4 Master Health Check-Up – Free Voucher" },
  { "id": "feature_63", "content": "2 Dental OPD Consultation - Free Voucher" },
  { "id": "feature_64", "content": "2 General OPD Consultation - Free Vouchers" },
  { "id": "feature_65", "content": "4 Virtual General OPD Consultation - Free Vouchers" },
  { "id": "feature_66", "content": "2 Virtual Dental OPD Consultation - Free Voucher" },
  { "id": "feature_67", "content": "3 Virtual Physiotherapist Consultation - Free Voucher" },
  { "id": "feature_68", "content": "2 Personalized Nutritionist Consultation & Diet Plan" },
  { "id": "feature_69", "content": "Complete Kitchen Pest Control – Free Voucher" },
  { "id": "feature_70", "content": "2 Free Medicine Voucher - ₹500" },
  { "id": "feature_71", "content": "2 Virtual Dermatologist Consultation - Free Voucher" },
  { "id": "feature_72", "content": "Live & Recorded Yoga Sessions" },
  { "id": "feature_73", "content": "Live & Recorded Fitness Sessions" },
  { "id": "feature_74", "content": "Live & Recorded Zumba Sessions" },
  { "id": "feature_75", "content": "Unlimited Laboratory Services - Up to 30% Discount" },
  { "id": "feature_76", "content": "Unlimited Outpatient Services - Up to 25% Discount" },
  { "id": "feature_77", "content": "Unlimited Inpatient Services - Up to 25% Discount" }
]


  },
  {
    "id": "plan_7",
    "title": "Complete Wellness Plan",
    imgSrc: images.jpgs.complete,
    "tagline": "Premium care for the family that deserves the best.",
    "description": "This exclusive plan offers extensive healthcare services for families, ensuring optimal health and wellness.",
    "bigDescription": "A top-tier plan for families, covering extensive healthcare services including consultations, treatments, wellness kits, and much more.",
    "category": "annual",
    paymentGatewayLink: "https://com.rpy.club/cop/5DW4e5kUM2",
    "duration": 12,
    "pricing": 32500,
    "discountPricing": 12999,
    "isSpecial": false,
    videoLinkEnglish: videos.completeWellnessPlan_english,
    videoLinkTamil: videos.completeWellnessPlan_tamil,
    "membersCount": 5,
"featuresDisplay": [
  "4 Master Health Check-up @ Home - Free",
  "25 Expert Outpatient Consultations - Anytime, Anywhere",
  "Unlimited - Comprehensive Diagnostic & Lab Services",
  "Unlimited Inpatient & Outpatient Treatments – Enjoy Great Discounts",
  "2 Home-Based Physiotherapy Services - Free Voucher"
],
"features": [
  { "id": "feature_78", "content": "4 Master Health Check-Up – Free Voucher" },
  { "id": "feature_79", "content": "4 Dental OPD Consultation - Free Voucher" },
  { "id": "feature_80", "content": "4 General OPD Consultation - Free Vouchers" },
  { "id": "feature_81", "content": "4 Virtual General OPD Consultation - Free Vouchers" },
  { "id": "feature_82", "content": "4 Virtual Dental OPD Consultation - Free Voucher" },
  { "id": "feature_83", "content": "4 Virtual Physiotherapist Consultation - Free Voucher" },
  { "id": "feature_84", "content": "3 Personalized Nutritionist Consultation & Diet Plan" },
  { "id": "feature_85", "content": "Complete Home Consultation + Kitchen Pest Control" },
  { "id": "feature_86", "content": "4 Free Medicine Voucher - ₹500" },
  { "id": "feature_87", "content": "4 Virtual Dermatologist Consultation - Free Voucher" },
  { "id": "feature_88", "content": "Live & Recorded Yoga Sessions" },
  { "id": "feature_89", "content": "Live & Recorded Fitness Sessions" },
  { "id": "feature_90", "content": "Live & Recorded Zumba Sessions" },
  { "id": "feature_91", "content": "Unlimited Laboratory Services - Up To 30% Discount" },
  { "id": "feature_92", "content": "Unlimited Outpatient Services - Up To 25% Discount" },
  { "id": "feature_93", "content": "Unlimited Inpatient Services Up To 25% Discount" },
  { "id": "feature_94", "content": "2 Home-Based Physiotherapy Treatment - Free Voucher" }
]


  },
  {
    "id": "plan_8",
    "title": "Ultimate Wellness Plan",
    imgSrc: images.jpgs.ultimate,
    "tagline": "All your health essentials, wrapped in one perfect package.",
    "description": "This ultimate plan offers the best care for families, ensuring complete health and wellness coverage.",
    "bigDescription": "most comprehensive plan for families seeking complete care, offering a wide range of benefits and services.",
    "category": "annual",
    paymentGatewayLink: "https://com.rpy.club/cop/KIVibdau5D ",
    "duration": 12,
    "pricing": 37500,
    "discountPricing": 14999,
    "isSpecial": true,
    "videoLinkEnglish": videos.ultimateWellnessPlan_english,
    "videoLinkTamil": videos.ultimateWellnessPlan_tamil,
    "membersCount": 5,
   "featuresDisplay": [
  "Master Health Check-up @ Home – Free: 5",
  "Expert Outpatient Consultations – Anytime, Anywhere: 35",
  "Comprehensive Diagnostic & Lab Services – Unlimited",
  "Inpatient & Outpatient Treatments – Unlimited with Great Discounts",
  "Home-Based Physiotherapy Services – Free Voucher: 3"
]
,
"features": [
  { "id": "feature_95", "content": "5 Master Health Check-Up – Free Voucher" },
  { "id": "feature_96", "content": "5 Dental OPD Consultation – Free Voucher" },
  { "id": "feature_97", "content": "5 General OPD Consultation – Free Voucher" },
  { "id": "feature_98", "content": "5 Virtual General OPD Consultation – Free Voucher" },
  { "id": "feature_99", "content": "5 Virtual Dental OPD Consultation – Free Voucher" },
  { "id": "feature_100", "content": "5 Virtual Physiotherapist Consultation – Free Voucher" },
  { "id": "feature_101", "content": "5 Personalized Nutritionist Consultation & Diet Plan" },
  { "id": "feature_102", "content": "Complete Home Consultation + Kitchen Pest Control" },
  { "id": "feature_103", "content": "5 Free Medicine Voucher – ₹500" },
  { "id": "feature_104", "content": "5 Virtual Dermatologist Consultation – Free Voucher" },
  { "id": "feature_105", "content": "Live & Recorded Yoga Sessions" },
  { "id": "feature_106", "content": "Live & Recorded Fitness Sessions" },
  { "id": "feature_107", "content": "Live & Recorded Zumba Sessions" },
  { "id": "feature_108", "content": "Unlimited Laboratory Services – Up To 30% Discount" },
  { "id": "feature_109", "content": "Unlimited Outpatient Services – Up To 25% Discount" },
  { "id": "feature_110", "content": "Unlimited Inpatient Services – Up To 25% Discount" },
  { "id": "feature_111", "content": "3 Home-Based Physiotherapy Treatment – Free Voucher" }
]


  },
  {
    "id": "plan_9",
    "title": "Mini Me Plan ",
    imgSrc: images.pngs.miniMe,
    "tagline": "Big care for your little one!",
    "description": "A complete wellness plan to keep your child healthy, active, and thriving.",
    "bigDescription": "Designed specifically for kids, this plan ensures their well-being with essential healthcare services, expert consultations, and fun wellness activities.",
    "category": "annual",
    paymentGatewayLink: "https://com.rpy.club/cop/bp2lLDGwrd",
    "duration": 12,
    "pricing": 12500,
    "discountPricing": 4999,
    "isSpecial": false,
    "videoLinkEnglish": videos.miniMePlan_english,
    "videoLinkTamil": videos.miniMePlan_tamil,
    "memberType": "kid",
    "membersCount": 1,
   "featuresDisplay": [
  "10 Virtual Paediatrician Consultations – Anytime, Anywhere",
  "5 Dentist Consultations from Home – Hassle-Free & Professional",
  "Fun & Energetic Kids’ Fitness Sessions – Keep Them Active and Healthy",
  "Kids Nutritionist Consultation + Personalized Diet Chart for Healthy Growth",
  "Expert Dermatologist Consultation for Kids' Skin Health"
]
,
 "features": [
  { "id": "feature_112", "content": "10 Virtual Paediatrician Consultation - Free Vouchers" },
  { "id": "feature_113", "content": "5 Virtual Dental OPD Consultation - Free Voucher" },
  { "id": "feature_114", "content": "1 Professional Dental Cleaning – For a Brighter, Healthier Smile" },
  { "id": "feature_115", "content": "Nutritionist Consultation & Custom Diet Plan for Your Child" },
  { "id": "feature_116", "content": "1 Free Medicine Voucher - ₹500" },
  { "id": "feature_117", "content": "2 Virtual Dermatologist Consultation - Free Voucher" },
  { "id": "feature_118", "content": "Live & Recorded Yoga Sessions for Kids" },
  { "id": "feature_119", "content": "Live & Recorded Fitness Sessions for Kids" },
  { "id": "feature_120", "content": "Live & Recorded Zumba Sessions for Kids" }
]


  },                                    
  {
    "id": "plan_10",
    "title": "Just 50 Plan",
    imgSrc: images.pngs.just50,
    "tagline": "Care, comfort, and convenience for your golden years",
    "description": "A tailored health plan ensuring effortless care and well-being for seniors.",
    "bigDescription": "Specially crafted for senior citizens, this plan offers a combination of home-based treatments, comprehensive health checkups, and expert consultations for a hassle-free healthcare experience.",
    "category": "annual",
    paymentGatewayLink: "https://com.rpy.club/cop/1gzmtfjrxR",
    "duration": 12,
    "pricing": 25500,
    "discountPricing": 9999,
    "isSpecial": false,
    "videoLinkEnglish": videos.just50Plan_english,
    "videoLinkTamil": videos.just50Plan_tamil,
    "memberType": "Senior Citizen",
    "membersCount": 2,
   "featuresDisplay": [
  "4 Master Health Check-up @ Home - Free",
  "14 Expert Outpatient Consultations - Anytime, Anywhere",
  "4 Home-Based Physiotherapy Services - Free Voucher",
  "Unlimited Outpatient Treatments and Lab Services – Enjoy Great Discounts",
  "In-Home Physiotherapy Sessions with Exclusive Discounts"
],

   "features": [
  { "id": "feature_121", "content": "4 Master Health Check-Up – Free Voucher" },
  { "id": "feature_122", "content": "2 Dental OPD Consultation - Free Voucher" },
  { "id": "feature_123", "content": "2 General OPD Consultation - Free Vouchers" },
  { "id": "feature_124", "content": "4 Virtual General OPD Consultation - Free Vouchers" },
  { "id": "feature_125", "content": "2 Virtual Dental OPD Consultation - Free Voucher" },
  { "id": "feature_126", "content": "4 Virtual Physiotherapist Consultation - Free Voucher" },
  { "id": "feature_127", "content": "2 Personalized Nutritionist Consultation & Diet Plan" },
  { "id": "feature_128", "content": "2 Free Medicine Voucher - ₹500" },
  { "id": "feature_129", "content": "4 Home-Based Physiotherapy Treatment - Free Voucher" },
  { "id": "feature_130", "content": "Live & Recorded Yoga Sessions" },
  { "id": "feature_131", "content": "Unlimited Laboratory Services - Up To 30% Discount" },
  { "id": "feature_132", "content": "Unlimited Outpatient Services - Up To 25% Discount" },
  { "id": "feature_133", "content": "Unlimited Home-Based Physiotherapy - Exclusive Discounts" }
]


  }
];



export default mockData;

