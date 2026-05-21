import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

export type Theme = 'dark' | 'light' | 'soft';

const THEME_ORDER: Theme[] = ['dark', 'light', 'soft'];

const THEME_META: Record<Theme, { label: string; color: string; colorScheme: 'dark' | 'light' }> = {
  dark: { label: 'Dark', color: '#06060b', colorScheme: 'dark' },
  light: { label: 'Light', color: '#f0f4ff', colorScheme: 'light' },
  soft: { label: 'Soft', color: '#faf6f1', colorScheme: 'light' },
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  readonly theme = signal<Theme>('dark');
  readonly themeLabel = signal(THEME_META.dark.label);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem('portfolio-theme') as Theme | null;
      if (stored && THEME_ORDER.includes(stored)) {
        this.applyTheme(stored, false);
      } else {
        this.applyTheme('dark', false);
      }
    }
  }

  toggle(): void {
    const idx = THEME_ORDER.indexOf(this.theme());
    const next = THEME_ORDER[(idx + 1) % THEME_ORDER.length];
    this.setTheme(next);
  }

  setTheme(theme: Theme): void {
    this.applyTheme(theme, true);
  }

  private applyTheme(theme: Theme, persist: boolean): void {
    this.theme.set(theme);
    this.themeLabel.set(THEME_META[theme].label);

    if (!isPlatformBrowser(this.platformId)) return;

    const html = this.document.documentElement;
    const body = this.document.body;

    html.classList.remove('light-theme', 'soft-theme');
    body.classList.remove('light-theme', 'soft-theme');

    if (theme === 'light') {
      html.classList.add('light-theme');
      body.classList.add('light-theme');
    } else if (theme === 'soft') {
      html.classList.add('soft-theme');
      body.classList.add('soft-theme');
    }

    html.setAttribute('data-theme', theme);
    html.style.colorScheme = THEME_META[theme].colorScheme;

    const meta = this.document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', THEME_META[theme].color);

    if (persist) {
      localStorage.setItem('portfolio-theme', theme);
    }
  }
}
