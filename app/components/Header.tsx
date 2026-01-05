"use client";
import { motion } from "motion/react";

export default function Header({
  name,
  icon,
}: {
  name: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="group inline-flex items-center bg-white/5 backdrop-blur-xl gap-2  py-2 px-5 rounded-full border border-primary/20 text-sm transition-all ease-in-out duration-300"
    >
      {icon} {name}
    </motion.div>
  );
}
