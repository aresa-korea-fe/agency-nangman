"use client";

import DynamicHeroIcon from "@/components/dynamicHeroIcon";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
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
    <main className="flex h-full min-h-screen flex-col items-start justify-start pb-20 pt-80">
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
      <section className="relative mx-auto flex h-full max-w-[90vw] justify-between gap-8 xl:max-w-screen-xl">
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
        <article className="fixed bottom-0">
          <div>
            <p>선택된 기능 {selected.length}개</p>
          </div>
        </article>
        <article className="sticky top-28 -mt-28 h-[100px] w-full mobile:hidden">
          <div className="flex flex-col gap-8 px-6 py-4">
            <div className="flex flex-col gap-3">
              <p className="text-lg font-bold ">선택한 기능</p>
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
                      <p className="text-FluorescentBlue text-lg font-bold ">
                        Basic
                      </p>
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
                      <p className="text-FluorescentBlue text-lg font-bold ">
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
        </article>
      </section>
    </main>
  );
}
