export namespace IWebAppService {
  export interface IDto {
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
  }

  export interface SitemapImage {
    src: string;
    alt: string;
    fill: boolean;
  }

  export interface ProjectSitemap {
    menu: string;
    text: string;
    images: SitemapImage[];
    blur: boolean;
    background: string;
  }

  export interface ProjectBrief {
    category: string;
    title: string;
    content: string;
  }
}
