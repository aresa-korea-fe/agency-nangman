"use client";

import Modal from "@/app/components/modal";
import Image from "next/image";
import BxPublishingDetailPage from "./detail/page";
import { useState } from "react";

export default function BxPublishing() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
      title: "agency NANGMAN",
      category: "business identity design",
      imageUrl: "/growth/bx-publishing/bx_detail_nangman_01.png",
    },
    {
      title: "agency NANGMAN",
      category: "business identity design",
      imageUrl: "/growth/bx-publishing/bx_detail_nangman_01.png",
    },
    {
      title: "agency NANGMAN",
      category: "business identity design",
      imageUrl: "/growth/bx-publishing/bx_detail_nangman_01.png",
    },
  ];

  const isClick = (index: number) => {
    setIndex(index);
    setIsOpen(!isOpen);
  };

  return (
    <section className="h-screen overflow-y-auto bg-white leading-none text-black">
      <div className="flex flex-col gap-40 pl-12 pr-24 pt-24">
        {items.map((item, index) => (
          <div key={index} className="flex">
            <div className="relative" onClick={() => isClick(index)}>
              <Image
                key={item.imageUrl}
                width={1020}
                height={400}
                src={item.imageUrl}
                className="hover:[animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite]"
                alt=""
              />
              <div className="absolute -mt-6 ml-6 flex flex-col gap-4">
                <p className="text-4xl font-bold">{item.title}</p>
                <label className="text-sm text-black/50">{item.category}</label>
              </div>
            </div>
          </div>
        ))}
        <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
          <BxPublishingDetailPage></BxPublishingDetailPage>
        </Modal>
      </div>
    </section>
  );
}
