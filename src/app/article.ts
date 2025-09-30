export interface Article {
  id: number;
  title: string;
  body: string;
  views: number;
  rating: number;
  publishedDate: Date;
  category: ArticleCategory;
  comments: Comment[];
}
export type ArticleCategory =
  | "Crime"
  | "Sports"
  | "Politics"
  | "International"
  | "Lifestyle";
export interface Comment {
  id: number;
  author: string;
  text: string;
  publishedDate: Date;
}