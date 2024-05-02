"use client";

import { IWebAppService } from "@/interface/dtos/web-app-service.interface";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
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
  const [isRender, setIsRender] = useState<boolean>(false);

  const { mainImage, title, category, client, releaseDate, intro, link } =
    props;

  useEffect(() => {
    setTimeout(() => setIsRender(true), 100);
  }, []);

  return (
    <header className="h-full w-full justify-center">
      <Image
        placeholder="blur"
        blurDataURL="/blur.png"
        src={mainImage || ""}
        alt="main"
        priority
        width={1920}
        height={1200}
        className="h-auto w-full"
      ></Image>
      <div className="relative mx-10 -mt-[10vw] flex h-auto flex-col gap-5 bg-white px-[6.25rem] py-[3.75rem] content-xs:m-0 content-xs:px-5 content-xs:py-3 content-sm:m-0 content-sm:px-10 content-sm:py-8">
        <h1 className="text-[2.75rem] font-bold content-xs:text-2xl content-xs:leading-normal content-sm:text-3xl content-sm:leading-normal content-md:text-4xl content-md:leading-normal">
          {title}
        </h1>
        {isRender && (
          <div className="flex flex-col gap-10 delay-200 ease-in-out">
            <div className="flex gap-5 content-xs:flex-col content-sm:flex-col content-md:gap-[3.75rem] content-lg:gap-[3.75rem]">
              <div className="flex gap-5 content-xs:flex-col content-sm:flex-col content-md:flex-col">
                <p className="text-navyBlue/50">Category.</p>
                <p>{category}</p>
              </div>
              <div className="flex gap-5 content-xs:flex-col content-sm:flex-col content-md:flex-col">
                <p className="text-navyBlue/50">Client.</p>
                <p>{client}</p>
              </div>
              <div className="flex gap-5 content-xs:flex-col content-sm:flex-col content-md:flex-col">
                <p className="text-navyBlue/50">Release Date.</p>
                <p>{releaseDate}</p>
              </div>
            </div>
            <div className="w-full  border-b border-gray-200"></div>
            <p className=" text-lg leading-9 tracking-tight">{intro}</p>
          </div>
        )}
        {link && (
          <Link
            className="Link-0 w-28 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm leading-none hover:bg-gray-100"
            href={link}
            target="_blank"
          >
            사이트 보기
          </Link>
        )}
      </div>
    </header>
  );
}

function MiddleContent({
  contentImage,
  brief,
}: {
  contentImage: string;
  brief: IWebAppService.ProjectBrief[];
}) {
  return (
    <div className="mx-20 flex flex-col items-center gap-24 whitespace-pre-wrap content-xs:mx-6 content-sm:mx-6 content-lg:mx-40">
      <Image
        placeholder="blur"
        blurDataURL="/blur.png"
        src={contentImage || ""}
        alt="main"
        priority
        width={1334}
        height={1002}
        className="w-auto"
      ></Image>

      <div className="flex flex-col items-center justify-center gap-10">
        <div className="relative px-5 pt-5">
          <div className="absolute -left-3 top-0 h-20 w-20 rounded-full bg-[#FF7C7C50]"></div>
          <h2 className="relative z-10 font-bold">Project brief</h2>
          <div className="absolute bottom-2 left-6 h-12 w-12 rounded-full bg-[#5F5CFF30]"></div>
          <div className="absolute left-[4.5rem] top-4 h-6 w-6 rounded-full bg-[#FFF509]"></div>
        </div>

        <div className="grid w-full items-center justify-center gap-4 whitespace-break-spaces content-lg:grid-cols-2">
          {brief.map((menu, index) => (
            <div
              key={index}
              className="flex flex-col gap-8  rounded-[1.875rem] bg-[#F5F4F6] p-10 content-xs:gap-3 content-sm:gap-4 content-lg:h-[20rem] content-lg:p-[3.75rem] content-lg:text-sm content-xl:text-base"
            >
              <div className="flex flex-col gap-1 content-lg:gap-3 ">
                <p className="font-medium text-navyBlue/50">{menu.category}</p>
                <p className="text-2xl font-bold content-lg:text-3xl">
                  {menu.title}
                </p>
              </div>
              <p className="leading-8 tracking-tight content-xs:text-sm content-xs:leading-normal content-sm:text-sm content-sm:leading-normal">
                {menu.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SitemapSlide({ item }: { item: IWebAppService.ProjectSitemap[] }) {
  const [menus, setMenus] = useState<string[]>([]);
  const [selected, setSelected] = useState<number>(0);
  const navRef = useRef<HTMLDivElement>(null);
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    let offsetTop = 0;
    const handleScroll = () => {
      if (navRef.current) {
        if (navRef.current.offsetTop !== 0)
          offsetTop = navRef.current.offsetTop;
        setIsTop(window.scrollY >= offsetTop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (item.length > 0) {
      const newMenus = item.map((item) => item.menu);
      setMenus(newMenus);
    }
  }, [item]);

  return (
    <>
      <nav
        ref={navRef}
        className={`slider top-0 z-50 hidden w-screen items-center justify-center bg-white content-xs:-mb-32 content-xs:grid content-xs:grid-cols-2 content-sm:-mb-32 content-sm:grid content-sm:grid-cols-2 content-md:-mb-32 content-md:flex content-md:px-20 ${isTop ? "fixed" : "block"}`}
      >
        {menus.map((menu, index) => (
          <p
            onClick={() => setSelected(index)}
            key={index}
            className={`px-4 py-4 leading-none ${selected === index ? "font-bold text-navyBlue underline content-sm:snap-center" : " text-navyBlue/60"}`}
          >
            {menu}
          </p>
        ))}
      </nav>

      <div className="relative w-full overflow-x-hidden text-white">
        <div
          className="absolute h-[42.5rem] w-full"
          style={{ background: item[selected].background }}
        ></div>
        <div className="mx-20 mt-5 flex flex-wrap items-start justify-center gap-10 content-xs:mx-6 content-xs:mt-5 content-sm:mx-6 content-sm:mt-5 content-lg:mx-40 content-lg:mt-32 content-lg:flex-nowrap">
          <div className="relative flex flex-col gap-10 content-xs:w-full">
            <div className="slider relative flex snap-x flex-col gap-6 overflow-x-auto content-xs:hidden content-sm:hidden content-md:hidden">
              {menus.map((menu, index) => (
                <p
                  onClick={() => setSelected(index)}
                  key={index}
                  className={`flex w-full flex-col font-bold leading-none ${selected === index ? "text-white underline content-sm:snap-center" : " text-white/60"} text-nowrap text-2xl content-lg:text-3xl `}
                >
                  {menu}
                </p>
              ))}
            </div>
            <p className=" max-w-96 content-lg:mt-0">{item[selected].text}</p>
          </div>
          <div
            className={`relative grid w-full items-start justify-center gap-10 pb-10 ${item[selected].images[0].fill ? "content-xl:grid-cols-1" : "content-xl:grid-cols-2"}`}
          >
            {item[selected].images.map((image, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <p
                  className={`${item[selected].images.length > 2 ? (index === 0 || index === 2 ? "content-xl:text-white/60" : "content-xl:text-navyBlue/60") : "content-xl:text-white/60"} ${index === 0 ? "text-white/60" : "text-navyBlue/60"}`}
                >
                  {image.alt}
                </p>
                <Image
                  placeholder="blur"
                  blurDataURL="/blur.png"
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className={`object-cover drop-shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ${image.fill ? "w-full max-w-[37.5rem]" : ""}`}
                ></Image>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function AppWebServiceDetail({ id }: { id: string }) {
  const items: IWebAppService.IDto[] = require("/public/data/app-web-service.interface.json");
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
    <main
      id="detailWrapper"
      className={`flex h-auto w-full max-w-[120rem] flex-col items-center justify-center gap-32 overflow-x-hidden whitespace-pre-wrap bg-white text-start text-navyBlue`}
    >
      <DetailHeader {...headerProps}></DetailHeader>
      <MiddleContent
        contentImage={item!.contentImage}
        brief={item!.brief}
      ></MiddleContent>
      <SitemapSlide item={item!.sitemap}></SitemapSlide>
    </main>
  );
}
