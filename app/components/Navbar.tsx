"use client";
import { Sparkles, TerminalIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "blog",
    path: "/blog",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${
        isOpen
          ? "bg-background md:bg-transparent"
          : "bg-transparent backdrop-blur-xl"
      } sticky top-0 z-50 w-full flex items-center justify-between md:justify-evenly px-6 md:px-0 py-4 transition-all ease-in-out duration-300`}
    >
      <Link href={"/"} className="flex items-center gap-2">
        <TerminalIcon
          color="black"
          className="bg-emerald size-10 rounded-lg p-2"
        />
        <h1 className="font-bold text-lg">
          afriawan<span className="text-primary text-sm font-normal">.dev</span>
        </h1>
      </Link>

      {/* Navbar Items */}
      <div className="flex items-center gap-4">
        {/* Desktop */}
        <div className="hidden lg:flex gap-4">
          {navLinks.map((nav, i) => (
            <Link
              key={i}
              href={nav.path}
              className={`${
                currentPath === nav.path
                  ? "bg-primary/20 text-primary border border-primary/50"
                  : ""
              } px-4 py-1.5 rounded-md font-semibold text-sm`}
            >
              {nav.name}
            </Link>
          ))}
        </div>

        {/* Mobile */}
        <div
          className={`${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } lg:hidden flex flex-col gap-2 absolute bg-background top-18 left-0 w-full p-4 transition-all ease-in-out duration-700 overflow-hidden`}
        >
          {navLinks.map((nav, i) => (
            <Link
              key={i}
              href={nav.path}
              onClick={() => setIsOpen(false)}
              className={`${
                currentPath === nav.path
                  ? "bg-primary/10 text-primary border border-primary/30"
                  : "opacity-70 hover:opacity-100 hover:bg-primary/5"
              } px-4 py-3 rounded-lg font-semibold inline-flex items-center gap-4 transition-all`}
            >
              {currentPath === nav.path && <Sparkles className="w-4 h-4" />}
              {nav.name}
            </Link>
          ))}
        </div>

        {/*  */}
        {/* <div>
          <button className="inline-flex gap-2 items-center border border-white/40 px-2 py-1 rounded-md opacity-80">
            <Globe size={20} /> EN
          </button>
        </div> */}
        {/* Toggle Navbar */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
