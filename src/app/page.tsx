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
      <section className="h-screen">
        <Particle />
      </section>
    </Suspense>
  );
}
