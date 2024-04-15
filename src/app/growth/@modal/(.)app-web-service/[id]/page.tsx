import AppWebServiceDetail from "@/components/appWebServiceDetail";
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
      <AppWebServiceDetail id={params.id}></AppWebServiceDetail>
    </Modal>
  );
}
