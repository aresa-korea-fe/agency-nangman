import ClientSideComponent from "@/components/ClientSideComponent";
import { META } from "@/constants/metadata";
import type { Metadata } from "next";
import Header from "../components/Header";
import "./globals.css";

export const metadata: Metadata = META;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="ko">
        <body className="cursor-none">
          <Header />
          <ClientSideComponent />
          {children}
        </body>
      </html>
    </>
  );
}
