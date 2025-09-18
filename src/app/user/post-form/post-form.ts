import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { PostService } from "../..//post.service";
import { Post } from "../../post";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";

@Component({
  selector: "app-post-form",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    RouterModule,
  ],
  templateUrl: "./post-form.html",
  styleUrl: "./post-form.scss",
})
export class PostForm implements OnInit {
  isEditMode: boolean = false;
  post: Post = {
    id: 0,
    title: "",
    body: "",
    views: 0,
    rating: 0,
    publishedDate: new Date(),
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get("id");
    if (postId) {
      this.isEditMode = true;
      this.postService.getPostsById(+postId).subscribe((post) => {
        if (post) {
          this.post = post;
        } else {
          this.router.navigate(["/profile"]); // Пренасочване, ако постът не е намерен
        }
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.postService.updatePost(this.post).subscribe(() => {
        console.log("Post updated successfully!");
        this.router.navigate(["/profile"]);
      });
    } else {
      this.postService.createPost(this.post).subscribe(() => {
        console.log("Post created successfully!");
        this.router.navigate(["/profile"]);
      });
    }
  }
}
