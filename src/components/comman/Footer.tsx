import React from "react";

const Footer = () => {
    return (
        <footer className="bg-primary py-4 text-secondaryLight">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Links Section */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold">PREPCO</h2>
                        <p className="mt-2">
                            At Prepco, we make wellness a lifestyle with proactive, practical, and accessible healthcare for a healthier, smarter future.
                        </p>
                        <div className="flex justify-start gap-4 mt-4">
                            <a href="#" aria-label="Twitter">
                                <img src="/icons/twitter-icon.png" alt="Twitter" className="w-6 h-6" />
                            </a>
                            <a href="#" aria-label="WhatsApp">
                                <img src="/icons/whatsapp-icon.png" alt="WhatsApp" className="w-6 h-6" />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <img src="/icons/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
                            </a>
                            <a href="#" aria-label="YouTube">
                                <img src="/icons/youtube-icon.png" alt="YouTube" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Our Services</a></li>
                            <li><a href="#" className="hover:underline">Testimonials</a></li>
                            <li><a href="#" className="hover:underline">Plans</a></li>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Service 01</a></li>
                            <li><a href="#" className="hover:underline">Service 02</a></li>
                            <li><a href="#" className="hover:underline">Service 03</a></li>
                            <li><a href="#" className="hover:underline">Service 04</a></li>
                            <li><a href="#" className="hover:underline">Service 05</a></li>
                            <li><a href="#" className="hover:underline">Service 06</a></li>
                            <li><a href="#" className="hover:underline">Service 07</a></li>
                            <li><a href="#" className="hover:underline">Service 08</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <img src="/icons/phone-icon.png" alt="Phone" className="w-5 h-5 mr-2" />
                                +98 928 82 929
                            </li>
                            <li className="flex items-center">
                                <img src="/icons/email-icon.png" alt="Email" className="w-5 h-5 mr-2" />
                                xyz@company.com
                            </li>
                        </ul>
                        <h3 className="text-lg font-semibold mt-6 mb-2">Open Hours</h3>
                        <p>Mon - Sat: 8.00 AM - 6.00 PM</p>
                        <p>Sunday: Closed</p>
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
