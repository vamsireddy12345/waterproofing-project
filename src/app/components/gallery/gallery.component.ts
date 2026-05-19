import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface GalleryImage {
  src: string;
  alt: string;
  location?: string;
  description?: string;
  tags?: string[];
  year?:string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images: GalleryImage[] = [
    {
      src: '../../../assets/vistingcard20.jpeg',
      alt: 'Contact Us',
      location: 'Bangalore',
      description: 'Get in touch with our waterproofing experts',
      tags: ['Contact']
    },
    {
      src: '../../../assets/waterproof1.jpeg',
      alt: 'Bathroom Tiles Epoxy Grouting',
      location: 'Hyderabad'
    },
    {
      src: '../../../assets/waterproof5.jpeg',
      alt: 'Terrace Waterproofing',
      location: 'Tirupathi',
      description: 'Complete terrace waterproofing solution',
      tags: ['Terrace', 'Waterproofing']
    },
    { src: '../../../assets/waterproof3.jpeg', alt: 'Terrace Waterproofing', location: 'Bangalore' },
    { src: '../../../assets/waterproof6.jpeg', alt: 'Terrace Waterproofing', location: 'Hyderabad' },
    { src: '../../../assets/waterproof7.jpeg', alt: 'Terrace Waterproofing', location: 'Anantapur' },
    { src: '../../../assets/waterproof8.jpeg', alt: 'Terrace Waterproofing', location: 'Puttaparthi' },
    { src: '../../../assets/waterproof9.jpeg', alt: 'Terrace Waterproofing', location: 'Kadiri' },
    { src: '../../../assets/waterproof10.jpeg', alt: 'Terrace Waterproofing', location: 'Tirupathi' },
    { src: '../../../assets/waterproof11.jpeg', alt: 'Terrace Waterproofing', location: 'Bangalore' },
    { src: '../../../assets/waterproof12.jpeg', alt: 'Terrace Waterproofing', location: 'Hyderabad' },
    { src: '../../../assets/waterproof13.jpeg', alt: 'Terrace Waterproofing', location: 'Kadiri' },
    { src: '../../../assets/waterproof14.jpeg', alt: 'Terrace Waterproofing', location: 'Anantapur' },
    { src: '../../../assets/waterproof15.jpeg', alt: 'Sump Tank Cleaning', location: 'Puttaparthi' },
    { src: '../../../assets/waterproof16.jpeg', alt: 'Terrace Waterproofing', location: 'Bangalore' },
    { src: '../../../assets/waterproof17.jpeg', alt: 'Terrace Waterproofing', location: 'Tirupathi' },
    { src: '../../../assets/waterproof18.jpeg', alt: 'Terrace Waterproofing', location: 'Hyderabad' },
    { src: '../../../assets/waterproof19.jpeg', alt: 'Terrace Waterproofing', location: 'Anantapur' },
    { src: '../../../assets/waterproof4.jpeg', alt: 'Terrace Waterproofing', location: 'Puttaparthi' },
    { src: '../../../assets/waterproof2.jpeg', alt: 'Terrace Waterproofing', location: 'Kadiri' }
  ];
}
