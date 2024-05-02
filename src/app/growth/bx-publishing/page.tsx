"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IBxPublishing } from "@/interface/dtos/bx-publishing.interface";

export default function BxPublishing() {
  // page.tsx
  const [contents, setContents] = useState<IBxPublishing.IDto[]>([]);

  useEffect(() => {
    async function fetchContents() {
      try {
        const res = await fetch("/growth/bx-publishing/api");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setContents(data); // API에서 바로 items 배열을 반환한다고 가정
      } catch (error) {
        console.error("Fetching error: ", error);
      }
    }

    fetchContents();
  }, []);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <main className="min-h-screen w-full bg-gray-50 leading-none text-black">
      <div className=" mx-auto flex h-full max-w-[90vw] flex-col gap-40 xl:max-w-screen-xl">
        {contents.map(
          (item, index) =>
            item.headImage && (
              <Link
                key={index}
                href={`bx-publishing/${item.id}`}
                scroll={false}
                className={`w-fit ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="relative w-full">
                  {item.activeLighting && (
                    <div className="absolute bottom-0 h-[10rem] w-full bg-gradient-to-t from-white/60 to-white/0"></div>
                  )}
                  <Image
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                    key={item.headImage}
                    width={1020}
                    height={560}
                    src={item.headImage}
                    className="content-lg:max-w-[50rem]"
                    alt=""
                  />
                  <div className="absolute mt-6 flex flex-col gap-4 lg:-mt-6 lg:ml-6 ">
                    <p className="whitespace-nowrap text-2xl font-bold md:text-4xl">
                      {item.title}
                    </p>
                    <label className="text-xs text-black/50 md:text-sm">
                      {item.category}
                    </label>
                  </div>
                </div>
              </Link>
            ),
        )}
      </div>
    </main>
  );
}
