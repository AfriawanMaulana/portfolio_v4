"use client";
import CountUp from "@/components/CountUp";
import SpotlightCard from "@/components/SpotlightCard";
import {
  Folder,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Instagram,
  TrendingUp,
  Code,
  Clock,
  GraduationCap,
  GitGraph,
  Sparkles,
  FileSliders,
  ArrowUp,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import QuoteCard from "./QuoteCard";
import TechStack from "./TechStack";
import { motion } from "motion/react";

const socialMedia = [
  {
    icon: <Github />,
    url: "https://github.com/AfriawanMaulana",
  },
  {
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/afriawan-maulana-661684303",
  },
  {
    icon: <Instagram />,
    url: "https://www.instagram.com/afriawanmaulana",
  },
];

export default function LandingPage() {
  const [isAvailable, setIsAvailable] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const toggleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", toggleScroll);

    return () => window.removeEventListener("scroll", toggleScroll);
  }, []);

  return (
    <div className="px-6 md:px-8 lg:px-10 xl:px-20">
      {/* Scroll Button */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-40 bg-emerald p-2 rounded-full"
        >
          <ArrowUp />
        </button>
      )}

      {/*  */}
      <section>
        <div className="relative flex flex-col w-full h-screen items-center justify-center p-4 space-y-6">
          <div className="p-40 absolute -z-10 rounded-full top-10 left-1/3 -translate-x-1/2 shadow-[0_0_200px_0] shadow-primary bg-primary/40 opacity-30"></div>
          {/* Status */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 backdrop-blur-xl flex items-center gap-4 justify-center py-2 px-5 rounded-full border border-primary/20"
          >
            <div
              className={`${
                isAvailable ? "bg-green-500" : "bg-red-500"
              } rounded-full w-2.5 h-2.5 relative`}
            >
              <span
                className={`${
                  isAvailable ? "bg-green-500" : "bg-red-500"
                } w-2.5 h-2.5 rounded-full absolute animate-ping`}
              ></span>
            </div>
            <p className="text-sm text-white/80">
              {isAvailable
                ? "Available for Internship"
                : "Not Available for Internship"}
            </p>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bold text-4xl md:text-6xl lg:text-8xl"
          >
            Hi, I&apos;m <span className="text-emerald">Afriawan</span>
          </motion.h1>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-4xl text-center opacity-50 font-sans"
          >
            Informatics Student | Full Stack Developer
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-xl opacity-50 font-sans text-center md:w-2/3 lg:w-1/2"
          >
            Crafting elegant digital experiences with clean code and modern
            technologies. Passionate about building products that make a
            difference.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-4 w-full justify-center"
          >
            <Link
              href={"/projects"}
              className="group inline-flex items-center justify-center gap-3 py-4 w-full md:w-60 rounded-xl shadow-[0_5px_10px_0] shadow-primary/50 bg-primary text-black font-semibold hover:shadow-lg transition-all ease-in-out duration-300"
            >
              <Folder />
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-all ease-in-out duration-300" />
            </Link>
            <Link
              href={"/projects"}
              className="inline-flex items-center justify-center gap-3 py-4 w-full md:w-60 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-black transition-all ease-in-out duration-300"
            >
              <Mail />
              Contact Me
            </Link>
          </motion.div>
          {/*  */}
          <div className="flex items-center gap-4 mt-4">
            {socialMedia.map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.1 + i / 10 }}
                className="backdrop-blur-2xl text-white/40 bg-white/8 border border-white/12 p-3 rounded-xl hover:text-primary hover:bg-primary/10 hover:border-primary/40 hover:-translate-y-1 transition-all ease-in-out duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* My Progress */}
      <section>
        <div className="flex flex-col items-center justify-center w-full h-auto space-y-6">
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center bg-white/5 backdrop-blur-xl gap-4  py-2 px-5 rounded-full border border-primary/20 text-white/80 text-sm"
          >
            <TrendingUp size={20} className="text-primary" /> My Progress
          </motion.span>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-bold text-3xl"
          >
            Learning Journey
          </motion.h1>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full"
          >
            <SpotlightCard
              className="custom-spotlight-card space-y-2"
              spotlightColor="rgba(0, 27, 155, 0.43)"
            >
              <div className="h-12 w-12 bg-navy text-blue-500 rounded-xl flex items-center justify-center">
                <Code />
              </div>
              <div className="flex items-center gap-1 text-3xl md:text-4xl font-semibold">
                <CountUp
                  from={0}
                  to={5}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                <p className="">+</p>
              </div>
              <p className="text-sm md:text-normal text-white/50">
                Practice Projects
              </p>
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card space-y-2"
              spotlightColor="rgba(4, 155, 0, 0.43)"
            >
              <div className="h-12 w-12 bg-green-900/50 text-green-500 rounded-xl flex items-center justify-center">
                <Clock />
              </div>
              <div className="flex items-center gap-1 text-3xl md:text-4xl font-semibold">
                <CountUp
                  from={0}
                  to={400}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                <p className="">+</p>
              </div>
              <p className="text-sm md:text-normal text-white/50">
                Hours Learning
              </p>
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card space-y-2"
              spotlightColor="rgba(89, 0, 155, 0.43)"
            >
              <div className="h-12 w-12 bg-purple-900/40 text-purple-500 rounded-xl flex items-center justify-center">
                <GraduationCap />
              </div>
              <div className="flex items-center gap-1 text-3xl md:text-4xl font-semibold">
                <CountUp
                  from={0}
                  to={1}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                <p className="">st</p>
              </div>
              <p className="text-sm md:text-normal text-white/50">Semester</p>
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card space-y-2"
              spotlightColor="rgba(155, 121, 0, 0.43)"
            >
              <div className="h-12 w-12 bg-yellow-800/20 text-yellow-500 rounded-xl flex items-center justify-center">
                <GitGraph />
              </div>
              <div className="flex items-center gap-1 text-3xl md:text-4xl font-semibold">
                <CountUp
                  from={0}
                  to={100}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                <p className="">%</p>
              </div>
              <p className="text-sm md:text-normal text-white/50">Commitment</p>
            </SpotlightCard>
          </motion.div>
        </div>
        {/* TechStack */}
        <TechStack />
      </section>

      {/* Projects */}
      <section>
        <div className="flex flex-col items-center justify-center w-full h-auto my-20 space-y-6">
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center bg-white/5 backdrop-blur-xl gap-4  py-2 px-5 rounded-full border border-primary/20 text-white/80 text-sm"
          >
            <TrendingUp size={20} className="text-primary" /> Featured Work
          </motion.span>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-bold text-3xl md:text-5xl"
          >
            Projects & Experiments
          </motion.h1>
          <ProjectCard show={3} />
          <motion.a
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            href={"/projects"}
            className="group inline-flex items-center bg-white/5 backdrop-blur-xl gap-2  py-2 px-5 rounded-full border border-primary/20 text-sm text-primary hover:bg-primary hover:text-black transition-all ease-in-out duration-300"
          >
            <Sparkles size={20} /> Explore All Projects{" "}
            <ArrowRight className="group-hover:translate-x-1" />
          </motion.a>
        </div>
      </section>

      {/* Quote */}
      <QuoteCard />
      {/*  */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6"
      >
        <SpotlightCard
          className="custom-spotlight-card space-y-2"
          spotlightColor="rgba(3, 157, 89, 0.71)"
        >
          <div className="h-12 w-12 bg-emerald/20 text-emerald rounded-xl flex items-center justify-center">
            <Folder />
          </div>
          <div>
            <h1 className="text-xl font-mono">projects/</h1>
            <p className="text-white/50 text-xs">Explore my work</p>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card space-y-2"
          spotlightColor="rgba(0, 27, 155, 0.43)"
        >
          <div className="h-12 w-12 bg-blue-900/20 text-blue-500 rounded-xl flex items-center justify-center">
            <FileSliders />
          </div>
          <div>
            <h1 className="text-xl font-mono">resume.pdf</h1>
            <p className="text-white/50 text-xs">Download my CV</p>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card space-y-2"
          spotlightColor="rgba(157, 3, 139, 0.71)"
        >
          <div className="h-12 w-12 bg-pink-900/20 text-pink-500 rounded-xl flex items-center justify-center">
            <Mail />
          </div>
          <div>
            <h1 className="text-xl font-mono">contact</h1>
            <p className="text-white/50 text-xs">Let&apos;s connect</p>
          </div>
        </SpotlightCard>
      </motion.div>
    </div>
  );
}
