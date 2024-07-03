import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app'; 
import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), 
    {
      provide : LocationStrategy , 
      useClass: HashLocationStrategy
    }
  ],

};
