import type { Metadata } from "next";
import Layout from "../layout"
import { Inter } from "next/font/google";
import "@/app/globals.css";
import SessionProvider from "@/context/SessionAuthProvider";
import Header from "@/components/containers/headers/header";
import Foother from "@/components/containers/foothers/foother"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard OWS",
  description: "Code organiacion Web Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <Header />
      {children}
      <Foother />
    </Layout>
  );
}

