"use client";

import Loader from "@/components/loader";
import Particle from "@/components/particle";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <section className="h-screen">
        <Particle />
      </section>
    </Suspense>
  );
}
