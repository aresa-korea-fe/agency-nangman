"use client";

import Image from "next/image";
import { useState } from "react";
import { IDesignPlanning } from "@/interface/dtos/design-planning.interface";
import { processes } from "@/constants/designPlanningMenu";

export default function DesignPlanning() {
  const items: IDesignPlanning.IDto[] = require("/public/data/design-planning.interface.json");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleActiveIndex = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // 이미 활성화된 항목을 다시 클릭하면 모두 비활성화
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-slate-50 text-black">
      <div className="mx-auto flex h-full max-w-[90vw] flex-col gap-40 xl:max-w-screen-xl">
        <div className="">
          {items.map((item, index) => (
            <DesignPlanningThread
              key={index}
              {...item}
              active={index === activeIndex}
              onClick={() => toggleActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

const DesignPlanningThread = ({
  title,
  subString,
  process01,
  process02,
  process03,
  active,
  onClick,
}: IDesignPlanning.IDto & { active: boolean; onClick: () => void }) => {
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
      return;
    }
    setSelected(name);
  };

  return (
    <div className="border-t py-2 tracking-tight last:border-b">
      <div
        className="flex w-full items-center justify-between py-2 text-left font-semibold"
        onClick={onClick}
        aria-expanded={active}
      >
        <div className="my-10 flex flex-col gap-4 px-2">
          <div>
            <span className="text-4xl">{title}</span>
          </div>
          <p className="pb-3">{subString}</p>
        </div>
        <div
          className={`ml-8 shrink-0 transform text-6xl  ${active ? "rotate-90" : "grayscale"}`}
        >
          🚀
        </div>
      </div>
      <div
        className={`grid overflow-hidden text-sm text-slate-600 transition-all duration-300 ease-in-out ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <section className="mb-10 flex min-h-screen w-full flex-col gap-[7.5rem] pt-20 text-[#464646] mobile:gap-10">
            <div className="relative flex flex-row justify-between gap-10 mobile:gap-4">
              {processes.map(({ name, description, title }) => (
                <div
                  key={name}
                  className={`flex-1 rounded-[1.875rem] px-10 py-[3.75rem] mobile:rounded-xl mobile:p-5 ${selected === name ? "shadow-innerOn" : "shadow-innerOff"} max-h-[32.75rem]`}
                  style={{
                    transform: selected === name ? "translateY(-40px)" : "none",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseOver={() => handleHoverValue(name, true)}
                  onMouseOut={() => handleHoverValue(name, false)}
                  onClick={() => handleSelect(name)}
                >
                  <div className="flex flex-col gap-10 mobile:gap-3">
                    <Image
                      src={`/growth/design-planning/${selected === name || isHovering[name as keyof typeof isHovering] ? `${name}-color.png` : `${name}-clay.png`}`}
                      alt={name}
                      width={360}
                      height={262}
                      className="mobile:w-full"
                    ></Image>
                    <div className="flex flex-col gap-4">
                      <span className="whitespace-nowrap text-2xl font-bold mobile:text-center mobile:text-base">
                        {title}
                      </span>
                      <p className="leading-loose tracking-tight mobile:hidden">
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
      <div className="flex flex-col gap-[3.75rem] mobile:gap-8">
        {/* title */}
        <div className="flex w-fit flex-col gap-4">
          <p className="whitespace-nowrap text-3xl font-bold mobile:text-xl">
            요청사항 수집 및 분석
          </p>
          <p>
            스튜디오 낭만은 클라이언트가 제공한 문서를 면밀히 검토하여
            요구사항을 이해한 뒤 기능적 요구사항과 비기능적 요구사항으로
            분류합니다.
            <br />
            분류한 요구사항을 토대로 우선순위를 결정하고 프로젝트 진행 시 중점을
            둬야 할 부분을 명확히 합니다.
          </p>
        </div>
        {/* content */}
        <div className="flex items-center gap-[3.75rem] content-md-xs:flex-col">
          <Image
            src={data["image01"]}
            alt=""
            width={900}
            height={100}
            className="h-auto w-1/2"
          />
          <div className="flex flex-1 flex-col gap-8">
            <div className="flex gap-3">
              <p className="text-3xl font-bold text-black">What bother you?</p>
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
                  className={`w-fit text-2xl font-bold ${index === 0 || index === 4 ? "text-navyBlue/30" : index % 2 !== 0 ? "text-navyBlue/50" : "text-navyBlue"}`}
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
          <p className="whitespace-nowrap text-3xl font-bold mobile:text-xl">
            요청사항 문서화
          </p>
          <p>
            이해한 요구사항을 문서로 작성하고 클라이언트와의 커뮤니케이션을 통해
            디자인 컨셉과 기술적인 측면에서의 가능성을 검토합니다.
          </p>
        </div>
        {/* content */}

        <div className="grid grid-cols-2 gap-5 mobile:grid-cols-1">
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
          <p className="whitespace-nowrap text-3xl font-bold mobile:text-xl">
            키워드 산출
          </p>
          <p className=" ">
            요구사항 명세서를 바탕으로 프로젝트에 사용될 키워드를 산출합니다.
            <br />
            요구사항의 이해도를 높이고, 구축 및 유지보수 과정에서의 명확한
            커뮤니케이션에 효과적입니다.
          </p>
        </div>
        {/* content */}
        <div className="flex flex-row flex-wrap gap-6 mobile:gap-2">
          {data["keywords"].map(
            (
              { name, strong }: { name: string; strong: boolean },
              index: number,
            ) => (
              <div
                key={index}
                className={`rounded-full px-8 py-6 ${strong ? "bg-[#3f8fee] text-white" : "text-black/30"} mobile:px-5 mobile:py-3`}
              >
                <div className="w-fit whitespace-nowrap text-center text-5xl tracking-tight mobile:text-xl">
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
          <p className="whitespace-nowrap text-3xl font-bold mobile:text-xl">
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
            <div className="flex h-full flex-col sm:max-w-[calc(100%/2)]">
              {data.map(
                (
                  {
                    title,
                    text,
                    image,
                  }: { title: string; text: string; image: string },
                  index: number,
                ) => (
                  <div
                    key={index}
                    className={`group relative pl-8 sm:pl-8 ${index >= data.length - 1 ? "pb-0" : "pb-20 mobile:pb-10"}`}
                  >
                    <div
                      className={`mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:bg-gray-300 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-2 sm:after:left-0 sm:after:ml-2 mobile:before:h-full ${index >= data.length - 1 ? " before:translate-y-0" : " before:translate-y-3"}`}
                    >
                      <div className="w-full pb-5 sm:hidden mobile:w-1/2 ">
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
              <div className="group relative bottom-0"></div>
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
  const { pc, mo } = data;
  return (
    <div className="relative w-full bg-black/5 text-base leading-loose">
      <div className="relative w-full bg-gray-50">
        <div className=" h-full w-full">
          <div className="relative">
            <div className="absolute top-60 h-[40vw] max-h-[45.625rem] w-full bg-nangmanBlue xl:h-[45.625rem] mobile:h-96 content-md:h-[40rem] content-lg:min-h-[30vw]" />

            <div className="relative bg-gray-50 pb-16">
              <Image
                src="/growth/design-planning/nangman-word.svg"
                alt="nangman-word"
                width={1400}
                height={224}
                className="h-auto w-auto"
              />
            </div>

            <div className="relative -top-40 mx-auto h-full w-2/3 mobile:hidden content-md:min-w-[50rem]">
              <Image src={pc} alt="mockup-pc" width={1440} height={10000} />
            </div>

            <div className="relative -top-32 mx-auto hidden h-full w-2/3 flex-col items-center gap-5 mobile:flex">
              <p className="whitespace-nowrap text-xs tracking-tight text-black/50">
                * pc화면에서 상세한 정보를 보실 수 있습니다.
              </p>
              <Image src={mo} alt="mockup-mo" width={1440} height={10000} />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
