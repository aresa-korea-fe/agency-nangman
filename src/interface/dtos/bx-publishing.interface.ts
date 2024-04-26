export namespace IBxPublishing {
  export interface IDto {
    id: string;
    category: string;
    title: string;
    content: string;
    headImage: string;
    contentImages: string[];
    activeLighting?: boolean;
  }
}
