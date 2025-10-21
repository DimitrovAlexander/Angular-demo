import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
export interface AuthResponse {
  token: string;
}
@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiUrl = "https://localhost:3000/api/Auth"; // Замени с твоя API URL
  private tokenKey = "jwt_token";

  constructor(private http: HttpClient, private router: Router) {}

  // Модел за данни за потребителя
  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response) => {
        this.setToken(response.token);
    }));
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken(); // Връща true, ако има токен
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(["/login"]);
  }
}
