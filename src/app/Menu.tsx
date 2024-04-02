import Image from 'next/image';
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Nangman Agency',
  description: 'Contact Us | Nangman Agency',
}

export default function Menu() {
  return (
    <main className="h-screen py-80 bg-[#04070B] text-white">
      <div className="max-w-screen-xl mx-auto  h-full">
        <div className="flex flex-row h-full">
          <div className="w-8/12 flex flex-col justify-between">
            <div className="">
              <h1 className="font-tenada mb-4">낭만 에이전시</h1>
              <Link href="/growth/verbal-branding"><h3>성장기록물</h3></Link>
              {/* <div className="my-6 flex flex-col gap-2">
                <Link href="/growth/verbal-branding" className="uppercase">verbal branding</Link>
                <Link href="/" className="uppercase">bx/publishing</Link>
                <Link href="/" className="uppercase">app/web service</Link>
                <Link href="/" className="uppercase">prop-tech</Link>
              </div> */}
              <Link href="/project-request"><h3>Project Request</h3></Link>
              <Link href="/company"><h3>Company</h3></Link>
              <Link href="/contact-us"><h3>Contact Us</h3></Link>

            </div>
            <div>
              <p className='font-bold'>서울특별시 송파구 중대로 135 서관동 11층 핀테크 기술지원센터</p>
              <p className="text-xs text-white/50 mt-1">2024 NANGMAN.CO.KR ALL RIGHTS RESERVED</p>
            </div>
          </div>
          <div className="w-4/12 border-l flex flex-col items-end justify-between text-right">
            <div>
              <h4 className="font-tenada">ABOUT ARESA</h4>
              <div className="flex gap-3 mt-2">
                <div className="flex flex-col gap-1">
                  <div>공식 홈</div>
                  <div>전세안전진단</div>
                  <div>오독스</div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className='underline'><Link href="https://www.aresa.io/" target="blank">aresa.io</Link></div>
                  <div className='underline'><Link href="https://ncp.aresa.io" target="blank">ncp.aresa.io</Link></div>
                  <div className='underline'><Link href="https://www.odocs.io" target="blank">odocs.io</Link></div>
                </div>
              </div>
            </div>
            <div>
              <div className='flex gap-4'>
                <Image
                  src="/icons/i_map.png"
                  width={24}
                  height={24}
                  alt={''} />찾아오시는 길
              </div>
            </div>
            <div className="flex flex-col gap-2 items-end">
              <p className='text-lg'>T. 070 8798 0110</p>
              <div>
                <Link href="/project-request" className="flex flex-row gap-16 w-min justify-between bg-transparent px-5 py-3 border border-white hover:bg-gray-50 sm:mt-0 sm:w-auto hover:text-black">
                  <span>프로젝트 외뢰</span>
                  <span>-</span>
                </Link>
              </div>
              <p className="text-xs text-white/50">2024 NANGMAN.CO.KR ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
