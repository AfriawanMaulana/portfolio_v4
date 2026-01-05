"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github, Layers } from "lucide-react";

import Image from "next/image";
import data from "./data.json";
import { motion } from "motion/react";

export default function ProjectCard({ show }: { show?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.projects.slice(0, show).map((item, i) => (
        <motion.a
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + i / 10 }}
          href={item.url}
          key={i}
        >
          <Card className="bg-gradient-to-br pt-0 from-emerald/5 to-emerald/10 border-emerald/20 hover:border-emerald/40 group overflow-hidden transition-all ease-in-out duration-300">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={item.img}
                alt="Project"
                width={250}
                height={150}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <CardContent className="p-6 space-y-4">
              {/* Badges */}
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="gap-2 border-emerald/30 bg-emerald/10 text-emerald"
                >
                  <Layers className="w-3 h-3" />
                  Featured
                </Badge>
              </div>

              {/* Title & Description */}
              <div>
                <CardTitle className="group-hover:text-emerald text-white text-xl mb-2 transition-colors ease-in-out duration-300">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-white/60 line-clamp-2">
                  {item.description}
                </CardDescription>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {Object.values(item.tech || {})
                  .slice(0, 4)
                  .map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
              </div>
            </CardContent>

            <CardFooter className="p-6 pt-0 flex justify-between items-center">
              <span className="text-emerald font-semibold">2025</span>
              <button className="text-emerald hover:text-emerald-400 flex items-center gap-2 font-medium hover:cursor-pointer">
                View Details
                <ExternalLink className="w-4 h-4" />
              </button>
            </CardFooter>

            {/* Action Buttons (Top Right) */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="w-10 h-10 rounded-lg bg-slate-900/50 backdrop-blur border border-slate-800 hover:bg-slate-800 flex items-center justify-center">
                <Github className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-slate-900/50 backdrop-blur border border-slate-800 hover:bg-slate-800 flex items-center justify-center">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </Card>
        </motion.a>
      ))}
    </div>
  );
}
