import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollProgressComponent } from '../../shared/components/scroll-progress/scroll-progress.component';
import { LoadingScreenComponent } from '../../shared/components/loading-screen/loading-screen.component';
import { AuroraBackgroundComponent } from '../../shared/components/aurora-background/aurora-background.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ScrollProgressComponent,
    LoadingScreenComponent,
    AuroraBackgroundComponent,
  ],
  template: `
    <app-aurora-background />
    <app-loading-screen />
    <app-scroll-progress />
    <div class="flex flex-col min-h-screen">
      <app-header />
      <main class="flex-1">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
})
export class MainLayoutComponent {}
