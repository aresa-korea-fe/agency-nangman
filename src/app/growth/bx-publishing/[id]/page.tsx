"use client";

import BxPublishingDetail from "@/components/bxPublishingDetail";
import { useEffect, useState } from "react";

interface PhotoModalPageProps {
  params: {
    id: string;
  };
}

export default function BxPublishingDetailPage({
  params,
}: PhotoModalPageProps) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    /** 가상돔과 리얼돔의 차이로 인한 오류를 방지합니다. */
    setMounted(true);
  }, []);

  return mounted ? (
    <BxPublishingDetail id={params.id}></BxPublishingDetail>
  ) : null;
}
