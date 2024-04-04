import BxPublishingDetail from "@/components/bxPublishingDetail";
import Modal from "@/components/modal";

interface PhotoModalPageProps {
  params: {
    id: string;
  };
}

export default function BxPublishingDetailPage({
  params,
}: PhotoModalPageProps) {
  return (
    <Modal>
      <BxPublishingDetail id={params.id}></BxPublishingDetail>
    </Modal>
  );
}
