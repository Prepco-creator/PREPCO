import React from "react";
import ContactForm from "./ContactForm";
import CTA from "../comman/CTA";
import { images } from "../../../public/assets";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row gap-8 px-8 lg:px-12 py-12 pb-20 text-left justify-start mb-16 lg:mb-0">
      <section className="flex-1 flex flex-col gap-4 items-start">
        <div className="flex flex-row gap-1 items-center justify-start">
          <div className="w-2 h-3 bg-accent-2 rounded-full"></div>
          <div className="w-3 h-3 bg-accent-1 rounded-full"></div>
          <div className="w-4 h-4 bg-primary rounded-full"></div>
          <h5 className="text-custom-20-bold lg:text-custom-24 font-normal">
            Contact Us
          </h5>
          <div className="w-4 h-4 bg-primary rounded-full"></div>
          <div className="w-3 h-3 bg-accent-1 rounded-full"></div>
          <div className="w-2 h-3 bg-accent-2 rounded-full"></div>
        </div>
        <h1 className="text-custom-32 lg:text-custom-48-bold capitalize bg-custom-gradient bg-clip-text text-transparent">
          Get in Touch with Prepco
        </h1>
        <div className="space-y-4">
          <div className="flex flex-row gap-2 items-center">
            <Image
              width={48}
              height={48}
              src={images.pngs.phoneIcon}
              alt="prepco-phone"
              className="hover:-translate-y-2 transition-transform duration-200"
            />
            <p className="text-custom-16 lg:text-custom-20 text-primary">
              +98 928 82 929
            </p>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <Image
              width={48}
              height={48}
              src={images.pngs.mailIcon}
              alt="prepco-mail"
              className="hover:-translate-y-2 transition-transform duration-200"
            />
            <p className="text-custom-16 lg:text-custom-20 text-primary">
              xyz@company.com
            </p>
          </div>
        </div>
        <p className="text-secondaryDark ztext-custom-16 lg:text-custom-20">
          Got questions? We’ve got answers. Let’s make health and wellness
          easy—reach out to us today
        </p>
      </section>
      <section className="flex-1">
        <ContactForm />
      </section>
      <CTA className="bg-white absolute w-11/12 bottom-[-25%] left-1/2 transform -translate-x-1/2 mx-auto my-8 rounded-[40px] lg:rounded-full shadow-xl" />
    </section>
  );
};

export default HeroSection;
