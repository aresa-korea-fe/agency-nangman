import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "VERBAL-BRANDING | PORTFOLIO | Nangman Agency",
  description: "각종 브랜딩 작업을 공유합니다. 낭만 에이전시의 포트폴리오입니다.",
};

export default function VerbalBranding() {
  const items = [
    { src: "/growth/vb-aresa-001.jpg", alt: "아리사코리아.jgp" },
    { src: "/growth/vb-odocs-002.jpg", alt: "오독스.jpg" },
    { src: "/growth/Rectangle 191.png", alt: "Rectangle 191.png" },
    { src: "/growth/Rectangle 192.png", alt: "Rectangle 192.png" },
    { src: "/growth/Rectangle 193.png", alt: "Rectangle 193.png" },
    { src: "/growth/Rectangle 194.png", alt: "Rectangle 194.png" },
    { src: "/growth/Rectangle 195.png", alt: "Rectangle 195.png" },
    { src: "/growth/Rectangle 196.png", alt: "Rectangle 196.png" },
    { src: "/growth/Rectangle 197.png", alt: "Rectangle 197.png" },
    { src: "/growth/Rectangle 198.png", alt: "Rectangle 198.png" },
    { src: "/growth/Rectangle 199.png", alt: "Rectangle 199.png" },
    { src: "/growth/Rectangle 200.png", alt: "Rectangle 200.png" },
    { src: "/growth/Rectangle 201.png", alt: "Rectangle 201.png" },
    { src: "/growth/Rectangle 202.png", alt: "Rectangle 202.png" },
    { src: "/growth/Rectangle 203.png", alt: "Rectangle 203.png" },
    { src: "/growth/Rectangle 204.png", alt: "Rectangle 204.png" },
    { src: "/growth/Rectangle 205.png", alt: "Rectangle 205.png" },
  ];

  return (
    <section className="h-screen py-24">
      <div className="container pl-10">
        <div className="flex flex-wrap gap-3">
          {items.map((item) => (
            <Image
              key={item.src}
              width={300}
              height={300}
              src={item.src}
              className="max-w-72 w-full"
              // className="max-w-72 w-full contrast-75"
              alt={item.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
