import { Component, OnInit } from "@angular/core";
import { PostService } from "../../post.service";
import { Post } from "../../post";
import { CommonModule } from "@angular/common";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { RouterModule } from "@angular/router";
import { TableModule } from "primeng/table"; // За таблица
import { ChartModule } from "primeng/chart"; // За графики
import { FormsModule } from '@angular/forms'; // Needed for ngModel
import { RatingModule } from 'primeng/rating'; 
@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RouterModule,
    TableModule,
    ChartModule,
    FormsModule, // 2. Add FormsModule as well
    RatingModule 
  ],
  templateUrl: "./dashboard.html",
  styleUrl: "./dashboard.scss",
})
export class DashboardComponent implements OnInit {
  userPosts: Post[] = [];
  totalViews: number = 0;
  topRatedPosts: Post[] = [];
  mostViewedPosts: Post[] = [];
  chartData: any;
  chartOptions: any;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.userPosts = posts;
      this.calculateMetrics();
      this.prepareChartData();
    });
  }

  calculateMetrics(): void {
    // Изчисляване на общия брой преглеждания
    this.totalViews = this.userPosts.reduce((sum, post) => sum + post.views, 0);

    // Сортиране на постовете
    this.topRatedPosts = [...this.userPosts].sort(
      (a, b) => b.rating - a.rating
    );
    this.mostViewedPosts = [...this.userPosts].sort(
      (a, b) => b.views - a.views
    );
  }

  prepareChartData(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");

    this.chartData = {
      labels: this.userPosts.map((post) => post.title),
      datasets: [
        {
          data: this.userPosts.map((post) => post.views),
          backgroundColor: [
            documentStyle.getPropertyValue("--p-primary-color"),
            documentStyle.getPropertyValue("--p-secondary-color"),
            "#FFB428", // Примерни цветове
            "#3399FF",
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--p-primary-color-hover"),
            documentStyle.getPropertyValue("--p-secondary-color-hover"),
            "#e69a00",
            "#007acc",
          ],
        },
      ],
    };

    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor,
          },
        },
      },
    };
  }

  deletePost(id: number): void {
    console.log("Deleting post with ID:", id);
    // Добави логика за изтриване от API
  }
}
