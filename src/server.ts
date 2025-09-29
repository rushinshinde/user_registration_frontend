import express, { Request, Response, NextFunction } from 'express';
import { join } from 'path';
import 'zone.js/node';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { existsSync } from 'fs';
import { AppServerModule } from './app/app.server.module';

const app = express();

// Get port from environment or default
const port = process.env['PORT'] || 4000;

// Path to browser distribution
const browserDistFolder = join(process.cwd(), 'dist/ClientManagementFrontend/browser');

// Setup Angular Universal engine
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule,
}));

app.set('view engine', 'html');
app.set('views', browserDistFolder);

// Serve static files
app.get('*.*', express.static(browserDistFolder, {
  maxAge: '1y'
}));

// All routes handled by Angular Universal
app.get('*', (req: Request, res: Response, next: NextFunction) => {
  res.render('index', { req });
});

// Start server
app.listen(port, (error?: any) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Node Express server listening on http://localhost:${port}`);
  }
});

