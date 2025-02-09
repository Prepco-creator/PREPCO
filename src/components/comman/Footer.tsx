import Image from "next/image";
import React from "react";
import { images } from "../../../public/assets";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary py-4 text-secondaryLight">
      <div className="px-4 sm:px-6 lg:px-14 lg:py-7">
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
              <a
                href="https://www.twitter.com"
                aria-label="Twitter"
                className="hover:-translate-y-2 transition-transform duration-200"
              >
                <Image
                  width={48}
                  height={48}
                  src={images.pngs.twitterIcon}
                  alt="Twitter"
                  className=""
                />
              </a>
              <a
                href="https://wa.me/+9892882929"
                aria-label="WhatsApp"
                className="hover:-translate-y-2 transition-transform duration-200"
              >
                <Image
                  width={48}
                  height={48}
                  src={images.pngs.whatsappIcon}
                  alt="WhatsApp"
                  className=""
                />
              </a>

              <a
                href="https://www.instagram.com"
                aria-label="Instagram"
                className="hover:-translate-y-2 transition-transform duration-200"
              >
                <Image
                  width={48}
                  height={48}
                  src={images.pngs.instagramIcon}
                  alt="Instagram"
                  className=""
                />
              </a>
              <a
                href="https://www.youTube.com"
                aria-label="YouTube"
                className="hover:-translate-y-2 transition-transform duration-200"
              >
                <Image
                  width={48}
                  height={48}
                  src={images.pngs.youtubeIcon}
                  alt="YouTube"
                  className=""
                />
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2 lg:gap-8">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="flex flex-col gap-2">
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
              <li>
                <Link href="/testimonials" className="hover:underline">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/plans" className="hover:underline">
                  Plans
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col gap-2 lg:gap-8">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="flex flex-col gap-2">
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
          <div className="flex-1 flex flex-col gap-1 lg:gap-10 items-start">
            <div className="space-y-3 lg:space-y-6">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="flex flex-col gap-5">
                <li className="flex items-center gap-2">
                  <div className="hover:-translate-y-2 transition-transform duration-200">
                    <Image
                      width={48}
                      height={48}
                      src={images.pngs.phoneIcon}
                      alt="Phone"
                    />
                  </div>
                  <span className="text-secondaryLight text-custom-16">
                    ++9884555335
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    width={48}
                    height={48}
                    src={images.pngs.mailIcon}
                    alt="prepco-mail"
                    className="hover:-translate-y-2 transition-transform duration-200"
                  />
                  <p className="text-secondaryLight text-custom-16">
                    info@prepcohealthcare.com
                  </p>
                </li>
              </ul>
            </div>
            <div className="space-y-3 lg:space-y-6">
              <h3 className="text-lg font-semibold mt-6 mb-2">Open Hours</h3>
              <p>Mon - Sat: 8.00 AM - 6.00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p>&copy; 2024 Terms and Conditions • All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
