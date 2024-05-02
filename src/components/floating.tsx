"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Floating() {
  const params = usePathname();
  const [white, setWhite] = useState(false);

  useEffect(() => {
    const darkenessScreen = ["/", "/project-request", "/company"];
    console.log(params, darkenessScreen.includes(params));
    if (darkenessScreen.includes(params)) setWhite(true);
    else setWhite(false);
  }, [params]);

  return (
    <a
      href="/studio-nangman-portfolio.pdf"
      download
      className="fixed bottom-10 right-10 z-50 h-24 w-24 rounded-full shadow-sm mobile:bottom-6 mobile:right-6 mobile:h-16 mobile:w-16"
    >
      <div className="bg-red absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={white ? "white" : "black"}
          className="mb-1 mr-1 h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
          />
        </svg>
      </div>
      <svg viewBox="0 0 500 500" className="animate-spin-slow">
        <defs>
          <path
            d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
            id="textcircle_top"
          ></path>
        </defs>
        <text textLength="1100" className="text-6xl" fontFamily="Pretendard">
          <textPath
            fill={white ? "white" : "black"}
            xlinkHref="#textcircle_top"
          >
            Get {""}
            {""} Portfolio
          </textPath>
        </text>
      </svg>
    </a>
  );
}
