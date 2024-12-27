import { images } from "../../public/assets";
import { HealthPackageDetails } from "@/types";

const healthPackageDetails: HealthPackageDetails[] = [
    {
        id: "benefit_1",
        title: "Master Health Check-up",
        description: "Two comprehensive master health check-ups included in the package.",
        iconSrc: images.pngs.heartBeatCheck
    },
    {
        id: "benefit_2",
        title: "Physiotherapy Consultation",
        description: "Two consultations with expert physiotherapists for personalized care.",
        iconSrc: images.pngs.physicalTherapy
    },
    {
        id: "benefit_3",
        title: "Nutritionist Consultation (Add-on)",
        description: "Personalized nutritional guidance to help you achieve your goals and maintain a healthy lifestyle.",
        iconSrc: images.pngs.dietian
    },
    {
        id: "benefit_4",
        title: "Dental Consultation",
        description: "Two virtual dental consultations for comprehensive oral health care.",
        iconSrc: images.pngs.dentalInsurance
    },
    {
        id: "benefit_5",
        title: "Medicine Benefit",
        description: "One medicine voucher, each worth Rs 500, delivered conveniently.",
        iconSrc: images.pngs.medicineTablet
    },
    {
        id: "benefit_6",
        title: "Zumba & Exercise Sessions (Add-on)",
        description: "Access online exercise classes for three months after requesting.",
        iconSrc: images.pngs.zumbaSession
    },
    {
        id: "benefit_7",
        title: "Virtual Consultation",
        description: "Virtual physician consultations: expert medical advice from home.",
        iconSrc: images.pngs.virtualConsultation
    },
    {
        id: "benefit_8",
        title: "Laboratory Services",
        description: "Discounts of 10-30% on radiology and pathology services available.",
        iconSrc: images.pngs.microscope
    },
    {
        id: "benefit_9",
        title: "Out Patient Consultation",
        description: "Outpatient consultation with two doctor appointments for diagnosis and treatment.",
        iconSrc: images.pngs.doctorConsultation
    },
    {
        id: "benefit_10",
        title: "Out-Patient Treatment Discounts",
        description: "Up to 25% off on outpatient treatment services. Save now!",
        iconSrc: images.pngs.offer
    }
];


export default healthPackageDetails;