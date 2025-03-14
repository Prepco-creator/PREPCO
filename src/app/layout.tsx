import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/comman/Navbar";
import LoadingAnimation from "@/components/loaders/LoadingAnimation";
import Script from "next/script";
import { ToastContainer } from "react-toastify";

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
      <head>
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "q74xa1mhvh");
            `,
          }}
        />
      </head>
      <body className="font-poppins">
        <ToastContainer />
        <LoadingAnimation />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
