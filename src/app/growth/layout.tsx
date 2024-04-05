"use client";

import { FC, ReactNode } from "react";

import GrowthMenu from "@/components/growthMenu";

interface GrowthLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

const GrowthLayout: FC<GrowthLayoutProps> = ({ children, modal }) => {
  return (
    <div className="flex overflow-hidden bg-white">
      <GrowthMenu></GrowthMenu>
      <div className="flex-1">{children}</div>
      {modal}
    </div>
  );
};

export default GrowthLayout;
