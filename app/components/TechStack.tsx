"use client";
import LogoLoop from "@/components/LogoLoop";
import { motion } from "motion/react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
  },
  {
    node: <SiSupabase />,
    title: "Supabase",
  },
  {
    node: <SiExpress />,
    title: "Express JS",
  },
  {
    node: <SiPostgresql />,
    title: "Postgresql",
  },
];

export default function TechStack() {
  return (
    <div className="space-y-6 my-20">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center font-mono text-sm font-semibold text-white/60"
      >
        TECH STACK
      </motion.h1>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{
          height: "200px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#0a0a0a"
          ariaLabel="Technology partners"
        />
      </motion.div>
    </div>
  );
}
