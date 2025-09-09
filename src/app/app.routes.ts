import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { Home } from "./home/home";
import { PublicLayout } from "./shared/public-layout/public-layout";
import { Blogs } from "./public/blogs/blogs";
import { PostDetails } from "./public/post-details/post-details";

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
      {
        path: "blogs/:id",
        component: PostDetails,
      },
    ],
  }, // Дефинираме маршрут за основната страница
];
