import { IProject } from "@/app/growth/app-web-service/page";
import Image from "next/image";

export default function AppWebServiceDetail({ id }: { id: string }) {
  const items: IProject[] = require("/public/data/app-web-service.interface.json");
  const item = items.find((content) => content.id === id);
  return (
    <article className="w-full whitespace-pre-wrap text-navyBlue">
      <div className="relative flex h-screen w-full justify-center">
        <div className="max-w-[calc(100% - 10rem)] absolute bottom-0 left-20 right-20 flex flex-col gap-5 bg-white px-[6.25rem] py-[3.75rem]">
          <h1 className="text-[2.75rem] font-bold">{item?.title}</h1>
          <div className="flex gap-[3.75rem]">
            <div className="flex gap-5">
              <p className="text-navyBlue/50">Category.</p>
              <p>{item?.category}</p>
            </div>
            <div className="flex gap-5">
              <p className="text-navyBlue/50">Client.</p>
              <p>{item?.client}</p>
            </div>
            <div className="flex gap-5">
              <p className="text-navyBlue/50">Release Date.</p>
              <p>{item?.releaseDate}</p>
            </div>
          </div>
          <div className="w-full  border-b border-gray-200"></div>
          <span>{item?.intro}</span>
        </div>
        <Image
          src={item?.mainImage || ""}
          alt="main"
          priority
          width={1440}
          height={780}
          className="w-full bg-gradient-to-b from-white/0 to-white/100"
        ></Image>
      </div>
    </article>
  );
}
