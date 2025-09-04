import { Component, OnInit } from "@angular/core";
import { Menubar } from "primeng/menubar";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [Menubar],
  templateUrl: "./header.html",
  styleUrl: "./header.scss",
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: "Home",
        routerLink: "",

        icon: "pi pi-home",
      },
      {
        label: "Blogs",
        routerLink: "blogs",
        icon: "pi pi-star",
      },
      {
        label: "Contact",
        icon: "pi pi-envelope",
      },
    ];
  }
}
