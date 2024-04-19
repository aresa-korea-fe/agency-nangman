"use client";

import { useState, useEffect } from "react";

export default function ClientSideComponent() {
  const [xy, setXY] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const xyHandler = (e: MouseEvent) => {
      setXY({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", xyHandler);

    return () => {
      window.removeEventListener("mousemove", xyHandler);
    };
  }, []);

  return (
    <>
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
    </>
  );
}
