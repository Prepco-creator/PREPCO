import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/comman/Navbar";
import LoadingAnimation from "@/components/loaders/LoadingAnimation";

export const metadata: Metadata = {
  title: "PREPCO | Where Care Meets Convenience",
  description: "A medical insurance pvt ltd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="font-poppins">
        <LoadingAnimation />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
