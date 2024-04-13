"use client";

import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  EnvelopeOpenIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  CursorArrowRippleIcon,
  FaceSmileIcon,
  HomeModernIcon,
  InboxIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

const products = [
  {
    name: "VERBAL BRANDING",
    description: "제품이나 서비스를 위한 강력한 브랜드 메시지 전달",
    // description: "Delivering powerful brand messages for products or services",
    href: "/growth/verbal-branding",
    icon: FaceSmileIcon,
  },
  {
    name: "APP/WEB SERVICE",
    // description: "User-friendly app/web service for seamless experiences",
    description: '끊김없는 경험을 위한 사용자 친화적인 앱/웹 서비스',
    href: "/growth/app-web-service",
    icon: CursorArrowRippleIcon,
  },
  {
    name: "BX/PUBLISHING",
    // description: "Engaging BX/Publishing for impactful content",
    description: "영향력 있는 콘텐츠를 위한 매력적인 BX/Publishing",
    href: "/growth/bx-publishing",
    icon: InboxIcon,
  },
  {
    name: "PROP-TECH",
    // description: "Innovative prop-tech solutions for real estate",
    description: "부동산을 위한 혁신적인 프롭테크 솔루션",
    href: "/growth/prop-tech",
    icon: HomeModernIcon,
  },
];

const callsToAction = [
  { name: "Nangman Views", href: "#", icon: PlayCircleIcon },
  { name: "Project Request", href: "/project-request", icon: EnvelopeOpenIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function useHandleScroll() {
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const header = document.querySelector("header");

      if (
        window.scrollY > lastScrollY &&
        window.scrollY > window.innerHeight / 4
      ) {
        header?.classList.add("-top-40");
      } else {
        header?.classList.remove("-top-40");
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const segment = useSelectedLayoutSegment() || "";
  const urls: string[] = ["", "company", "project-request"];
  const hiddenUrls: string[] = [];
  // const hiddenUrls = ["growth"];

  const isActive = () => urls.includes(segment);
  const isHide = () => hiddenUrls.includes(segment);

  useHandleScroll(); // 커스텀 훅 사용

  return (
    <>
      <div className="fixed top-0 left-0 z-[11] w-full pointer-events-none">
        <header className="flex items-center justify-center pt-10 lg:pt-12 pb-0 py-12 w-full">
          <Popover.Group className="flex rounded-[40px] px-4 pointer-events-auto bg-black">
            <Link
              href="/"
              className={`relative text-xs lg:text-sm px-5 py-4 uppercase font-semibold ${isActive() ? "text-white " : "text-gray-900"}
              after:absolute after:w-[1px] after:h-1/3 after:top-1/3 after:bg-white/50 after:right-0`}
            >
              낭만.
            </Link>

            <Link
              href="/company"
              className={`text-xs lg:text-sm px-5 py-4 uppercase font-semibold ${isActive() ? "text-white" : "text-gray-900"}`}
            >
              about us
            </Link>

            <Popover className="relative">
              <Popover.Button
                className={`flex items-center gap-x-1 text-xs lg:text-sm px-5 py-4 uppercase font-semibold ${isActive() ? "text-white" : "text-gray-900"}`}
              >
                성장기록물
                {/* <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                /> */}
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <Link
              href="/project-request"
              className={`text-xs lg:text-sm px-5 py-4 uppercase font-semibold ${isActive() ? "text-white" : "text-gray-900"}`}
            >
              contact
            </Link>
          </Popover.Group>
        </header>
      </div>
    </>
  );
}
