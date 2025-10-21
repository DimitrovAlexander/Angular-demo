import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { ButtonModule } from "primeng/button";
import { AuthService } from "../auth";
@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
  ],
  templateUrl: "./login.html",
  styleUrl: "./login.scss",
})
export class Login {
  credentials = { email: "", password: "" };

  constructor(private authService: AuthService) {}

  onLogin(): void {
    this.authService
      .login(this.credentials.email, this.credentials.password)
      .subscribe();
  }
}
