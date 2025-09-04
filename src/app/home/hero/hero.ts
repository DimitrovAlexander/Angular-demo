import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
@Component({
  selector: "app-hero",
  imports: [ButtonModule],
  templateUrl: "./hero.html",
  styleUrl: "./hero.scss",
})
export class HeroComponent {}
