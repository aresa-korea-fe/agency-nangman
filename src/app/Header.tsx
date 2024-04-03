"use client";

import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CursorArrowRippleIcon,
  FaceSmileIcon,
  HomeModernIcon,
  InboxIcon,
  SparklesIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, EnvelopeOpenIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { useSelectedLayoutSegment } from 'next/navigation'

const products = [
  { name: 'VERBAL BRANDING', description: 'Delivering powerful brand messages for products or services', href: '/growth/verbal-branding', icon: FaceSmileIcon },
  { name: 'APP/WEB SERVICE', description: 'User-friendly app/web service for seamless experiences', href: '/growth/app-web-service', icon: CursorArrowRippleIcon },
  { name: 'BX/PUBLISHING', description: 'Engaging BX/Publishing for impactful content', href: '/growth/bx-publishing', icon: InboxIcon },
  { name: 'PROP-TECH', description: 'Innovative prop-tech solutions for real estate', href: '/growth/prop-tech', icon: HomeModernIcon },
]

const callsToAction = [
  { name: 'Nangman Views', href: '#', icon: PlayCircleIcon },
  { name: 'Project Request', href: '/project-request', icon: EnvelopeOpenIcon },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function useHandleScroll() {
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const header = document.querySelector('header');

      if (window.scrollY > lastScrollY && window.scrollY > (window.innerHeight / 4)) {
        header?.classList.add('-top-40');
      } else {
        header?.classList.remove('-top-40');
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const segment = useSelectedLayoutSegment() || '';
  const urls = ['', 'company'];
  const hiddenUrls = ['growth'];

  const isActive = () => urls.includes(segment);
  const isHide = () => hiddenUrls.includes(segment);

  useHandleScroll(); // 커스텀 훅 사용

  return (
    <header className={`fixed top-0 z-[2] bg-transparent w-screen transition-all ease-out delay-300 
      ${isActive() ? '' : 'bg-[#d9dedf]'} 
      ${isHide() ? 'hidden' : 'block'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">낭만</span>
            <SparklesIcon className="h-8 w-auto text-indigo-600" aria-hidden="true" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className={`flex items-center gap-x-1 text-sm font-semibold leading-6 ${isActive() ? 'text-white' : 'text-gray-900'}`}>
              성장기록물
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
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
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
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
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="/project-request" className={`text-sm font-semibold leading-6 ${isActive() ? 'text-white' : 'text-gray-900'}`}>
            Project Request
          </a>
          <a href="/company" className={`text-sm font-semibold leading-6 ${isActive() ? 'text-white' : 'text-gray-900'}`}>
            Company
          </a>
          <a href="/contact-us" className={`text-sm font-semibold leading-6 ${isActive() ? 'text-white' : 'text-gray-900'}`}>
            Contact Us
          </a>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
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
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
