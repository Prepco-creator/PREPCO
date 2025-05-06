import React, { useState, useEffect, useRef } from "react";
import { images } from "../../../public/assets";
import { FeaturesProps, PlanFeature } from "@/types";
import Image from "next/image";
import ResponsiveYouTube from "../comman/ResponsiveYoutube";
import planServices from "@/data/planPackages";

const Features: React.FC<FeaturesProps> = ({
  duration,
  features,
  description,
  memberType = "Person",
  membersCount = 1,
  tamilVideo,
  englishVideo,
  planId // Add planId prop to identify which plan is being displayed
}) => {
  const timeline =
    duration === 12 ? "One Year" : duration === 6 ? "6 Months" : "Not Defined";

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
  // const [cooldownTimeLeft, setCooldownTimeLeft] = useState(0);
  
  // Create a reference to the special offer card
  const specialOfferRef = useRef<HTMLDivElement>(null);
  
  // Get the current plan data based on planId
  const currentPlan = planServices.find(p => p.planId === planId);
  const specialOffer = currentPlan?.specialOffer?.title || "50% OFF on Premium Membership - Limited Time Offer!";
  const CORRECT_CODE = currentPlan?.specialOffer?.code || "EMP555";
  const COUPON_DURATION = (currentPlan?.specialOffer?.validityInMinutes || 15) * 60; // Convert minutes to seconds
  const COOLDOWN_DURATION = (currentPlan?.specialOffer?.cooldownInMinutes || 10) * 60; // Convert minutes to seconds
  
  const visibleFeatures = showMore ? features : features.slice(0, 6);
  const midPoint = Math.ceil(visibleFeatures.length / 2);
  const leftVisible = visibleFeatures.slice(0, midPoint);
  const rightVisible = visibleFeatures.slice(midPoint);

  // Load saved state from localStorage on component mount
  useEffect(() => {
    const savedStateKey = `couponState_${planId}`; // Use planId in the storage key
    const savedState = localStorage.getItem(savedStateKey);
    
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      const currentTime = Math.floor(Date.now() / 1000);
      
      if (parsedState.expiryTime && parsedState.expiryTime > currentTime) {
        // Coupon is still valid
        setShowSpecialFeature(true);
        setTimeLeft(parsedState.expiryTime - currentTime);
      } 
      /* Commented out cooldown functionality
      else if (parsedState.cooldownEndTime && parsedState.cooldownEndTime > currentTime) {
        // In cooldown period
        setCooldownTimeLeft(parsedState.cooldownEndTime - currentTime);
      }
      */
    }
  }, [planId]);

  // Effect to scroll to special offer when it's shown
  useEffect(() => {
    if (showSpecialFeature && specialOfferRef.current) {
      // Scroll to the special offer card with smooth behavior
      specialOfferRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [showSpecialFeature]);

  // Timer effect for coupon expiry countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          const newTimeLeft = prev - 1;
          if (newTimeLeft <= 0) {
            // Time expired, start cooldown
            /* Commented out cooldown functionality
            const cooldownEndTime = Math.floor(Date.now() / 1000) + COOLDOWN_DURATION;
            setCooldownTimeLeft(COOLDOWN_DURATION);
            */
            setShowSpecialFeature(false);
            localStorage.setItem(`couponState_${planId}`, JSON.stringify({
              expiryTime: null,
              // cooldownEndTime: cooldownEndTime
              cooldownEndTime: null // Modified to not set cooldown
            }));
            return 0;
          }
          return newTimeLeft;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [timeLeft, COOLDOWN_DURATION, planId]);

  // Timer effect for cooldown period - commented out
  /* 
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (cooldownTimeLeft > 0) {
      interval = setInterval(() => {
        setCooldownTimeLeft(prev => {
          const newCooldownTime = prev - 1;
          if (newCooldownTime <= 0) {
            localStorage.setItem(`couponState_${planId}`, JSON.stringify({
              expiryTime: null,
              cooldownEndTime: null
            }));
            return 0;
          }
          return newCooldownTime;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [cooldownTimeLeft, planId]);
  */

  const handleLanguageSwitch = (language: boolean) => {
    setIsTamil(language);
  };
  
  const handleCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    /* Commented out cooldown functionality
    if (cooldownTimeLeft > 0) {
      setCouponMessage(`🔒 The coupon has ended. Please try again after ${Math.ceil(cooldownTimeLeft / 60)} minutes.`);
      return;
    }
    */
    
    if (couponCode === CORRECT_CODE) {
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
    <section className="px-4 py-16 bg-gradient-to-r from-teal-400 to-teal-700 shadow-double-inset">
      <div className="container mx-auto text-center text-white mb-12 space-y-4">
        {/* Commented out static EMP code button
        <div className="flex justify-center mb-4">
          <button 
            className="bg-white text-teal-700 font-bold py-2 px-4 rounded-lg shadow-lg transform transition hover:scale-105"
          >
            EMP CODE - {CORRECT_CODE}
          </button>
        </div>
        */}
        <h3 className="text-3xl lg:text-5xl font-bold mb-4">
          Plan Validation {timeline} - {membersCount} {memberType}
        </h3>
        <p className="text-lg lg:text-2xl max-w-3xl mx-auto">{description}</p>
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

      {/* Special Feature Card (only shown when correct code is entered) */}
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
              
              <button className="w-full md:w-4/5 py-4 bg-gradient-to-r shadow-lg from-teal-500 to-teal-700 text-white font-bold rounded-lg hover:from-teal-600 hover:to-teal-800 transition-all duration-300 transform hover:scale-105 tracking-wide">
                CLAIM NOW
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 mx-4">
        {/* Left Column: Features */}
        <div className="flex flex-col space-y-6">
          {leftVisible.map((feature: PlanFeature, index: number) => (
            <div
              key={index}
              className="feature-item bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-4"
            >
              <Image
                unoptimized
                width={40}
                height={40}
                src={featureIcon}
                alt={feature.id}
                className="transition-all duration-300 hover:scale-110"
              />
              <p className="text-xl lg:text-2xl text-teal-700 font-semibold">
                {feature.content}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Features */}
        <div className="flex flex-col space-y-6">
          {rightVisible.map((feature: PlanFeature, index: number) => (
            <div
              key={index}
              className="feature-item bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-4"
            >
              <Image
                unoptimized
                width={40}
                height={40}
                src={featureIcon}
                alt={feature.id}
                className="transition-all duration-300 hover:scale-110"
              />
              <p className="text-xl lg:text-2xl text-teal-700 font-semibold">
                {feature.content}
              </p>
            </div>
          ))}
        </div>
      </div>

          {/* Know More Button */}
          {features.length > 6 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="cta-button w-full lg:w-1/2  hover:scale-x-110 transition-all duration-500 ease-in-out p-3 lg:py-3 lg:px-6 bg-custom-gradient shadow-double-inset text-white lg:font-semibold text-custom-16-bold lg:text-lg custom-border-radius">

            {showMore ? "Show Less" : "Know More"}
          </button>
        </div>
      )}

     {/* Coupon Code Input Form */}
<div className="max-w-md mx-auto mt-12 bg-white p-8 rounded-xl shadow-xl border-2 border-teal-100">
  <div className="text-center mb-6">
    <h3 className="text-xl font-bold text-teal-700">Enter EMP Code</h3>
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
      disabled={timeLeft > 0} // Modified to remove cooldown check
    >
      {timeLeft > 0 ? "Code Applied ✓" : "Apply Code"}
    </button>
    
    {couponMessage && (
      <div className={`mt-3 p-2 rounded-lg ${
        couponMessage.includes("❌") ? "bg-red-50" : 
        couponMessage.includes("🔒") ? "bg-amber-50" : "bg-green-50"
      }`}>
        <p className={`text-center font-medium ${
          couponMessage.includes("❌") ? "text-red-600" : 
          couponMessage.includes("🔒") ? "text-amber-600" : "text-green-600"
        }`}>
          {couponMessage}
        </p>
      </div>
    )}
  </form>
</div>

{/* New Call to Action container */}
<div className="max-w-7xl mx-auto mt-16 mb-10 relative">
  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-700 rounded-xl blur-sm opacity-70 transform -rotate-1"></div>
  <div className="relative bg-gradient-to-r from-teal-500 to-teal-700 p-8 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-102 border-2 border-white overflow-hidden mx-4">
    <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-800 opacity-20 rounded-full -ml-6 -mb-6"></div>
    
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
      <div className="text-white text-center md:text-left md:max-w-md">
        <h3 className="text-2xl font-bold mb-3">Unlock Special Offer
        </h3>
        <p className="text-lg font-medium">Book a call with our health advisor & get the Coupon Code</p>
      </div>
      
      <a href="tel:1800 202 2447" className="w-full md:w-auto">
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
      
  
    </section>
  );
};

export default Features;