import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@wrksz/themes/next";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

const siteUrl = "https://www.kunalnasa.work";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Kunal Nasa | Software Engineer",
    template: "%s | Kunal Nasa",
  },

  description:
    "Kunal Nasa is a Software Engineer focused on backend engineering, PDF generation, font parsing, and building software from scratch.",

  applicationName: "Kunal Nasa Portfolio",
  authors: [{ name: "Kunal Nasa", url: siteUrl }],
  creator: "Kunal Nasa",
  publisher: "Kunal Nasa",

  keywords: [
    "Kunal Nasa",
    "Software Engineer",
    "Backend Engineer",
    "Rust",
    "TypeScript",
    "PDF Generation",
    "Font Parsing",
    "Font Shaping",
    "SVG Rendering",
    "Open Source",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Kunal Nasa | Software Engineer",
    description:
      "Software Engineer building systems from scratch, with a focus on backend engineering, PDF generation, font engineering, and Rust.",
    siteName: "Kunal Nasa",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kunal Nasa | Software Engineer",
    description:
      "Software Engineer building systems from scratch. Interested in backend engineering, PDF generation, font engineering, and Rust.",
    creator: "@_devkunal",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={sourceCodePro.variable}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
