import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";
import "@/app/globals.css";
import SessionProvider from "@/context/SessionAuthProvider";
import Header from "@/components/containers/headers/header";
import Foother from "@/components/containers/foothers/foother"

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
      <body className="min-h-screen flex flex-col bg-color17 text-color1 dark:bg-color1 dark:text-color17">
      <Header/>
      {children}
      <Foother />
      </body>
    </html>
    </SessionProvider>
  );
}
