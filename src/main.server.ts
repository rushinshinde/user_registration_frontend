import 'zone.js/node';
import { renderModule } from '@angular/platform-server';
import { AppServerModule } from './app/app.server.module';

export default function main(): Promise<void> {
  return renderModule(AppServerModule, {
    document: '<app-root></app-root>',
    url: '/'
  }).then(() => {});
}
