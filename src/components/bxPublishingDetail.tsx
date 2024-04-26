import Image from "next/image";
import { IBxPublishing } from "@/interface/dtos/bx-publishing.interface";
export default function BxPublishingDetail({ id }: { id: string }) {
  const itemList = require("/data/bx-publishing.interface.json");
  const items: IBxPublishing.IDto[] = itemList.items;
  const item = items.find((content) => content.id === id);

  return (
    <section className="top-4 flex flex-col gap-[7.5rem] overflow-y-auto bg-white text-black">
      <div className="relative">
        <Image
          src={item?.headImage || ""}
          alt=""
          width={1440}
          height={780}
          className="h-auto w-full bg-gradient-to-b from-white/0 to-white/100"
          priority
        ></Image>
        <div className="absolute bottom-0 h-[20rem] w-full bg-gradient-to-b from-white/0 to-white/100"></div>
      </div>
      <div className="mx-6 flex flex-col gap-12 text-left sm:mx-[7.5rem]">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-navyBlue/70">{item?.category}</p>
          <h1 className="text-[2.625rem] font-bold leading-none text-navyBlue">
            {item?.title}
          </h1>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-xl font-bold text-navyBlue/80">about us</p>
          <p
            className="font-base leading-8 text-navyBlue"
            dangerouslySetInnerHTML={{ __html: item?.content || "" }}
          ></p>
        </div>
        <Image
          src={item?.contentImages[0] || ""}
          alt=""
          width={1440}
          height={780}
          className="h-auto w-full"
          priority
        ></Image>
      </div>
      <div>
        <Image
          src={item?.contentImages[1] || ""}
          alt=""
          width={1440}
          height={780}
          className="h-auto w-full"
          priority
        ></Image>
      </div>
    </section>
  );
}
