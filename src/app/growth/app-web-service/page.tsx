"use client";

import Image from "next/image";
import Link from "next/link";

export type ProjectBrief = {
  category: string;
  title: string;
  content: string;
};
export type SitemapImage = {
  src: string;
  alt: string;
};
export type ProjectSitemap = {
  menu: string;
  text: string;
  images: SitemapImage[];
  blur: boolean;
  background: string;
};

export type IProject = {
  id: string;
  title: string;
  category: string;
  client: string;
  releaseDate: string;
  intro: string;
  link: string;
  mainImage: string;
  contentImage: string;
  brief: ProjectBrief[];
  sitemap: ProjectSitemap[];
};

export default function AppWebService() {
  const items: IProject[] = require("/public/data/app-web-service.interface.json");
  return (
    <main className="min-h-screen overflow-y-auto whitespace-pre-wrap bg-gray-50 py-40 leading-none text-black">
      <div className="mx-auto flex h-full max-w-[90vw] flex-col gap-40 xl:max-w-screen-xl">
        {items.map((item, index) => (
          <Link
            key={index}
            href={`app-web-service/${item.id}`}
            scroll={false}
            className={`flex-1 ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
          >
            <div className="relative">
              <div className="absolute bottom-0 h-[10rem] w-full bg-gradient-to-t from-white/60 to-white/0"></div>
              <Image
                priority
                key={item.mainImage}
                width={1020}
                height={400}
                src={item.mainImage}
                className="hover:[animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite] h-auto w-auto"
                alt=""
              />
              <div className="absolute mt-6 flex flex-col gap-4 lg:-mt-6 lg:ml-6 ">
                <p className="text-2xl font-bold md:text-4xl">{item.title}</p>
                <label className="text-xs text-black/50 md:text-sm">
                  {item.category}
                </label>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

// export default function VerbalBranding() {
//   const projects = [
//     {
//       title: "낭만",
//       description: "프로젝트 2 설명",
//       image: "/growth/sv-nangman",
//     },
//     {
//       title: "SNOWBLING",
//       description: "프로젝트 2 설명",
//       image: "/growth/aw-snowbling_story.png",
//     },
//     {
//       title: "아리사코리아",
//       description: "프로젝트 1 설명",
//       image: "/growth/sv-aresa",
//     },
//     {
//       title: "Odocs",
//       description: "프로젝트 3 설명",
//       image: "/growth/sv-odocs",
//     },
//     // {
//     //   title: "mo-v",
//     //   description: "프로젝트 3 설명",
//     //   image: "/growth/aw-mo-v.png"
//     // },
//     // {
//     //   title: "ANDi.nnovation",
//     //   description: "프로젝트 3 설명",
//     //   image: "/growth/aw-andi.png"
//     // },
//     {
//       title: "흑호랑",
//       description: "프로젝트 3 설명",
//       image: "/growth/aw-blacktiger_story.png",
//     },
//   ];

//   // 현재 호버되어 있는 프로젝트의 이미지 URL을 저장할 state
//   const [currentImage, setCurrentImage] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentHoveredTitle, setCurrentHoveredTitle] = useState("");

//   return (
//     <section className="flex h-screen max-h-screen flex-row">
//       <div className="relative z-10 flex h-full flex-col gap-8 pl-12 pr-24 pt-24">
//         {projects.map((project) => (
//           <div
//             key={project.title}
//             onMouseEnter={() => {
//               setCurrentImage(project.image);
//               setCurrentHoveredTitle(project.title);
//             }}
//             // onMouseLeave={() => setCurrentHoveredTitle('')}
//           >
//             <p
//               className={`cursor-pointer text-xl ${currentHoveredTitle === project.title ? "font-trenda font-bold underline" : ""}`}
//             >
//               {project.title}
//             </p>
//           </div>
//         ))}
//       </div>
//       <div className="relative h-full w-full">
//         {isLoading && currentImage !== "" && (
//           <div
//             role="status"
//             className="absolute left-1/2 top-2/4 -translate-x-1/2 -translate-y-1/2"
//           >
//             <svg
//               aria-hidden="true"
//               className="h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
//               viewBox="0 0 100 101"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                 fill="currentColor"
//               />
//               <path
//                 d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                 fill="currentFill"
//               />
//             </svg>
//             <span className="sr-only">Loading...</span>
//           </div>
//         )}
//         {currentImage === "/growth/sv-odocs" ? (
//           <div className="h-full border-8 border-blue-600 p-8">
//             <iframe
//               src="https://www.odocs.io"
//               className="absolute right-0 top-0 z-10 h-full w-full p-2"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         ) : currentImage === "/growth/sv-aresa" ? (
//           <div className="h-full border-8 border-blue-600 p-8">
//             <iframe
//               src="https://ncp.aresa.io"
//               className="absolute right-0 top-0 h-full w-full p-2"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         ) : currentImage === "/growth/sv-nangman" ? (
//           <div className="h-full border-8 border-blue-600 p-8">
//             <iframe
//               src="/company"
//               className="absolute right-0 top-0 h-full w-full p-2"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         ) : currentImage ? (
//           <div className="max-h-screen overflow-y-auto">
//             {/* <Image priority  src={currentImage} alt="Featured Project" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} /> */}
//             <Image
//               priority
//               src={currentImage}
//               className="!relative object-cover"
//               alt="Featured Project"
//               layout="fill"
//               placeholder="blur"
//               blurDataURL="/placeholder-image.jpg"
//             />
//           </div>
//         ) : (
//           <div className="h-full w-full"></div>
//         )}
//       </div>
//     </section>
//   );
// }
