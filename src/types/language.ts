export enum Language {
  ENG = 'eng',
  RU = 'ru',
  KZ = 'kz'
}

export interface ILanguages {
  id: number,
  label: string,
  value: string
}

export interface Header {
  language: string;
  theme: string;
}

export interface ContentItem {
  id: number;
  title: string;
  text: string;
}

export interface Body {
  content: ContentItem[];
}
export interface ILanguageData {
  header: Header;
  body: Body;
}