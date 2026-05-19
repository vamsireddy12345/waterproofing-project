import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GalleryComponent } from '../../gallery/gallery.component';

interface Stat {
  target: number;
  current: number;
  display: string;
  label: string;
  sublabel: string;
  icon: string;
  color: string;
  bg: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  stats: Stat[] = [
    { target: 18,    current: 0, display: '0',   label: 'Years',    sublabel: 'of Excellence',       icon: '🏆', color: 'text-amber-400',  bg: 'bg-amber-500/20' },
    { target: 10000, current: 0, display: '0',   label: 'Projects', sublabel: 'Successfully Done',    icon: '🔨', color: 'text-cyan-400',   bg: 'bg-cyan-500/20'  },
    { target: 10,    current: 0, display: '0',   label: 'Year',     sublabel: 'Warranty Guaranteed',  icon: '🛡️', color: 'text-green-400',  bg: 'bg-green-500/20' },
    { target: -1,    current: 0, display: '24/7',label: 'Service',  sublabel: 'Emergency Available',  icon: '⚡', color: 'text-blue-400',   bg: 'bg-blue-500/20'  },
  ];

  private observer?: IntersectionObserver;
  private animated = false;
  private timers: ReturnType<typeof setInterval>[] = [];

  ngOnInit() {
    if (typeof window === 'undefined') return;
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !this.animated) {
          this.animated = true;
          this.runCounters();
        }
      });
    }, { threshold: 0.3 });

    setTimeout(() => {
      const el = document.querySelector('#stats-section');
      if (el) this.observer!.observe(el);
    }, 200);
  }

  private runCounters() {
    this.stats.forEach(stat => {
      if (stat.target < 0) return;
      const duration = 2000;
      const start = Date.now();
      const t = setInterval(() => {
        const progress = Math.min((Date.now() - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        stat.current = Math.round(eased * stat.target);
        stat.display = stat.target === 10000
          ? (stat.current >= 1000 ? Math.floor(stat.current / 1000) + 'K' : stat.current + '')
          : stat.current + '';
        if (progress >= 1) { stat.current = stat.target; clearInterval(t); }
      }, 16);
      this.timers.push(t);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    this.timers.forEach(t => clearInterval(t));
  }
}
