'use client'

import React from "react";
import Image from "next/image";
import { images } from "../../../public/assets";
import Footer from "../comman/Footer";
import { CircleCheck } from "lucide-react";
import Link from "next/link";

const PaymentSuccess: React.FC = () => {

    return (
        <>
            <section className="bg-primary1 text-white flex items-center justify-center min-h-screen">
                <div className="text-center">zF
                    <h1 className="text-5xl font-bold text-primary-dark">Thank You for Choosing Prepco Health Care !
                    </h1>
                    <CircleCheck size={100} className="text-center block w-full my-8" />
                    <p className="mt-4 text-lg text-secondary-dark">
                        Congratulations on taking your first step towards a healthier lifestyle!``
                    </p>
                    <p className="mt-4 text-base text-secondary-dark">
                        We are in this together! You will receive a welcome call from our Health Advisor within the next 24 to 48 hours.
                    </p>

                    <div className="mt-6">
                        <p className="text-sm text-secondary-dark">
                            Follow us on social media for updates and support:
                        </p>
                        <div className="flex justify-center gap-4 mt-4">
                            <a href="https://www.twitter.com" aria-label="Twitter">
                                <Image width={48} height={48} src={images.pngs.twitterIcon} alt="Twitter" />
                            </a>
                            <a href="https://wa.me/+919962107102" aria-label="WhatsApp">
                                <Image width={48} height={48} src={images.pngs.whatsappIcon} alt="WhatsApp" />
                            </a>
                            <a href="https://www.instagram.com" aria-label="Instagram">
                                <Image width={48} height={48} src={images.pngs.instagramIcon} alt="Instagram" />
                            </a>
                            <a href="https://www.youtube.com" aria-label="YouTube">
                                <Image width={48} height={48} src={images.pngs.youtubeIcon} alt="YouTube" />
                            </a>
                        </div>
                    </div>

                    {/* Go to Dashboard Button */}
                    <div className="mt-8">
                        <Link href="/plans">
                            <button
                                className="bg-primary text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark transition duration-300 ease-in-out"
                            >
                                Back to Plans
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default PaymentSuccess;
