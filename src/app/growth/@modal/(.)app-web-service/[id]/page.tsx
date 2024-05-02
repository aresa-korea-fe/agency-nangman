import AppWebServiceDetail from "@/components/appWebServiceDetail";
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
      <div className="h-full max-w-screen-xl">
        <AppWebServiceDetail id={params.id}></AppWebServiceDetail>
      </div>
    </RouterModal>
  );
}
