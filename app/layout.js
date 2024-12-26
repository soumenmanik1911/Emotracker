// use client
import { Geist, Geist_Mono, Fugaz_One } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '../context/AuthContext';


import Link from "next/link";
import { use } from "react";
import Logout from "../components/Logout";
import Loading from "../components/Loading";
import Contact from "@/components/Contact";
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "emotracker",
  description: "track your moods every day",
};

export default function RootLayout({ children }) {
 
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            />
          </svg>
        </span>
        <Link href={"/"}>
          <h1 className="text-4xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300" >Emotracker</h1>
        </Link>
      </div>
      <Logout />
    </header>
  );

  const footer = (
    <footer className="sm:p-2 bg-gray-200 text-gray-600">
      <p className="text-center mb-4 font-bold text-xl">
        "Track your 💕emotions, transform your life."
      </p>
      <div className="flex justify-center gap-4 ">
        <Link href="https://github.com/your-github-profile" className="hover:underline hover:font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-gray-800 hover:text-black transition-colors duration-300"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.805 5.62-5.475 5.92.43.37.814 1.102.814 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </Link>
        <Link href="https://facebook.com/your-facebook-profile" className="hover:underline hover:font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.324V1.325C24 .593 23.407 0 22.675 0z" />
          </svg>
        </Link>
        <Link href="https://instagram.com/your-instagram-profile" className="hover:underline hover:font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-pink-600 hover:text-pink-800 transition-colors duration-300"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.058-2.418.27-3.29.542-.872.272-1.611.63-2.346 1.365-.735.735-1.093 1.474-1.365 2.346-.272.872-.484 2.009-.542 3.29-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.281.27 2.418.542 3.29.272.872.63 1.611 1.365 2.346.735.735 1.474 1.093 2.346 1.365.872.272 2.009.484 3.29.542 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.058 2.418-.27 3.29-.542.872-.272 1.611-.63 2.346-1.365.735-.735 1.093-1.474 1.365-2.346.272-.872.484-2.009.542-3.29.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.281-.27-2.418-.542-3.29-.272-.872-.63-1.611-1.365-2.346-.735-.735-1.474-1.093-2.346-1.365-.872-.272-2.009-.484-3.29-.542-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
          </svg>
        </Link>
      </div>

      <div className="flex justify-between items-center px-4 mt-6">
        <p>© 2024 Emotracker. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/Privacy" className="hover:underline hover:font-semibold">
            Privacy Policy
          </Link>
          <Link href="/Term" className="hover:underline hover:font-semibold">
            Terms of Service
          </Link>
          <Link href="/Contact" className="hover:underline hover:font-semibold">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-ful mx-w-[1000px] mx-auto min-h-screen flex flex-col`}
      >
       
        <AuthProvider>
          {header}
          <Loading>{children}</Loading>
          {footer}
        </AuthProvider>
      </body>
    </html>
  );
}
