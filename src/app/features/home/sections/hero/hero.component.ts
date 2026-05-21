import { isPlatformBrowser } from '@angular/common';
import { Component, OnDestroy, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { PortfolioService } from '../../../../services/portfolio.service';
import { ScrollService } from '../../../../services/scroll.service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent, RevealOnScrollDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly portfolio = inject(PortfolioService);
  readonly scroll = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly typedText = signal('');
  readonly mouseX = signal(50);
  readonly mouseY = signal(50);
  private phraseIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.typeLoop();
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  onMouseMove(event: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;
    this.mouseX.set(x);
    this.mouseY.set(y);
  }

  private typeLoop(): void {
    const phrases = this.portfolio.heroTypingPhrases;
    const current = phrases[this.phraseIndex];
    let delay = 100;

    if (!this.isDeleting) {
      this.typedText.set(current.substring(0, this.charIndex + 1));
      this.charIndex++;
      if (this.charIndex === current.length) {
        this.isDeleting = true;
        delay = 2000;
      }
    } else {
      this.typedText.set(current.substring(0, this.charIndex - 1));
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % phrases.length;
        delay = 500;
      }
    }

    this.timer = setTimeout(() => this.typeLoop(), this.isDeleting ? 50 : delay);
  }
}
