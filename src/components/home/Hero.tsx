"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Tags } from "@/types";
import { videos } from "../../../public/assets";
import { FaHeart } from "react-icons/fa";

const Hero: React.FC<{ tags: Tags[] }> = ({ }) => {
  return (
    <div className="relative h-full w-full bg-transparent flex items-center pt-16 sm:pt-14 md:pt-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-[#00ADA9]/5 blur-3xl z-0"
      />

      <div className="relative w-11/12 mx-auto px-6 sm:px-8 md:pb-12 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-16 z-10 mt-14 ">

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
          className="w-full lg:w-[60%] relative mx-auto"
        >
          <div className="relative w-full p-24 sm:p-48">
            {/* Decorative Circles */}
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#D0F2F3] rounded-full blur-3xl opacity-40" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-[#00ADA9] rounded-full blur-3xl opacity-30" />
            <div className="absolute inset-0 bg-[#E3FFFE] rounded-3xl transform rotate-3 transition-transform hover:rotate-6 duration-300" />
            <div className="absolute inset-0 bg-[#259ba1] rounded-3xl transform -rotate-3 transition-transform hover:-rotate-6 duration-300" />
            {/* Video Container */}
            <div className="absolute inset-0 bg-[#E3FFFE] rounded-3xl transform rotate-2 transition-transform hover:rotate-3 duration-300 shadow-lg overflow-hidden flex items-center justify-center">
              <video
                src={videos.hero4}
                loop
                autoPlay
                playsInline
                muted
                className="w-full h-full object-contain lg:object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Floating Info Boxes */}
          <div className="hidden sm:block absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-xl max-w-[300px] transform hover:-translate-y-1 transition-all duration-300">
            <p className="text-[#017F7E] font-semibold text-lg capitalize">Save Minimum <br /> Rs.50000/- Annually </p>
            {/* <p className="text-[#505050] text-sm mt-1">Available 24/7</p> */}
          </div>

          <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl max-w-[220px] transform hover:-translate-y-1 transition-all duration-300">
            <p className="text-[#017F7E] font-semibold text-lg capitalize">Save Upto 20% On <br /> Surgery Expenses</p>
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
          className="w-full lg:w-[40%] space-y-6 sm:space-y-8 text-center lg:text-left relative"
        >

          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-[#017F7E] leading-tight">
            {/* what affordable care looks like?
            Get access to expert doctors, health checkups, wellness services, and more—
            without the heavy price tag.
            No waiting. No age limits. No stress. Just smarter health. */}
            Still Thinking Quality
            {" "} <br />
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
              Healthcare Is <br /> Too Expensive?
            </motion.span>{" "}
            {"Not Anymore"}
          </h1>

          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[#505050] text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Transform your health journey with affordable solutions that
            prioritize your well-being without compromising your financial
            stability.
          </motion.p> */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            {/* <Link href="/plans" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group text-white w-full sm:w-auto px-8 sm:px-10 py-4  rounded-xl bg-custom-gradient shadow-double-inset hover:bg-none hover:text-primary hover:shadow-none border-primary border-[2px] transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
              >
                Tell me how to save
                <IndianRupee className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.button>
            </Link> */}
            <Link href="/plans" className="w-full" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group w-full px-8 text-xl font-bold sm:px-10 py-4 bg-white border-2 border-[#D0F2F3] text-[#017F7E] rounded-xl hover:bg-[#E3FFFE] transition-all duration-300 shadow-md flex items-center justify-center gap-2"
              >
                Grab it Now
                <FaHeart className="w-5 h-5 font-bold group-hover:text-primary transition-colors" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
