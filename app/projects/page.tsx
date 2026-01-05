"use client";
import { FolderOpen } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "motion/react";

export default function Page() {
  return (
    <div className="relative flex flex-col w-full min-h-screen items-center justify-center px-6 md:px-8 lg:px-10 xl:px-20 mb-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="p-40 absolute -z-10 rounded-full top-10 left-1/3 -translate-x-1/2 shadow-[0_0_200px_0] shadow-primary bg-primary/40 opacity-30"
      ></motion.div>
      <div className="text-center space-y-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group inline-flex items-center bg-white/5 backdrop-blur-xl gap-2  py-2 px-5 rounded-full border border-primary/20 text-sm transition-all ease-in-out duration-300"
        >
          <FolderOpen size={20} className="text-emerald" /> ~/projects
        </motion.div>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-bold text-4xl md:text-6xl"
        >
          My Projects
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xl text-white/50"
        >
          A collection of my work, experiments, and learning projects.
        </motion.p>
      </div>
      <div className="mt-20 space-y-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 items-center"
        >
          <div className="p-2 rounded-md bg-emerald/20">
            <FolderOpen className="text-emerald" />
          </div>
          <h1 className="text-3xl font-bold">All Projects</h1>
        </motion.div>
        <ProjectCard />
      </div>
    </div>
  );
}
