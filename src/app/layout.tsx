import localFont from "next/font/local";
import "./globals.css";
import { Lacquer } from "next/font/google";
import { Rubik_Spray_Paint } from "next/font/google";
import { Silkscreen } from "next/font/google";

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
});

const rubik = Rubik_Spray_Paint({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-rubik",
});

const skillscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-skillscreen",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Kunal Nasa – Portfolio</title>
        <meta name="description" content="Kunal Nasa's personal portfolio. Explore projects, design, and work." />

        {/* Open Graph for LinkedIn / Facebook */}
        <meta property="og:title" content="Kunal Nasa – Portfolio" />
        <meta property="og:description" content="Kunal Nasa's personal portfolio. Explore projects, design, and work." />
        <meta property="og:image" content="https://www.kunalnasa.work/og-image.png" />
        <meta property="og:url" content="https://www.kunalnasa.work" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kunal Nasa – Portfolio" />
        <meta name="twitter:description" content="Kunal Nasa's personal portfolio. Explore projects, design, and work." />
        <meta name="twitter:image" content="https://www.kunalnasa.work/og-image.png" />
        <meta name="twitter:url" content="https://www.kunalnasa.work" />

        {/* Favicon */}
        <link rel="icon" href="/Images/AppLogo.ico" type="image/x-icon" />
      </head>
      <body className={`${geistSans.variable} ${skillscreen.variable} ${rubik.variable} ${lacquer.variable} dark:bg-black/5 bg-slate-50 relative ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
