import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ClientGridComponent } from './components/clients/client-grid/client-grid.component';
import { ClientFormComponent } from './components/clients/client-form/client-form';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route
  { path: 'login', component: LoginComponent }, // Login page
  { path: 'register', component: RegisterComponent }, // Registration page
  { path: 'clients', component: ClientGridComponent }, // Client grid page
  { path: 'clients/add', component: ClientFormComponent }, // Add client form
  { path: '**', redirectTo: 'login' } // Fallback route for undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}