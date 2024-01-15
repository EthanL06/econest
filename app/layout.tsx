import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { dm_sans, playfair_display } from "@/lib/fonts";
import Script from "next/script";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.variable} ${playfair_display.variable} max-w-screen-[1400px] relative mx-auto font-sans text-black dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <TailwindIndicator />
        </ThemeProvider>
        <Script
          strategy="beforeInteractive"
          type="text/javascript"
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        />
      </body>
    </html>
  );
}
