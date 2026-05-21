import { isPlatformBrowser } from '@angular/common';
import { Component, OnDestroy, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../../services/portfolio.service';
import { MagneticDirective } from '../../../shared/directives/magnetic.directive';
import { SpotlightDirective } from '../../../shared/directives/spotlight.directive';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, MagneticDirective, SpotlightDirective],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit, OnDestroy {
  readonly portfolio = inject(PortfolioService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly typedText = signal('');
  readonly currentISTTime = signal('');
  private phraseIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer?: ReturnType<typeof setTimeout>;
  private clockTimer?: ReturnType<typeof setInterval>;

  readonly featuredProjects = this.portfolio.projects.filter((p) => p.featured).slice(0, 4);

  ngOnInit(): void {
    this.typeLoop();
    if (isPlatformBrowser(this.platformId)) {
      this.updateISTClock();
      this.clockTimer = setInterval(() => this.updateISTClock(), 1000);
    }
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
    if (this.clockTimer) clearInterval(this.clockTimer);
  }

  private updateISTClock(): void {
    const fmt = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
    this.currentISTTime.set(fmt.format(new Date()) + ' IST');
  }

  private typeLoop(): void {
    const phrases = this.portfolio.heroTypingPhrases;
    const current = phrases[this.phraseIndex];
    let delay = 80;

    if (!this.isDeleting) {
      this.typedText.set(current.substring(0, this.charIndex + 1));
      this.charIndex++;
      if (this.charIndex === current.length) {
        this.isDeleting = true;
        delay = 1800;
      }
    } else {
      this.typedText.set(current.substring(0, this.charIndex - 1));
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % phrases.length;
        delay = 400;
      }
    }
    this.timer = setTimeout(() => this.typeLoop(), this.isDeleting ? 40 : delay);
  }
}
