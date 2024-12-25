import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/comman/Navbar";
import Footer from "@/components/comman/Footer";


export const metadata: Metadata = {
  title: "PREPCO | Prevention is better than cure",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
