import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { PortfolioService } from '../../../../services/portfolio.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeaderComponent, RevealOnScrollDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    const el = document.getElementById('about');
    if (el) observer.observe(el);
  }

  private animateCounters(): void {
    this.portfolio.stats.forEach((stat) => {
      let current = 0;
      const step = stat.value / 60;
      const interval = setInterval(() => {
        current += step;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(interval);
        }
        this.counters.update((c) => ({ ...c, [stat.label]: Math.floor(current) }));
      }, 16);
    });
  }
}
