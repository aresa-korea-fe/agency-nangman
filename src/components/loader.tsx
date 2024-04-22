"use client";

import { useEffect, useState } from "react";
import "/public/css/wave.css";
import "./loader.css";
import Image from "next/image";

export default function Loader() {
  const [time, setTime] = useState<number>(0);
  useEffect(() => {
    const fadeOutLoader = () => {
      setTimeout(() => {
        // 로더를 페이드 아웃하는데 3초를 줌
        const loader = document.querySelector(".hero_area") as HTMLElement;
        if (loader) {
          loader.style.transition = "opacity 1s";
          loader.style.opacity = "0";
          setTimeout(() => {
            loader.style.display = "none";
          }, 1000);
        }
      }, 3500); // 3500 밀리초 (3.5초)
    };
    window.addEventListener("load", fadeOutLoader);
    return () => window.removeEventListener("load", fadeOutLoader);
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 함

  return (
    <div className="hero_area">
      <div className="mb-4 h-2.5 w-full rounded-full bg-white/50 dark:bg-white/50">
        <div
          id="myBar"
          className="h-2.5 rounded-full bg-gray-600 dark:bg-white"
          style={{ width: "45%" }}
        ></div>
      </div>

      <div className="flex flex-col items-center gap-5">
        <Image
          src="/nangman_logo@4x.png"
          alt="Agency nangman"
          width={100}
          height={100}
        />
        <p className="text-3xl font-bold">Studio NANGMAN</p>
      </div>

      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="10"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  );
}
