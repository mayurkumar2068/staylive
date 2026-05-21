import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../../shared/components/page-hero/page-hero.component';
import { PhotoFrameComponent } from '../../../shared/components/photo-frame/photo-frame.component';
import { PortfolioService } from '../../../services/portfolio.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [PageHeroComponent, PhotoFrameComponent, RouterLink],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent implements OnInit {
  readonly portfolio = inject(PortfolioService);
  private readonly platformId = inject(PLATFORM_ID);
  readonly counters = signal<Record<string, number>>({});

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      const init: Record<string, number> = {};
      this.portfolio.stats.forEach((s) => (init[s.label] = s.value));
      this.counters.set(init);
      return;
    }
    setTimeout(() => this.animateCounters(), 300);
  }

  private animateCounters(): void {
    this.portfolio.stats.forEach((stat) => {
      let current = 0;
      const step = stat.value / 50;
      const interval = setInterval(() => {
        current += step;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(interval);
        }
        this.counters.update((c) => ({ ...c, [stat.label]: Math.floor(current) }));
      }, 20);
    });
  }
}
