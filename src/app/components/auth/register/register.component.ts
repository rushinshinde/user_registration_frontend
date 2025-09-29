import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']   
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]{2,}).+$/)
        ]
      ],
      confirmPassword: ['', Validators.required]
    });
  }

  Register() {
    this.authService.register(this.registerForm.value).subscribe({
      next: (response) => {
        if(response.success) {
          alert('Registration Successful');
        this.router.navigate(['/login']);        
        }
        else{
          alert(response.message || 'Registration failed')
        }
      },
      error: (err) => alert(err.error.message || 'Registration failed')
    });
  }
}
