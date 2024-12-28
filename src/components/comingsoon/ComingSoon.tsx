import React from "react";
import Image from "next/image"; // Importing for Next.js Image component
import { images } from "../../../public/assets";

const ComingSoon: React.FC = () => {

    return (
        <section className="bg-primary1 flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-primary-dark">Page Under Construction</h1>
                <p className="mt-4 text-lg text-secondary-dark">
                    We&#39;re working hard to bring this page to life. Stay tuned for updates!
                </p>

                <div className="mt-6">
                    <p className="text-sm text-secondary-dark">
                        Follow us on social media for the latest news:
                    </p>
                    <div className="flex justify-center gap-4 mt-4">
                        <a href="https://www.twitter.com" aria-label="Twitter">
                            <Image
                                width={48}
                                height={48}
                                src={images.pngs.twitterIcon}
                                alt="Twitter"
                                className=""
                            />
                        </a>
                        <a href="https://www.whatsapp.com" aria-label="WhatsApp">
                            <Image
                                width={48}
                                height={48}
                                src={images.pngs.whatsappIcon}
                                alt="WhatsApp"
                                className=""
                            />
                        </a>
                        <a href="https://www.instagram.com" aria-label="Instagram">
                            <Image
                                width={48}
                                height={48}
                                src={images.pngs.instagramIcon}
                                alt="Instagram"
                                className=""
                            />
                        </a>
                        <a href="https://www.youtube.com" aria-label="YouTube">
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
            </div>
        </section>
    );
};

export default ComingSoon;
