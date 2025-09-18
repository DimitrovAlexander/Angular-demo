import { Injectable } from "@angular/core";
import { Post } from "./post";
import { Observable, of, throwError } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private posts: Post[] = [
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
    return of(this.posts);
  }
  getPostsById(id: number): Observable<Post | undefined> {
    console.log("Searching for post with ID:", id);
    return this.getPosts().pipe(
      map((posts) => {
        const foundPost = posts.find((post) => post.id === id);
        console.log("Found Post:", foundPost);
        return foundPost;
      })
    );
  }
  createPost(newPost: Post): Observable<Post> {
    const newId =
      this.posts.length > 0 ? Math.max(...this.posts.map((p) => p.id)) + 1 : 1;
    newPost.id = newId;
    this.posts.push(newPost);
    return of(newPost);
  }

  // Нов метод за редактиране на пост
  updatePost(updatedPost: Post): Observable<Post> {
    const index = this.posts.findIndex((p) => p.id === updatedPost.id);
    if (index > -1) {
      this.posts[index] = updatedPost;
      return of(updatedPost);
    }
    return throwError(() => new Error("Post not found.")); // Връщаме null или грешка, ако не е намерен
  }

  // Нов метод за изтриване на пост
  deletePost(id: number): Observable<boolean> {
    const initialLength = this.posts.length;
    this.posts = this.posts.filter((post) => post.id !== id);
    return of(this.posts.length < initialLength);
  }
}
