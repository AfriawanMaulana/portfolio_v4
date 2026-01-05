"use client";
import Header from "@/app/components/Header";
import { User } from "lucide-react";
import { motion } from "motion/react";

export default function AboutPage({ html }: { html: string }) {
  return (
    <div className="flex flex-col min-h-screen space-y-6 items-center p-2 md:px-8 lg:px-10 xl:px-40">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="p-40 absolute -z-10 rounded-full top-10 left-1/3 -translate-x-1/2 shadow-[0_0_200px_0] shadow-primary bg-primary/40 opacity-30"
      ></motion.div>
      <div className="text-center space-y-4 w-full">
        <Header
          name="~/about"
          icon={<User size={20} className="text-emerald" />}
        />
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-bold text-4xl md:text-6xl"
        >
          # About Me
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-white/50"
        >
          Get to know me better - my journey, skills, and what drives me.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col p-4 md:p-10 space-y-8 bg-navy-dark rounded-2xl text-left w-full"
        >
          <p className="text-md text-white/80 md:text-xl">
            Hi! I&apos;m{" "}
            <span className="text-primary font-semibold">Afriawan Maulana</span>
            , an Informatics student at{" "}
            <span className="text-blue-500">
              Wijaya Kusuma University of Surabaya
            </span>
            , driven by a passion for web development and a strong focus on
            building modern, scalable, and user-friendly applications.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-2xl bg-[#0b0f14] border border-white/10 shadow-2xl overflow-hidden w-full"
          >
            {/* HEADER */}
            <div className="flex items-center gap-3 px-4 md:px-5 py-3 border-b border-white/10 bg-black/40">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="ml-4 text-sm text-white/40 font-mono">
                developer.ts
              </span>
            </div>

            {/* CODE - Fixed padding for mobile */}
            <div className="overflow-x-auto">
              <div
                className="pb-6 px-4 text-xs md:text-sm text-left font-mono leading-relaxed min-w-max"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
