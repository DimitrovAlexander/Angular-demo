import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";

interface Post {
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: "app-latest-posts",
  standalone: true,
  imports: [CommonModule, RouterModule, CardModule, ButtonModule],
  templateUrl: "./latestblogs.html",
  styleUrls: ["./latestblogs.scss"],
})
export class LatestPosts implements OnInit {
  posts: Post[] = [
    {
      id: 1,
      title: "First post",
      body: "Това е съдържанието на първия ми пост, което е сравнително дълго...",
    },
    {
      id: 2,
      title: "Second post",
      body: "Ето съдържанието на втората публикация, която е малко по-кратка...",
    },
    {
      id: 3,
      title: "Third post",
      body: "Кратко съдържание за третия пост...",
    },
  ];

  constructor() {}
  ngOnInit(): void {}
}
