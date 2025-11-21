'use client';
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import MetadataProvider from "@/components/MetadataProvider";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted ? (
        <>
          <MetadataProvider
            title="Kunal Nasa - Portfolio"
            description="Hey, I'm Kunal Nasa! Explore my portfolio, skills, and projects."
            imageUrl="/Images/AppLogo.jpeg"
            url="https://kunalnasa.work"
          />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Toaster />
          </ThemeProvider>
        </>
      ) : (
        <>
          {children}
          <Toaster />
        </>
      )}
    </>
  );
}
