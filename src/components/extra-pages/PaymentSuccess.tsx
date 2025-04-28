'use client'

import React from "react";
import Image from "next/image";
import { images } from "../../../public/assets";
import Footer from "../comman/Footer";
import Link from "next/link";
import { socialMediaLinks } from "@/data/comman";
import { socialMediaLinksType } from "@/types";

const PaymentSuccess: React.FC = () => {

    return (
        <>
            <section className="bg-primary1 text-white flex items-center justify-center min-h-screen">
                <div className="text-center space-y-8">
                    <h1 className="text-5xl font-bold text-primary-dark">Thank You for Choosing Prepco Health Care !
                    </h1>
                    <Image src={images.pngs.paymentDoneTick} alt="payment-done-icon" className="mx-auto" width={200} height={200} />
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
