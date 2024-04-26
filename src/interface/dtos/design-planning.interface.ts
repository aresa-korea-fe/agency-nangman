export namespace IDesignPlanning {
  export interface IDto {
    title: string;
    subString: string;
    process01: IProcess01;
    process02: IProcess02[];
    process03: IProcess03;
  }
  export interface IProcessPoint {
    title: string;
    text: string;
  }

  export interface IProcess01 {
    image01: string;
    question: string[];
    point: IProcessPoint[];
    keywords: { name: string; strong: boolean }[];
  }

  export interface IProcess02 {
    title: string;
    text: string;
    image: string;
  }
  export interface IProcess03 {
    pc: string;
    mo: string;
  }
  export interface ISegment {
    name: string;
    title: string;
    description: string;
  }
}
