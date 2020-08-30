interface InformationLanguage {
  title: string;
  content: string;
}

export interface Information {
  id: number;
  category: string;
  languageData: { [key: string]: InformationLanguage };
  public: boolean;
}
