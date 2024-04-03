import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Nangman Agency",
  description: "Contact Us | Nangman Agency",
};

export default function Home() {
  return (
    <main className="h-screen bg-[#04070B] py-80 text-white">
      <div className="mx-auto h-full  max-w-screen-xl">
        <div className="flex h-full flex-row">
          <div className="flex w-8/12 flex-col justify-between">
            <div className="">
              <h1 className="font-tenada mb-4">낭만 에이전시</h1>
              <Link href="/" className="leading-none">
                <h3>Portfolio</h3>
              </Link>
              <div className="my-6 flex flex-col gap-2">
                <Link href="/portfolio/verbal-branding" className="uppercase">
                  verbal branding
                </Link>
                <Link href="/" className="uppercase">
                  bx/publishing
                </Link>
                <Link href="/" className="uppercase">
                  app/web service
                </Link>
                <Link href="/" className="uppercase">
                  prop-tech
                </Link>
              </div>
              <Link href="/project-request" className="">
                <h3>Project Request</h3>
              </Link>
              <Link href="/contact-us" className="">
                <h3>Contact Us</h3>
              </Link>
            </div>
            <div>
              <p className="font-bold">
                전라북도 전주시 덕진구 기린대로 886 미래기술혁신센터 307호
              </p>
              <p className="mt-1 text-xs text-white/50">
                2024 NANGMAN.CO.KR ALL RIGHTS RESERVED
              </p>
            </div>
          </div>
          <div className="flex w-4/12 flex-col items-end justify-between border-l text-right">
            <div>
              <h4 className="font-tenada">ABOUT ARESA</h4>
              <div className="mt-2 flex gap-3">
                <div className="flex flex-col gap-1">
                  <div>공식 홈</div>
                  <div>전세안전진단</div>
                  <div>오독스</div>
                </div>
                <div className="flex flex-col gap-1">
                  <div>
                    <Link href="https://www.aresa.io/" target="blank">
                      aresa.io
                    </Link>
                  </div>
                  <div>
                    <Link href="https://ncp.aresa.io" target="blank">
                      ncp.aresa.io
                    </Link>
                  </div>
                  <div>
                    <Link href="https://www.odocs.io" target="blank">
                      odocs.io
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-4">
                <Image src="/icons/i_map.png" width={24} height={24} alt={""} />
                찾아오시는 길
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="text-lg">T. 070 8798 0110</p>
              <div>
                <Link
                  href="/project-request"
                  className="hover:text-black flex w-min flex-row justify-between gap-16 border border-white bg-transparent px-5 py-3 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  <span>프로젝트 외뢰</span>
                  <span>-</span>
                </Link>
              </div>
              <p className="text-xs text-white/50">
                2024 NANGMAN.CO.KR ALL RIGHTS RESERVED
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
