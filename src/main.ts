import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { APP_CONFIG, AppConfigValue } from './app/app.config';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    importProvidersFrom(RouterModule),
    { provide: APP_CONFIG, useValue: AppConfigValue } // ✅ Provide config
  ]
}).catch(err => console.error(err));
