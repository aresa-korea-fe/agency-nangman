type props = {
  index: number;
};
export default function BxPublishingDetailPage({ index }: props) {
  return (
    <section className="text-black">
      <div>{index}</div>
      <div>모달로 띄워질 페이지입니다</div>
    </section>
  );
}
