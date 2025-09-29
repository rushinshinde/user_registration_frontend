import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
return next.handle(req).pipe(
catchError((error: HttpErrorResponse) => {
// Centralized error handling — could be extended to show toast notifications
console.error('HTTP Error:', error.status, error.message);
return throwError(() => error);
})
);
}
}