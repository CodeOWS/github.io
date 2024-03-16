import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/context/SessionAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code OWS",
  description: "Code organiacion Web Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="es" >
        <body className="
        min-h-screen 
        flex 
        flex-col 
        text-color1 
        dark:text-color17 
        bg-gradient-to-r 
        from-color16 
        to-color15
        dark:bg-gradient-to-r
        dark:from-color1
        dark:to-color2">
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
