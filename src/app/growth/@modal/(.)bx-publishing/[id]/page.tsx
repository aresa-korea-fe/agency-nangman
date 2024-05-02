import BxPublishingDetail from "@/components/bxPublishingDetail";
import RouterModal from "@/components/RouterModal";

interface PhotoModalPageProps {
  params: {
    id: string;
  };
}

export default function BxPublishingDetailPage({
  params,
}: PhotoModalPageProps) {
  return (
    <RouterModal>
      <div className="max-w-screen-xl">
        <BxPublishingDetail id={params.id}></BxPublishingDetail>
      </div>
    </RouterModal>
  );
}
