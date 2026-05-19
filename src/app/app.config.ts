// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // ✅ This will now work

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
