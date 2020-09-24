export interface Category {
  id: number;
  name: string;
  subCategories?: Category[];
}

export interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
