import ClientSideComponent from "@/components/ClientSideComponent";
import Header from "../components/Header";
import "./globals.css";

import { META } from "@/constants/metadata";
import type { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = META;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="ko">
        <body className="relative cursor-none">
          <Header />
          {/* <ClientSideComponent /> */}
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
