import { InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';

export interface IAppConfigServer {
  apiUrl: string;
  auth: {
    register: string;
    login: string;
    refreshToken: string;
  };
  clients: {
    getAll: string;
    add: string;
    update: string;
    delete: string;
  };
}

export const AppConfigServer: IAppConfigServer = {
  apiUrl: environment.apiBaseUrl,
  auth: {
    register: '/auth/register',
    login: '/auth/login',
    refreshToken: '/auth/refresh-token'
  },
  clients: {
    getAll: '/clients',
    add: '/clients',
    update: '/clients/update',
    delete: '/clients/delete'
  }
};

export const APP_CONFIG_TOKEN = new InjectionToken<IAppConfigServer>('app.config');
