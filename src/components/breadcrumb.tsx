"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Fragment } from "react";

export default function Breadcrumb() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div className="leading-none text-black">
      {pathNames.length < 3 && (
        <ul className="mx-auto flex max-w-[90vw] xl:max-w-screen-xl">
          {pathNames.map((link, index) => (
            <Fragment key={index}>
              <li
                className={`${index === pathNames.length - 1 ? "text-black" : "text-black/50"}`}
              >
                <Link href={`/${pathNames.slice(0, index + 1).join("/")}`}>
                  {link}
                </Link>
              </li>
              {index !== pathNames.length - 1 && (
                <li className="mx-2 text-black/30">/</li>
              )}
            </Fragment>
          ))}
        </ul>
      )}
    </div>
  );
}
