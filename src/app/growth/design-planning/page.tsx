"use client";

import Image from "next/image";
import { useState } from "react";

type Process = {
  name: string;
  title: string;
  description: string;
};

export default function DesignPlanning() {
  const items = [
    {
      title: "아파트 매물 서비스",
      subString:
        "프롭테크 전문 기업 아리사 코리아의 아파트 매물 및 중개사 매칭 서비스로 기획부터 디자인 과정을 담았습니다.",
      process01: {
        image01: "/growth/design-planning/request.png",
        question: [
          "중개사들과 협업이 필요해요",
          "사용자가 손쉽게 부동산을 찾을 수 있어야 해요",
          "단지 별 신뢰가 가는 주민들의 리뷰가 필요해요",
          "모바일 환경에서 주로 보게 될 서비스에요",
          "부동산 매물 정보를 보여줄 플랫폼이 필요해요",
        ],
        point: [
          {
            title: "매물 정보 조회 기능",
            text: "사용자는 앱에서 1페이지부터 10페이지까지의 매물 사진을 볼 수 있습니다.\n매물 상세 정보에는 깔끔한 84타입의 아파트 고층부, 해당 층수, 면적,방수, 화장실 수, 매매가격(전세 및 월세 가격 포함)이 표시됩니다. \n수 있습니다.\n전세안전진단 결과와 공부서류 분석보고서를 발급받을 수 있는 기능이 포함되어 있어야 합니다.",
          },
          {
            title: "단지 및 입지 정보 조회 기능",
            text: "선택한 아파트의 주소, 실거래가, 단지 정보, 입지 정보, 준공년도\n등의 건물 정보를 확인할 수 있습니다.\n아파트 단지와 관련된 이야기나 후기를 살펴볼 수 있는 섹션이 마련되어 있습니다.",
          },
          {
            title: "전담 중개사 정보 및 연결 기능",
            text: "이결부동산과 같은 전담 중개사의 정보를 포함해야 합니다. 이는 중개사의 사진, 주소, 전화번호로 구성됩니다.\n사용자는 앱 내에서 직접 전화 연결을 시도할 수 있으며, 중개사의 계약 체결 사례 등의 정보도 확인할 수 있습니다.",
          },
          {
            title: "UX/UI 디자인 요소",
            text: "사용자가 쉽게 정보를 입력하고 조회할 수 있도록 직관적인 인터페이스 디자인이 중요합니다.\n매물 사진은 스와이프 기능을 통해 손쉽게 넘겨볼 수 있도록 해야 합니다.\n중요 정보는 강조 표시하여 사용자의 주의를 끌 수 있도록 합니다.\n정보 입력란은 사용자가 스크롤 다운을 통해 쉽게 접근할 수 있도록배치합니다",
          },
        ],
        keywords: [
          { name: "가격 비교", strong: false },
          { name: "중개사 매칭", strong: true },
          { name: "중개사 정보", strong: false },
          { name: "거래 사례", strong: false },
          { name: "전화 연결", strong: false },
          { name: "아파트", strong: false },
          { name: "모바일 환경", strong: false },
          { name: "전세 찾기", strong: true },
          { name: "직관적인 인터페이스", strong: false },
          { name: "커뮤니티", strong: true },
          { name: "공부서류", strong: false },
          { name: "부동산", strong: false },
          { name: "사용자 정보 입력", strong: true },
          { name: "실거래가", strong: false },
          { name: "매물 사진", strong: false },
        ],
      },
      process02: [
        {
          title: "앱 진입 화면 (스플래시 스크린)",
          text: "스플래시 화면은 사용자가 앱을 실행했을 때 가장 먼저 마주치는 화면으로, 앱의 포인트 컬러와 로고를 중심으로 디자인되어 있습니다. 이 화면의 목적은 앱의 브랜드 아이덴티티를 강조하고, 앱이 로딩되는 동안 사용자에게 시각적인 피드백을 제공하는 것입니다.",
          image: "/growth/design-planning/wireframe-1.png",
        },
        {
          title: "단지 전체정보 화면",
          text: "단지 전체정보 화면은 사용자가 특정 아파트 단지에 대한 다양한 정보를 한눈에 볼 수 있도록 구성된 화면입니다. 이 화면은 건물명, 실거래가, 매물 갯수 등의 기본 정보부터 관련 뉴스, 커뮤니티, 단지 정보까지 포함하여 사용자에게 유용한 정보를 제공합니다. <br/>  <br/> · 상단에 위치한 건물명: 화면의 최상단에는 현재 조회하고 있는 단지의 이름이 크게 표시됩니다. <br/> · 실거래가, 매물 갯수: 건물명 바로 아래에는 최근 실거래가와 현재 시장에 나와 있는 매물의 총 갯수가 간략하게 제공됩니다. <br/> · 관련 뉴스 및 커뮤니티: 사용자가 단지에 대한 최신 뉴스나 커뮤니티 활동을 쉽게 확인할 수 있도록 링크 형태로 제공됩니다. <br/> · 단지 정보: 세대수, 입주시기, 시공사, 유형 등의 단지 기본 정보가 상세하게 제공됩니다. 이 정보는 사용자가 단지의 특성을 더 잘 이해할 수 있게 돕습니다. <br/> · 매물 총 갯수 및 상세 링크: 화면 하단에는 현재 단지 내에서 판매되고 있는 매물의 총 갯수와 이를 상세히 볼 수 있는 링크가 제공됩니다.",
          image: "/growth/design-planning/wireframe-2.png",
        },
      ],
      process03: {
        image: "/growth/design-planning/design-1.png",
        leftDiscriptions: [
          "사용자는 스와이프 동작을 통해 원하는 단지 이미지를 살펴볼 수 있습니다.",
          "사용자는 스와이프 동작을 통해 원하는 단지 이미지를 살펴볼 수 있습니다.",
        ],
        rightDiscriptions: [
          "사용자는 스와이프 동작을 통해 원하는 단지 이미지를 살펴볼 수 있습니다.",
          "사용자는 스와이프 동작을 통해 원하는 단지 이미지를 살펴볼 수 있습니다.",
        ],
      },
    },
  ];

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-slate-50 text-black">
      <div className="mx-auto flex h-full max-w-[90vw] flex-col gap-40 xl:max-w-screen-xl">
        <div className="divide-y divide-slate-200">
          {items.map((item, key) => (
            <Item key={key} {...item}></Item>
          ))}
        </div>
      </div>
    </main>
  );
}
const Item = ({
  title,
  subString,
  process01,
  process02,
  process03,
}: {
  title: string;
  subString: string;
  process01: any;
  process02: any;
  process03: any;
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState({
    process01: false,
    process02: false,
    process03: false,
  });
  const [selected, setSelected] = useState<string>("process01");

  const handleHoverValue = (name: string, value: boolean) => {
    setIsHovering((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelect = (name: string) => {
    if (selected === name) {
      setSelected("");
      return;
    }
    setSelected(name);
  };

  // Local variable for processes
  const processes: Process[] = [
    {
      name: "process01",
      title: "요청사항 전달",
      description:
        "ppt, word, 한글 등 어떤 포멧도 상관없어요! 아이템을 서비스로 전환할 때 필요한 기능과 실현하고 싶은 디자인 요소 등을 자유롭게 작성해서 알려주세요.",
    },
    {
      name: "process02",
      title: "기획 및 와이어프레임",
      description:
        "사용 시나리오를 와이어프레임으로 제작해요! 기능 구현에 대해 기술적 측면의 구현 가능성을 검토하고 디자인 전 UX&UI의 전반적인 흐름을 전달할 수 있어요.",
    },
    {
      name: "process03",
      title: "디자인 산출",
      description:
        "톤앤매너와 디자인 가이드에 맞춰 디자인을 완성해요! 와이어프레임에 따라 알맞은 UI/UX 요소를 그리고 개발 전 단계의 디자인 프로토타입을 만들어요.",
    },
  ];

  return (
    <div className="py-2">
      <button
        type="button"
        className="flex w-full items-start justify-between py-2 text-left font-semibold"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-4xl">{title}</span>
          </div>
          <p className="pb-3">{subString}</p>
        </div>
        <svg
          className={`ml-8 shrink-0 transform fill-indigo-500 ${expanded ? "rotate-90" : ""}`}
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className="origin-center transform transition duration-200 ease-out"
          />
        </svg>
      </button>
      <div
        role="region"
        className={`grid overflow-hidden text-sm text-slate-600 transition-all duration-300 ease-in-out ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <section className="flex min-h-screen w-full flex-col gap-[7.5rem] pt-20 text-[#464646]">
            <div className="relative flex flex-row justify-between gap-10 mobile:flex-col ">
              {processes.map(({ name, description, title }) => (
                <div
                  key={name}
                  className={`flex-1 rounded-[1.875rem] px-10 py-[3.75rem]  ${selected === name ? "shadow-innerOn" : "innerOff"} max-h-[32.75rem]`}
                  style={{
                    transform: selected === name ? "translateY(-40px)" : "none",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseOver={() => handleHoverValue(name, true)}
                  onMouseOut={() => handleHoverValue(name, false)}
                  onClick={() => handleSelect(name)}
                >
                  <div className="flex flex-col gap-10">
                    <Image
                      src={`/growth/design-planning/${selected === name || isHovering[name as keyof typeof isHovering] ? `${name}-color.png` : `${name}-clay.png`}`}
                      alt={name}
                      width={360}
                      height={262}
                    ></Image>
                    <div className="flex flex-col gap-4">
                      <span className="text-2xl font-bold">{title}</span>
                      <p className="leading-loose tracking-tight">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {selected === "process01" ? (
              <ReQuestProcess data={process01} />
            ) : selected === "process02" ? (
              <WireframeProcess data={process02} />
            ) : (
              <DesignProcess data={process03} />
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

function ReQuestProcess({ data }: { data: any }) {
  return (
    <div className="flex w-full flex-col gap-[7.5rem] text-base leading-loose">
      <div className="flex flex-col gap-[3.75rem]">
        {/* title */}
        <div className="flex w-fit flex-col gap-4">
          <p className="whitespace-nowrap text-3xl font-bold">
            요청사항 수집 및 분석
          </p>
          <p className=" ">
            스튜디오 낭만은 클라이언트가 제공한 문서를 면밀히 검토하여
            요구사항을 이해한 뒤 기능적 요구사항과 비기능적 요구사항으로
            분류합니다.
            <br />
            분류한 요구사항을 토대로 우선순위를 결정하고 프로젝트 진행 시 중점을
            둬야 할 부분을 명확히 합니다.
          </p>
        </div>
        {/* content */}
        <div className="flex items-center gap-[3.75rem]">
          <Image src={data["image01"]} alt="" width={900} height={100} />
          <div className="flex flex-col gap-8">
            <div className="flex gap-3">
              <p className="whitespace-nowrap text-3xl font-bold text-black">
                What bother you?
              </p>
              <Image
                src={"/growth/design-planning/talk-icon.svg"}
                width={34}
                height={34}
                alt="talk-icon"
              />
            </div>

            <div className="flex flex-col gap-4">
              {data["question"].map((string: string, index: number) => (
                <p
                  key={index}
                  className={`w-fit whitespace-nowrap text-2xl font-bold ${index === 0 || index === 4 ? "text-navyBlue/30" : index % 2 !== 0 ? "text-navyBlue/50" : "text-navyBlue"}`}
                >
                  {string}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[3.75rem]">
        {/* title */}
        <div className="flex w-fit flex-col gap-4">
          <p className="whitespace-nowrap text-3xl font-bold">
            요청사항 문서화
          </p>
          <p className=" ">
            이해한 요구사항을 문서로 작성하고 클라이언트와의 커뮤니케이션을 통해{" "}
            <br />
            디자인 컨셉과 기술적인 측면에서의 가능성을 검토합니다.
          </p>
        </div>
        {/* content */}

        <div className="grid grid-cols-2 gap-5">
          {data["point"].map(
            (
              { title, text }: { title: string; text: string },
              index: number,
            ) => (
              <div
                key={index}
                className="flex flex-1 flex-col gap-4 rounded-xl bg-[#dbe9ff] px-10 py-6 text-navyBlue"
              >
                <p className="whitespace-nowrap font-semibold ">{title}</p>
                <p className="">{text}</p>
              </div>
            ),
          )}
        </div>
      </div>

      <div className="flex flex-col gap-[3.75rem]">
        {/* title */}
        <div className="flex w-fit flex-col gap-4">
          <p className="whitespace-nowrap text-3xl font-bold">키워드 산출</p>
          <p className=" ">
            요구사항 명세서를 바탕으로 프로젝트에 사용될 키워드를 산출합니다.
            <br />
            요구사항의 이해도를 높이고, 구축 및 유지보수 과정에서의 명확한
            커뮤니케이션에 효과적입니다.
          </p>
        </div>
        {/* content */}
        <div className="flex flex-row flex-wrap gap-6">
          {data["keywords"].map(
            (
              { name, strong }: { name: string; strong: boolean },
              index: number,
            ) => (
              <div
                key={index}
                className={`rounded-full px-8 py-6 ${strong ? "bg-[#3f8fee] text-white" : "text-black/30"}`}
              >
                <div className="w-fit whitespace-nowrap text-center text-5xl tracking-tight">
                  {name}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function WireframeProcess({ data }: { data: any }) {
  return (
    <div className="flex w-full flex-col gap-[7.5rem] text-base leading-loose">
      <div className="flex flex-col gap-[3.75rem]">
        {/* title */}
        <div className="flex w-fit flex-col gap-4">
          <p className="whitespace-nowrap text-3xl font-bold">
            서비스 시나리오 및 와이어프레임 작성
          </p>
          <p className="">
            요구사항을 바탕으로 구체적인 사용 시나리오와 유저 스토리를
            개발합니다.
            <br />
            와이어프레임은 내부적으로 프로젝트의 이해를 증진시키고 각 화면은
            사용자의 경험을 최우선으로 고려하여 설계되며 클라이언트에게 의도하는
            UX의 구조를 설명하는 것에 효과적입니다.
          </p>
        </div>
        {/* content */}
        <div className="flex flex-col justify-between">
          <div className="flex  gap-5 sm:flex-row sm:gap-[14vw]">
            <div className="flex h-full flex-col gap-[7.5rem] sm:max-w-[calc(100%/2)]">
              {data.map(
                (
                  {
                    title,
                    text,
                    image,
                  }: { title: string; text: string; image: string },
                  index: number,
                ) => (
                  <div key={index} className="group relative py-6 pl-8 sm:pl-8">
                    <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-screen before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:bg-gray-300 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-2 sm:after:left-0 sm:after:ml-2">
                      <div className="w-full pb-5 sm:hidden">
                        <Image
                          src={image}
                          alt={image}
                          width={360}
                          height={800}
                        />
                      </div>
                      <div className="text-xl font-bold text-navyBlue">
                        {title}
                      </div>
                    </div>

                    <div
                      className="leading-[1.75rem] text-black/60"
                      dangerouslySetInnerHTML={{ __html: text }}
                    ></div>
                  </div>
                ),
              )}
              <div className="group relative bottom-0 py-6 pl-8 sm:pl-8">
                <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:bg-gray-300 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-2 sm:after:left-0 sm:after:ml-2"></div>
              </div>
            </div>
            <div className=" hidden w-full justify-between gap-5 sm:flex">
              {data.map(({ image }: { image: string }, index: number) => (
                <div key={index} className="">
                  <Image src={image} alt={image} width={360} height={800} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesignProcess({ data }: { data: any }) {
  const { image, leftDiscriptions, rightDiscriptions } = data;
  return (
    <div className="relative min-h-screen w-full bg-black/5 text-base leading-loose">
      <div className="relative w-full bg-gray-50 pb-20">
        <div className="absolute right-1/2 top-1/2 z-10 translate-x-1/2">
          <div className="flex items-center justify-between gap-10 text-white ">
            <div id="leftDiscriptions" className="flex flex-col gap-[5vw]">
              {leftDiscriptions.map((word: string, index: number) => (
                <p key={index}>{word}</p>
              ))}
            </div>

            <div id="mockup">
              <div className="relative flex h-[36vw] min-h-[34rem] w-[17.3611vw] min-w-60 justify-center rounded-2xl border-4 border-black shadow-2xl">
                <span className="absolute mt-2 h-3 w-3 rounded-full border border-black bg-black"></span>
                <div className="flex h-full w-full flex-col gap-10">
                  <Image
                    src={image}
                    alt="mockup"
                    width={400}
                    height={600}
                    className="rounded-2xl"
                  />
                </div>
                <span className="absolute -right-2 top-20 h-10 rounded-md border-4 border-black"></span>
                <span className="absolute -right-2 top-44 h-24 rounded-md border-4 border-black"></span>
              </div>
            </div>

            <div id="rightDiscriptions" className="flex w-full flex-col">
              {rightDiscriptions.map((word: string, index: number) => (
                <p className="" key={index}>
                  {word}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <Image
            src="/growth/design-planning/nangman-word.svg"
            alt="nangman-word"
            width={1400}
            height={224}
            className="h-auto w-auto"
          />
        </div>
      </div>
      <div>
        <div className="relative h-[70vh] w-full bg-[#3f90ee]" />
      </div>
    </div>
  );
}
