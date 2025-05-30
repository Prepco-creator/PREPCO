import React, { useState, useEffect, useRef } from "react";
import { images } from "../../../public/assets";
import { FeaturesProps, PlanFeature } from "@/types";
import Image from "next/image";
import ResponsiveYouTube from "../comman/ResponsiveYoutube";
import planServices from "@/data/planPackages";
// Import mock data for plans
import mockData from "@/data/plans";

const Features: React.FC<FeaturesProps> = ({
  // duration,
  features,
  // description,
  // memberType = "Person",
  membersCount = 1,
  tamilVideo,
  englishVideo,
  planId // Add planId prop to identify which plan is being displayed
}) => {
  // const timeline =
  //   duration === 12 ? "One Year" : duration === 6 ? "6 Months" : "Not Defined";

  const featureIcon =
    membersCount === 1
      ? images.gifs.oneMemberPlan
      : images.gifs.threeMemberPlan;

  // Manage feature toggle state
  const [showMore, setShowMore] = useState(false);
  const [isTamil, setIsTamil] = useState(false);

  // Coupon logic states
  const [couponCode, setCouponCode] = useState("");
  const [couponMessage, setCouponMessage] = useState("");
  const [showSpecialFeature, setShowSpecialFeature] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  // Create a reference to the special offer card
  const specialOfferRef = useRef<HTMLDivElement>(null);

  // Get the current plan data based on planId - memoize to prevent recalculation on every render
  const currentPlan = React.useMemo(() => planServices.find(p => p.planId === planId), [planId]);
  const specialOffer = currentPlan?.specialOffer?.title || "50% OFF on Premium Membership - Limited Time Offer!";
  const CORRECT_CODE = currentPlan?.specialOffer?.code.toLowerCase() || "EMP555" || "emp555";
  const COUPON_DURATION = (currentPlan?.specialOffer?.validityInMinutes || 15) * 60; // Convert minutes to seconds

  // Get plan link - memoize to prevent recalculation on every render
  const planLink = React.useMemo(() => {
    if (planId === "plan_9") {
      return "https://com.rpy.club/cop/dvdNR8FArA";
    } else {
      // Find the link from mockData
      const plan = mockData.find(p => p.id === planId);
      return plan?.paymentGatewayLink || "#"; // Default to "#" if no link found
    }
  }, [planId]);

  const visibleFeatures = showMore ? features : features.slice(0, 6);

  // Group features into pairs
  const featurePairs: [PlanFeature?, PlanFeature?][] = [];
  for (let i = 0; i < visibleFeatures.length; i += 2) {
    featurePairs.push([visibleFeatures[i], visibleFeatures[i + 1]]);
  }


  // Load saved state from localStorage on component mount (only once)
  useEffect(() => {
    const savedStateKey = `couponState_${planId}`; // Use planId in the storage key
    const savedState = localStorage.getItem(savedStateKey);

    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        const currentTime = Math.floor(Date.now() / 1000);

        if (parsedState.expiryTime && parsedState.expiryTime > currentTime) {
          // Coupon is still valid
          setShowSpecialFeature(true);
          setTimeLeft(parsedState.expiryTime - currentTime);
        }
      } catch (error) {
        console.error("Error parsing saved coupon state:", error);
      }
    }
  }, [planId]); // Only run when planId changes

  // Effect to scroll to special offer when it's shown (with proper dependencies)
  useEffect(() => {
    if (showSpecialFeature && specialOfferRef.current) {
      // Scroll to the special offer card with smooth behavior
      specialOfferRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [showSpecialFeature]); // Only run when showSpecialFeature changes

  // Timer effect for coupon expiry countdown (with proper dependencies)
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          const newTimeLeft = prev - 1;
          if (newTimeLeft <= 0) {
            // Time expired
            setShowSpecialFeature(false);
            // Use a callback for localStorage update to ensure we're not causing re-renders
            setTimeout(() => {
              localStorage.setItem(`couponState_${planId}`, JSON.stringify({
                expiryTime: null,
                cooldownEndTime: null
              }));
            }, 0);
            return 0;
          }
          return newTimeLeft;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timeLeft, planId]); // Only run when timeLeft or planId changes

  const handleLanguageSwitch = (language: boolean) => {
    setIsTamil(language);
  };

  const handleCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (couponCode.toLowerCase() === CORRECT_CODE) {
      const expiryTime = Math.floor(Date.now() / 1000) + COUPON_DURATION;
      setTimeLeft(COUPON_DURATION);
      setShowSpecialFeature(true);
      setCouponMessage("✅ Special feature unlocked! Available for 15 minutes.");

      // Store in localStorage with planId in the key
      localStorage.setItem(`couponState_${planId}`, JSON.stringify({
        expiryTime,
        cooldownEndTime: null
      }));
    } else {
      setCouponMessage("❌ Invalid code. Please try again.");
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section className="">

      <div className="bg-gradient-to-r from-teal-400 to-teal-700 shadow-double-inset px-4 py-2">
        {showSpecialFeature && currentPlan?.specialOffer && (
          <div ref={specialOfferRef} className="my-12 mx-auto max-w-2xl">
            <div className="bg-white p-8 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 border-4 border-teal-400 relative overflow-hidden mx-4 sm:mx-0">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-400 opacity-20 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-teal-500 opacity-20 rounded-full"></div>

              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-teal-700">EXCLUSIVE OFFER!</h3>
                <div className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                  {formatTime(timeLeft)} remaining
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-teal-50 p-3 rounded-full mb-5">
                  <Image
                    unoptimized
                    width={70}
                    height={70}
                    src={featureIcon}
                    alt="Special feature"
                    className="transition-all duration-300 hover:rotate-12"
                  />
                </div>

                <p className="text-2xl text-teal-700 font-semibold text-center mb-6 px-4">
                  {specialOffer}
                </p>

                <a href={planLink} className="w-full md:w-4/5">
                  <button className="w-full py-4 bg-gradient-to-r shadow-lg from-teal-500 to-teal-700 text-white font-bold rounded-lg hover:from-teal-600 hover:to-teal-800 transition-all duration-300 transform hover:scale-105 tracking-wide">
                    CLAIM NOW
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 mt-10 mx-4">
          {featurePairs.map(([left, right], index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {left && (
                <div className={`${(index < 3 && showMore ? 'linear-gradient-border ' : '')}transform h-auto lg:h-[112px] transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                  <div className="feature-item bg-white p-6 rounded-xl shadow-lg flex items-center gap-4 h-full">
                    <Image
                      unoptimized
                      width={40}
                      height={40}
                      src={featureIcon}
                      alt={left.id}
                      className="transition-all duration-300 hover:scale-110"
                    />
                    <p className="text-xl lg:text-2xl text-teal-700 font-semibold">
                      {left.content}
                    </p>
                  </div>
                </div>
              )}
              {right && (
                <div className={`${(index < 3 && showMore ? 'linear-gradient-border ' : '')}transform h-auto lg:h-[112px] transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                  <div className="feature-item bg-white p-6 rounded-xl shadow-lg flex items-center gap-4 h-full">
                    <Image
                      unoptimized
                      width={40}
                      height={40}
                      src={featureIcon}
                      alt={right.id}
                      className="transition-all duration-300 hover:scale-110"
                    />
                    <p className="text-xl lg:text-2xl text-teal-700 font-semibold">
                      {right.content}
                    </p>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>


        {/* Know More Button */}
        {features.length > 6 && (
          <div className="text-center my-8">
            <button
              onClick={() => setShowMore(!showMore)}
              className="cta-button w-full lg:w-1/2  hover:scale-x-110 transition-all duration-500 ease-in-out p-3 lg:py-3 lg:px-6 bg-custom-gradient shadow-double-inset text-white lg:font-semibold text-custom-16-bold lg:text-lg custom-border-radius">
              {showMore ? "Show Less" : "Know More"}
            </button>
          </div>
        )}

        {/* Coupon Code Input Form */}
        <div className="max-w-md mx-auto my-12 bg-white p-8 rounded-xl shadow-xl border-2 border-teal-100">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-teal-700">Enter Voucher Code</h3>
            <p className="text-gray-500 text-sm mt-1">Unlock exclusive offers with your code</p>
          </div>

          <form onSubmit={handleCouponSubmit} className="space-y-5">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter your EMP code"
                className="w-full pl-10 pr-4 py-3 border-2 border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-400 bg-teal-50 font-medium"
                disabled={timeLeft > 0} // Disable input field while countdown is active
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-teal-500 to-teal-700 text-white font-bold rounded-lg hover:from-teal-600 hover:to-teal-800 transition-all duration-300 transform hover:scale-105 shadow-lg tracking-wide"
              disabled={timeLeft > 0}
            >
              {timeLeft > 0 ? "Code Applied ✓" : "Apply Code"}
            </button>

            {couponMessage && (
              <div className={`mt-3 p-2 rounded-lg ${couponMessage.includes("❌") ? "bg-red-50" :
                couponMessage.includes("🔒") ? "bg-amber-50" : "bg-green-50"
                }`}>
                <p className={`text-center font-medium ${couponMessage.includes("❌") ? "text-red-600" :
                  couponMessage.includes("🔒") ? "text-amber-600" : "text-green-600"
                  }`}>
                  {couponMessage}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Special Feature Card (only shown when correct code is entered) */}

      <div className="bg-accent-2 px-4 py-16">


        {/* New Call to Action container */}
        <div className="max-w-7xl mx-auto mt-16 mb-10 relative">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-700 rounded-xl blur-sm opacity-70 transform -rotate-1"></div> */}
          <div className="relative bg-gradient-to-r from-teal-500 to-teal-700 p-8 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-102 border-2 border-white overflow-hidden mx-4">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-800 opacity-20 rounded-full -ml-6 -mb-6"></div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <div className="text-white text-center md:text-left md:max-w-md">
                <h3 className="text-2xl font-bold mb-3">Unlock Special Offer</h3>
                <p className="text-lg font-medium">Book a call with our health advisor & get the Coupon Code</p>
              </div>


              <a target='_blank' href="https://calendly.com/bdm-prepcohealthcare/30min" className="w-full md:w-auto">
                <button className="bg-white text-teal-700 py-4 px-8 rounded-lg font-bold shadow-lg transform transition hover:scale-105 hover:bg-teal-50 w-full md:w-auto text-lg flex items-center justify-center gap-2">
                  <span>Book Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto text-center text-white mb-12 space-y-4">
          {/* <h3 className="text-3xl lg:text-5xl font-bold mb-4">
          Plan Validation {timeline} - {membersCount} {memberType}
        </h3>
        <p className="text-lg lg:text-2xl max-w-3xl mx-auto">{description}</p> */}
          <div className="flex w-full justify-center">
            <button
              className={`px-6 py-3 font-medium text-sm shadow-lg border-[2px] border-teal-600 transition-all duration-300 transform ${!isTamil ? "bg-gradient-to-b from-teal-400 to-teal-800 text-white shadow-double-inset" : "bg-white text-primary"
                } rounded-l-3xl border-r-0 w-1/2 md:w-fit`}
              onClick={() => handleLanguageSwitch(false)}
            >
              English
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm shadow-lg border-[2px] border-teal-600 transition-all duration-300 transform ${isTamil ? "bg-gradient-to-b from-teal-400 to-teal-800 text-white shadow-double-inset" : "bg-white text-primary"
                } rounded-r-3xl border-l-0 w-1/2 md:w-fit`}
              onClick={() => handleLanguageSwitch(true)}
            >
              தமிழ்
            </button>
          </div>
        </div>

        <div className="overflow-x-hidden relative">
          <ResponsiveYouTube
            videoURL={isTamil ? tamilVideo : englishVideo}
          />
        </div>
      </div>

    </section>
  );
};

export default Features;