'use client'

import React, { useState, useEffect, useRef } from "react";


interface ResponsiveYoutubeProps {
    videoURL: string;
}

const ResponsiveYouTube: React.FC<ResponsiveYoutubeProps> = ({ videoURL }) => {
    const [width, setWidth] = useState<number>(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    // Extract video ID from YouTube URL
    const videoId = videoURL.split("/embed/")[1]?.split("?")[0] || "";
    const thumbnailURL = `https://i.ytimg.com/vi_webp/${videoId}/maxresdefault.webp`;

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== "undefined") {
                setWidth(window.innerWidth >= 900 ? window.innerWidth * 0.75 : window.innerWidth * 0.9);
            }
        };

        if (typeof window !== "undefined") {
            handleResize();
            window.addEventListener("resize", handleResize);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", handleResize);
            }
        };
    }, []);

    const height = (width * 8) / 16;

    const handleThumbnailClick = () => {
        setIsPopupOpen(true);
    };

    return (
        <div style={{ width: "100%", maxWidth: "100%", textAlign: "center" }}>
            {width && window.innerWidth >= 900 ? (
                <div className="w-full select-none h-[500px] relative flex justify-center items-center">
                    <img
                        src={thumbnailURL}
                        alt="Video Thumbnail"
                        className="rounded-lg brightness-50 absolute"
                        style={{ cursor: "pointer", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                        onClick={handleThumbnailClick}
                    />

                    <button onClick={handleThumbnailClick} className="button is-play cursor-pointer bg-custom-gradient shadow-dou">
                        <div className="button-outer-circle has-scale-animation"></div>
                        <div className="button-outer-circle has-scale-animation has-delay-short"></div>
                        <div className="button-icon is-play">
                            <svg height="100%" width="100%" fill="#ffffff">
                                <polygon className="triangle" points="5,0 30,15 5,30"></polygon>
                                <path className="path" d="M5,0 L30,15 L5,30z" fill="none" stroke="#ffffff" strokeWidth="1"></path>
                            </svg>
                        </div>
                    </button>

                    {isPopupOpen && (
                        <div style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 1000,
                        }}>
                            <div style={{ position: "relative", width: "65%", height: "auto" }}>
                                <button
                                    onClick={() => setIsPopupOpen(false)}
                                    style={{
                                        position: "absolute",
                                        top: -35,
                                        right: 10,
                                        color: "white",
                                        border: "none",
                                        cursor: "pointer",
                                        fontSize: "20px",
                                    }}>✖</button>
                                <iframe
                                    ref={iframeRef}
                                    width={"100%"}
                                    height={height}
                                    src={`https://www.youtube.com/embed/${videoId}?playlist=${videoId}&rel=0&modestbranding=1&autoplay=1&controls=1`}
                                    frameBorder="0"
                                    allowFullScreen
                                    allow="autoplay"
                                    style={{ display: "block", margin: "auto" }}
                                ></iframe>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <iframe
                    ref={iframeRef}
                    width={width || "100%"}
                    height={height}
                    src={`https://www.youtube.com/embed/${videoId}?playlist=${videoId}&rel=0&modestbranding=1&autoplay=1&controls=1`}
                    frameBorder="0"
                    allowFullScreen
                    style={{ display: "block", margin: "auto", borderRadius: "0.5rem" }}
                ></iframe>
            )}
        </div>
    );
};

export default ResponsiveYouTube;
