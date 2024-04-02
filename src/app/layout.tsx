'use client';

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "낭만 | Nangman Agency",
//   description: "우리의 서비스를 만듭니다.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [xy, setXY] = useState({ x: 0, y: 0 })

  const xyHandler = (e: any) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    setXY({ x: mouseX, y: mouseY });
  }

  return (
    <html lang="en">
      <body className={`${inter.className} cursor-none`} onMouseMove={xyHandler}>
        <Header />

        {/* <h1 className='mt-20'>{xy.x}px, {xy.y}px</h1> */}
        <div className="bg-white rounded-full block h-2.5 w-2.5 mix-blend-difference left-0 bottom-0 pointer-events-none fixed right-0 top-0 z-[10000]" style={{
          translate: "translate: none", rotate: "none", scale: "none", transform: `translate(${xy.x}px, ${xy.y}px)`
        }}>
        </div>
        <div className="bottom-0 top-0 right-0 left-0 fixed mix-blend-difference pointer-events-none z-[10000]" style={{
          translate: "translate: none", rotate: "none", scale: "none", transform: `translate(${xy.x - 15}px, ${xy.y - 15}px)`
        }}>
          <div className="border border-white block bg-transparent rounded-full h-10 w-10" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px);" }}>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
