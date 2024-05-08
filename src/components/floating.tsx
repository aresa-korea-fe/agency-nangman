"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Floating() {
  const params = usePathname();
  const [white, setWhite] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = (event: any) => {
    event.stopPropagation(); // 이벤트 버블링을 막음
    setOpen(false);
  };
  useEffect(() => {
    const darkenessScreen = ["/", "/project-request", "/company"];
    if (darkenessScreen.includes(params)) setWhite(true);
    else setWhite(false);
  }, [params]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      onClick={handleOpen}
      className="fixed bottom-10 right-10 z-50 h-24 w-24 rounded-full shadow-sm mobile:bottom-6 mobile:right-6 mobile:h-16 mobile:w-16"
    >
      {open ? (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none"
            onClick={handleClose}
          >
            <div
              className="fixed bottom-0 right-1/2 top-0 z-20 m-auto h-fit translate-x-1/2 rounded-lg bg-black p-4 px-8 py-5 text-black shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center gap-4">
                <p className="font-xs text-white/60">
                  studio-nangman-portfolio.pdf
                </p>
                <a
                  onClick={(e) => {
                    alert("다운로드가 실행되었습니다.");
                    handleClose(e);
                  }}
                  href="/studio-nangman-portfolio.pdf"
                  download
                  className="flex w-fit items-center gap-1 rounded bg-gray-300 px-4 py-2 text-sm font-bold text-gray-800 hover:bg-gray-200"
                >
                  <svg
                    className="mr-2 h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black/60"></div>
        </>
      ) : null}

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
      <svg viewBox="0 0 500 500" className="animate-spin-reverse">
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
            GET ROMANCE
          </textPath>
        </text>
      </svg>
    </div>
  );
}
