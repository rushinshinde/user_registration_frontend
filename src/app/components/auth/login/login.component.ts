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
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  login() {
    if(this.email !== '' && this.password !== ''){
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (response) => {
        if(response.success) {
        if (isPlatformBrowser(this.platformId)) { 
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', response.username);
        }
        this.router.navigate(['/clients']).then(() => {
          window.location.reload();
        });
      } else {
        alert(response.message);
      } 
      },
      error: (err) => alert('Login failed')
    });
  }
  else{
    alert('Please enter email and password');
  }
}
}
