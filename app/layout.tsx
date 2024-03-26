import { Toaster } from "@/components/ui/toaster";
import { quicksand } from "@/lib/fonts";
import Script from "next/script";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body>
        <main className={quicksand.variable}>{children}</main>
        <Toaster />
        <Script
          strategy="beforeInteractive"
          type="text/javascript"
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&loading=async`}
          async={true}
        />
      </body>
    </html>
  );
}
