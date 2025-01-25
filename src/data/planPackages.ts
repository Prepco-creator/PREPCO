import { PlanServices } from "@/types";
import { images } from "../../public/assets";


const planServices: PlanServices[] = [
    {
        planId: "plan_1",
        services: [
            {
                title: "MASTER HEALTHCHECKUP",
                description: "Delve deeper into your health with a 61-blood test package, including essential assessments like lipid profile, liver & kidney functions, thyroid, and CBC.",
                iconSrc: images.pngs.heartBeatCheck
            },
            {
                title: "Virtual /Tele General Consultation",
                description: "Unlock two Virtual/Tele OPD vouchers for consultations with expert general physicians from the comfort of your home.",
                iconSrc: images.pngs.virtualConsultation
            },
            {
                title: "Dental Consultation",
                description: "Receive one dental voucher for a complimentary virtual/tele consultation with an expert dental professional.",
                iconSrc: images.pngs.dentalInsurance
            },
            {
                title: "Physiotherapy Consultation",
                description: "One virtual consultation with an expert physiotherapist for personalized care.",
                iconSrc: images.pngs.physicalTherapy
            },
            {
                title: "Nutrition Consultation",
                description: "Transform your lifestyle with personalized diet strategies and ongoing support from a dedicated dietitian for six months, plus one virtual consultation for guidance.",
                iconSrc: images.pngs.dietian
            },

            {
                title: "Pharmacy Voucher",
                description: "One pharmacy voucher worth Rs. 500 to order medicines online.",
                iconSrc: images.pngs.pharmacy
            },
            {
                title: "Dermatologist Consultation",
                description: "Avail one free virtual consultation with an expert dermatologist.",
                iconSrc: images.pngs.dermatology
            }
        ]
    },
    {
        planId: "plan_2",
        services: [
            {
                title: "MASTER HEALTHCHECKUP",
                description: "Two 62-test blood voucher encompassing a liver profile, thyroid function test, lipid profile, renal function test, complete hemogram (CBC), iron deficiency.",
                iconSrc: images.pngs.heartBeatCheck
            },
            {
                title: "General OPD Consultation",
                description: "Receive an exclusive 1-OPD voucher to consult with top general physicians at our partner hospitals.",
                iconSrc: images.pngs.doctorConsultation
            },
            {
                title: "Virtual /Tele General Consultation",
                description: "Seize the opportunity to consult with general physicians virtually using our exclusive Two OPD vouchers.",
                iconSrc: images.pngs.virtualConsultation
            },
            {
                title: "Dental Consultation",
                description: "Receive one dental voucher for a complimentary virtual/tele consultation with an expert dental professional.",
                iconSrc: images.pngs.dentalInsurance
            },
            {
                title: "Physiotherapy Consultation",
                description: "One virtual consultation with an expert physiotherapist for personalized care.",
                iconSrc: images.pngs.physicalTherapy
            },
            {
                title: "Nutritionist Consultation",
                description: "Receive a personalized diet plan for six months and one virtual consultation with a professional nutritionist to achieve your health goals.",
                iconSrc: images.pngs.nutritionist
            },

            {
                title: "Pharmacy Voucher",
                description: "One pharmacy voucher worth Rs. 500 to order medicines online.",
                iconSrc: images.pngs.pharmacy
            },
            {
                title: "Yoga Sessions",
                description: "Get access to Online/Recorded Yoga sessions for 6 months for one person, along with numerous benefits including improved flexibility, reduced stress, and enhanced overall well-being.",
                iconSrc: images.pngs.yogaSessions
            },
            {
                title: "Fitness Sessions",
                description: "Get access to online/recorded fitness sessions for 6 months, available for one person, with benefits including improved health, strength, and flexibility.",
                iconSrc: images.pngs.fitness
            },

            {
                title: "Laboratory Discounts",
                description: "Enjoy discounts ranging from 10% to 30% on radiology and pathology services, offering significant savings on diagnostic tests.",
                iconSrc: images.pngs.microscope
            },
            {
                title: "Outpatient procedure discounts (Add on)",
                description: "The discount of up to 25% on outpatient procedures is an add-on service and is not included as part of the standard plan.",
                iconSrc: images.pngs.offer
            }
        ]
    },
    {
        planId: "plan_3",
        services: [
            {
                title: "MASTER HEALTHCHECKUP",
                description: "Unlock a thorough health assessment with a 61-blood test voucher for all members. This comprehensive package includes tests for liver function, thyroid health, lipid profile, renal function, complete blood count, iron deficiency, and more.",
                iconSrc: images.pngs.heartBeatCheck
            },
            {
                title: "General Consultation",
                description: "Receive an exclusive 1-OPD voucher to consult with top general physicians at our partner hospitals.",
                iconSrc: images.pngs.doctorConsultation
            },
            {
                title: "Virtual /Tele General Consultation",
                description: "Unlock two Virtual/Tele OPD vouchers for consultations with expert general physicians from the comfort of your home.",
                iconSrc: images.pngs.virtualConsultation
            },
            {
                title: "Dental Consultation",
                description: "Receive one dental voucher for an in-person consultation and an additional voucher for a complimentary virtual/tele consultation with an expert dental professional.",
                iconSrc: images.pngs.dentalInsurance
            },
            {
                title: "Physiotherapy Consultation",
                description: "Enjoy a virtual consultation with an expert physiotherapist for personalized care and tailored benefits.",
                iconSrc: images.pngs.physicalTherapy
            },
            {
                title: "Nutritionist Consultation",
                description: "Embark on a transformative journey with customized diet plans, expert guidance, and six months of dedicated follow-ups, plus one virtual consultation to kick start your wellness.",
                iconSrc: images.pngs.nutritionist
            },
            {
                title: "Pharmacy Voucher",
                description: "One pharmacy voucher worth Rs. 500 to order medicines online.",
                iconSrc: images.pngs.pharmacy
            },

            {
                title: "Dermatologist Consultation",
                description: "Get one complimentary virtual consultation with an expert Dermatologist and enjoy the associated benefits.",
                iconSrc: images.pngs.dermatology
            },
            {
                title: "Yoga Sessions",
                description: "Get access to Online/Recorded Yoga sessions for 6 months for one person, along with numerous benefits including improved flexibility, reduced stress, and enhanced overall well-being.",
                iconSrc: images.pngs.yogaSessions
            },
            {
                title: "Fitness Sessions",
                description: "Get access to online/recorded fitness sessions for 6 months, available for one person, with benefits including improved health, strength, and flexibility.",
                iconSrc: images.pngs.fitness
            },

            {
                title: "Laboratory Discounts",
                description: "Enjoy discounts ranging from 10% to 30% on radiology and pathology services, offering significant savings on diagnostic tests.",
                iconSrc: images.pngs.microscope
            },
            {
                title: "Outpatient procedure discounts (Add on)",
                description: "The discount of up to 25% on outpatient procedures is an add-on service and is not included as part of the standard plan.",
                iconSrc: images.pngs.offer
            },

            {
                title: "Health Care Annual Costs",
                description: "Save up to 30% on your family's healthcare expenses.",
                iconSrc: images.pngs.healthCare
            }
        ]
    },
    {
        planId: "plan_4",
        services: [
            {
                title: "MASTER HEALTHCHECKUP",
                description: "Take a closer look at your health by opting for a detailed 61-blood test package, which includes tests for lipid profile, liver & kidney functions, iron levels, thyroid health, diabetes, CBC.",
                iconSrc: images.pngs.heartBeatCheck
            },
            {
                title: "General Consultation",
                description: "Enjoy two General OPD vouchers for family consultations with leading doctors.",
                iconSrc: images.pngs.heartBeatCheck
            },
            {
                title: "Virtual /Tele General Consultation",
                description: "Unlock two Virtual/Tele OPD vouchers for consultations with expert general physicians from the comfort of your home.",
                iconSrc: images.pngs.virtualConsultation
            },
            {
                title: "Dental Consultation",
                description: "Achieve a brighter smile with our complimentary dental voucher, which includes two in-person consultations with One Cleaning and two expert virtual consultations.",
                iconSrc: images.pngs.dentalInsurance
            },
            {
                title: "Physiotherapy Consultation",
                description: "Empower your wellness journey with two Virtual Physiotherapy Consultation Vouchers, allowing you to achieve your goals remotely.",
                iconSrc: images.pngs.physicalTherapy
            },
            {
                title: "Nutritionist Consultation",
                description: "Achieve excellent results with personalized diet plans for one year, along with expert guidance tailored to one individual health goals.",
                iconSrc: images.pngs.nutritionist
            },
            {
                title: "Pharmacy Voucher",
                description: "One pharmacy voucher worth Rs. 500 to order medicines online.",
                iconSrc: images.pngs.pharmacy
            },
            {
                title: "Dermatologist Consultation",
                description: "Get two complimentary virtual consultations with an expert Dermatologist and enjoy the associated benefits.",
                iconSrc: images.pngs.dermatology
            },
            {
                title: "Yoga Sessions",
                description: "Enjoy 6 months of access to online or recorded yoga sessions for one person, offering benefits like increased flexibility, stress relief, and overall wellness improvement.",
                iconSrc: images.pngs.yogaSessions
            },
            {
                title: "Fitness Sessions",
                description: "Get access to online/recorded fitness sessions for 6 months, available for one person, with benefits including improved health, strength, and flexibility.",
                iconSrc: images.pngs.fitness
            },
            {
                title: "Zumba Sessions",
                description: "Get 6 months of Zumba online sessions for one person, boosting fitness, endurance, coordination, mood, and overall health and energy levels.",
                iconSrc: images.pngs.zumbaSession
            },
            {
                title: "Laboratory Discounts",
                description: "Grab exclusive discounts of 10% to 30% on top-quality radiology and pathology services.",
                iconSrc: images.pngs.microscope
            },
            {
                title: "Outpatient procedure discounts (Add on)",
                description: "The discount of up to 25% on outpatient procedures is an add-on service and is not included as part of the standard plan.",
                iconSrc: images.pngs.offer
            },
            {
                title: "Health Care Annual Costs",
                description: "Prepare yourself for discounts of up to 40% on your yearly healthcare costs.",
                iconSrc: images.pngs.healthCare
            }
        ]
    },
    {
        planId: "plan_5",
        services: [
            {
                title: "MASTER HEALTHCHECKUP",
                description: "Take a deep dive into your health with three different blood test vouchers, available every 4 months throughout the year.",
                iconSrc: images.pngs.heartBeatCheck
            },
            {
                title: "Virtual /Tele General Consultation",
                description: "Unlock two Virtual/Tele OPD vouchers for consultations with expert general physicians from the comfort of your home.",
                iconSrc: images.pngs.virtualConsultation
            },
            {
                title: "Dental Consultation",
                description: "Enjoy a virtual dental voucher for expert oral care consultations, offering convenient, accessible, and cost-effective care from home.",
                iconSrc: images.pngs.dentalInsurance
            },
            {
                title: "Physiotherapy Consultation",
                description: "Access three virtual consultations with a professional physiotherapist, delivering individualized care and tailored solutions to support your recovery.",
                iconSrc: images.pngs.physicalTherapy
            },
            {
                title: "Nutritionist Consultation",
                description: "Personalized diet plans empower women with improved health, increased energy, better weight management, and enhanced confidence in their well-being.",
                iconSrc: images.pngs.nutritionist
            },
            {
                title: "Pharmacy Voucher",
                description: "One pharmacy voucher worth Rs. 500 to order medicines online.",
                iconSrc: images.pngs.pharmacy
            },
            {
                title: "Dermatologist Consultation",
                description: "Get two complimentary virtual consultations with an expert Dermatologist and enjoy the associated benefits.",
                iconSrc: images.pngs.dermatology
            },
            {
                title: "Yoga Sessions",
                description: "A year of access to online or recorded yoga sessions boosts women’s flexibility, strength, mental clarity, and supports overall well-being.",
                iconSrc: images.pngs.yogaSessions
            },
            {
                title: "Yoga Therapy",
                description: "The package offers three months of specialized yoga sessions designed to target and resolve a specific ailment.",
                iconSrc: images.pngs.yogaTherapy
            },
            {
                title: "Fitness Sessions",
                description: "Enjoy one year of online/recorded fitness sessions, enhancing your health, strength, flexibility, and overall well-being as a woman.",
                iconSrc: images.pngs.fitness
            },
            {
                title: "In-patient Discounts (Add on)",
                description: "The discount of 5% to 20% on inpatient procedures is an optional benefit and isn't covered under the standard plan.",
                iconSrc: images.pngs.offer
            },
            {
                title: "Zumba Sessions",
                description: "Get 1 year of Zumba online sessions for women, enhancing fitness, endurance, coordination, mood, energy, and overall health.",
                iconSrc: images.pngs.zumbaSession
            },
            {
                title: "Laboratory Discounts",
                description: "Experience fantastic deals with discounts ranging from 10% to 30% on radiology and pathology services.",
                iconSrc: images.pngs.microscope
            },
            {
                title: "Outpatient procedure discounts (Add on)",
                description: "The discount of up to 25% on outpatient procedures is an add-on service and is not included as part of the standard plan.",
                iconSrc: images.pngs.offer
            },
            {
                title: "Health Care Annual Costs",
                description: "Feel the relief of slashing your annual healthcare expenses by up to 40%.",
                iconSrc: images.pngs.healthCare
            }
        ]
    },
    {
        planId: "plan_6",
        services: [
            {
                title: "MASTER HEALTHCHECKUP",
                description: "Ensure your loved ones' health is fully assessed with our 84-test package for four members, covering lipid profile, liver, kidney, thyroid, iron, and CBC.",
                iconSrc: images.pngs.heartBeatCheck
            },
            {
                title: "Virtual /Tele General Consultation",
                description: "Unlock Four Virtual/Tele OPD vouchers for consultations with expert general physicians from the comfort of your home.",
                iconSrc: images.pngs.virtualConsultation
            },
            {
                title: "Dental Consultation",
                description: "Enhance your smile with our complimentary dental voucher, offering two in-person consultations, two professional cleanings, and two expert virtual consultations.",
                iconSrc: images.pngs.dentalInsurance
            },
            {
                title: "Physiotherapy Consultation",
                description: "Access three virtual consultations with a professional physiotherapist, delivering individualized care and tailored solutions to support your recovery.",
                iconSrc: images.pngs.physicalTherapy
            },
            {
                title: "Nutritionist Consultation",
                description: "Access expert guidance and bespoke diet plans for two individuals, along with consistent follow-up care throughout the year.",
                iconSrc: images.pngs.nutritionist
            },
            {
                title: "Pharmacy Voucher",
                description: "Get two pharmacy vouchers, each worth Rs. 500, to use for online medicine purchases.",
                iconSrc: images.pngs.pharmacy
            },
            {
                title: "Dermatologist Consultation",
                description: "Receive two free virtual consultations with an expert dermatologist and take advantage of the related benefits.",
                iconSrc: images.pngs.dermatology
            },
            {
                title: "Pest Control",
                description: "Receive a pest control consultation along with a general kitchen cleaning to ensure a clean, pest-free environment.",
                iconSrc: images.pngs.pestControl
            },
            {
                title: "Yoga Sessions",
                description: "Enjoy a year of access to online or recorded yoga sessions for one, enhancing flexibility, strength, mental clarity, and supporting overall well-being.",
                iconSrc: images.pngs.yogaSessions
            },
            {
                title: "Yoga Therapy",
                description: "The package offers Six months of specialized yoga sessions designed to target and resolve a specific ailment.",
                iconSrc: images.pngs.yogaTherapy
            },
            {
                title: "Fitness Sessions",
                description: "Enjoy one year of online/recorded fitness sessions, enhancing your health, strength, flexibility, and overall well-being.",
                iconSrc: images.pngs.fitness
            },
            {
                title: "Zumba Sessions",
                description: "Access one year of online Zumba sessions for one person, improving fitness, endurance, coordination, mood, energy levels, and overall health.",
                iconSrc: images.pngs.zumbaSession
            },
            {
                title: "Laboratory Discounts",
                description: "Enjoy discounts ranging from 10% to 30% on radiology and pathology services, offering significant savings on diagnostic tests.",
                iconSrc: images.pngs.microscope
            },
            {
                title: "In-patient Discounts (Add on)",
                description: "The discount of 5% to 20% on inpatient procedures is an optional benefit and isn't covered under the standard plan.",
                iconSrc: images.pngs.offer
            },
            {
                title: "Outpatient procedure discounts (Add on)",
                description: "The discount of up to 25% on outpatient procedures is an add-on service and is not included as part of the standard plan.",
                iconSrc: images.pngs.offer
            },
            {
                title: "Health Care Annual Costs",
                description: "Save big — up to 60% off on your family’s annual healthcare costs.",
                iconSrc: images.pngs.healthCare
            }
        ]
    },
    {
        planId: "plan_7",
        services: [
            {
                title: "MASTER HEALTHCHECKUP",
                description: "Equip yourself with a comprehensive understanding of your health through a 62-blood test package, covering lipid profile, liver and kidney functions, thyroid, iron levels, diabetes, and CBC.",
                iconSrc: images.pngs.heartBeatCheck
            },
            {
                title: "Virtual /Tele General Consultation",
                description: "Receive four exclusive Virtual/Tele OPD vouchers for consultations with expert general physicians, all from the comfort of your home.",
                iconSrc: images.pngs.virtualConsultation
            },
            {
                title: "Dental Consultation",
                description: "Enhance your smile with our complimentary dental voucher, offering Four in-person consultations, three professional cleanings, and Four expert virtual consultations.",
                iconSrc: images.pngs.dentalInsurance
            },
            {
                title: "Physiotherapy Consultation",
                description: "Maximize your wellness potential with Four Virtual Physiotherapy Consultation Vouchers, designed to support you remotely.",
                iconSrc: images.pngs.physicalTherapy
            },
            {
                title: "Nutritionist Consultation",
                description: "Receive personalized diet plans and expert guidance for three individuals, accompanied by regular follow-up support throughout the year.",
                iconSrc: images.pngs.nutritionist
            },
            {
                title: "Pharmacy Voucher",
                description: "Get Four pharmacy vouchers, each worth Rs. 500, to use for online medicine purchases.",
                iconSrc: images.pngs.pharmacy
            },
            {
                title: "Dermatologist Consultation",
                description: "Unlock four free virtual consultations with an expert dermatologist and take advantage of the related benefits.",
                iconSrc: images.pngs.dermatology
            },
            {
                title: "Pest Control",
                description: "Receive a pest control consultation along with a general kitchen cleaning to ensure a clean, pest-free environment.",
                iconSrc: images.pngs.pestControl
            },
            {
                title: "Yoga Sessions",
                description: "Enjoy a year of access to online or recorded yoga sessions for one, enhancing flexibility, strength, mental clarity, and supporting overall well-being.",
                iconSrc: images.pngs.yogaSessions
            },
            {
                title: "Yoga Therapy",
                description: "A valuable opportunity to target and alleviate two specific ailments through these specialized yoga sessions.",
                iconSrc: images.pngs.yogaTherapy
            },
            {
                title: "Fitness Sessions",
                description: "Enjoy one year of online/recorded fitness sessions, enhancing your health, strength, flexibility, and overall well-being.",
                iconSrc: images.pngs.fitness
            },
            {
                title: "Zumba Sessions",
                description: "Access one year of online Zumba sessions for one person, improving fitness, endurance, coordination, mood, energy levels, and overall health.",
                iconSrc: images.pngs.zumbaSession
            },
            {
                title: "Laboratory Discounts",
                description: "Enjoy discounts ranging from 10% to 30% on radiology and pathology services, offering significant savings on diagnostic tests.",
                iconSrc: images.pngs.microscope
            },
            {
                title: "In-patient Discounts (Add on)",
                description: "The discount of 5 to 20% on inpatient procedures is an optional benefit and isn't covered under the standard plan.",
                iconSrc: images.pngs.offer
            },
            {
                title: "Outpatient procedure discounts (Add on)",
                description: "The discount of up to 25% on outpatient procedures is an add-on service and is not included as part of the standard plan.",
                iconSrc: images.pngs.offer
            },
            {
                title: "Health Care Annual Costs",
                description: "Cut down on your family's health expenses by up to 70%.",
                iconSrc: images.pngs.healthCare
            }
        ]
    },
    {
        planId: "plan_8",
        services: [
            {
                title: "MASTER HEALTHCHECKUP",
                description: "Ultimately, a comprehensive health check-up for all members, with each package covering 84 test vouchers for complete health assessment.",
                iconSrc: images.pngs.heartBeatCheck
            },
            {
                title: "Virtual /Tele General Consultation",
                description: "Unlock five exclusive Virtual/Tele OPD vouchers, offering consultations with expert general physicians, all from the comfort and convenience of your home.",
                iconSrc: images.pngs.virtualConsultation
            },
            {
                title: "Dental Consultation",
                description: "Enhance your smile with our complimentary dental voucher, offering five in-person consultations, four professional cleanings, and five expert virtual consultations.",
                iconSrc: images.pngs.dentalInsurance
            },
            {
                title: "Physiotherapy Consultation",
                description: "Access five virtual consultations with a professional physiotherapist, delivering individualized care and tailored solutions to support your recovery.",
                iconSrc: images.pngs.physicalTherapy
            },
            {
                title: "Nutritionist Consultation",
                description: "Take advantage of the ultimate offer—receive personalized diet plans and expert guidance for all members, with continuous follow-up support throughout the year.",
                iconSrc: images.pngs.nutritionist
            },
            {
                title: "Pharmacy Voucher",
                description: "Get five pharmacy vouchers, each worth Rs. 500, to use for online medicine purchases.",
                iconSrc: images.pngs.pharmacy
            },
            {
                title: "Dermatologist Consultation",
                description: "Unlock five free virtual consultations with an expert dermatologist and take advantage of the related benefits.",
                iconSrc: images.pngs.dermatology
            },
            {
                title: "Pest Control",
                description: "Receive a pest control consultation along with a general kitchen cleaning to ensure a clean, pest-free environment.",
                iconSrc: images.pngs.pestControl
            },
            {
                title: "Yoga Sessions",
                description: "Enjoy a year of access to online or recorded yoga sessions, enhancing flexibility, strength, mental clarity, and supporting overall well-being.",
                iconSrc: images.pngs.yogaSessions
            },
            {
                title: "Yoga Therapy",
                description: "A valuable opportunity to target and alleviate two specific ailments through these specialized yoga sessions.",
                iconSrc: images.pngs.yogaTherapy
            },
            {
                title: "Fitness Sessions",
                description: "Enjoy one year of online/recorded fitness sessions, enhancing your health, strength, flexibility, and overall well-being.",
                iconSrc: images.pngs.fitness
            },
            {
                title: "Zumba Sessions",
                description: "Access one year of online Zumba sessions, improving fitness, endurance, coordination, mood, energy levels, and overall health.",
                iconSrc: images.pngs.zumbaSession
            },
            {
                title: "Laboratory Discounts",
                description: "Discover unbeatable offers with discounts from 10% to 30% on our radiology and pathology services.",
                iconSrc: images.pngs.microscope
            },
            {
                title: "In-patient Discounts (Add on)",
                description: "The discount of 5 to 20% on inpatient procedures is an optional benefit and isn't covered under the standard plan.",
                iconSrc: images.pngs.offer
            },
            {
                title: "Outpatient procedure discounts (Add on)",
                description: "The discount of up to 25% on outpatient procedures is an add-on service and is not included as part of the standard plan.",
                iconSrc: images.pngs.offer
            },
            {
                title: "Health Care Annual Costs",
                description: "Save up to 80% on your healthcare expenses.",
                iconSrc: images.pngs.healthCare
            }
        ]
    },
    {
        planId: "plan_9",
        services: [
            {
                title: "Nutritionist Consultation With Diet Plan",
                description: "Experience remarkable improvements in your child’s health with customized meal plans and expert guidance, tailored to meet their specific needs for one year.",
                iconSrc: images.pngs.nutritionist
            },
            {
                title: "Virtual /Tele General Consultation",
                description: "Get access to ten exclusive Virtual/Tele OPD vouchers, offering monthly consultations with general physicians to support your kid’s healthcare.",
                iconSrc: images.pngs.virtualConsultation
            },
            {
                title: "Dental Consultation",
                description: "Enhance your kid’s smile with our complimentary dental voucher, one professional cleaning, and five expert virtual consultations.",
                iconSrc: images.pngs.dentalInsurance
            },
            {
                title: "Pharmacy Voucher",
                description: "Get one pharmacy voucher worth Rs. 500 to use for online medicine purchases.",
                iconSrc: images.pngs.pharmacy
            },
            {
                title: "Dermatologist Consultation",
                description: "Take advantage of two complimentary virtual consultations with a dermatologist and access benefits for children.",
                iconSrc: images.pngs.dermatology
            },
            {
                title: "Yoga Sessions",
                description: "Kids can enjoy a variety of benefits with one year of access to online or recorded yoga sessions, including enhancing flexibility, strength, and mental clarity.",
                iconSrc: images.pngs.yogaSessions
            },
            {
                title: "Fitness Sessions",
                description: "Enjoy one year of online/recorded fitness sessions designed to improve your child's health, strength, flexibility, and overall well-being.",
                iconSrc: images.pngs.fitness
            },
            {
                title: "Zumba Sessions",
                description: "Access one year of online Zumba sessions, boosting your child’s fitness, endurance, coordination, mood, energy levels, and overall health.",
                iconSrc: images.pngs.zumbaSession
            },
            {
                title: "Laboratory Discounts",
                description: "Discover unbeatable offers with discounts from 10% to 30% on our radiology and pathology services.",
                iconSrc: images.pngs.microscope
            },
            {
                title: "Health Care Annual Costs",
                description: "Save up to 40% on your kid’s healthcare expenses.",
                iconSrc: images.pngs.healthCare
            }
        ]
    },
    {
        planId: "plan_10",
        services: [
            {
                title: "MASTER HEALTHCHECKUP",
                description: "A comprehensive health check-up for two members, with each package covering 62 test vouchers for a complete health assessment.",
                iconSrc: images.pngs.heartBeatCheck
            },
            {
                title: "Virtual /Tele General Consultation",
                description: "Unlock four exclusive Virtual/Tele OPD vouchers, offering consultations with expert general physicians from the comfort of your home.",
                iconSrc: images.pngs.virtualConsultation
            },
            {
                title: "Dental Consultation",
                description: "Let your smile sparkle with the help of a virtual dental voucher, offering expert care and guidance to keep your teeth healthy and radiant.",
                iconSrc: images.pngs.dentalInsurance
            },
            {
                title: "Physiotherapy Consultation",
                description: "Access four virtual consultations with a professional physiotherapist, delivering individualized care and tailored solutions to support your recovery.",
                iconSrc: images.pngs.physicalTherapy
            },
            {
                title: "Nutritionist Consultation",
                description: "Receive personalized diet plans and expert guidance for all members, with continuous follow-up support throughout the year.",
                iconSrc: images.pngs.nutritionist
            },
            {
                title: "Pharmacy Voucher",
                description: "Get two pharmacy vouchers, each worth Rs. 500, to use for online medicine purchases.",
                iconSrc: images.pngs.pharmacy
            },
            {
                title: "Yoga Sessions",
                description: "Enjoy a year of access to online or recorded yoga sessions, enhancing flexibility, strength, mental clarity, and supporting overall well-being.",
                iconSrc: images.pngs.yogaSessions
            },
            {
                title: "Home-Based Treatments",
                description: "Home-based treatment services offer convenience and comfort, including physiotherapy, acupuncture, and Varma therapy, to support recovery, pain relief, and overall well-being.",
                iconSrc: images.pngs.homeCare
            },
            {
                title: "Laboratory Discounts",
                description: "Discover unbeatable offers with discounts from 10% to 30% on our radiology and pathology services.",
                iconSrc: images.pngs.microscope
            },
            {
                title: "Home-Based Treatment Discounts",
                description: "Enjoy discounts on home-based physiotherapy treatments, providing convenience, personalized care, pain relief, and enhanced recovery in the comfort of your home.",
                iconSrc: images.pngs.offer
            },
            {
                title: "Health Care Annual Costs",
                description: "Save up to 80% on your healthcare expenses.",
                iconSrc: images.pngs.healthCare
            }
        ]
    }

];


export default planServices;



