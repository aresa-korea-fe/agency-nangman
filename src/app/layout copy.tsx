"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
import { META } from "@/constants/metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("RootLayout")

  const [xy, setXY] = useState({ x: 0, y: 0 });

  const xyHandler = (e: any) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    setXY({ x: mouseX, y: mouseY });
  };

  const [dynamicMetadata, setDynamicMetadata] = useState({
    title: META.title,
    description: META.description,
    keywords: META.keywords.join(', '),
    ogTitle: META.openGraph.title,
    ogDescription: META.openGraph.description,
    ogImage: META.openGraph.images.url,
    twitterImage: META.twitter.images.url,
    twitterImageAlt: META.twitter.images.alt,
  });

  return (
    <>
      {<Head>
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
        <meta name="keywords" content={META.keywords.join(', ')} />
        {META.icons.map((icon, index) => (
          <link key={index} rel={icon.rel} sizes={icon.sizes} href={icon.url} type={icon.type} />
        ))}
        <link rel="manifest" href={META.manifest} />
        <meta property="og:type" content={META.openGraph.type} />
        <meta property="og:locale" content={META.openGraph.locale} />
        <meta property="og:url" content={META.openGraph.url} />
        <meta property="og:site_name" content={META.openGraph.siteName} />
        <meta property="og:title" content={META.openGraph.title} />
        <meta property="og:description" content={META.openGraph.description} />
        <meta property="og:image" content={META.openGraph.images.url} />
        <meta property="og:image:width" content={META.openGraph.images.width.toString()} />
        <meta property="og:image:height" content={META.openGraph.images.height.toString()} />
        <meta name="twitter:card" content={META.twitter.card} />
        <meta name="twitter:site" content={META.twitter.site} />
        <meta name="twitter:creator" content={META.twitter.creator} />
        <meta name="twitter:image" content={META.twitter.images.url} />
        <meta name="twitter:image:alt" content={META.twitter.images.alt} />
        {/* ICONS 메타데이터를 추가합니다. */}
        {META.icons.map((icon, index) => (
          <link key={index} rel={icon.rel} href={icon.url} sizes={icon.sizes} type={icon.type} />
        ))}
      </Head>}
      < html lang="en" >
        <body
          className={`${inter.className} cursor-none`}
          onMouseMove={xyHandler}
        >
          {/* <h2 className="text-white">{META.title}</h2> */}
          <Header />

          <div
            className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-[10000] block h-2.5 w-2.5 rounded-full bg-white mix-blend-difference"
            style={{
              translate: "translate: none",
              rotate: "none",
              scale: "none",
              transform: `translate(${xy.x}px, ${xy.y}px)`,
            }}
          ></div>
          <div
            className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-[10000] mix-blend-difference"
            style={{
              translate: "translate: none",
              rotate: "none",
              scale: "none",
              transform: `translate(${xy.x - 15}px, ${xy.y - 15}px)`,
            }}
          >
            <div
              className="block h-10 w-10 rounded-full border border-white bg-transparent"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            ></div>
          </div>
          {children}
        </body>
      </html>
    </>
  );
}
