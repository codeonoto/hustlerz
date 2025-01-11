import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hustlerz",
  description:
    "Looking for expert web and app development? Hustlerz delivers custom websites, mobile apps, and scalable digital solutions for startups and enterprises. Get in touch today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Professional Web Development, Custom App Development, Full Stack Development, Hustlerz Web Services, Startup Solutions, Affordable Mobile App Development, React, Next.js Development, College Project Help, Scalable Software Development, Hustlerz Digital Solutions, 
          Web Design Agency, Online Project Assistance, College Project, PPT, College Report, Minor and Major Project, Minor Project, Major Project, PBL, Engineering, Computer Science Engineering, Reactjs, Nextjs, JavaScript, Tailwind Css, Mern Stack, Full Stack, Data Science, "
        />
        <meta name="author" content="Hustlerz" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hustlerz. " />
        <meta
          property="og:description"
          content="Need expert digital solutions? Hustlerz specializes in custom web and app development for businesses of all sizes. Contact us for innovative and scalable results!"
        />
        <meta property="og:image" content="/social-preview.png" />
        <meta property="og:url" content="https://hustlerz.com" />
        <link rel="canonical" href="https://hustlerz.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-space dark  bg-gray overflow-x-hidden scrollbar-corner-darkBlue`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
