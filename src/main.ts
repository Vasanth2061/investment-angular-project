// import { bootstrapApplication } from '@angular/platform-browser

// bootstrapApplication(AppComponent).catch((err) => console.error(err));

import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
