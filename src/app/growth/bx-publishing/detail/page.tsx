"use client";

import Image from "next/image";

type DetailProps = {
  index: number;
};

export default function BxPublishingDetailPage() {
  const contents = [
    {
      category: "business Card Design",
      title: "agency NAMGMAN",
      content: `<p>
        우리는 모던 웹과 서비스를 연결하여 사람과 제품이 공감으로 이어지는 것을 목표로 항해합니다.<br/>
        에이전시 낭만의 시그니처인 돗단배는 다양한 리소스가 한데 각자의 자리에서 각자의 역할을 수행하며 조화를 이루는 상징입니다.<br/>
        스타 플레이어보다 팀 플레이어의 정신으로 서로를 존중하고 협력하는 낭만의 크리에이티브를 그대로 이어나가며 팀원의 아이덴티티를 명함에 녹였습니다.
        </p>`,
      headImage: "/growth/bx-publishing/bx_detail_nangman_01.png",
      contentImages: [
        "/growth/bx-publishing/bx_detail_nangman_02.png",
        "/growth/bx-publishing/bx_detail_nangman_03.png",
      ],
    },
    {
      category: "business Card Design",
      title: "agency NAMGMAN",
      content: `<p>
        우리는 모던 웹과 서비스를 연결하여 사람과 제품이 공감으로 이어지는 것을 목표로 항해합니다.<br/>
        에이전시 낭만의 시그니처인 돗단배는 다양한 리소스가 한데 각자의 자리에서 각자의 역할을 수행하며 조화를 이루는 상징입니다.<br/>
        스타 플레이어보다 팀 플레이어의 정신으로 서로를 존중하고 협력하는 낭만의 크리에이티브를 그대로 이어나가며 팀원의 아이덴티티를 명함에 녹였습니다.
        </p>`,
      headImage: "/growth/bx-publishing/bx_detail_nangman_01.png",
      contentImages: [
        "/growth/bx-publishing/bx_detail_nangman_02.png",
        "/growth/bx-publishing/bx_detail_nangman_03.png",
      ],
    },
    {
      category: "business Card Design",
      title: "agency NAMGMAN",
      content: `<p>
        우리는 모던 웹과 서비스를 연결하여 사람과 제품이 공감으로 이어지는 것을 목표로 항해합니다.<br/>
        에이전시 낭만의 시그니처인 돗단배는 다양한 리소스가 한데 각자의 자리에서 각자의 역할을 수행하며 조화를 이루는 상징입니다.<br/>
        스타 플레이어보다 팀 플레이어의 정신으로 서로를 존중하고 협력하는 낭만의 크리에이티브를 그대로 이어나가며 팀원의 아이덴티티를 명함에 녹였습니다.
        </p>`,
      headImage: "/growth/bx-publishing/bx_detail_nangman_01.png",
      contentImages: [
        "/growth/bx-publishing/bx_detail_nangman_02.png",
        "/growth/bx-publishing/bx_detail_nangman_03.png",
      ],
    },
  ];

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
