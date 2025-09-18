import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiBaseUrl = "https://fake-api.com/api"; // Замени с твоя API URL
  private tokenKey = "jwt_token";

  constructor(private http: HttpClient, private router: Router) {}

  // Модел за данни за потребителя
  login(email: string, password: string): Observable<any> {
    // Симулираме API заявка
    const fakeApiResponse = {
      token: "your_mock_jwt_token",
      user: { email: email },
    };

    return of(fakeApiResponse).pipe(
      tap((response) => {
        this.setToken(response.token);
        this.router.navigate(["/profile"]); // Пренасочване към профила
      })
    );
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
