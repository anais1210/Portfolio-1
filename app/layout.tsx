import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Anais Zhang's Portfolio",
  description: "Welcome to my portfolio!",
  icons: {
    icon: "/imgs/favicon.ico",
    // shortcut: "/imgs/favicon.png",
    // apple: "/imgs/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen justify-between">
        <Header className="font-copperplate-gothic-31-ab header-title " />
        <main className="flex-grow">{children}</main>
        {/* <Footer className="h-5" /> */}
      </body>
    </html>
  );
}
