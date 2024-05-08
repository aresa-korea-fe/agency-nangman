"use client";

import DynamicHeroIcon from "@/components/dynamicHeroIcon";
import "aos/dist/aos.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IEstimation } from "@/interface/dtos/estimation.interface";

export default function Estimation() {
  const [selected, setSelected] = useState<IEstimation.IDto[]>([]);
  const [price, setPrice] = useState<{ basic: number; premium: number }>({
    basic: 0,
    premium: 0,
  });

  const { basic, premium } = price;

  const selectedAreaClass = (item: IEstimation.IDto) => {
    const isFind = selected.find((select) => select.name === item.name);
    return isFind ? true : false;
  };

  const handleSelect = (item: IEstimation.IDto) => {
    if (selectedAreaClass(item)) {
      const excludeArray = selected.filter(
        (select) => select.name !== item.name,
      );
      setSelected(excludeArray);
      return;
    }
    const includeArray = [...selected, item];
    setSelected(includeArray);
  };

  function formatUnit(num: number) {
    // 만 단위와 억 단위로 변환
    let unit = "";
    let dividedNum = 0;
    if (num >= 100000000) {
      // 억 단위
      unit = "억";
      dividedNum = num / 100000000;
    } else if (num >= 10000) {
      // 만 단위
      unit = "만";
      dividedNum = num / 10000;
    } else {
      // 백만 이하는 고려하지 않음
      return num.toString();
    }

    // 세 자리마다 콤마 추가
    let result = dividedNum
      .toFixed(0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // 단위 추가
    result += unit;

    return result;
  }

  useEffect(() => {
    if (selected.length > 0) {
      const basicPrice = selected.reduce(
        (acc, cur) => acc + cur.basicPrice,
        1000,
      );
      const premiumPrice = selected.reduce(
        (acc, cur) => acc + cur.premiumPrice,
        1000,
      );

      setPrice({ basic: basicPrice, premium: premiumPrice });
    }
  }, [selected]);

  const data: IEstimation.IDto[] = [
    {
      name: "Infomation Page",
      explan: "기업 혹은 브랜드를 소개하고 아이덴티티를 노출합니다.",
      icon: "Window",
      basicPrice: 500,
      premiumPrice: 800,
    },
    {
      name: "Platform",
      explan: "서비스와 관리자 영역을 나누어 두개의 사이트를 구축합니다",
      icon: "Link",
      basicPrice: 500,
      premiumPrice: 800,
    },
    {
      name: "User Flow",
      explan: "회원가입 및 로그인, 회원에 관련한 서비스입니다.",
      icon: "UserPlus",
      basicPrice: 500,
      premiumPrice: 800,
    },
    {
      name: "LBS",
      explan: "사용자 위치를 기반으로 서비스를 제공합니다.",
      icon: "MapPin",
      basicPrice: 500,
      premiumPrice: 800,
    },
    {
      name: "Payment",
      explan: "서비스를 통한 결제 시스템입니다.",
      icon: "CreditCard",
      basicPrice: 500,
      premiumPrice: 800,
    },
    {
      name: "Notification",
      explan: "카카오톡, SNS, 이메일 등 다양한 채널을 통한 알림 기능입니다.",
      icon: "BellAlert",
      basicPrice: 500,
      premiumPrice: 800,
    },
    {
      name: "Community",
      explan: "기업 혹은 브랜드를 소개하고 아이덴티티를 노출합니다.",
      icon: "ChatBubbleLeftRight",
      basicPrice: 500,
      premiumPrice: 800,
    },
    {
      name: "Editor",
      explan: "영상, 이미지 등 에디터를 통해 컨텐츠를 등록합니다.",
      icon: "PencilSquare",
      basicPrice: 500,
      premiumPrice: 800,
    },
    {
      name: "Dashboard",
      explan: "일련의 데이터를 시각화합니다.",
      icon: "ChartBarSquare",
      basicPrice: 500,
      premiumPrice: 800,
    },
    {
      name: "Streaming",
      explan: "실시간으로 데이터를 송출합니다.",
      icon: "Signal",
      basicPrice: 500,
      premiumPrice: 800,
    },
    {
      name: "Exturnal API",
      explan: "외부의 API를 연동하여 서비스를 제작합니다.",
      icon: "CommandLine",
      basicPrice: 500,
      premiumPrice: 800,
    },
    {
      name: "Proptech",
      explan: "자체 수집된 부동산 데이터를 기반으로 서비스를 제공합니다.",
      icon: "HomeModern",
      basicPrice: 500,
      premiumPrice: 800,
    },
  ];

  return (
    <main className="flex h-full min-h-screen flex-col items-start justify-start pb-20 pt-80 text-white">
      <div className="fixed left-0 top-0 -z-10 flex h-full w-full bg-[#040002]">
        <video
          autoPlay
          muted
          loop
          className="m-auto h-full  w-full object-cover"
        >
          <source src="/second.webm" type="video/webm" />
        </video>
      </div>
      <section className="mx-auto h-full w-full max-w-[90vw] xl:max-w-screen-xl  mobile:mx-5">
        <div className="flex flex-col text-white/80">
          <h2 className="font-tenada pb-2 leading-[1.1]">
            어떤 서비스가
            <br />
            필요하세요?
          </h2>
          <p>필요한 서비스만 쏙쏙 골라서 예상 견적을 확인하세요.</p>
          <p>투명한 B2B 문화를 위해 합리적인 금액과 서비스를 제안합니다.</p>
        </div>

        <div className="my-6 h-[1px] bg-white/40"></div>

        <div className="relative flex justify-between gap-8 mobile:flex-col mobile:gap-0">
          <article className="sticky top-20 z-10 hidden h-52 w-full mobile:block">
            <MobileSideBox
              selected={selected}
              basic={basic}
              premium={premium}
              formatUnit={formatUnit}
              setSelected={setSelected}
              data={data}
            />
          </article>
          <article className="grid min-w-fit grid-cols-2 gap-4 content-lg:grid-cols-3">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${selectedAreaClass(item) ? "border-FluorescentBlue" : "border-transparent"} flex min-h-24 w-full cursor-pointer flex-col gap-3 border bg-white/30 p-6 backdrop-blur-2xl mobile:p-4`}
                  onClick={() => handleSelect(item)}
                >
                  <div className="flex flex-col gap-2">
                    <DynamicHeroIcon
                      icon={`${item.icon}Icon`}
                      className={`${selectedAreaClass(item) ? "text-FluorescentBlue" : "text-white/40"} h-8 w-8 `}
                    />
                    <p
                      className={`${selectedAreaClass(item) ? "text-white" : "text-white/60"} text-lg font-bold`}
                    >
                      {item.name}
                    </p>
                  </div>
                  <p
                    className={`${selectedAreaClass(item) ? "text-white" : "text-white/60"} max-w-60 tracking-tight`}
                  >
                    {item.explan}
                  </p>
                </div>
              );
            })}
          </article>
          <article className="sticky top-0 -mt-5 h-[100px] w-full mobile:hidden">
            <DesktopSideBox
              selected={selected}
              basic={basic}
              premium={premium}
              formatUnit={formatUnit}
              setSelected={setSelected}
              data={data}
            />
          </article>
        </div>
      </section>
    </main>
  );
}
interface DesktopSideBoxProps {
  selected: IEstimation.IDto[];
  basic: number;
  premium: number;
  formatUnit: (num: number) => string;
  setSelected: Dispatch<SetStateAction<IEstimation.IDto[]>>;
  data: IEstimation.IDto[];
}

function MobileSideBox({
  selected,
  formatUnit,
  basic,
  premium,
  setSelected,
  data,
}: DesktopSideBoxProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (event: any) => {
    event.stopPropagation(); // 이벤트 버블링을 막음
    setOpen(false);
  };

  const popularSelected = () => {
    setSelected(data.slice(0, 3));
  };

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
    <div className="rounded-xl bg-navyBlue p-5">
      {selected.length < 1 ? (
        <div className="flex w-full flex-col gap-4 leading-tight">
          <p className="font-bold">선택한 기능이 없습니다.</p>
          <p className=" text-white/80">기능을 선택해 주세요.</p>
          <button
            type="button"
            className="cursor-not-allowed rounded-lg bg-nangmanBlue px-5 py-2.5 text-center text-sm font-medium text-white dark:bg-nangmanBlue"
            onClick={popularSelected}
          >
            인기 항목 선택하기
          </button>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-4 leading-tight">
          <p className="font-bold">선택한 기능 {selected.length}개</p>
          <div className="flex items-start justify-between gap-4">
            <p className="flex-nowrap gap-2 overflow-hidden text-ellipsis whitespace-nowrap text-white/80">
              {selected.reduce((acc, select, index) => {
                acc += select.name;
                if (index < selected.length - 1) {
                  acc += " · ";
                }
                return acc;
              }, "")}
            </p>
            <div className="flex-1 whitespace-nowrap border-l pl-4 leading-none">
              <p className="font-bold text-FluorescentBlue">
                {formatUnit(basic * 10000)}원~
              </p>
            </div>
          </div>
          <button
            type="button"
            className="cursor-not-allowed rounded-lg bg-nangmanBlue px-5 py-2.5 text-center text-sm font-medium text-white dark:bg-nangmanBlue"
            onClick={handleOpen}
          >
            선택 견적 전체 보기
          </button>
          {open ? (
            <div
              className="fixed right-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-black/60"
              onClick={handleClose}
            >
              <div
                className="flex items-center justify-center outline-none"
                onClick={handleClose}
              >
                <div
                  className="mx-10 w-full rounded-lg bg-black p-6 backdrop-blur-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-3">
                      <p className="text-lg font-bold">선택한 기능</p>

                      <div className="flex flex-wrap gap-2">
                        {selected.map((select, index) => (
                          <div key={index} className="text-white">
                            {select.name}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="">
                      <div className="flex flex-col gap-5">
                        <div className="flex w-full flex-col gap-4">
                          <div className="flex items-center gap-2">
                            <p className="text-lg font-bold text-FluorescentBlue">
                              Basic
                            </p>
                            <p className="flex text-lg font-bold text-white">
                              {formatUnit(basic * 10000)}원~
                            </p>
                          </div>
                          <p className="text-white/80">
                            - 효율적인 가격과 기간
                            <br /> - 10페이지 이내, 3주 이상
                          </p>
                        </div>

                        <div className="w-full border-b border-white/60"></div>

                        <div className="flex w-full flex-col gap-4">
                          <div className="flex items-center gap-2">
                            <p className="text-lg font-bold text-FluorescentBlue">
                              Premium
                            </p>
                            <p className="flex text-lg font-bold text-white">
                              {formatUnit(premium * 10000)}원~
                            </p>
                          </div>
                          <p className="text-white/80">
                            - 수준 높은 웹서비스와 유지보수
                            <br /> - 40페이지 이내, 2달 이상
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

function DesktopSideBox({
  selected,
  basic,
  premium,
  formatUnit,
  setSelected,
}: DesktopSideBoxProps) {
  const selectedAreaClass = (item: IEstimation.IDto) => {
    const isFind = selected.find((select) => select.name === item.name);
    return isFind ? true : false;
  };

  const handleSelect = (item: IEstimation.IDto) => {
    if (selectedAreaClass(item)) {
      const excludeArray = selected.filter(
        (select) => select.name !== item.name,
      );
      setSelected(excludeArray);
      return;
    }
    const includeArray = [...selected, item];
    setSelected(includeArray);
  };

  return (
    <div className="flex flex-col gap-8 px-6 py-4 text-white">
      <div className="flex flex-col gap-3">
        <p className="text-lg font-bold">선택한 기능</p>
        {selected.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {selected.map((select, index) => (
              <div
                key={index}
                className="rounded-full bg-gray-200 px-3 py-1 text-sm text-nangmanBlue/80"
                onClick={() => handleSelect(select)}
              >
                {select.name}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white/60">기능을 선택해 주세요.</p>
        )}
      </div>
      <div className="min-w-80 rounded-lg bg-white/30 p-6 backdrop-blur-2xl">
        {selected.length > 0 ? (
          <div className="flex flex-col gap-5">
            <div className="flex w-full flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-lg font-bold text-FluorescentBlue">Basic</p>
                <p className="flex text-2xl font-bold text-white">
                  {formatUnit(basic * 10000)}원~
                </p>
              </div>
              <p className="text-white/80">
                - 효율적인 가격과 기간
                <br /> - 10페이지 이내, 3주 이상
              </p>
            </div>

            <div className="w-full border-b border-white/60"></div>

            <div className="flex w-full flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-lg font-bold text-FluorescentBlue">
                  Premium
                </p>
                <p className="flex text-2xl font-bold text-white">
                  {formatUnit(premium * 10000)}원~
                </p>
              </div>
              <p className="text-white/80">
                - 수준 높은 웹서비스와 유지보수
                <br /> - 40페이지 이내, 2달 이상
              </p>
            </div>
          </div>
        ) : (
          <div className="py-32 text-center">
            원하시는 기능을 선택하시면
            <br /> 예상 견적을 확인하실 수 있어요.
          </div>
        )}
      </div>
    </div>
  );
}
