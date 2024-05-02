import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "VERBAL-BRANDING | 제품이나 서비스를 위한 강력한 브랜드 메시지 전달 | PORTFOLIO | Studio Nangman",
  description:
    "각종 브랜딩 작업을 공유합니다. 낭만 에이전시의 포트폴리오입니다.",
};

const items = [
  { src: "/growth/verbal-branding/003_CLUBGDA.webp", alt: "003_CLUBGDA" },
  {
    src: "/growth/verbal-branding/018_대한건축연합회.webp",
    alt: "018_대한건축연합회",
  },
  {
    src: "/growth/verbal-branding/019_디자이너홍선.webp",
    alt: "019_디자이너홍선",
  },
  { src: "/growth/verbal-branding/020_미로스시.webp", alt: "020_미로스시" },
  { src: "/growth/verbal-branding/021_보름살롱.webp", alt: "021_보름살롱" },
  {
    src: "/growth/verbal-branding/022_보산어학당.webp",
    alt: "022_보산어학당",
  },
  {
    src: "/growth/verbal-branding/023_불타는참치.webp",
    alt: "023_불타는참치",
  },
  { src: "/growth/verbal-branding/024_빈공간.webp", alt: "024_빈공간" },
  {
    src: "/growth/verbal-branding/025_사람행복연구소.webp",
    alt: "025_사람행복연구소",
  },
  {
    src: "/growth/verbal-branding/026_유진하우스.webp",
    alt: "026_유진하우스",
  },
  {
    src: "/growth/verbal-branding/027_청우연구소(한글).webp",
    alt: "027_청우연구소(한글)",
  },
  {
    src: "/growth/verbal-branding/028_한국문화산업진흥원.webp",
    alt: "028_한국문화산업진흥원",
  },
  { src: "/growth/verbal-branding/029_한오름빛.webp", alt: "029_한오름빛" },
  { src: "/growth/verbal-branding/005_da.webp", alt: "005_da" },
  { src: "/growth/verbal-branding/006_DOLPHIN.webp", alt: "006_DOLPHIN" },
  { src: "/growth/verbal-branding/011_LABES.webp", alt: "011_LABES" },
  { src: "/growth/verbal-branding/001_BLUEEYE.webp", alt: "001_BLUEEYE" },
  { src: "/growth/verbal-branding/004_cubebox.webp", alt: "004_cubebox" },
  {
    src: "/growth/verbal-branding/007_DURA-STOVE.webp",
    alt: "007_DURA-STOVE",
  },
  { src: "/growth/verbal-branding/008_F6HOUSE.webp", alt: "008_F6HOUSE" },
  { src: "/growth/verbal-branding/009_GHOSKIDS.webp", alt: "009_GHOSKIDS" },
  { src: "/growth/verbal-branding/010_HEE'STORY.webp", alt: "010_HEE'STORY" },
  { src: "/growth/verbal-branding/012_NaxioLab.webp", alt: "012_NaxioLab" },
  // { src: "/growth/verbal-branding/013_OM-PLACE.webp", alt: "013_OM" },
  { src: "/growth/verbal-branding/014_perpet.webp", alt: "014_perpet" },
  { src: "/growth/verbal-branding/015_REDMOVIE.webp", alt: "015_REDMOVIE" },
  {
    src: "/growth/verbal-branding/016_고아권익연대.webp",
    alt: "016_고아권익연대",
  },
  { src: "/growth/verbal-branding/017_길로_b_bg.webp", alt: "017_길로_b_bg" },
  {
    src: "/growth/verbal-branding/002_CAFEBANBAN.webp",
    alt: "002_CAFEBANBAN",
  },
];

export default function VerbalBranding() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden whitespace-pre-wrap bg-gray-50 leading-none text-black">
      <div className="mx-auto flex h-full max-w-[90vw] flex-col gap-40 xl:max-w-screen-xl">
        <div className="flex flex-wrap justify-center gap-3">
          {items.map((item) => (
            <div
              key={item.src}
              className="relative h-60 w-[calc(50vw_-_26px)] sm:w-72"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={500}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
