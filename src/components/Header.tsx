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
  NewspaperIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import {
  Dispatch,
  Fragment,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

const products = [
  {
    name: "VERBAL BRANDING",
    description: "제품이나 서비스를 위한 강력한 브랜드 메시지 전달",
    href: "/growth/verbal-branding",
    icon: FaceSmileIcon,
  },
  {
    name: "APP/WEB SERVICE",
    description: "끊김없는 경험을 위한 사용자 친화적인 앱/웹 서비스",
    href: "/growth/app-web-service",
    icon: CursorArrowRippleIcon,
  },
  {
    name: "BX/PUBLISHING",
    description: "영향력 있는 콘텐츠를 위한 매력적인 BX/Publishing",
    href: "/growth/bx-publishing",
    icon: InboxIcon,
  },
  // {
  //   name: "PROP-TECH",
  //   description: "부동산을 위한 혁신적인 프롭테크 솔루션",
  //   href: "/growth/prop-tech",
  //   icon: HomeModernIcon,
  // },
  {
    name: "DESIGN-PLANNING",
    description: "전략적 관점의 요구사항 기획 및 디자인",
    href: "/growth/design-planning",
    icon: NewspaperIcon,
  },
];

const callsToAction = [
  {
    name: "Nangman Views",
    href: "https://www.youtube.com/watch?v=IgpogVJLmuM&list=PL2rkvs3P2EzuoVtrO39kEmjbhPB3pUmGB",
    icon: PlayCircleIcon,
  },
  { name: "Project Request", href: "/project-request", icon: EnvelopeOpenIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function useHandleScroll(
  header: RefObject<HTMLDivElement>,
  setHideHeader: Dispatch<SetStateAction<boolean>>,
) {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const headerRef = header.current;
    const handleScroll = () => {
      if (headerRef) {
        if (
          window.scrollY > lastScrollY &&
          window.scrollY > window.innerHeight / 4
        ) {
          setHideHeader(true);
        } else {
          setHideHeader(false);
        }

        lastScrollY = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [header, setHideHeader]);
}

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 800);
    }

    window.addEventListener("resize", handleResize);
    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거하여 메모리 누수를 방지
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <MobileHeader /> : <DesktopHeader />}</>;
}

function MobileHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeModal = () => setMobileMenuOpen(false);

  return (
    <nav
      className="fixed right-0 top-0 z-[2] p-6 px-8 sm:hidden"
      aria-label="Global"
    >
      <div className="flex">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Agency nangman</span>
              <Image
                priority
                src="/nangman_logo@4x.png"
                alt="Agency nangman"
                width={40}
                height={40}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  onClick={closeModal}
                  href="/company"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  ABOUT US
                </Link>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        성장기록물
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none",
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 flex flex-col gap-4 space-y-2 py-2 pl-3">
                        {/* {[...products, ...callsToAction].map((item) => ( */}
                        {[...products].map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="text-black"
                            onClick={closeModal}
                          >
                            <Disclosure.Button>{item.name}</Disclosure.Button>
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Link
                  onClick={closeModal}
                  href="/project-request"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </nav>
  );
}

function DesktopHeader() {
  const [hideHeader, setHideHeader] = useState(false);
  const headerContainer = useRef<HTMLDivElement>(null);

  const segment = useSelectedLayoutSegment() || "";
  const urls: string[] = ["", "company", "project-request", "growth"];

  const isActive = () => urls.includes(segment);

  useHandleScroll(headerContainer, setHideHeader); // 커스텀 훅 사용
  return (
    <div
      ref={headerContainer}
      className={`pointer-events-none fixed left-0 z-[11] hidden w-full  sm:block ${hideHeader ? "-top-40 duration-700 ease-in" : "top-0  duration-700 ease-in"}`}
    >
      <header className="flex w-full items-center justify-center py-12 pb-0 pt-10 lg:pt-12">
        <Popover.Group className="pointer-events-auto flex gap-8 rounded-[40px] bg-black px-4">
          <Link
            href="/"
            className={`relative px-6 py-4 text-xs font-semibold uppercase lg:text-sm ${isActive() ? "text-white " : "text-gray-900"}
        after:absolute after:right-0 after:top-1/3 after:h-1/3 after:w-[1px] after:bg-white/50`}
          >
            낭만.
          </Link>

          <Link
            href="/company"
            className={`py-4 text-xs font-semibold uppercase lg:text-sm ${isActive() ? "text-white" : "text-gray-900"}`}
          >
            about us
          </Link>

          <Popover className="relative">
            {({ open, close }) => (
              <>
                <Popover.Button
                  className={`flex items-center gap-x-1 py-4 text-xs font-semibold uppercase lg:text-sm ${isActive() ? "text-white" : "text-gray-900"}`}
                >
                  성장기록물
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
                  <Popover.Panel className="absolute -left-60 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {products.map((item) => (
                        <div
                          key={item.name}
                          onClick={close}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <Link
                              href={item.href}
                              className="block font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item, index) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                          target={index === 0 ? "_blank" : ""}
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
              </>
            )}
          </Popover>

          <Link
            href="/project-request"
            className={`py-4 pr-5 text-xs font-semibold uppercase lg:text-sm ${isActive() ? "text-white" : "text-gray-900"}`}
          >
            contact
          </Link>
        </Popover.Group>
      </header>
    </div>
  );
}
