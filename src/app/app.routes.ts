import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { Home } from "./home/home";
import { PublicLayout } from "./shared/public-layout/public-layout";
import { Blogs } from "./public/blogs/blogs";

export const routes: Routes = [
  {
    path: "",
    component: PublicLayout,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "blogs",
        component: Blogs,
      },
    ],
  }, // Дефинираме маршрут за основната страница
];
