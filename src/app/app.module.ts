import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ClientGridComponent } from './components/clients/client-grid/client-grid.component';
import { ClientFormComponent } from './components/clients/client-form/client-form';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  imports: [
    BrowserModule,            // ✅ Normal import without withServerTransition
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ClientGridComponent,
    ClientFormComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
