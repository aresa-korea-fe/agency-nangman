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
import Link from "next/link";

type DetailHeaderProps = {
  category: string;
  client: string;
  mainImage: string;
  releaseDate: string;
  intro: string;
  title: string;
  link: string;
};

function DetailHeader(props: DetailHeaderProps) {
  const { mainImage, title, category, client, releaseDate, intro, link } =
    props;
  return (
    <header className="h-auto w-screen justify-center">
      <Image
        src={mainImage || ""}
        alt="main"
        priority
        width={1920}
        height={1200}
        className="w-screen"
      ></Image>
      <div className="max-w-[calc(100% - 10rem)] content-xs:px-5 content-xs:py-3 content-xs:m-0  content-sm:m-0 content-sm:px-10 content-sm:py-8  relative z-30 mx-10 -mt-[10vw] flex flex-col gap-5 bg-white px-[6.25rem] py-[3.75rem]">
        <h1 className="content-xs:text-2xl content-xs:leading-normal content-sm:text-3xl content-sm:leading-normal content-md:text-4xl content-md:leading-normal text-[2.75rem] font-bold">
          {title}
        </h1>
        <div className="flex flex-col gap-10">
          <div className="content-xs:flex-col content-sm:flex-col content-md:gap-[3.75rem] content-lg:gap-[3.75rem] flex gap-5">
            <div className="content-xs:flex-col content-sm:flex-col content-md:flex-col flex gap-5">
              <p className="text-navyBlue/50">Category.</p>
              <p>{category}</p>
            </div>
            <div className="content-xs:flex-col content-sm:flex-col content-md:flex-col flex gap-5">
              <p className="text-navyBlue/50">Client.</p>
              <p>{client}</p>
            </div>
            <div className="content-xs:flex-col content-sm:flex-col content-md:flex-col flex gap-5">
              <p className="text-navyBlue/50">Release Date.</p>
              <p>{releaseDate}</p>
            </div>
          </div>
          <div className="w-full  border-b border-gray-200"></div>
          <span className="r-5 text-lg leading-9 tracking-tight">{intro}</span>
        </div>
        <Link
          className="Link-0 w-28 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm leading-none hover:bg-gray-100"
          href={link}
          target="_blank"
        >
          사이트 보기
        </Link>
      </div>
    </header>
  );
}

function MiddleContent({
  contentImage,
  brief,
}: {
  contentImage: string;
  brief: ProjectBrief[];
}) {
  return (
    <div className="content-lg:mx-40 mx-20 flex flex-col items-center gap-24 whitespace-pre-wrap">
      <Image
        src={contentImage || ""}
        alt="main"
        priority
        width={1334}
        height={1002}
        className="w-screen"
      ></Image>

      <div className="flex flex-col items-center justify-center gap-10">
        <div className="relative px-5 pt-5">
          <div className="absolute -left-3 top-0 h-20 w-20 rounded-full bg-[#FF7C7C50]"></div>
          <h2 className="relative z-10 font-bold">Project brief</h2>
          <div className="absolute bottom-2 left-6 h-12 w-12 rounded-full bg-[#5F5CFF30]"></div>
          <div className="absolute left-[4.5rem] top-4 h-6 w-6 rounded-full bg-[#FFF509]"></div>
        </div>

        <div className="content-lg:grid-cols-2 grid w-full items-center justify-center gap-4 whitespace-break-spaces">
          {brief.map((menu, index) => (
            <div
              key={index}
              className="content-xs:gap-3 content-sm:gap-4 content-lg:h-[20rem]  content-lg:p-[3.75rem] content-lg:text-sm content-xl:text-base flex flex-col gap-8 rounded-[1.875rem] bg-[#F5F4F6] p-10"
            >
              <div className="content-lg:gap-3 flex flex-col gap-1 ">
                <p className="font-medium text-navyBlue/50">{menu.category}</p>
                <p className="content-lg:text-3xl text-2xl font-bold">
                  {menu.title}
                </p>
              </div>
              <p className="content-xs:text-sm content-xs:leading-normal content-sm:text-sm content-sm:leading-normal leading-8 tracking-tight">
                {menu.content}
              </p>
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
      className="relative grid h-fit grid-flow-col text-white"
      // style={{ background: item[selected].background}}
    >
      <div
        className="absolute h-[50vw] w-screen"
        style={{ background: item[selected].background }}
      ></div>
      <div className="relative flex flex-col gap-10 pl-40 pt-32">
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
      <div className="content-xl:flex-wrap content-xl:max-h-[150rem] relative mt-40 flex max-w-[800px] flex-col justify-between gap-10 pb-40 ">
        {item[selected].images.map((image, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <p
              className={`${item[selected].images.length > 2 ? (index === 0 || index === 2 ? "content-xl:text-white/60" : "content-xl:text-navyBlue/60") : "content-xl:text-white/60"} ${index === 0 ? "text-white/60" : "text-navyBlue/60"}`}
            >
              {image.alt}
            </p>
            <Image
              src={image.src}
              alt={image.alt}
              width={370}
              height={700}
              className="object-cover"
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
    link: item!.link,
  };
  return (
    <article className="flex h-auto w-screen flex-col gap-32 whitespace-pre-wrap text-navyBlue">
      <DetailHeader {...headerProps}></DetailHeader>
      <MiddleContent
        contentImage={item!.contentImage}
        brief={item!.brief}
      ></MiddleContent>
      <SitemapSlide item={item!.sitemap}></SitemapSlide>
    </article>
  );
}
