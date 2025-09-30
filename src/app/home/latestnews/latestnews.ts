import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { Article, } from "../../article";
import { ArticleService } from "../../article.service";

@Component({
  selector: "app-latest-posts",
  standalone: true,
  imports: [CommonModule, RouterModule, CardModule, ButtonModule],
  templateUrl: "./latestnews.html",
})
export class LatestNewsComponent implements OnInit { // Renamed class
  latestArticles: Article[] = [];

constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(articles => {
      // Sort by date and take the latest 3
      this.latestArticles = articles
        .sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime())
        .slice(0, 3);
    });
  }

  // Helper to truncate text
  truncate(text: string, length: number): string {
    if (text.length <= length) {
      return text;
    }
    return text.substring(0, length) + '...';
  }
}
