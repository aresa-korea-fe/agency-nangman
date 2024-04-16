import Image from "next/image";
import Link from "next/link";

export interface BxItem {
  id: string;
  category: string;
  title: string;
  content: string;
  headImage: string;
  contentImages: string[];
  activeLighting?: boolean;
}

export default function BxPublishing() {
  const contents: BxItem[] = require("/public/data/bx-publishing.interface.json");

  return (
    <main className="min-h-screen overflow-y-auto bg-gray-50 py-40 leading-none text-black">
      <div className=" mx-auto flex h-full max-w-[90vw] flex-col gap-40 xl:max-w-screen-xl">
        {contents.map((item, index) => (
          <Link
            key={index}
            href={`bx-publishing/${item.id}`}
            scroll={false}
            className={`flex-1 ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
          >
            <div className="relative">
              {item.activeLighting && (
                <div className="absolute bottom-0 h-[10rem] bg-gradient-to-t from-white/60 to-white/0"></div>
              )}
              <Image
                priority
                key={item.headImage}
                width={1020}
                height={400}
                src={item.headImage}
                className="hover:[animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite] h-auto w-auto"
                alt=""
              />
              <div className="absolute mt-6 flex flex-col gap-4 lg:-mt-6 lg:ml-6 ">
                <p className="text-2xl font-bold md:text-4xl">{item.title}</p>
                <label className="text-xs text-black/50 md:text-sm">
                  {item.category}
                </label>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
