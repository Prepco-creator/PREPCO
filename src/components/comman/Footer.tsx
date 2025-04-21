import Image from "next/image";
import React from "react";
import { images } from "../../../public/assets";
import Link from "next/link";
import { socialMediaLinks } from "@/data/comman";
import { socialMediaLinksType } from "@/types";

const Footer = () => {
  return (
    <footer className="bg-primary py-4 text-secondaryLight">
      <div className="px-4 sm:px-4 lg:px-8 lg:py-7">
        {/* Links Section */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-8">
          <div className="flex-[2] mb-8 flex flex-col gap-2 lg:gap-8">
            <Image
              src={images.svgs.LogoWhite}
              alt="prepco"
              width={172}
              height={43}
            />
            <p className="mt-2 lg:text-custom-20-2 text-white">
              At Prepco, we make wellness a lifestyle with proactive, practical,
              and accessible healthcare for a healthier, smarter future.
            </p>
            <div className="flex justify-start gap-4 mt-4">
              {socialMediaLinks.map((data: socialMediaLinksType, index: number) => (
                <a
                  key={index}
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={data.name}
                  className="hover:-translate-y-2 transition-transform duration-200"
                >
                  <Image
                    width={48}
                    height={48}
                    src={data.iconSrc}
                    alt={data.name}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2 lg:gap-8">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link href="/testimonials" className="hover:underline">
                  Testimonials
                </Link>
              </li> */}
              <li>
                <Link href="/plans" className="hover:underline">
                  Plans
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:underline">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-[2] flex flex-col gap-4 lg:gap-5 lg:items-center justify-start">
            <div className="space-y-3 lg:space-y-6">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="flex flex-col gap-5">
                <li>
                  <a className="flex items-center gap-2" href="mailto:info@prepcohealthcare.com">
                    <div className="hover:-translate-y-2 transition-transform duration-200">
                      <Image
                        width={48}
                        height={48}
                        src={images.pngs.mailIcon}
                        alt="Phone"
                      />
                    </div>
                    <span className="text-secondaryLight text-custom-16">
                      info@prepcohealthcare.com
                    </span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-2" href="tel:+9118002022447">
                    <div className="hover:-translate-y-2 transition-transform duration-200">
                      <Image
                        width={48}
                        height={48}
                        src={images.pngs.phoneIcon}
                        alt="Phone"
                      />
                    </div>
                    <span className="text-secondaryLight text-custom-16">
                      1800 202 2447
                    </span>
                  </a>
                </li>
                <a href="https://maps.app.goo.gl/B4VYxVvLykajAbvBA" target={'_blank'}>
                  <div className="flex items-center gap-2">
                    <div className="hover:-translate-y-2 transition-transform duration-200 lg:self-start">
                      <Image
                        width={48}
                        height={48}
                        src={images.pngs.locationIcon}
                        alt="Phone"
                      />
                    </div>
                    <div className="hidden lg:block space-y-3">
                      <p>50/22, Thirumangalam road,</p>
                      <p>Anna nagar west, </p>
                      <p>Chennai - 600040.</p>
                    </div>
                    <div className="block lg:hidden space-y-3">
                      <p>50/22, Thirumangalam road,<br />Anna nagar west, Chennai - 600040.</p>
                    </div>
                  </div>
                </a>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex flex-col lg:items-center justify-start">
            <div className="space-y-3 lg:space-y-6">
              <h3 className="text-lg font-semibold">Open Hours</h3>
              <p>Mon - Sat</p>
              <p>8.00 AM - 6.00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p>&copy; 2024 Terms and Conditions • All Rights Reserved</p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
