import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { connect } from '@rxjs-insights/devtools/connect';
connect();
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
