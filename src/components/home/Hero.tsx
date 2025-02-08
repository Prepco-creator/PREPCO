"use client";
import React from "react";
import { Heart, IndianRupee } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Tags } from "@/types";
import { videos } from "../../../public/assets";

const Hero: React.FC<{ tags: Tags[] }> = ({ }) => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#E8FDFD] via-[#D9FCFB] to-[#C0F8F7] flex items-center py-16 sm:py-14 md:py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-[#00ADA9]/5 blur-3xl z-0"
      />

      <div className="relative w-11/12 mx-auto px-6 sm:px-8 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-16 z-10 mt-14 ">

        {/* Right Content (Video Section) - Now Moved to Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8
          }}
          className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto"
        >
          <div className="relative w-full pt-[100%] sm:pt-[80%] lg:pt-[100%]">
            {/* Decorative Circles */}
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#D0F2F3] rounded-full blur-3xl opacity-40" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-[#00ADA9] rounded-full blur-3xl opacity-30" />
            <div className="absolute inset-0 bg-[#E3FFFE] rounded-3xl transform rotate-3 transition-transform hover:rotate-6 duration-300" />
            <div className="absolute inset-0 bg-[#259ba1] rounded-3xl transform -rotate-3 transition-transform hover:-rotate-6 duration-300" />
            {/* Video Container */}
            <div className="absolute inset-0 bg-[#E3FFFE] rounded-3xl transform rotate-2 transition-transform hover:rotate-3 duration-300 shadow-lg overflow-hidden flex items-center justify-center">
              <video
                src={videos.hero3}
                loop
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Floating Info Boxes */}
          <div className="hidden sm:block absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-xl max-w-[220px] transform hover:-translate-y-1 transition-all duration-300">
            <p className="text-[#017F7E] font-semibold text-lg">Free Consultations Available</p>
            {/* <p className="text-[#505050] text-sm mt-1">Available 24/7</p> */}
          </div>

          <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl max-w-[220px] transform hover:-translate-y-1 transition-all duration-300">
            <p className="text-[#017F7E] font-semibold text-lg">Subsidized costings</p>
            {/* <p className="text-[#505050] text-sm mt-1">Schedule in seconds</p> */}
          </div>
        </motion.div>

        {/* Left Content (Text Section) - Now Moved to Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8
          }}
          className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left relative"
        >
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-[#017F7E] leading-tight">
            Did you know{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%"],
                scale: [1, 1.05, 1]
              }}
              transition={{
                backgroundPosition: {
                  repeat: Infinity,
                  duration: 3
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
              className="text-[#00ADA9] bg-gradient-to-r from-[#00ADA9] via-[#017F7E] to-[#00ADA9] bg-size-200 bg-pos-0 bg-clip-text text-transparent"
            >
              taking care of your health
            </motion.span>{" "}
            doesn&apos;t have to break the bank?
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[#505050] text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Transform your health journey with affordable solutions that
            prioritize your well-being without compromising your financial
            stability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link href="/plans" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group w-full sm:w-auto px-8 sm:px-10 py-4 bg-[#017F7E] text-white rounded-xl hover:bg-[#00ADA9] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Tell me how to save
                <IndianRupee className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.button>
            </Link>
            <Link href="/plans" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group w-full sm:w-auto px-8 sm:px-10 py-4 bg-white border-2 border-[#D0F2F3] text-[#017F7E] rounded-xl hover:bg-[#E3FFFE] transition-all duration-300 shadow-md flex items-center justify-center gap-2"
              >
                Get Affordable Solutions
                <Heart className="w-5 h-5 group-hover:text-red-500 transition-colors" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
