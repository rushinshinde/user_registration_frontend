import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-client-grid',
  imports: [CommonModule, FormsModule],
  templateUrl: './client-grid.component.html',
  styleUrls: ['./client-grid.scss']
})
export class ClientGridComponent implements OnInit {
  clients: any[] = [];
  filteredClients: any[] = [];
  searchName: string = '';
  searchGender: string = '';
  searchDOB: string = '';

  email: string = '';
  password: string = '';

  constructor(
    private clientService: ClientService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClients().subscribe({
      next: (data) => {
        this.clients = data?.$values;
        this.filteredClients = data?.$values; // Initialize filtered clients
      },
      error: () => alert('Failed to load clients')
    });
  }

  applyFilters() {
    this.filteredClients = this.clients.filter(client => {
      const matchesName = this.searchName
        ? client.firstName.toLowerCase().includes(this.searchName.toLowerCase()) ||
          client.lastName.toLowerCase().includes(this.searchName.toLowerCase())
        : true;

      const matchesGender = this.searchGender
        ? client.gender === this.searchGender
        : true;

      const matchesDOB = this.searchDOB
        ? client.dateOfBirth === this.searchDOB
        : true;

      return matchesName && matchesGender && matchesDOB;
    });
  }

  login() {
    if (isPlatformBrowser(this.platformId)) {
      console.log('Login attempt with:', this.email, this.password);
      // You can integrate AuthService.login() here if needed
    }
  }

  AddClient() { 
    this.router.navigate(['/clients/add']);
  }

}


