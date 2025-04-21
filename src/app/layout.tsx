import localFont from "next/font/local";
import "./globals.css";
import {  Lacquer } from "next/font/google"
import { Rubik_Spray_Paint } from "next/font/google";
import { Silkscreen } from "next/font/google"
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

const lacquer = Lacquer({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-lacquer",
})


const rubik = Rubik_Spray_Paint({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-rubik",
})


const skillscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-skillscreen",
})
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${skillscreen.variable} ${rubik.variable} ${lacquer.variable} dark:bg-black/5 bg-slate-50 relative ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
