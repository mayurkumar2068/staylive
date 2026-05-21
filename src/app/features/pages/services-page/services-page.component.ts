import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../../shared/components/page-hero/page-hero.component';
import { PortfolioService } from '../../../services/portfolio.service';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [PageHeroComponent, RouterLink],
  templateUrl: './services-page.component.html',
})
export class ServicesPageComponent {
  readonly portfolio = inject(PortfolioService);
}
