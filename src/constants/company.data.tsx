export type Introduce = {
  title: string;
  description: {
    hidden: string;
    visible: string;
  };
};

export const stackInfo = [
  {
    name: "javascript",
    icon: "/icons/tech-stacks/js.webp",
    category: ["frontend", "backend"],
    scope: 75,
    subText:
      "낭만에게 자바스크립트는 단순한 프로그래밍 언어가 아닙니다. \n 우리의 창의성을 펼칠 수 있는 캔버스이자, 사용자와 서비스를 이어주는 매개체입니다.",
  },
  {
    name: "typescript",
    icon: "/icons/tech-stacks/typescript.webp",
    category: ["frontend", "backend"],
    scope: 100,
    subText:
      "타입스크립트는 낭만 서비스의 견고함을 제공합니다. 정적 타입을 통해 더 명확하고 안정적인 코드를 작성할 수 있게 해줍니다.",
  },
  {
    name: "java",
    icon: "/icons/tech-stacks/java.webp",
    category: ["backend"],
    scope: 50,
    subText:
      "자바는 강력한 객체 지향 프로그래밍 언어로, 낭만의 백엔드 시스템을 구축하는 데 있어 효율적인 성능과 보안을 제공합니다.",
  },
  {
    name: "ReactJS",
    icon: "/icons/tech-stacks/reactjs.webp",
    category: ["frontend"],
    scope: 40,
    subText:
      "ReactJS는 사용자 인터페이스를 더욱 살아있게 만듭니다. 우리의 프론트엔드를 빠르고 효율적으로 구축할 수 있게 해줍니다.",
  },
  {
    name: "nextJS",
    icon: "/icons/tech-stacks/nextjs.webp",
    category: ["frontend", "backend"],
    scope: 50,
    subText:
      "NextJS는 React 기반의 프레임워크로서, 서버 사이드 렌더링과 정적 웹 사이트 생성을 지원합니다. 낭만은 이를 활용하여 빠르고 최적화된 웹 경험을 제공합니다.",
  },
  {
    name: "React native",
    icon: "/icons/tech-stacks/reactjs.webp",
    category: ["frontend"],
    scope: 60,
    subText:
      "React Native는 서비스를 모바일로 확장하는 데 있어 핵심입니다. 하나의 코드베이스로 다양한 플랫폼에 앱을 제공할 수 있습니다.",
  },
  {
    name: "flutter",
    icon: "/icons/tech-stacks/flutter.webp",
    category: ["frontend"],
    scope: 68,
    subText:
      "Flutter는 낭만 서비스의 모바일 앱 개발을 혁신합니다. 빠른 개발 속도와 아름다운 UI로 사용자 경험을 한 차원 높여줍니다.",
  },
  {
    name: "angular",
    icon: "/icons/tech-stacks/angular.webp",
    category: ["frontend"],
    scope: 50,
    subText:
      "강력한 프론트엔드 프레임워크로, 낭만 서비스는 이를 사용하여 대규모의 고성능 애플리케이션을 구축합니다.",
  },
  {
    name: "vueJS",
    icon: "/icons/tech-stacks/vuejs.webp",
    category: ["frontend"],
    scope: 55,
    subText:
      "점진적으로 채택할 수 있는 아키텍처를 가진 프론트엔드 프레임워크입니다. 낭만 서비스에서는 이를 활용하여 유연하고 확장 가능한 웹 인터페이스를 구축합니다.",
  },
  {
    name: "nodeJS",
    icon: "/icons/tech-stacks/nodejs.webp",
    category: ["backend"],
    scope: 94,
    subText:
      "서버 측에서의 자바스크립트 실행을 가능하게 하여, 낭만 서비스의 백엔드를 효율적으로 구성할 수 있는 힘을 제공합니다.",
  },
  {
    name: "spring boot",
    icon: "/icons/tech-stacks/spring boot.webp",
    category: ["backend"],
    scope: 45,
    subText:
      "빠르고, 간편한 백엔드 개발을 가능하게 하여, 낭만 서비스의 안정성과 확장성을 기초로 합니다.",
  },
  {
    name: "AWS",
    icon: "/icons/tech-stacks/aws.webp",
    category: ["cloud"],
    scope: 84,
    subText:
      "강력한 클라우드 인프라를 제공하여, 낭만 서비스의 전 세계 사용자에게 안정적으로 접근할 수 있는 환경을 마련합니다.",
  },
  {
    name: "NHN cloud",
    icon: "/icons/tech-stacks/nhn-cloud.webp",
    category: ["cloud"],
    scope: 72,
    subText:
      "국내 최적화된 클라우드 서비스를 통해, 낭만 서비스의 데이터 처리와 저장이 더욱 빠르고 안정적입니다.",
  },
  {
    name: "cloud type",
    icon: "/icons/tech-stacks/cloudtype.webp",
    category: ["cloud"],
    scope: 80,
    subText:
      "다양한 클라우드 솔루션을 통합 관리하고 더 간편한 배포 방식과 소통 시스템은 낭만의 운영 효율성을 극대화합니다.",
  },
  {
    name: "photoshop",
    icon: "/icons/tech-stacks/photoshop.webp",
    category: ["design"],
    scope: 75,
    subText:
      "낭만적인 시각적 컨텐츠 제작에 필수적이며, 사용자 인터페이스의 아름다움을 창조하는 데 중요한 역할을 합니다.",
  },
  {
    name: "illustrator",
    icon: "/icons/tech-stacks/illustrator.webp",
    category: ["design"],
    scope: 62,
    subText:
      "벡터 기반 디자인을 통해, 낭만 서비스의 브랜딩과 시각적 요소를 세련되게 표현합니다.",
  },
  {
    name: "XD",
    icon: "/icons/tech-stacks/xd.webp",
    category: ["design", "prototype", "UI&UX"],
    scope: 52,
    subText:
      "사용자 경험(UX) 디자인과 프로토타이핑을 통해, 낭만 서비스의 사용자 인터페이스를 직관적이고 매력적으로 만듭니다.",
  },
  {
    name: "figma",
    icon: "/icons/tech-stacks/figma.webp",
    category: ["design", "prototype", "UI&UX"],
    scope: 89,
    subText:
      "협업을 중심으로 한 디자인 도구로서, 낭만 서비스의 디자인 작업을 더욱 신속하고 효율적으로 만들어, 창의적인 아이디어를 현실로 전환합니다.",
  },
];

export const handlelabelColors = (str: string) => {
  switch (str) {
    case "frontend":
      return "bg-sky-300";
    case "backend":
      return "bg-orange-300";
    case "cloud":
      return "bg-indigo-300";
    case "prototype":
      return "bg-fuchsia-300";
    case "design":
      return "bg-yellow-300";
    default:
      return "bg-red-300";
  }
};

export const skillSections = [
  {
    title: "Planning & Design",
    number: "01",
    description:
      "우리는 서비스를 새로운 관점으로 분석 후 웹에 적합한 형태로 조립하여 누구나 만족하는 결과물을 창출합니다.",
    links: [
      { href: "/growth/bx-publishing", text: "BX Design", number: "01" },
      {
        href: "/growth/design-planning",
        text: "Design-planning",
        number: "02",
      },
    ],
  },
  {
    title: "Publishing & Development",
    number: "02",
    description:
      "새롭게 탄생한 디자인을 코드로 구현하고 서비스의 흐름에 따라 적절히 동작하도록 생명력을 부여합니다.",
    links: [
      { href: "/growth/bx-publishing", text: "BX Publishing", number: "01" },
      {
        href: "/growth/app-web-service",
        text: "APP/WEB Service",
        number: "02",
      },
    ],
  },
  {
    title: "Support Business Consulting",
    number: "03",
    description:
      "정부의 지원사업 컨설팅은 스타트업의 활력과 성장력을 부여합니다. 스튜디오 낭만의 노하우로 함께 항해합니다.",
    links: [
      {
        href: "/project-request",
        text: "스튜디오 낭만 Contact us",
        number: "01",
      },
    ],
  },
];

export const introduce: Introduce[] = [
  {
    title: "about us",
    description: {
      hidden:
        "스튜디오 낭만은 디지털 아티스트들이 모여 브랜드와 사람을 잇는 여정을 시작했습니다.",
      visible:
        "빠르게 변화하는 웹 트렌드 속에서 우리는 중심을 잃지 않고 항해합니다.",
    },
  },
  {
    title: "our philosophy",
    description: {
      hidden:
        "우리는 서비스의 가치를 알아내고 본질을 찾아내기 위해 노력합니다.",
      visible:
        "전략적인 시각과 창의적인 아이디어에 세련된 디자인을 더하여 최적의 솔루션을 제공합니다.",
    },
  },
  {
    title: "Focused",
    description: {
      hidden:
        "우리는 혼자 모든걸 해내는 슈퍼플레이어보다 다 함께 항해하는 선원으로 이뤄져 있습니다.",
      visible:
        "새로운 브랜드 가치와 웹 서비스로 고객만족의 목표를 완성하는 것. 그것이 우리의 낭만입니다.",
    },
  },
];
