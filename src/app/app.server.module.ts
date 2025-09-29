import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
