"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import CircularSlider from "@fseehawer/react-circular-slider";

export default function Company() {
  const [shouldDisplay, setShouldDisplay] = useState(true);
  const [opacity, setOpacity] = useState(0.5);
  const [selected, setSelected] = useState<number>(0);
  const stackInfo = [
    {
      name: "javascript",
      icon: "/icons/tech-stacks/js.png",
      category: ["frontend", "backend"],
      scope: 90,
      subText:
        "낭만에게 자바스크립트는 단순한 프로그래밍 언어가 아닙니다. \n 자바스크립트는 우리의 창의성을 펼칠 수 있는 캔버스이자, 사용자와 서비스를 이어주는 매개체입니다.",
    },
    {
      name: "typescript",
      icon: "/icons/tech-stacks/typescript.png",
      category: ["frontend", "backend"],
      scope: 100,
      subText:
        "낭만에게 자바스크립트는 단순한 프로그래밍 언어가 아닙니다. \n 자바스크립트는 우리의 창의성을 펼칠 수 있는 캔버스이자, 사용자와 서비스를 이어주는 매개체입니다.",
    },
    {
      name: "java",
      icon: "/icons/tech-stacks/java.png",
      category: ["frontend", "backend"],
      scope: 5,
      subText:
        "낭만에게 자바스크립트는 단순한 프로그래밍 언어가 아닙니다. \n 자바스크립트는 우리의 창의성을 펼칠 수 있는 캔버스이자, 사용자와 서비스를 이어주는 매개체입니다.",
    },
    {
      name: "ReactJS",
      icon: "/icons/tech-stacks/reactjs.png",
      category: ["frontend", "backend"],
      scope: 10,
      subText:
        "낭만에게 자바스크립트는 단순한 프로그래밍 언어가 아닙니다. \n 자바스크립트는 우리의 창의성을 펼칠 수 있는 캔버스이자, 사용자와 서비스를 이어주는 매개체입니다.",
    },
    {
      name: "nextJS",
      icon: "/icons/tech-stacks/nextjs.png",
      category: ["frontend", "backend"],
      scope: 30,
      subText:
        "낭만에게 자바스크립트는 단순한 프로그래밍 언어가 아닙니다. \n 자바스크립트는 우리의 창의성을 펼칠 수 있는 캔버스이자, 사용자와 서비스를 이어주는 매개체입니다.",
    },
    {
      name: "React native",
      icon: "/icons/tech-stacks/reactjs.png",
      category: ["frontend", "backend"],
      scope: 5,
      subText:
        "낭만에게 자바스크립트는 단순한 프로그래밍 언어가 아닙니다. \n 자바스크립트는 우리의 창의성을 펼칠 수 있는 캔버스이자, 사용자와 서비스를 이어주는 매개체입니다.",
    },
    {
      name: "flutter",
      icon: "/icons/tech-stacks/flutter.png",
      category: ["frontend", "backend"],
      scope: 30,
      subText:
        "낭만에게 자바스크립트는 단순한 프로그래밍 언어가 아닙니다. \n 자바스크립트는 우리의 창의성을 펼칠 수 있는 캔버스이자, 사용자와 서비스를 이어주는 매개체입니다.",
    },
    {
      name: "angular",
      icon: "/icons/tech-stacks/angular.png",
      category: ["frontend", "backend"],
      scope: 50,
      subText:
        "낭만에게 자바스크립트는 단순한 프로그래밍 언어가 아닙니다. \n 자바스크립트는 우리의 창의성을 펼칠 수 있는 캔버스이자, 사용자와 서비스를 이어주는 매개체입니다.",
    },
    {
      name: "vueJS",
      icon: "/icons/tech-stacks/vuejs.png",
      category: ["frontend", "backend"],
      scope: 10,
      subText:
        "낭만에게 자바스크립트는 단순한 프로그래밍 언어가 아닙니다. \n 자바스크립트는 우리의 창의성을 펼칠 수 있는 캔버스이자, 사용자와 서비스를 이어주는 매개체입니다.",
    },
    {
      name: "nodeJS",
      icon: "/icons/tech-stacks/nodejs.png",
      category: ["frontend", "backend"],
      scope: 80,
      subText:
        "낭만에게 자바스크립트는 단순한 프로그래밍 언어가 아닙니다. \n 자바스크립트는 우리의 창의성을 펼칠 수 있는 캔버스이자, 사용자와 서비스를 이어주는 매개체입니다.",
    },
    {
      name: "spring boot",
      icon: "/icons/tech-stacks/spring boot.png",
      category: ["frontend", "backend"],
      scope: 10,
      subText:
        "낭만에게 자바스크립트는 단순한 프로그래밍 언어가 아닙니다. \n 자바스크립트는 우리의 창의성을 펼칠 수 있는 캔버스이자, 사용자와 서비스를 이어주는 매개체입니다.",
    },
    {
      name: "AWS",
      icon: "/icons/tech-stacks/aws.png",
      category: ["frontend", "backend"],
      scope: 50,
      subText:
        "낭만에게 자바스크립트는 단순한 프로그래밍 언어가 아닙니다. \n 자바스크립트는 우리의 창의성을 펼칠 수 있는 캔버스이자, 사용자와 서비스를 이어주는 매개체입니다.",
    },
    {
      name: "NHN cloud",
      icon: "/icons/tech-stacks/nhn-cloud.png",
      category: ["frontend", "backend"],
      scope: 40,
      subText:
        "낭만에게 자바스크립트는 단순한 프로그래밍 언어가 아닙니다. \n 자바스크립트는 우리의 창의성을 펼칠 수 있는 캔버스이자, 사용자와 서비스를 이어주는 매개체입니다.",
    },
    {
      name: "cloud type",
      icon: "/icons/tech-stacks/cloudtype.png",
      category: ["frontend", "backend"],
      scope: 60,
      subText:
        "낭만에게 자바스크립트는 단순한 프로그래밍 언어가 아닙니다. \n 자바스크립트는 우리의 창의성을 펼칠 수 있는 캔버스이자, 사용자와 서비스를 이어주는 매개체입니다.",
    },
    {
      name: "photoshop",
      icon: "/icons/tech-stacks/photoshop.png",
      category: ["frontend", "backend"],
      scope: 75,
      subText:
        "낭만에게 자바스크립트는 단순한 프로그래밍 언어가 아닙니다. \n 자바스크립트는 우리의 창의성을 펼칠 수 있는 캔버스이자, 사용자와 서비스를 이어주는 매개체입니다.",
    },
    {
      name: "illustrator",
      icon: "/icons/tech-stacks/illustrator.png",
      category: ["frontend", "backend"],
      scope: 62,
      subText:
        "낭만에게 자바스크립트는 단순한 프로그래밍 언어가 아닙니다. \n 자바스크립트는 우리의 창의성을 펼칠 수 있는 캔버스이자, 사용자와 서비스를 이어주는 매개체입니다.",
    },
    {
      name: "XD",
      icon: "/icons/tech-stacks/xd.png",
      category: ["frontend", "backend"],
      scope: 52,
      subText:
        "낭만에게 자바스크립트는 단순한 프로그래밍 언어가 아닙니다. \n 자바스크립트는 우리의 창의성을 펼칠 수 있는 캔버스이자, 사용자와 서비스를 이어주는 매개체입니다.",
    },
    {
      name: "figma",
      icon: "/icons/tech-stacks/figma.png",
      category: ["frontend", "backend"],
      scope: 89,
      subText:
        "낭만에게 자바스크립트는 단순한 프로그래밍 언어가 아닙니다. \n 자바스크립트는 우리의 창의성을 펼칠 수 있는 캔버스이자, 사용자와 서비스를 이어주는 매개체입니다.",
    },
  ];

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
    <main className="relative bg-[#040002] text-white">
      <div className="fixed left-0 top-0 flex h-full w-full bg-[#040002]">
        <video
          autoPlay
          muted
          loop
          className="-z-10 m-auto h-full w-full object-cover"
        >
          <source src="/second.webm" type="video/webm" />
        </video>
      </div>

      <div className="relative flex h-screen items-center justify-center tracking-normal">
        <div className="absolute top-1/3 text-center text-8xl font-bold leading-none content-xs:text-3xl content-sm:text-5xl content-md-xs:top-24 content-md:text-6xl">
          <span
            ref={justforyou}
            className="font-tenada neon-effect-blue tracking-tight "
          ></span>
        </div>
        <div
          className="absolute bottom-16 flex gap-10 px-10 content-xs:top-40 content-sm:top-60 content-md-xs:flex-col"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex max-w-[25rem] flex-col gap-5 content-xs:gap-3 content-sm:gap-3">
            <p className="text-xl font-medium content-xs:text-base content-sm:text-xl">
              about us
            </p>
            <div className="w-full border-b border-white/80"></div>
            <p className="text-lg text-white/60 content-xs:text-sm content-sm:text-lg">
              스튜디오 낭만은 디지털 아티스트들이 모여 브랜드와 사람을 잇는
              여정을 시작했습니다.
              <br /> 빠르게 변화하는 웹 트렌드 속에서 우리는 중심을 잃지 않고
              항해합니다.
            </p>
          </div>
          <div className="flex max-w-[25rem] flex-col gap-5">
            <p className="text-xl font-medium content-xs:text-base content-sm:text-xl">
              our philosophy
            </p>
            <div className="w-full border-b border-white/80"></div>
            <p className="text-lg text-white/60 content-xs:text-sm content-sm:text-lg">
              우리는 서비스의 가치를 알아내고 본질을 찾아내기 위해 노력합니다.
              <br />
              전략적인 시각과 창의적인 아이디어에 세련된 디자인을 더하여 최적의
              솔루션을 제공합니다.
            </p>
          </div>
          <div className="flex max-w-[25rem] flex-col gap-5">
            <p className="text-xl font-medium content-xs:text-base content-sm:text-xl">
              Focused
            </p>
            <div className="w-full border-b border-white/80"></div>
            <p className="text-lg text-white/60 content-xs:text-sm content-sm:text-lg">
              우리는 혼자 모든걸 해내는 슈퍼플레이어보다 다 함께 항해하는
              선원으로 이뤄져 있습니다.
              <br /> 새로운 브랜드 가치와 웹 서비스로 고객만족의 목표를 완성하는
              것. 그것이 우리의 낭만입니다.
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-screen flex-col gap-32 px-10 py-[120px] backdrop-blur-2xl">
        <div className="flex flex-col gap-60">
          <section className="mx-auto h-full w-full max-w-screen-2xl ">
            <div className="flex w-full flex-col items-center justify-center content-lg:mx-[20vw] content-lg:block">
              <h1
                className="font-tenada text-[5.125rem] leading-tight tracking-normal content-xs:text-3xl content-sm:text-5xl"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Planning <br />& design
              </h1>
              <div
                className="-my-[6vw] -ml-[16vw] w-fit text-[31.25rem] font-medium leading-none tracking-tighter text-white/10 content-xs:-ml-40 content-xs:text-8xl content-sm:text-8xl"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                01
              </div>
              <p
                className="text-2xl font-normal leading-[1.8] content-xs:text-base"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                우리는 서비스를 새로운 관점으로 분석 후<br /> 웹에 적합한 형태로
                조립하여 <br />
                누구나 만족하는 결과물을 창출합니다.
              </p>
              <div className="mt-20 flex flex-col gap-[9.125rem] mobile:gap-20 content-lg:flex-row">
                <Link
                  href={"/growth/bx-publishing"}
                  className="flex flex-col gap-5"
                >
                  <svg
                    width="346"
                    height="15"
                    viewBox="0 0 346 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mobile:w-screen mobile:px-10 "
                  >
                    <path
                      d="M331 2L342 13H0"
                      stroke="#96C0FF"
                      strokeWidth="3"
                    />
                  </svg>
                  <div className="flex justify-between gap-20 mobile:mx-10">
                    <p className="text-xl mobile:text-lg">01</p>
                    <p className="text-2xl mobile:text-end mobile:text-lg ">
                      BX Design
                    </p>
                  </div>
                </Link>
                <Link
                  href={"/growth/design-planning"}
                  className="flex flex-col gap-5"
                >
                  <svg
                    width="346"
                    height="15"
                    viewBox="0 0 346 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mobile:w-screen mobile:px-10"
                  >
                    <path
                      d="M331 2L342 13H0"
                      stroke="#96C0FF"
                      strokeWidth="3"
                    />
                  </svg>
                  <div className="flex justify-between gap-20 mobile:mx-10">
                    <p className="text-xl mobile:text-lg">02</p>
                    <p className="text-2xl mobile:text-end mobile:text-lg">
                      Design-planning
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
          <section className="mx-auto h-full w-full max-w-screen-2xl">
            <div className="flex flex-col items-center justify-center content-lg:mx-[20vw] content-lg:items-end">
              <h1
                className="font-tenada text-[5.125rem] leading-tight tracking-normal content-xs:text-3xl content-sm:text-5xl"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Publishing & <br />
                Development
              </h1>
              <div
                className="-my-[6vw] -mr-[16vw] w-fit text-[31.25rem] font-medium leading-none tracking-tighter text-white/10 content-xs:-ml-40 content-xs:text-8xl content-sm:text-8xl"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                02
              </div>
              <p
                className="text-2xl font-normal leading-[1.8] content-xs:text-base"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                새롭게 탄생한 디자인을 코드로 구현하고
                <br />
                서비스의 흐름에 따라 적절히 동작하도록
                <br />
                생명력을 부여합니다.
              </p>
              <div className="mt-20 flex flex-col gap-[9.125rem] mobile:gap-20 content-lg:flex-row">
                <Link
                  href={"/growth/bx-publishing"}
                  className="flex flex-col gap-5"
                >
                  <svg
                    width="346"
                    height="15"
                    viewBox="0 0 346 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mobile:w-screen mobile:px-10 "
                  >
                    <path
                      d="M331 2L342 13H0"
                      stroke="#96C0FF"
                      strokeWidth="3"
                    />
                  </svg>
                  <div className="flex justify-between gap-20 mobile:mx-10">
                    <p className="text-xl mobile:text-lg">01</p>
                    <p className="text-2xl mobile:text-end mobile:text-lg">
                      BX Publishing
                    </p>
                  </div>
                </Link>
                <Link
                  href={"/growth/app-web-service"}
                  className="flex flex-col gap-5"
                >
                  <svg
                    width="346"
                    height="15"
                    viewBox="0 0 346 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mobile:w-screen mobile:px-10"
                  >
                    <path
                      d="M331 2L342 13H0"
                      stroke="#96C0FF"
                      strokeWidth="3"
                    />
                  </svg>
                  <div className="flex justify-between gap-20 mobile:mx-10">
                    <p className="text-xl mobile:text-lg">02</p>
                    <p className="text-2xl mobile:text-end mobile:text-lg">
                      APP/WEB Service
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
          <section className="mx-auto h-full w-full max-w-screen-2xl">
            <div className="flex w-full flex-col items-center justify-center content-lg:mx-[20vw] content-lg:block">
              <h1
                className="font-tenada text-[5.125rem] leading-tight tracking-normal content-xs:text-3xl content-sm:text-5xl mobile:text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Support Business <br />
                Consulting
              </h1>
              <div
                className="-my-[6vw] -ml-[16vw] w-fit text-[31.25rem] font-medium leading-none tracking-tighter text-white/10 content-xs:-ml-40 content-xs:text-8xl content-sm:text-8xl"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                03
              </div>
              <p
                className="text-2xl font-normal leading-[1.8] content-xs:text-base"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                정부의 지원사업 컨설팅은
                <br /> 스타트업의 활력과 성장력을 부여합니다.
                <br />
                스튜디오 낭만의 노하우로 함께 항해합니다.
              </p>
              <div className="mt-20 flex flex-col gap-[9.125rem] mobile:gap-20 content-lg:flex-row">
                <Link href={"/project-request"} className="flex flex-col gap-5">
                  <svg
                    width="346"
                    height="15"
                    viewBox="0 0 346 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mobile:w-screen mobile:px-10 "
                  >
                    <path
                      d="M331 2L342 13H0"
                      stroke="#96C0FF"
                      strokeWidth="3"
                    />
                  </svg>
                  <div className="flex justify-between gap-20 mobile:mx-10">
                    <p className="text-xl mobile:text-lg">01</p>
                    <p className="text-2xl mobile:text-end mobile:text-lg">
                      스튜디오 낭만
                      <br /> Contact us
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>

        <section className="mx-auto h-full w-full max-w-screen-2xl">
          <div className="h-full pt-32 text-center text-[40px] font-bold text-white">
            <p className="mb-10 text-xl font-normal uppercase text-white/50 ">
              tech stack
            </p>
            <h2 className=" mobile:text-3xl">
              검증된 기술로 선사하는
              <br />
              스튜디오 낭만의 크리에이티브
            </h2>
            <div className="mt-28 text-2xl font-normal leading-[1.8] mobile:text-base">
              낭만은{" "}
              <span className="opacity-50">
                최신 기술과 서비스 로직을 결합하여
              </span>
              <br />
              <span className="opacity-50">
                디지털에서의 새로운 가치를
              </span>{" "}
              만들어 냅니다.
            </div>
          </div>
          <div className="my-20 flex items-center justify-between gap-10 content-md-xs:flex-col-reverse">
            <div className="mix rounded-xl bg-[#b5b5ff7c] px-12 py-16">
              <div className="flex flex-1 gap-10 content-md-xs:flex-col content-md-xs:items-center">
                <CircularSlider
                  hideKnob
                  initialValue={30}
                  label="stack"
                  appendToValue="%"
                  prependToValue=""
                  labelColor="#ffffff80"
                  progressColorFrom="#d60e9a"
                  progressColorTo="#ef8874"
                  progressSize={4}
                  trackColor="#dddddd80"
                  trackSize={4}
                  dataIndex={stackInfo[selected].scope}
                  max={100}
                  onChange={(value: number) => {
                    console.log(value);
                  }}
                />
                <div>
                  <div className="flex flex-col gap-8 content-md-xs:items-center content-md-xs:text-center">
                    <div>
                      <Image
                        src={stackInfo[selected].icon}
                        alt={stackInfo[selected].name}
                        width={200}
                        height={200}
                        className="max-w-[6.25rem] "
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-3xl font-bold">
                        {stackInfo[selected].name}
                      </p>
                      <p className="max-w-80 font-light tracking-tight">
                        {stackInfo[selected].subText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex max-w-[43.75rem] flex-wrap gap-5">
              {stackInfo.map((stack, index) => (
                <div
                  key={index}
                  className={`max-h-24 max-w-24 rounded-xl ${selected === index ? "bg-white shadow-2xl" : "bg-[#b5b5ff29]"} p-4`}
                  onClick={() => setSelected(index)}
                >
                  <Image
                    src={stack.icon}
                    alt={stack.name}
                    width={200}
                    height={200}
                    className={`${selected === index ? "" : "opacity-50 grayscale"}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto h-full w-full max-w-screen-2xl">
          <div className="h-full pt-32 text-center text-[40px] font-bold text-white">
            <p className="mb-10 text-xl font-normal uppercase text-white/50 ">
              process
            </p>
            <h2 className=" mobile:text-3xl">
              어떤 서비스를 만들더라도
              <br />
              같은 방향을 바라보는 것부터
            </h2>
            <div className="mt-28 text-2xl font-normal leading-[1.8] mobile:text-base">
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
    </main>
  );
}
