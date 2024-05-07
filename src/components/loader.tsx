"use client";

import { useEffect, useState } from "react";
import "/public/css/wave.css";
import "./loader.css";
import Image from "next/image";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(false);
    }, 3000); // 3초 후 로더 숨김
    return () => clearTimeout(timeoutId);
  }, []);

  return show ? (
    <div className="hero_area opacity-100 transition-opacity duration-1000">
      <div className="invisible mb-4 h-2.5 w-full rounded-full bg-white/50 dark:bg-white/50">
        <div
          id="myBar"
          className="h-2.5 rounded-full bg-gray-600 dark:bg-white"
          style={{ width: "45%" }}
        ></div>
      </div>

      <div className="flex flex-col items-center gap-5">
        <div className="w-20">
          <Image
            src="/nangman_logo@4x.png"
            alt="Agency nangman"
            width={100}
            height={100}
            className="h-auto w-auto"
          />
        </div>

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
  ) : (
    <div className="hero_area opacity-0 transition-opacity duration-1000">
      <div className="invisible mb-4 h-2.5 w-full rounded-full bg-white/50 dark:bg-white/50">
        <div
          id="myBar"
          className="h-2.5 rounded-full bg-gray-600 dark:bg-white"
          style={{ width: "45%" }}
        ></div>
      </div>

      <div className="flex flex-col items-center gap-5">
        <div className="w-20">
          <Image
            src="/nangman_logo@4x.png"
            alt="Agency nangman"
            width={100}
            height={100}
            className="h-auto w-auto"
          />
        </div>
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
