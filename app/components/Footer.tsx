import {
  Copyright,
  Github,
  Instagram,
  Linkedin,
  TerminalIcon,
} from "lucide-react";
import Link from "next/link";

const socialMedia = [
  {
    icon: <Github size={20} />,
    url: "https://github.com/AfriawanMaulana",
  },
  {
    icon: <Linkedin size={20} />,
    url: "https://www.linkedin.com/in/afriawan-maulana-661684303",
  },
  {
    icon: <Instagram size={20} />,
    url: "https://www.instagram.com/afriawanmaulana",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col w-full h-auto space-y-2 p-6 items-center justify-center border-t border-white/20">
      <Link href={"/"} className="flex items-center gap-2">
        <TerminalIcon
          color="black"
          className="bg-emerald size-8 rounded-lg p-1.5"
        />
        <h1 className="font-bold text-lg">
          afriawan<span className="text-primary text-sm font-normal">.dev</span>
        </h1>
      </Link>
      <div className="flex items-center gap-4 mt-4">
        {socialMedia.map((item, i) => (
          <Link
            key={i}
            href={item.url}
            className="backdrop-blur-2xl text-white/40 bg-white/8 border border-white/12 p-2 rounded-md hover:text-primary hover:bg-primary/10 hover:border-primary/40 hover:-translate-y-1 transition-all ease-in-out duration-300"
          >
            {item.icon}
          </Link>
        ))}
      </div>
      <p className="inline-flex gap-2 items-center text-white/40 text-sm">
        <Copyright size={15} /> {year} Afriawan Maulana
      </p>
      <p className="text-xs text-center text-muted-foreground mt-2">
        This site is protected by reCAPTCHA and the Google
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          className="text-blue-500/50"
        >
          {" "}
          Privacy Policy
        </a>{" "}
        and
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          className="text-blue-500/50"
        >
          {" "}
          Terms of Service
        </a>{" "}
        apply.
      </p>
    </footer>
  );
}
