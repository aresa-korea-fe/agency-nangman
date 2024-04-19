import Breadcrumb from "@/components/breadcrumb";
import { FC, ReactNode, Suspense, lazy } from "react";
import Loading from "./loading";

interface GrowthLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

const GrowthLayout: FC<GrowthLayoutProps> = ({ children, modal }) => {
  return (
    <div className="overflow-hidden bg-white">
      <Suspense fallback={<Loading />}>
        <div className="relative flex-1">
          <Breadcrumb></Breadcrumb>
          {children}
        </div>
        {modal}
      </Suspense>
    </div>
  );
};

export default GrowthLayout;
