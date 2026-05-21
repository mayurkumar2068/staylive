import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Theme, ThemeService } from '../../services/theme.service';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly portfolio = inject(PortfolioService);
  readonly theme = inject(ThemeService);
  readonly mobileOpen = signal(false);

  themeIcon(): string {
    const icons: Record<Theme, string> = {
      dark: '🌙',
      light: '☀️',
      soft: '🌿',
    };
    return icons[this.theme.theme()];
  }

  toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }
}
