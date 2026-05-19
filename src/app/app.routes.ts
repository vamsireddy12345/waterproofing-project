// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/components/home/home.component';
import { ServicesComponent } from './components/components/services/services.component';
import { ContactComponent } from './components/components/contact/contact.component';

export const routes: Routes = [  // ✅ use "export const"
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent }
];
