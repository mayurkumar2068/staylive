import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-hero relative overflow-hidden border-b border-line">
      <!-- Decorative dot pattern -->
      <div class="page-hero-dots"></div>

      <!-- Aurora blobs -->
      <div
        class="absolute top-0 right-[-10%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style="background: radial-gradient(circle, rgb(var(--accent) / 0.18), transparent 60%); filter: blur(60px);"
      ></div>
      <div
        class="absolute bottom-[-30%] left-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style="background: radial-gradient(circle, rgb(var(--accent-secondary) / 0.14), transparent 60%); filter: blur(60px);"
      ></div>

      <div class="page-container relative py-16 sm:py-20 lg:py-24">
        <nav class="flex items-center gap-2 text-sm mb-8">
          <a routerLink="/" class="text-text-subtle hover:text-accent transition-colors flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </a>
          @if (breadcrumb()) {
            <span class="text-text-subtle/40">/</span>
            <span class="text-text-primary font-medium">{{ breadcrumb() }}</span>
          }
        </nav>

        <div class="max-w-3xl">
          <p class="section-label">{{ label() }}</p>
          <h1 class="page-hero-title text-balance">{{ title() }}</h1>
          @if (description()) {
            <p class="section-desc text-balance">{{ description() }}</p>
          }
        </div>
      </div>

      <!-- Bottom signature line -->
      <div class="page-hero-line"></div>
    </section>
  `,
  styles: `
    .page-hero {
      background: linear-gradient(
        180deg,
        rgb(var(--accent) / 0.04) 0%,
        transparent 50%,
        rgb(var(--bg-secondary)) 100%
      );
    }

    .page-hero-dots {
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgb(var(--accent) / 0.12) 1px, transparent 1px);
      background-size: 22px 22px;
      mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 80%);
      -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 80%);
      pointer-events: none;
      opacity: 0.7;
    }

    .page-hero-title {
      font-family: 'Space Grotesk', system-ui, sans-serif;
      font-size: clamp(2.25rem, 5vw, 3.5rem);
      font-weight: 700;
      letter-spacing: -0.025em;
      line-height: 1.05;
      color: rgb(var(--text-primary));
      background: linear-gradient(
        180deg,
        rgb(var(--text-primary)) 0%,
        rgb(var(--text-primary) / 0.78) 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
    }

    :host-context([data-theme='light']) .page-hero-title,
    :host-context([data-theme='soft']) .page-hero-title {
      background: linear-gradient(
        180deg,
        rgb(var(--text-primary)) 0%,
        rgb(var(--accent) / 0.85) 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .page-hero-line {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: min(72rem, 100%);
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent,
        rgb(var(--accent) / 0.5) 35%,
        rgb(var(--accent-secondary) / 0.5) 65%,
        transparent
      );
    }
  `,
})
export class PageHeroComponent {
  readonly label = input('Portfolio');
  readonly title = input.required<string>();
  readonly description = input('');
  readonly breadcrumb = input('');
}
