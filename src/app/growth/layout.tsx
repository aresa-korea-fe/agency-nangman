import Breadcrumb from "@/components/breadcrumb";
import { FC, ReactNode } from "react";

interface GrowthLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

const GrowthLayout: FC<GrowthLayoutProps> = ({ children, modal }) => {
  return (
    <div className="overflow-hidden bg-gray-50">
      <div className="relative flex flex-col gap-5 py-40">
        <Breadcrumb></Breadcrumb>
        {children}
      </div>
      {modal}
    </div>
  );
};

export default GrowthLayout;
