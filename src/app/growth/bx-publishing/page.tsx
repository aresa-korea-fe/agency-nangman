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
    <section className="h-screen overflow-y-auto bg-white leading-none text-black">
      <div className="flex flex-col gap-40 px-12 py-24">
        {contents.map((item, index) => (
          <Link
            key={index}
            href={`bx-publishing/${item.id}`}
            scroll={false}
            className={`flex-1 ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
          >
            <div className="relative">
              {item.activeLighting && (
                <div className="absolute bottom-0 h-[10rem] w-full bg-gradient-to-t from-white/60 to-white/0"></div>
              )}
              <Image
                key={item.headImage}
                width={1020}
                height={400}
                src={item.headImage}
                className="hover:[animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite]"
                alt=""
              />
              <div className="absolute -mt-6 ml-6 flex flex-col gap-4">
                <p className="text-4xl font-bold">{item.title}</p>
                <label className="text-sm text-black/50">{item.category}</label>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
