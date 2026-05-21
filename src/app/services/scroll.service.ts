import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  readonly scrollProgress = signal(0);
  readonly activeSection = signal('hero');

  init(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    window.addEventListener('scroll', () => this.onScroll(), { passive: true });
    this.onScroll();
  }

  scrollTo(elementId: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const el = this.document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private onScroll(): void {
    const scrollTop = window.scrollY;
    const docHeight = this.document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress.set(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'services', 'testimonials', 'achievements', 'contact'];
    for (const id of [...sections].reverse()) {
      const el = this.document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) {
        this.activeSection.set(id);
        break;
      }
    }
  }
}
