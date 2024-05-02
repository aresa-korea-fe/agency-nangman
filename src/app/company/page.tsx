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
      icon: "/icons/tech-stacks/js.webp",
      category: ["frontend", "backend"],
      scope: 75,
      subText:
        "낭만에게 자바스크립트는 단순한 프로그래밍 언어가 아닙니다. \n 우리의 창의성을 펼칠 수 있는 캔버스이자, 사용자와 서비스를 이어주는 매개체입니다.",
    },
    {
      name: "typescript",
      icon: "/icons/tech-stacks/typescript.webp",
      category: ["frontend", "backend"],
      scope: 100,
      subText:
        "타입스크립트는 낭만 서비스의 견고함을 제공합니다. 정적 타입을 통해 더 명확하고 안정적인 코드를 작성할 수 있게 해줍니다.",
    },
    {
      name: "java",
      icon: "/icons/tech-stacks/java.webp",
      category: ["backend"],
      scope: 50,
      subText:
        "자바는 강력한 객체 지향 프로그래밍 언어로, 낭만의 백엔드 시스템을 구축하는 데 있어 효율적인 성능과 보안을 제공합니다.",
    },
    {
      name: "ReactJS",
      icon: "/icons/tech-stacks/reactjs.webp",
      category: ["frontend"],
      scope: 40,
      subText:
        "ReactJS는 사용자 인터페이스를 더욱 살아있게 만듭니다. 우리의 프론트엔드를 빠르고 효율적으로 구축할 수 있게 해줍니다.",
    },
    {
      name: "nextJS",
      icon: "/icons/tech-stacks/nextjs.webp",
      category: ["frontend", "backend"],
      scope: 50,
      subText:
        "NextJS는 React 기반의 프레임워크로서, 서버 사이드 렌더링과 정적 웹 사이트 생성을 지원합니다. 낭만은 이를 활용하여 빠르고 최적화된 웹 경험을 제공합니다.",
    },
    {
      name: "React native",
      icon: "/icons/tech-stacks/reactjs.webp",
      category: ["frontend"],
      scope: 60,
      subText:
        "React Native는 서비스를 모바일로 확장하는 데 있어 핵심입니다. 하나의 코드베이스로 다양한 플랫폼에 앱을 제공할 수 있습니다.",
    },
    {
      name: "flutter",
      icon: "/icons/tech-stacks/flutter.webp",
      category: ["frontend"],
      scope: 68,
      subText:
        "Flutter는 낭만 서비스의 모바일 앱 개발을 혁신합니다. 빠른 개발 속도와 아름다운 UI로 사용자 경험을 한 차원 높여줍니다.",
    },
    {
      name: "angular",
      icon: "/icons/tech-stacks/angular.webp",
      category: ["frontend"],
      scope: 50,
      subText:
        "강력한 프론트엔드 프레임워크로, 낭만 서비스는 이를 사용하여 대규모의 고성능 애플리케이션을 구축합니다.",
    },
    {
      name: "vueJS",
      icon: "/icons/tech-stacks/vuejs.webp",
      category: ["frontend"],
      scope: 55,
      subText:
        "점진적으로 채택할 수 있는 아키텍처를 가진 프론트엔드 프레임워크입니다. 낭만 서비스에서는 이를 활용하여 유연하고 확장 가능한 웹 인터페이스를 구축합니다.",
    },
    {
      name: "nodeJS",
      icon: "/icons/tech-stacks/nodejs.webp",
      category: ["backend"],
      scope: 94,
      subText:
        "서버 측에서의 자바스크립트 실행을 가능하게 하여, 낭만 서비스의 백엔드를 효율적으로 구성할 수 있는 힘을 제공합니다.",
    },
    {
      name: "spring boot",
      icon: "/icons/tech-stacks/spring boot.webp",
      category: ["backend"],
      scope: 45,
      subText:
        "빠르고, 간편한 백엔드 개발을 가능하게 하여, 낭만 서비스의 안정성과 확장성을 기초로 합니다.",
    },
    {
      name: "AWS",
      icon: "/icons/tech-stacks/aws.webp",
      category: ["cloud"],
      scope: 84,
      subText:
        "강력한 클라우드 인프라를 제공하여, 낭만 서비스의 전 세계 사용자에게 안정적으로 접근할 수 있는 환경을 마련합니다.",
    },
    {
      name: "NHN cloud",
      icon: "/icons/tech-stacks/nhn-cloud.webp",
      category: ["cloud"],
      scope: 72,
      subText:
        "국내 최적화된 클라우드 서비스를 통해, 낭만 서비스의 데이터 처리와 저장이 더욱 빠르고 안정적입니다.",
    },
    {
      name: "cloud type",
      icon: "/icons/tech-stacks/cloudtype.webp",
      category: ["cloud"],
      scope: 80,
      subText:
        "다양한 클라우드 솔루션을 통합 관리하고 더 간편한 배포 방식과 소통 시스템은 낭만의 운영 효율성을 극대화합니다.",
    },
    {
      name: "photoshop",
      icon: "/icons/tech-stacks/photoshop.webp",
      category: ["design"],
      scope: 75,
      subText:
        "낭만적인 시각적 컨텐츠 제작에 필수적이며, 사용자 인터페이스의 아름다움을 창조하는 데 중요한 역할을 합니다.",
    },
    {
      name: "illustrator",
      icon: "/icons/tech-stacks/illustrator.webp",
      category: ["design"],
      scope: 62,
      subText:
        "벡터 기반 디자인을 통해, 낭만 서비스의 브랜딩과 시각적 요소를 세련되게 표현합니다.",
    },
    {
      name: "XD",
      icon: "/icons/tech-stacks/xd.webp",
      category: ["design", "prototype", "UI&UX"],
      scope: 52,
      subText:
        "사용자 경험(UX) 디자인과 프로토타이핑을 통해, 낭만 서비스의 사용자 인터페이스를 직관적이고 매력적으로 만듭니다.",
    },
    {
      name: "figma",
      icon: "/icons/tech-stacks/figma.webp",
      category: ["design", "prototype", "UI&UX"],
      scope: 89,
      subText:
        "협업을 중심으로 한 디자인 도구로서, 낭만 서비스의 디자인 작업을 더욱 신속하고 효율적으로 만들어, 창의적인 아이디어를 현실로 전환합니다.",
    },
  ];

  const justforyou = useRef(null);

  const handlelabelColors = (str: string) => {
    switch (str) {
      case "frontend":
        return "bg-sky-300";
      case "backend":
        return "bg-orange-300";
      case "cloud":
        return "bg-indigo-300";
      case "prototype":
        return "bg-fuchsia-300";
      case "design":
        return "bg-yellow-300";
      default:
        return "bg-red-300";
    }
  };

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
        "낭만은 오롯이 당신을 위해",
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
            <div className=" min-h-[27.5rem] rounded-xl bg-[#b5b5ff7c] px-12  py-16">
              <div className="flex flex-1 gap-10 content-md-xs:flex-col content-md-xs:items-center">
                <CircularSlider
                  hideKnob
                  initialValue={30}
                  label="사용 빈도"
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
                    <div className="flex h-full w-full flex-col gap-3">
                      <p className="text-3xl font-bold">
                        {stackInfo[selected].name}
                      </p>
                      <div className="flex gap-2">
                        {stackInfo[selected].category.map((category, i) => (
                          <p
                            key={i}
                            className={`rounded-full ${handlelabelColors(category)} px-2 py-1 text-xs font-bold leading-none text-black/60`}
                          >
                            {category}
                          </p>
                        ))}
                      </div>
                      <p className="h-full max-w-80 font-light tracking-tight">
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
