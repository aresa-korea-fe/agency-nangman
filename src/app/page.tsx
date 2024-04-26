"use client";

import Loader from "@/components/loader";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Particle = dynamic(() => import("@/components/particle"), {
  loading: () => <Loader />,
});

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <section id="nangmanBg" className="relative h-screen">
        <video
          autoPlay
          muted
          loop
          preload="metadata"
          className="absolute left-0 top-0 h-full w-full object-cover"
        >
          <source src="/second.webm" type="video/webm" />
        </video>
        <Particle />
      </section>
    </Suspense>
  );
}
