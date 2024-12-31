"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { images } from "../../../public/assets"; // Ensure this path is correct

const PopupModal = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        // Timeout for 6 seconds
        const timeout = setTimeout(() => {
            if (!hasScrolled) setShowPopup(true);
        }, 6000);

        // Show popup after scrolling down 100px
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowPopup(true);
                setHasScrolled(true);
                window.removeEventListener("scroll", handleScroll);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener("scroll", handleScroll);
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
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                        <button
                            onClick={() => alert("CTA Clicked")}
                            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark"
                        >
                            Call to Action
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupModal;

