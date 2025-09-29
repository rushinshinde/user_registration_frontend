import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule], // Required for *ngIf and routing
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent implements OnInit {
  username: string | null = null;
  isLoggedIn = false;

  constructor(
    private token: TokenService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.username = localStorage.getItem('username');
      this.isLoggedIn = !!localStorage.getItem('token');
    }
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      this.token.clear();
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      this.isLoggedIn = false;
      this.router.navigate(['/login']);
    }
  }
}
