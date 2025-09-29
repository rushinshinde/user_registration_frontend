import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONFIG, AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}

  getClients(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.get(
      `${this.config.server.apiUrl}${this.config.server.clients.getAll}`,
      { headers }
    );
  }

  addClient(client: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(`${this.config.server.apiUrl}${this.config.server.clients.add}`, client, { headers });
  }

  deleteClient(clientId: number): Observable<any> {
    return this.http.delete(`${this.config.server.apiUr}/${clientId}`);
  }
}