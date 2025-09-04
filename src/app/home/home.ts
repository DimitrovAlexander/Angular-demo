import { Component } from "@angular/core";
import { HeroComponent } from "./hero/hero";
import { LatestPosts } from "./latestblogs/latestblogs";
@Component({
  selector: "app-home",
  imports: [HeroComponent, LatestPosts],
  templateUrl: "./home.html",
  styleUrl: "./home.scss",
})
export class Home {}
