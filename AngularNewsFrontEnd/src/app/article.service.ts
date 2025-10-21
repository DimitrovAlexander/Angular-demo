import { Injectable } from "@angular/core";
import { Article,CreateArticleDTO,EditArticleDTO } from "./article";
import { CommentDTO } from "./comment-dto";
import { CreateCommentDTO } from "./create-comment-dto";
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: "root",
})
export class ArticleService {
  // private articles: Article[] = [
  //   {
  //     id: 1,
  //     title: "Major Breakthrough in AI Research",
  //     body: "Scientists have announced a major breakthrough in artificial intelligence that could change the world...",
  //     views: 150,
  //     rating: 4.5,
  //     publishedDate: new Date("2024-01-15"),
  //     category: "International",
  //     comments: [
  //       {
  //         id: 1,
  //         author: "Gogo",
  //         text: "Great article!",
  //         publishedDate: new Date("2025-09-10"),
  //       },
  //     ]
  //   },
  //   {
  //     id: 2,
  //    title: "Local Team Wins Championship",
  //     body: "The local sports team has won the national championship in a thrilling final match...",
  //     views: 300,
  //     rating: 4.8,
  //     publishedDate: new Date("2024-02-20"),
  //     category: "Sports",
  //     comments: []
  //   },
  //   {
  //     id: 3,
  //     title: "New Government Policies Announced",
  //     body: "The government has announced a new set of policies aimed at boosting the economy...",
  //     views: 80,
  //     rating: 3.9,
  //     publishedDate: new Date("2024-03-10"),
  //     category: "Politics",
  //     comments: []
  //   },
  //   {
  //     id: 4,
  //    title: "The Latest in Lifestyle Trends",
  //     body: "This season is all about sustainable fashion and minimalist living...",
  //     views: 220,
  //     rating: 4.2,
  //     publishedDate: new Date("2024-04-05"),
  //     category: "Lifestyle",
  //     comments: []
  //   },
  // ];
 private apiUrl = 'http://localhost:3000/api/Articles'; 
 /**
  *
  */
 constructor(private http: HttpClient) {}
   getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }
   getArticlesById(id: number): Observable<Article | undefined> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }
   getRecentArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}/recent`);
  }
  getArticlesByAuthor(authorId: number): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}/author/${authorId}`);
  }
 createArticle(article: CreateArticleDTO): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, article);
  }

  updateArticle(id: number, article: EditArticleDTO): Observable<Article> {
    return this.http.put<Article>(`${this.apiUrl}/${id}`, article);
  }

  deleteArticle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


}
