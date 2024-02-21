import { Toaster } from "@/components/ui/toaster";
import { quicksand } from "@/lib/fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body>
        <main className={quicksand.variable}>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
