import { Component, OnInit } from "@angular/core";
import { Article } from "../../article";
import { ArticleService } from "../../article.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { SelectModule } from "primeng/select";
import { RatingModule } from "primeng/rating";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-blogs",
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    RatingModule,
    RouterModule,
    SelectModule,
  ],
  templateUrl: "./blogs.html",
  styleUrl: "./blogs.scss",
})
export class Blogs implements OnInit {
  posts: Article[] = [];
  filtreredPosts: Article[] = [];
  sortOptions: any[];
  selectedSortOption: any;
  searchTerm: string = "";

  constructor(private articleService: ArticleService) {
    this.sortOptions = [
      { name: "Newest", value: "newest" },
      { name: "Most Popular", value: "views" },
      { name: "Highest rated", value: "rating" },
    ];
  }
  ngOnInit(): void {
    this.articleService.getArticles().subscribe((posts) => {
      this.posts = posts;
      this.applyFiltersAndSort(); // 2. Call the function after getting posts
    });
  }

  // 3. Create a single function to handle both filtering and sorting
  applyFiltersAndSort() {
    let tempPosts = [...this.posts]; // Start with a fresh copy of all posts

    // Filter by search term
    if (this.searchTerm) {
      tempPosts = tempPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          post.body.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    // Sort the filtered posts
    if (this.selectedSortOption) {
      const sortValue = this.selectedSortOption.value;
      if (sortValue === "newest") {
        tempPosts.sort(
          (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
        );
      } else if (sortValue === "views") {
        tempPosts.sort((a, b) => b.views - a.views);
      } else if (sortValue === "rating") {
        tempPosts.sort((a, b) => b.rating - a.rating);
      }
    }

    this.filtreredPosts = tempPosts; // Update the posts array displayed in the UI
  }
}
