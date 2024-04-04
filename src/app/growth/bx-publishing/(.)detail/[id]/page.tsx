"use client";

import Image from "next/image";

export default function BxPublishingDetailPage() {
  const contents = require("/public/data/bx-publishing.interface.json");

  const { category, title, content, headImage, contentImages } = contents[0];

  return (
    <section className="top-4 flex flex-col gap-[7.5rem] overflow-y-auto bg-white text-black">
      <div className="relative">
        <Image
          src={headImage}
          alt=""
          width={1440}
          height={780}
          className="w-full bg-gradient-to-b from-white/0 to-white/100"
        ></Image>
        <div className="absolute bottom-0 h-[20rem] w-full bg-gradient-to-b from-white/0 to-white/100"></div>
      </div>

      <div className="mx-[7.5rem] flex flex-col gap-12 text-left">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-navyBlue/70">{category}</p>
          <h1 className="text-[2.625rem] font-bold leading-none text-navyBlue">
            {title}
          </h1>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-xl font-bold text-navyBlue/80">about us</p>
          <p
            className="font-base leading-8 text-navyBlue"
            dangerouslySetInnerHTML={{ __html: content }}
          ></p>
        </div>
        <Image
          src={contentImages[0]}
          alt=""
          width={1440}
          height={780}
          className="w-full"
        ></Image>
      </div>

      <div>
        <Image
          src={contentImages[1]}
          alt=""
          width={1440}
          height={780}
          className="w-full"
        ></Image>
      </div>
    </section>
  );
}
