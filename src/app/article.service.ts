import { Injectable } from "@angular/core";
import { Article,Comment } from "./article";
import { Observable, of, throwError } from "rxjs";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: "root",
})
export class ArticleService {
  private articles: Article[] = [
    {
      id: 1,
      title: "Major Breakthrough in AI Research",
      body: "Scientists have announced a major breakthrough in artificial intelligence that could change the world...",
      views: 150,
      rating: 4.5,
      publishedDate: new Date("2024-01-15"),
      category: "International",
      comments: [
        {
          id: 1,
          author: "Gogo",
          text: "Great article!",
          publishedDate: new Date("2025-09-10"),
        },
      ]
    },
    {
      id: 2,
     title: "Local Team Wins Championship",
      body: "The local sports team has won the national championship in a thrilling final match...",
      views: 300,
      rating: 4.8,
      publishedDate: new Date("2024-02-20"),
      category: "Sports",
      comments: []
    },
    {
      id: 3,
      title: "New Government Policies Announced",
      body: "The government has announced a new set of policies aimed at boosting the economy...",
      views: 80,
      rating: 3.9,
      publishedDate: new Date("2024-03-10"),
      category: "Politics",
      comments: []
    },
    {
      id: 4,
     title: "The Latest in Lifestyle Trends",
      body: "This season is all about sustainable fashion and minimalist living...",
      views: 220,
      rating: 4.2,
      publishedDate: new Date("2024-04-05"),
      category: "Lifestyle",
      comments: []
    },
  ];

  getArticles(): Observable<Article[]> {
    return of(this.articles);
  }
  getArticlesById(id: number): Observable<Article | undefined> {
    console.log("Searching for post with ID:", id);
    return this.getArticles().pipe(
      map((Articles) => {
        const foundPost = Articles.find((post) => post.id === id);
        console.log("Found Post:", foundPost);
        return foundPost;
      })
    );
  }
  createPost(newPost: Article): Observable<Article> {
    const newId =
      this.articles.length > 0 ? Math.max(...this.articles.map((p) => p.id)) + 1 : 1;
    newPost.id = newId;
    this.articles.push(newPost);
    return of(newPost);
  }


  updatePost(updatedPost: Article): Observable<Article> {
    const index = this.articles.findIndex((p) => p.id === updatedPost.id);
    if (index > -1) {
      this.articles[index] = updatedPost;
      return of(updatedPost);
    }
    return throwError(() => new Error("Post not found.")); 
  }


  deletePost(id: number): Observable<boolean> {
    const initialLength = this.articles.length;
    this.articles = this.articles.filter((article) => article.id !== id);
    return of(this.articles.length < initialLength);
  }
}
