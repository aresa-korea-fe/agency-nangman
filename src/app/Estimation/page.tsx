"use client";

import "aos/dist/aos.css";
import { useState } from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";
import DynamicHeroIcon from "@/components/dynamicHeroIcon";

export default function Estimation() {
  const [price, setPrice] = useState<number>(0);
  const data = [
    {
      name: "Infomation Page",
      explan: "기업 혹은 브랜드를 소개하고 아이덴티티를 노출합니다.",
      icon: "Window",
      basicPrice: "",
      premiumPrice: "",
    },
    {
      name: "Platform",
      explan: "서비스와 관리자 영역을 나누어 두개의 사이트를 구축합니다",
      icon: "Link",
      basicPrice: "",
      premiumPrice: "",
    },
    {
      name: "User Flow",
      explan: "회원가입 및 로그인, 회원에 관련한 서비스입니다.",
      icon: "UserPlus",
      basicPrice: "",
      premiumPrice: "",
    },
    {
      name: "LBS",
      explan: "사용자 위치를 기반으로 서비스를 제공합니다.",
      icon: "MapPin",
      basicPrice: "",
      premiumPrice: "",
    },
    {
      name: "Payment",
      explan: "서비스를 통한 결제 시스템입니다.",
      icon: "CreditCard",
      basicPrice: "",
      premiumPrice: "",
    },
    {
      name: "Notification",
      explan: "카카오톡, SNS, 이메일 등 다양한 채널을 통한 알림 기능입니다.",
      icon: "BellAlert",
      basicPrice: "",
      premiumPrice: "",
    },
    {
      name: "Community",
      explan: "기업 혹은 브랜드를 소개하고 아이덴티티를 노출합니다.",
      icon: "ChatBubbleLeftRight",
      basicPrice: "",
      premiumPrice: "",
    },
    {
      name: "Editor",
      explan: "영상, 이미지 등 에디터를 통해 컨텐츠를 등록합니다.",
      icon: "PencilSquare",
      basicPrice: "",
      premiumPrice: "",
    },
    {
      name: "Dashboard",
      explan: "일련의 데이터를 시각화합니다.",
      icon: "ChartBarSquare",
      basicPrice: "",
      premiumPrice: "",
    },
    {
      name: "Streaming",
      explan: "실시간으로 데이터를 송출합니다.",
      icon: "Signal",
      basicPrice: "",
      premiumPrice: "",
    },
    {
      name: "Exturnal API",
      explan: "외부의 API를 연동하여 서비스를 제작합니다.",
      icon: "CommandLine",
      basicPrice: "",
      premiumPrice: "",
    },
  ];

  return (
    <main className="min-h-screen py-80">
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
      <div className="relative mx-auto h-full max-w-[90vw] xl:max-w-screen-xl">
        <section className="justify-between` flex">
          <article className="grid grid-cols-2 gap-2 content-lg:grid-cols-3 ">
            {data.map(({ name, explan, icon }, index) => (
              <div
                key={index}
                className="flex min-h-36 w-full cursor-pointer flex-col gap-4 border border-transparent bg-white/30 p-6 backdrop-blur-2xl mobile:p-4"
              >
                <div className="flex flex-col gap-2">
                  <DynamicHeroIcon icon={`${icon}Icon`} />
                  <p className="text-lg font-bold ">{name}</p>
                </div>
                <p>{explan}</p>
              </div>
            ))}
          </article>
          <article className="fixed"></article>
        </section>
      </div>
    </main>
  );
}
