"use client";
import { motion } from "motion/react";

export default function QuoteCard() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex items-center justify-center relative"
    >
      <div className="p-40 absolute -z-10 rounded-full -top-10 left-1/2 -translate-x-1/2 shadow-[0_0_200px_0] shadow-primary bg-primary/40 opacity-30"></div>
      <blockquote className="text-sm md:text-xl italic font-semibold text-heading tracking-tight flex flex-col space-y-6 justify-center items-center text-center bg-navy-dark/40 border border-navy p-10 rounded-2xl ">
        <svg
          className="w-9 h-9 text-heading mb-4 opacity-50"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"
          />
        </svg>
        <p className="opacity-80">
          &quot;The more I study, the more insatiable do I feel my genius for it
          to be.&quot;
        </p>
        <p className="font-normal text-primary text-sm">~ Ada Lovelace ~</p>
      </blockquote>
    </motion.div>
  );
}
