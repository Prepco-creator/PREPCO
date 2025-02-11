import Image from "next/image";
import React from "react";
import { images } from "../../../public/assets";
import Link from "next/link";

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
              <a
                href="https://www.twitter.com"
                target="_blank"
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
                href="https://wa.me/+919884555335"
                target="_blank"
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
                target="_blank"
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
                href="https://youtube.com/@prepcohealthcarewebsite?si=Aio-ud3k2_VdHDju"
                target="_blank"
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
          <div className="flex-1 flex flex-col gap-1 lg:gap-5 items-center">
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
                  <a className="flex items-center gap-2" href="tel:+919884555335">
                    <div className="hover:-translate-y-2 transition-transform duration-200">
                      <Image
                        width={48}
                        height={48}
                        src={images.pngs.phoneIcon}
                        alt="Phone"
                      />
                    </div>
                    <span className="text-secondaryLight text-custom-16">
                      +91 9884555335
                    </span>
                  </a>
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
