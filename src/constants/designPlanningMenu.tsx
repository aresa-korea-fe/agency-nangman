import { IDesignPlanning } from "@/interface/dtos/design-planning.interface";

export const processes: IDesignPlanning.ISegment[] = [
  {
    name: "process01",
    title: "문서 전달",
    description:
      "ppt, word, 한글 등 어떤 포멧도 상관없어요!  \n아이템을 서비스로 전환할 때 필요한 기능과 실현하고 싶은 디자인 요소 등을 자유롭게 작성해서 알려주세요.",
  },
  {
    name: "process02",
    title: "기획",
    description:
      "사용 시나리오를 와이어프레임으로 제작해요!  \n기능 구현에 대해 기술적 측면의 구현 가능성을 검토하고 디자인 전 UX&UI의 전반적인 흐름을 전달할 수 있어요.",
  },
  {
    name: "process03",
    title: "디자인",
    description:
      "톤앤매너와 디자인 가이드에 맞춰 디자인을 완성해요! \n와이어프레임에 따라 알맞은 UI/UX 요소를 그리고 개발 전 단계의 디자인 프로토타입을 만들어요.",
  },
];
