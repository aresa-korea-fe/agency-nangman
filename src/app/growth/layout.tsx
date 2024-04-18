import Breadcrumb from "@/components/breadcrumb";
import { FC, ReactNode } from "react";

interface GrowthLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

const GrowthLayout: FC<GrowthLayoutProps> = ({ children, modal }) => {
  console.log("GrowthLayout");

  return <div className="overflow-hidden bg-white">
    <div className="relative flex-1">
      <Breadcrumb></Breadcrumb>
      {children}
    </div>
    {modal}
  </div>
    ;
};

export default GrowthLayout;
