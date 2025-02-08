"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { images } from "../../../public/assets"; // Ensure this path is correct
import Link from "next/link";

const PopupModal = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScrollAttempt = () => {
            if (!hasScrolled) {
                setShowPopup(true);
                setHasScrolled(true);
                window.removeEventListener("wheel", handleScrollAttempt);
                window.removeEventListener("touchmove", handleScrollAttempt);
            }
        };

        // Attach event listeners for wheel and touchmove
        window.addEventListener("wheel", handleScrollAttempt);
        window.addEventListener("touchmove", handleScrollAttempt);

        return () => {
            window.removeEventListener("wheel", handleScrollAttempt);
            window.removeEventListener("touchmove", handleScrollAttempt);
        };
    }, [hasScrolled]);

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-[90%] max-w-md">
                {/* Close Button */}
                <button
                    className="absolute top-2 right-2 text-black z-10 bg-gray-800 rounded-full p-2 hover:bg-gray-700 bg-red-700"
                    onClick={() => setShowPopup(false)}
                >
                    <Image
                        width={12}
                        height={12}
                        src={images.svgs.xmark}
                        alt="wrong"
                    />
                </button>

                {/* Popup Content */}
                <div className="relative">
                    <Image
                        src={images.pngs.popupImage} // Replace with your image path
                        alt="Popup Image"
                        width={500}
                        height={500}
                        className="rounded-lg"
                    />

                    {/* CTA Button */}
                    <Link href={`/contact`}>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                            <button
                                className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark"
                            >
                                Contact Us
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PopupModal;

