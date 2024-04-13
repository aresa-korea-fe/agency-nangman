"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Company() {
  const [shouldDisplay, setShouldDisplay] = useState(true);
  const [opacity, setOpacity] = useState(0.5);

  const justforyou = useRef(null);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const typed = new Typed(justforyou.current, {
      strings: [
        "낭만의 시작점",
        "낭만이 살아 숨쉬는 이 곳",
        "낭만은 오롯히 당신을 위해",
        "낭만이란 가능성",
        "낭만으로 가득한 이 곳",
        "낭만과 함께하는 시간",
        "낭만이 머무는 곳",
      ],
      typeSpeed: 50,
      backSpeed: 20,
      loop: true,
      showCursor: false,
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const chapterName = document.getElementById("chapterName");
      const chapterTopPosition = chapterName?.getBoundingClientRect()?.top ?? 0;

      // 화면 중간보다 위에 있을 경우
      if (chapterTopPosition < window.innerHeight / 4) {
        if (shouldDisplay) {
          setOpacity(0); // 먼저 opacity를 0으로
          setTimeout(() => setShouldDisplay(false), 200); // 0.2초 후에 display를 none으로 변경
        }
      } else {
        if (!shouldDisplay) {
          setShouldDisplay(true); // 먼저 display를 block으로 변경
          setTimeout(() => setOpacity(0.5), 10); // 바로 opacity를 0.5로 변경
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldDisplay]);

  return (
    <main className="h-screen bg-[#040002] text-white">
      <div className="fixed left-0 top-0 flex h-full w-full bg-[#040002]">
        <video
          width="320"
          height="240"
          autoPlay
          muted
          loop
          className="m-auto w-4/5"
        >
          <source src="/third.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative flex h-screen items-center justify-center tracking-normal">
        <div className="text-center text-6xl font-bold leading-none">
          {/* <span className='font-medium text-7xl'>NangMan</span>
          <br /> */}
          <span
            ref={justforyou}
            className="font-tenada neon-effect-blue tracking-tight"
          ></span>
        </div>
        <p
          className="absolute bottom-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          낭만은 오롯히 당신을 위해 존재합니다.
        </p>
      </div>
      <div className="flex flex-col gap-32 py-40 backdrop-blur-2xl">
        <section className="mx-auto h-full w-full max-w-screen-2xl">
          <div className="h-full text-center text-3xl font-bold text-white">
            <h2
              className="leading-snug"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              낭만은 꿈과 현실이 어우러진 바다 위에서
            </h2>
            <h2
              className="leading-snug"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              열정을 가진 여러분의 항해를 지원합니다.
            </h2>
            <h2
              className="leading-snug"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              어디든 끝까지 함께하겠습니다.
            </h2>
          </div>
          <div className="relative left-2/4 top-0 mt-32 h-32 w-[1px] bg-white"></div>
        </section>

        <section className="mx-auto h-full min-h-screen w-full max-w-screen-2xl">
          <div className="h-full pt-32 text-center text-3xl font-bold text-white">
            <p
              id="chapterName"
              className="mb-10 text-xl font-normal uppercase text-white/50"
            >
              nangman
            </p>
            <h2 className="leading-normal">
              크고 작은 서비스가 아닌
              <br />
              우리의 서비스라는 마음으로
            </h2>
            <div className="mt-28 text-2xl font-normal leading-[1.8]">
              모든 서비스는{" "}
              <span
                style={{
                  display: shouldDisplay ? "inline" : "none",
                  opacity: opacity,
                  transition: "opacity 0.5s",
                }}
                className="opacity-50"
              >
                결코 크고 작음으로 단순히 나뉘지 않습니다.
              </span>
              <br
                style={{
                  display: shouldDisplay ? "inline" : "none",
                  opacity: opacity,
                  transition: "opacity 0.5s",
                }}
              />
              <span
                className="opacity-50"
                style={{
                  display: shouldDisplay ? "inline" : "none",
                  opacity: opacity,
                  transition: "opacity 0.5s",
                }}
              >
                단지,
              </span>{" "}
              성장의 과정을 거치고 있는 것 뿐입니다.
              <br />
              그렇기에 낭만
              <span
                className="opacity-50"
                style={{
                  display: shouldDisplay ? "inline" : "none",
                  opacity: opacity,
                  transition: "opacity 0.5s",
                }}
              >
                은 그러한 성장을 함께하고 싶은 생각으로
              </span>{" "}
              가득합니다.
            </div>
          </div>
        </section>

        <section className="mx-auto h-full w-full max-w-screen-2xl">
          <div className="h-full pt-32 text-center text-[40px] font-bold text-white">
            <p className="mb-10 text-xl font-normal uppercase text-white/50">
              process
            </p>
            <h2>
              어떤 서비스를 만들더라도
              <br />
              같은 방향을 바라보는 것부터
            </h2>
            <div className="mt-28 text-2xl font-normal leading-[1.8]">
              낭만이 있다면{" "}
              <span className="opacity-50">사업 계획서와 방향성 수립부터</span>
              <br />
              <span className="opacity-50">
                온전한 서비스 개발과 출시까지 한번에
              </span>{" "}
              가능합니다.
            </div>
            <div className="mt-32 border-t px-10 pt-16">
              <div className="grid grid-cols-1 gap-y-16 text-left md:grid-cols-3 lg:grid-cols-5">
                <div>
                  <Image
                    priority
                    src="/icons8-centre-point.svg"
                    width={60}
                    height={60}
                    alt="Strategy"
                  />
                  <p className="pb-5 pl-1 pt-4 text-3xl font-bold tracking-wide">
                    Strategy
                  </p>
                  <div className="pl-1 text-base font-normal leading-loose tracking-normal opacity-70">
                    • 사업 방향성 공유
                    <br />
                    • 요구사항 분석
                    <br />
                    • 창업패키지 컨설팅
                    <br />
                    • 정부 사업 제안서 컨설팅
                    <br />
                    • 실현 가능 범위 정의
                    <br />• 핵심 기능 정리
                  </div>
                </div>
                <div>
                  <Image
                    priority
                    src="/icons8-black-and-white.svg"
                    width={60}
                    height={60}
                    alt="Analyze"
                  />
                  <p className="pb-5 pl-1 pt-4 text-3xl font-bold tracking-wide">
                    Analyze
                  </p>
                  <div className="pl-1 text-base font-normal leading-loose tracking-normal opacity-70">
                    • 페르소나 정리
                    <br />
                    • 레퍼런스 분석
                    <br />
                    • 정보 구조 설계
                    <br />
                    • DB 설계
                    <br />• 사용자 역할 설정
                  </div>
                </div>
                <div>
                  <Image
                    priority
                    src="/icons8-fibonacci-circles.svg"
                    width={60}
                    height={60}
                    alt="Design"
                  />
                  <p className="pb-5 pl-1 pt-4 text-3xl font-bold tracking-wide">
                    Design
                  </p>
                  <div className="pl-1 text-base font-normal leading-loose tracking-normal opacity-70">
                    • 와이어프레임 및 프로토타입 제작
                    <br />
                    • 반응형(디바이스 지원형) 디자인
                    <br />
                    • 디자인 피드백 및 확정
                    <br />
                  </div>
                </div>
                <div>
                  <Image
                    priority
                    src="/icons8-inactive-state.svg"
                    width={60}
                    height={60}
                    alt="Publishing"
                  />
                  <p className="pb-5 pl-1 pt-4 text-3xl font-bold tracking-wide">
                    Publishing
                  </p>
                  <div className="pl-1 text-base font-normal leading-loose tracking-normal opacity-70">
                    • 호스팅 및 도메인 구매 대행
                    <br />
                    • 정적 컨텐츠 1차 퍼블리싱
                    <br />
                    • 역할별 페이지 정적 개발
                    <br />
                  </div>
                </div>
                <div>
                  <Image
                    priority
                    src="/icons8-circle-design.svg"
                    width={60}
                    height={60}
                    alt="Development"
                  />
                  <p className="pb-5 pl-1 pt-4 text-3xl font-bold tracking-wide">
                    Development
                  </p>
                  <div className="pl-1 text-base font-normal leading-loose tracking-normal opacity-70">
                    • 동적 컨텐츠 제작
                    <br />
                    • 서비스 로직 개발
                    <br />
                    • 운영 가능 코드 이전
                    <br />
                    • (옵션) 유지보수 및 운영 대행
                    <br />
                    • (옵션) API 발행
                    <br />• (옵션) 서비스 확장 및 추가 개발
                  </div>
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
