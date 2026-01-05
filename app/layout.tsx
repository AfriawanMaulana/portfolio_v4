import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afriawan Maulana - Portfolio",
  description:
    "Hi! I'm Afriawan Maulana, an Informatics student at Wijaya Kusuma University of Surabaya, driven by a passion for web development and a strong focus on building modern, scalable, and user-friendly applications.",
  keywords: [
    "afriawan",
    "afriawan maulana",
    "afriawan maulana portfolio",
    "afriawan maulana web developer",
    "afriawan maulana fullstack developer",
    "web developer surabaya",
    "terry",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Afriawan Maulana",
              url: "https://afriawan.my.id",
              sameAs: [
                "https://github.com/AfriawanMaulana",
                "https://www.linkedin.com/in/afriawan-maulana-661684303",
                "https://www.instagram.com/afriawanmaulana",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
