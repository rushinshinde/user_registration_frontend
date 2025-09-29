import { InjectionToken } from '@angular/core';
import { AppConfigServer, IAppConfigServer } from './app.config.server';

export interface AppConfig {
  server: any; // Change to actual type if available
  appName: string;
  pageSize: number;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const AppConfigValue: AppConfig = {
  server: AppConfigServer,
  appName: 'MyAngularApp',
  pageSize: 10
};
