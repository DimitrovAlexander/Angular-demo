import { Component } from "@angular/core";
import { HeroComponent } from "./hero/hero";
import { LatestNewsComponent } from "./latestnews/latestnews";
@Component({
  selector: "app-home",
  imports: [HeroComponent, LatestNewsComponent],
  templateUrl: "./home.html",
  styleUrl: "./home.scss",
})
export class Home {}
