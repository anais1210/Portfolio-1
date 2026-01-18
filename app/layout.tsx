import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Anais Zhang's Portfolio",
  description: "Welcome to my portfolio!",
  icons: {
    icon: "/imgs/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="min-h-screen bg-[#0F0F23] text-[#F8F8FF] relative overflow-x-hidden">
        {/* Background grid pattern */}
        <div className="fixed inset-0 bg-grid pointer-events-none opacity-50" />

        {/* Animated background blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="blob blob-primary w-[600px] h-[600px] -top-48 -left-48" />
          <div className="blob blob-secondary w-[500px] h-[500px] top-1/2 -right-48 delay-200" style={{ animationDelay: '5s' }} />
          <div className="blob blob-accent w-[400px] h-[400px] -bottom-32 left-1/3 delay-400" style={{ animationDelay: '10s' }} />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <Header className="font-copperplate-gothic-31-ab header-title" />
          <main className="min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
