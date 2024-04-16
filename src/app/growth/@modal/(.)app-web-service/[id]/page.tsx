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
      <div className="h-full max-w-screen-xl">
        <AppWebServiceDetail id={params.id}></AppWebServiceDetail>
      </div>
    </Modal>
  );
}
