"use client";

import {
  IProject,
  ProjectBrief,
  ProjectSitemap,
} from "@/app/growth/app-web-service/page";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type DetailHeaderProps = {
  category: string;
  client: string;
  mainImage: string;
  releaseDate: string;
  intro: string;
  title: string;
};

function DetailHeader(props: DetailHeaderProps) {
  const { mainImage, title, category, client, releaseDate, intro } = props;
  return (
    <header className="relative flex h-screen w-full justify-center">
      <div className="max-w-[calc(100% - 10rem)] absolute -bottom-60 left-20 right-20 flex flex-col gap-5 bg-white px-[6.25rem] py-[3.75rem]">
        <h1 className="text-[2.75rem] font-bold">{title}</h1>
        <div className="flex flex-col gap-10">
          <div className="flex gap-[3.75rem]">
            <div className="flex gap-5">
              <p className="text-navyBlue/50">Category.</p>
              <p>{category}</p>
            </div>
            <div className="flex gap-5">
              <p className="text-navyBlue/50">Client.</p>
              <p>{client}</p>
            </div>
            <div className="flex gap-5">
              <p className="text-navyBlue/50">Release Date.</p>
              <p>{releaseDate}</p>
            </div>
          </div>
          <div className="w-full  border-b border-gray-200"></div>
          <span className="text-lg leading-9 tracking-tight">{intro}</span>
        </div>
        <p className="w-28 rounded-full border border-gray-300 bg-white p-0 px-5 py-3 text-sm leading-none hover:bg-gray-100">
          사이트 보기
        </p>
      </div>
      <Image
        src={mainImage || ""}
        alt="main"
        priority
        width={1440}
        height={780}
        className="w-full bg-gradient-to-b from-white/0 to-white/100"
      ></Image>
    </header>
  );
}

function MiddleContent({
  contentImage,
  breif,
}: {
  contentImage: string;
  breif: ProjectBrief[];
}) {
  return (
    <div className="mx-40 flex flex-col items-center gap-24 whitespace-pre-wrap">
      <Image
        src={contentImage || ""}
        alt="main"
        priority
        width={1334}
        height={1002}
        className="mt-32"
      ></Image>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="relative px-5 pt-5">
          <div className="absolute -left-3 top-0 h-20 w-20 rounded-full bg-[#FF7C7C50]"></div>
          <h2 className="relative z-10 font-bold">Project Breif</h2>
          <div className="absolute bottom-2 left-6 h-12 w-12 rounded-full bg-[#5F5CFF30]"></div>
          <div className="absolute left-[4.5rem] top-4 h-6 w-6 rounded-full bg-[#FFF509]"></div>
        </div>

        <div className="grid w-full grid-cols-2 items-center justify-center gap-4">
          {breif.map((menu, index) => (
            <div
              key={index}
              className="flex flex-col gap-8 rounded-[1.875rem] bg-[#F5F4F6] p-[3.75rem]"
            >
              <div className="flex flex-col gap-3">
                <p className="font-medium text-navyBlue/50">{menu.category}</p>
                <p className="text-3xl font-bold">{menu.title}</p>
              </div>
              <p className="leading-8 tracking-tight">{menu.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SitemapSlide({ item }: { item: ProjectSitemap[] }) {
  const [menus, setMenus] = useState<string[]>([]);
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    if (item.length > 0) {
      const newMenus = item.map((item) => item.menu);
      setMenus(newMenus);
    }
  }, [item]);

  return (
    <article
      className="grid-flow-col-2 grid text-white"
      style={{ background: item[selected].background }}
    >
      <div className={`flex flex-col gap-10 pl-40 pt-32`}>
        {menus.map((menu, index) => (
          <p
            onClick={() => setSelected(index)}
            key={index}
            className={`flex flex-col font-bold leading-none ${selected === index ? "text-[3.125rem] text-white" : "text-[2.5rem] text-white/60"}`}
          >
            {menu}
          </p>
        ))}
        <p className="max-w-96">{item[selected].text}</p>
      </div>
      <div className="w-full">
        {item[selected].images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={375}
              height={872}
            ></Image>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function AppWebServiceDetail({ id }: { id: string }) {
  const items: IProject[] = require("/public/data/app-web-service.interface.json");
  const item = items.find((content) => content.id === id);
  const headerProps: DetailHeaderProps = {
    mainImage: item!.mainImage,
    title: item!.title,
    category: item!.category,
    client: item!.client,
    releaseDate: item!.releaseDate,
    intro: item!.intro,
  };
  return (
    <article className="flex w-full flex-col gap-32 overflow-y-auto whitespace-pre-wrap text-navyBlue">
      <DetailHeader {...headerProps}></DetailHeader>
      <MiddleContent
        contentImage={item!.contentImage}
        breif={item!.breif}
      ></MiddleContent>
      <SitemapSlide item={item!.sitemap}></SitemapSlide>
    </article>
  );
}
