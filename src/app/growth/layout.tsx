'use client';
import Link from 'next/link';
import styles from './styles.module.css'

import { useSelectedLayoutSegment } from "next/navigation";

export default function GrowthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const segment = useSelectedLayoutSegment();
  const items = [
    { name: 'verbal branding', path: 'verbal-branding' },
    { name: 'APP/WEB SERVICE', path: 'app-web-service' },
    { name: 'BX/PUBLISHING', path: 'bx-publishing' },
    { name: 'PROP-TECH', path: 'prop-tech' },
  ];

  const isActive = (path: string) => segment === path;

  return (
    <div className="flex bg-white">
      <div className="min-w-72 pt-24 pl-20 border-r z-10">
        <Link href="/" className='mb-6'><h3 className="font-tenada">낭만</h3></Link>
        <p className="font-bold pb-10 text-[#3D6775]">성장기록물</p>
        <ul className="text-lg">
          {items.map((item) => (
            <li
              key={item.name}
              className='uppercase mb-5'
            >
              <Link href={`/growth/${item.path}`}
                className={`${isActive(item.path) ? styles.active : 'text-black/30'}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div >
  );
}
