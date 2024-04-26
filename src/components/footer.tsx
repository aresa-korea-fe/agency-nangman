"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const tel = "080-8798-0110";
  return (
    <footer className="relative z-10 w-screen bg-[#234098]">
      <div className="mx-auto flex items-center  justify-between bg-black/80 px-20 py-10 mobile:flex-col mobile:gap-10 mobile:px-0">
        <div className="flex flex-col items-start gap-4 mobile:w-full mobile:items-center">
          <div className="flex gap-3">
            <Image
              src="/nangman_logo@4x.png"
              alt="Agency nangman"
              width={32}
              height={32}
            />
            <p className="text-3xl font-bold leading-none text-white">
              studio NANGMAN
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <span className="text-white/60">
              낭만은 언제나 당신의 목소리에 귀 기울입니다.
            </span>

            <div className="flex items-center justify-start gap-4 whitespace-nowrap">
              <Link
                href={`tel:${tel}`}
                className="flex max-w-36 flex-1 justify-center gap-3 rounded-md bg-navyBlue px-4 py-3 text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                전화 상담
              </Link>
              <Link
                href="/project-request"
                className="flex max-w-36 flex-1 items-center justify-center gap-3 rounded-md bg-gray-300 px-4 py-3 text-sm  text-navyBlue"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                프로젝트 문의
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-5 text-base font-bold text-white/60">
          <p className="text-lg font-bold text-white">Address</p>
          <p>
            전북특별자치도 전주시 덕진구 오공로 123,
            <br />
            전북창조경제혁신센터 4층
          </p>
          <p>
            서울특별시 송파구 중대로 135, <br />
            11층 ICT 청년창업지원센터
          </p>
        </div>
      </div>
      <div className="border-t border-white/30 bg-black/80 py-4 text-center text-white/30">
        <span className="mobile:text-xs">
          COPYRIGHT 2012-2024 STUDIO NANGMAN. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
}