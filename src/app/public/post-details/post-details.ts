import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { Article } from "../../article";
import { ArticleService } from "../../article.service";
import { CommonModule } from "@angular/common";
import { CardModule } from "primeng/card";
import { RatingModule } from "primeng/rating";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "app-post-details",
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    RatingModule,
    ButtonModule,
    RouterModule,
  ],
  templateUrl: "./post-details.html",
  styleUrl: "./post-details.scss",
})
export class PostDetails {
  post: Article | undefined;
  constructor(
    private route: ActivatedRoute,
    private articleServoce: ArticleService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get("id");
    if (postId) {
      console.log("Start search");
      this.articleServoce.getArticlesById(+postId).subscribe((post) => {
        if (post) {
          this.post = post;
        } else {
          this.router.navigate(["/blogs"]);
        }
      });
    }
  }
}
