import { HttpErrorResponse,HttpInterceptorFn } from "@angular/common/http";
import { AuthService } from "./auth";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { inject } from "@angular/core";
export const authInterceptor: HttpInterceptorFn = (req, next_)=>{
    const authService = inject(AuthService);
    const token = authService.getToken();

    if (token) {
        const authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        return next_(authReq).pipe(
            catchError((error: any) => {
                if (error instanceof HttpErrorResponse && error.status === 401) {
                    authService.logout();
                }
                return throwError(() => error);
            })
        );
    }
    return next_(req);
}
