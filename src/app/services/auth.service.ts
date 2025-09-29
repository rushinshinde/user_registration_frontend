import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}

  register(user: any) {
    return this.http.post<{ data:any; username: string, success: string, message:string }>(`${this.config.server.apiUrl}${this.config.server.auth.register}`, user);
  }

  login(credentials: any) {
    return this.http.post<{ token: string; username: string, success: string, message:string }>(
      `${this.config.server.apiUrl}${this.config.server.auth.login}`,
      credentials
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  storeToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
