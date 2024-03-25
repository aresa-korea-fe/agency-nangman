'use client';

import Image from 'next/image';
import type { Metadata } from 'next'
import { useEffect } from 'react';

// export const metadata: Metadata = {
//   title: 'Contact Us | Nangman Agency',
//   description: 'Contact Us | Nangman Agency',
// }

export default function Home() {

  useEffect(() => {
    // Set the playback rate of the first video element to 2 when the component mounts
    const videoElement = document.getElementsByTagName('video')[0];
    if (videoElement) {
      videoElement.playbackRate = 0.75;
    }
  }, []);

  return (
    <main className="h-screen bg-[#040002] text-white">
      <div className='flex fixed top-0 left-0 w-full h-full bg-[#040002]'>
        <video width="320" height="240" autoPlay muted loop className='m-auto w-4/5'>
          <source src="/third.mp4" type="video/mp4" />
          {/* <source src="/second.mp4" type="video/mp4" /> */}
          {/* <source src="/watermarked_preview.mp4" type="video/mp4" /> */}
        </video>
      </div>

      <div className='relative flex justify-center items-center h-screen tracking-normal'>
        <div className='font-bold text-9xl leading-tight text-center'><span className='font-medium'>NangManm</span><br /><span className='font-tenada'>Just For You</span></div>
        <p className='absolute bottom-8'>낭만은 오롯히 당신을 위해 존재합니다.</p>
      </div>
      <div className='backdrop-blur-2xl py-40 flex flex-col gap-32'>
        <section className='max-w-screen-2xl mx-auto h-full w-full'>
          <div className='h-full text-white text-[40px] font-bold text-center'>
            <h2>낭만은 꿈과 현실이 어우러진 바다 위에서<br />
              열정을 가진 여러분의 항해를 지원합니다.<br />
              어디든 끝까지 함께하겠습니다.</h2>
          </div>
          <div className='relative top-0 left-2/4 w-[1px] h-32 mt-32 bg-white'></div>
        </section>

        <section className='max-w-screen-2xl mx-auto h-full w-full min-h-screen'>
          <div className='h-full pt-32 text-white text-[40px] font-bold text-center'>
            <p className='uppercase text-xl text-white/50 mb-10 font-normal'>nangman</p>
            <h2>
              크고 작은 서비스가 아닌<br />
              우리의 서비스라는 마음으로
            </h2>
            <div className='text-2xl mt-28 leading-[1.8] font-normal'>
              모든 서비스는 <span className='opacity-50'>결코 크고 작음으로 단순히 나뉘지 않습니다.</span><br />
              <span className='opacity-50'>단지,</span> 성장의 과정을 거치고 있는 것 뿐입니다.<br />
              그렇기에 낭만<span className='opacity-50'>은 그러한 성장을 함께하고 싶은 생각으로</span> 가득합니다.
            </div>
          </div>
        </section>

        <section className='max-w-screen-2xl mx-auto h-full w-full'>
          <div className='h-full pt-32 text-white text-[40px] font-bold text-center'>
            <p className='uppercase text-xl text-white/50 mb-10 font-normal'>process</p>
            <h2>
              어떤 서비스를 만들더라도<br />
              같은 방향을 바라보는 것부터
            </h2>
            <div className='text-2xl mt-28 leading-[1.8] font-normal'>
              낭만이 있다면 <span className='opacity-50'>사업 계획서와 방향성 수립부터</span><br />
              <span className='opacity-50'>온전한 서비스 개발과 출시까지 한번에</span> 가능합니다.
            </div>
            <div className='mt-32 pt-16 px-10 border-t'>
              <div className='grid grid-cols-5 text-left'>
                <div>
                  <Image src='/icons8-centre-point.svg' width={60} height={60} alt='Strategy' />
                  <p className='font-bold text-3xl pt-4 pb-5 pl-1 tracking-wide'>Strategy</p>
                  <div className='text-base font-normal pl-1 opacity-70 leading-loose tracking-normal'>
                    • 사업 방향성 공유<br />
                    • 요구사항 분석<br />
                    • 창업패키지 컨설팅<br />
                    • 정부 사업 제안서 컨설팅<br />
                    • 실현 가능 범위 정의<br />
                    • 핵심 기능 정리
                  </div>
                </div>
                <div>
                  <Image src='/icons8-black-and-white.svg' width={60} height={60} alt='Analyze' />
                  <p className='font-bold text-3xl pt-4 pb-5 pl-1 tracking-wide'>Analyze</p>
                  <div className='text-base font-normal pl-1 opacity-70 leading-loose tracking-normal'>
                    • 페르소나 정리<br />
                    • 레퍼런스 분석<br />
                    • 정보 구조 설계<br />
                    • DB 설계<br />
                    • 사용자 역할 설정
                  </div>
                </div>
                <div>
                  <Image src='/icons8-fibonacci-circles.svg' width={60} height={60} alt='Design' />
                  <p className='font-bold text-3xl pt-4 pb-5 pl-1 tracking-wide'>Design</p>
                  <div className='text-base font-normal pl-1 opacity-70 leading-loose tracking-normal'>
                    • 와이어프레임 및 프로토타입 제작<br />
                    • 반응형 디자인<br />
                    • 디자인 피드백 및 확정<br />
                  </div>
                </div>
                <div>
                  <Image src='/icons8-inactive-state.svg' width={60} height={60} alt='Publishing' />
                  <p className='font-bold text-3xl pt-4 pb-5 pl-1 tracking-wide'>Publishing</p>
                  <div className='text-base font-normal pl-1 opacity-70 leading-loose tracking-normal'>
                    • 호스팅 및 도메인 구매 대행<br />
                    • 정적 컨텐츠 1차 퍼블리싱<br />
                    •
                  </div>
                </div>
                <div>
                  <Image src='/icons8-circle-design.svg' width={60} height={60} alt='Development' />
                  <p className='font-bold text-3xl pt-4 pb-5 pl-1 tracking-wide'>Development</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover" >
        <source src="/watermarked_preview.mp4" type="video/mp4" />
      </video> */}

    </main>
  );
}
