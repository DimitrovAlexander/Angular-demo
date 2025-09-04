import { Component, OnInit } from "@angular/core";
import { Post } from "../../post";
import { PostService } from "../../post.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { AutoCompleteModule } from "primeng/autocomplete";
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
    AutoCompleteModule,
  ],
  templateUrl: "./blogs.html",
  styleUrl: "./blogs.scss",
})
export class Blogs implements OnInit {
  posts: Post[] = [];
  filtreredPosts: Post[] = [];
  sortOptions: any[];
  selectedSortOption: any;
  constructor(private postService: PostService) {
    this.sortOptions = [
      { label: "Newest", value: "newest" },
      { label: "Most Popularи", value: "views" },
      { label: "Highest ratedг", value: "rating" },
    ];
  }
  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.filtreredPosts = [...this.posts];
    });
  }
  onSortChange(event: any) {
    let value = event.value;
    if (value === "newest") {
      this.filtreredPosts.sort(
        (a, b) => b.publishedDate.getTime() - a.publishedDate.getTime()
      );
    } else if (value === "views") {
      this.filtreredPosts.sort((a, b) => b.views - a.views);
    } else if (value === "rating") {
      this.filtreredPosts.sort((a, b) => b.rating - a.rating);
    }
  }
}
