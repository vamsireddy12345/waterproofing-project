import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/components/header/header.component';
import { FooterComponent } from './components/components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent,GalleryComponent], // <-- RouterOutlet is required
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
