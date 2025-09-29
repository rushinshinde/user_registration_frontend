import { Component, EventEmitter, Output } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-client-form',
  templateUrl: './client-form.html'
})
export class ClientFormComponent{
  @Output() clientAdded = new EventEmitter<void>();

  client = {
    title: '',
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    addresses: [
      {
        addressLine1: '',
        town: '',
        city: '',
        pinCode: ''
      }
    ]
  };

  constructor(private clientService: ClientService, private router: Router) {}

  addAddress() {
    this.client.addresses.push({
      addressLine1: '',
      town: '',
      city: '',
      pinCode: ''
    });
  }

  removeAddress(index: number) {
    this.client.addresses.splice(index, 1);
  }

  Cancel(){
    this.router.navigate(['/clients']);
  }
  
  saveClient() {
    this.clientService.addClient(this.client).subscribe({
      next: () => {
        alert('Client added successfully');
        this.clientAdded.emit();
        this.resetForm();

        this.router.navigate(['/clients']);
      },
      error: (err) => alert('Failed to add client')
    });
  }

  resetForm() {
    this.client = {
      title: '',
      firstName: '',
      lastName: '',
      gender: '',
      dob: '',
      addresses: [
        {
          addressLine1: '',
          town: '',
          city: '',
          pinCode: ''
        }
      ]
    };
  }
}