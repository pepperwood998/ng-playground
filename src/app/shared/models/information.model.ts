interface InformationLanguage {
  title: string;
  content: string;
}

export class Information {
  id: number;
  category: string;
  languageData: { [key: string]: InformationLanguage };
  public: boolean;
}
