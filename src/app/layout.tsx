import "./globals.css";
import Header from "../components/Header";
import ClientSideComponent from "@/components/ClientSideComponent";

import type { Metadata } from 'next'
import { META } from "@/constants/metadata";
import Loader from "@/components/loader";


export const metadata: Metadata = META

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // console.log("RootLayout");
  return (
    <>
      <html lang="ko" >
        <body className='cursor-none'>
          <Loader />
          <Header />
          <ClientSideComponent />
          {children}
        </body>
      </html>
    </>
  );
}
