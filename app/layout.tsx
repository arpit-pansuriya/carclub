import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { relative } from "path";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Club",
  description: "Discovered the cars in the worlds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"relative"}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
