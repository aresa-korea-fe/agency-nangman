"use client";
import Link from "next/link";
import styles from "./styles.module.css";

import { useSelectedLayoutSegment } from "next/navigation";

export default function GrowthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const segment = useSelectedLayoutSegment();
  const items = [
    { name: "verbal branding", path: "verbal-branding" },
    { name: "APP/WEB SERVICE", path: "app-web-service" },
    { name: "BX/PUBLISHING", path: "bx-publishing" },
    { name: "PROP-TECH", path: "prop-tech" },
  ];

  const isActive = (path: string) => segment === path;

  return (
    <div className="flex overflow-hidden bg-white">
      <div className="z-10 min-w-72 border-r pl-20 pt-24">
        <Link href="/" className="mb-6">
          <h3 className="font-tenada text-black">낭만</h3>
        </Link>
        <p className="pb-10 font-bold text-[#3D6775]">성장기록물</p>
        <ul className="text-lg">
          {items.map((item) => (
            <li key={item.name} className="mb-5 uppercase">
              <Link
                href={`/growth/${item.path}`}
                className={`${isActive(item.path) ? styles.active : "text-black/30"}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/"
          className="absolute bottom-24 rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
          passHref
        >
          Go Nangman
        </Link>
      </div>
      <div className="flex-1">{children}</div>
      <div id="modal-root"></div>
    </div>
  );
}
