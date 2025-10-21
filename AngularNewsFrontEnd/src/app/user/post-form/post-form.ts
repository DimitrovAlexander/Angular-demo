import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { ArticleService } from "../../article.service";
import { Article, ArticleCategory } from "../../article";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { EditorModule } from "primeng/editor"; // For rich text editing
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';

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
    AutoCompleteModule, // 1. Add AutoCompleteModule to imports
  ],
  templateUrl: "./post-form.html",
  styleUrl: "./post-form.scss",
})
export class ArticleForm implements OnInit {
  isEditMode: boolean = false;
  article: Article = {
    id: 0,
    title: "",
    body: "",
    views: 0,
    rating: 0,
    publishedAt: new Date(),
    category: ArticleCategory.Technology,
    comments: [],
    authorId: 0,
    authorName: "",
  };
  allCategories: ArticleCategory[] = [ 
      ArticleCategory.Technology,
    ArticleCategory.Science,
    ArticleCategory.Sports,
    ArticleCategory.Business,
    ArticleCategory.Entertainment,
    
  ]
  
  filteredCategories: ArticleCategory[] = [ 

  ]; // 3. Add property for filtered results
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get("id");
    if (articleId) {
      this.isEditMode = true;
      this.articleService.getArticlesById(+articleId).subscribe((article) => {
        if (article) {
          this.article = article;
        } else {
          this.router.navigate(["/profile"]); // Пренасочване, ако постът не е намерен
        }
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.articleService.updateArticle(this.article.id,this.article).subscribe(() => {
        console.log("Article updated successfully!");
        this.router.navigate(["/profile"]);
      });
    } else {
      this.articleService.createArticle(this.article).subscribe(() => {
        console.log("Post created successfully!");
        this.router.navigate(["/profile"]);
      });
    }
  }

  // 4. Implement the search method
  searchCategory(event: AutoCompleteCompleteEvent) {
    let query = event.query.toLowerCase();
    this.filteredCategories = this.allCategories.filter(category => 
      category.toString().toLowerCase().includes(query)
    );
  }
}
