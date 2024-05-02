import Image from "next/image";

export default function Floating() {
  return (
    <a
      href="/studio-nangman-portfolio.pdf"
      download
      className="fixed bottom-10 right-10 z-50 h-24 w-24 rounded-full"
    >
      <div className="bg-red absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2">
        <svg
          className="mr-1 w-4 rotate-90"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430054 3 0.339746L15 7.26795Z"
            fill="black"
          />
        </svg>
      </div>
      <svg
        viewBox="0 0 500 500"
        className="animate-[spin_1.5s_infinite_3000ms]"
      >
        <defs>
          <path
            d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
            id="textcircle_top"
          ></path>
        </defs>
        <text textLength="1100" className="text-6xl">
          <textPath fill="black" xlinkHref="#textcircle_top">
            NANGMAN {""}
            {""} STUDIO
          </textPath>
        </text>
      </svg>
    </a>
  );
}
