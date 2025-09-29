import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule], // <-- Added CommonModule
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // <-- Inject PLATFORM_ID
  ) {}

  login() {
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (response) => {
        if(response.success) {
        if (isPlatformBrowser(this.platformId)) { // <-- Browser check for SSR
          localStorage.setItem('token', response.token);
        }
        this.router.navigate(['/clients']);
      } else {
        alert('Login failed: ' + response.success);
      } 
      },
      error: (err) => alert('Login failed')
    });
  }
}
