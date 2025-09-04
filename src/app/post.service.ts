import { Injectable } from "@angular/core";
import { Post } from "./post";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private poststs: Post[] = [
    {
      id: 1,
      title: "Първа публикация за Angular",
      body: "Съдържание...",
      views: 150,
      rating: 4.5,
      publishedDate: new Date("2024-01-15"),
    },
    {
      id: 2,
      title: "Какво е React",
      body: "Съдържание...",
      views: 300,
      rating: 4.8,
      publishedDate: new Date("2024-02-20"),
    },
    {
      id: 3,
      title: "Основи на Tailwind CSS",
      body: "Съдържание...",
      views: 80,
      rating: 3.9,
      publishedDate: new Date("2024-03-10"),
    },
    {
      id: 4,
      title: "Защо Typescript",
      body: "Съдържание...",
      views: 220,
      rating: 4.2,
      publishedDate: new Date("2024-04-05"),
    },
  ];

  getPosts(): Observable<Post[]> {
    return of(this.poststs);
  }
}
