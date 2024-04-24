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
      <section id="nangmanBg" className="h-screen relative">
        <video
          autoPlay
          muted
          loop
          preload="metadata"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/second.mp4" type="video/mp4" />
        </video>
        <Particle />
      </section>
    </Suspense>
  );
}
