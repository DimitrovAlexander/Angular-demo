import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { Home } from "./home/home";
import { PublicLayout } from "./shared/public-layout/public-layout";
import { Blogs } from "./public/blogs/blogs";
import { PostDetails } from "./public/post-details/post-details";
import { Login } from "./auth/login/login";
import { Register } from "./auth/register/register";
import { DashboardComponent } from "./user/dashboard/dashboard";
import { AuthGuard } from "./user/auth/auth";
import { ArticleForm } from "./user/post-form/post-form";

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
        path: "news",
        component: Blogs,
      },
      {
        path: "news/:id",
        component: PostDetails,
      },
      { path: "login", component: Login }, // Добави маршрут за логин
      { path: "register", component: Register },
    ],
  }, // Дефинираме маршрут за основната страница
  {
    path: "profile",
    component: DashboardComponent,
    canActivate: [AuthGuard], // Приложи Guard-а тук
  },
  {
    path: "create-article",
    component: ArticleForm,
    canActivate: [AuthGuard],
  },
  {
    path: "edit-article/:id",
    component: ArticleForm,
    canActivate: [AuthGuard],
  },
];
