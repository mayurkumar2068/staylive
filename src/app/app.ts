import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { LoadingService } from './services/loading.service';
import { ScrollService } from './services/scroll.service';
import { PROFILE, MAYUR_PHOTOS } from './data/portfolio.data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly loading = inject(LoadingService);
  private readonly scroll = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.title.setTitle(`${PROFILE.name} | ${PROFILE.title}`);
    this.meta.updateTag({ name: 'description', content: PROFILE.tagline });
    this.meta.updateTag({ property: 'og:title', content: `${PROFILE.name} | ${PROFILE.title}` });
    this.meta.updateTag({ property: 'og:description', content: PROFILE.tagline });
    this.meta.updateTag({ property: 'og:image', content: MAYUR_PHOTOS.og });

    if (isPlatformBrowser(this.platformId)) {
      this.scroll.init();
      setTimeout(() => this.loading.complete(), 1200);
    } else {
      this.loading.complete();
    }
  }
}
