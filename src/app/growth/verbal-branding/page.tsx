import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "VERBAL-BRANDING | PORTFOLIO | Nangman Agency",
  description:
    "각종 브랜딩 작업을 공유합니다. 낭만 에이전시의 포트폴리오입니다.",
};

export default function VerbalBranding() {
  const items = [
    { src: "/growth/verbal-branding/001_BLUEEYE.png", alt: "001_BLUEEYE" },
    {
      src: "/growth/verbal-branding/002_CAFEBANBAN.png",
      alt: "002_CAFEBANBAN",
    },
    { src: "/growth/verbal-branding/003_CLUBGDA.png", alt: "003_CLUBGDA" },
    { src: "/growth/verbal-branding/004_cubebox.png", alt: "004_cubebox" },
    { src: "/growth/verbal-branding/005_da.png", alt: "005_da" },
    { src: "/growth/verbal-branding/006_DOLPHIN.png", alt: "006_DOLPHIN" },
    {
      src: "/growth/verbal-branding/007_DURA-STOVE.png",
      alt: "007_DURA-STOVE",
    },
    { src: "/growth/verbal-branding/008_F6HOUSE.png", alt: "008_F6HOUSE" },
    { src: "/growth/verbal-branding/009_GHOSKIDS.png", alt: "009_GHOSKIDS" },
    { src: "/growth/verbal-branding/010_HEE'STORY.png", alt: "010_HEE'STORY" },
    { src: "/growth/verbal-branding/011_LABES.png", alt: "011_LABES" },
    { src: "/growth/verbal-branding/012_NaxioLab.png", alt: "012_NaxioLab" },
    { src: "/growth/verbal-branding/013_OM-PLACE.png", alt: "013_OM" },
    { src: "/growth/verbal-branding/014_perpet.png", alt: "014_perpet" },
    { src: "/growth/verbal-branding/015_REDMOVIE.png", alt: "015_REDMOVIE" },
    {
      src: "/growth/verbal-branding/016_고아권익연대.png",
      alt: "016_고아권익연대",
    },
    { src: "/growth/verbal-branding/017_길로_b_bg.png", alt: "017_길로_b_bg" },
    {
      src: "/growth/verbal-branding/018_대한건축연합회.png",
      alt: "018_대한건축연합회",
    },
    {
      src: "/growth/verbal-branding/019_디자이너홍선.png",
      alt: "019_디자이너홍선",
    },
    { src: "/growth/verbal-branding/020_미로스시.png", alt: "020_미로스시" },
    { src: "/growth/verbal-branding/021_보름살롱.png", alt: "021_보름살롱" },
    {
      src: "/growth/verbal-branding/022_보산어학당.png",
      alt: "022_보산어학당",
    },
    {
      src: "/growth/verbal-branding/023_불타는참치.png",
      alt: "023_불타는참치",
    },
    { src: "/growth/verbal-branding/024_빈공간.png", alt: "024_빈공간" },
    {
      src: "/growth/verbal-branding/025_사람행복연구소.png",
      alt: "025_사람행복연구소",
    },
    {
      src: "/growth/verbal-branding/026_유진하우스.png",
      alt: "026_유진하우스",
    },
    {
      src: "/growth/verbal-branding/027_청우연구소(한글).png",
      alt: "027_청우연구소(한글)",
    },
    {
      src: "/growth/verbal-branding/028_한국문화산업진흥원.png",
      alt: "028_한국문화산업진흥원",
    },
    { src: "/growth/verbal-branding/029_한오름빛.png", alt: "029_한오름빛" },
  ];

  return (
    <section className="min-h-screen overflow-y-auto bg-gray-50 py-40 leading-none text-black">
      <div className="mx-auto h-full max-w-[90vw] gap-40 xl:max-w-screen-xl">
        <div className="flex flex-wrap justify-center gap-3">
          {items.map((item) => (
            <div
              key={item.src}
              className="relative h-60 w-[calc(50vw_-_26px)] sm:w-72"
            >
              <Image
                priority
                fill
                src={item.src}
                alt={item.alt}
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
