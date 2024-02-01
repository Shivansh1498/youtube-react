export interface VideoCategoryChip {
  categories: CategoriesChip[];
  loading: boolean;
  error: unknown;
}

export interface CategoriesChip {
  id: string;
  category: string;
}
