import { CommentDTO } from './comment-dto';
export interface Article {
  id: number;
  title: string;
  body: string;
  publishedAt: Date;
  views: number;
  rating: number;
  category: ArticleCategory;
  authorId: number;
  authorName: string;
  comments: CommentDTO[];
}
export enum ArticleCategory {
  Technology,
  Science,
  Sports,
  Business,
  Entertainment
}
export interface CreateArticleDTO {
  title: string;
  body: string;
  category: ArticleCategory;
}

export interface EditArticleDTO {
  id: number;
  title: string;
  body: string;
  category: ArticleCategory;
}