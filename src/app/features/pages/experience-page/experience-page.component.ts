import { Component, inject } from '@angular/core';
import { PageHeroComponent } from '../../../shared/components/page-hero/page-hero.component';
import { PortfolioService } from '../../../services/portfolio.service';

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [PageHeroComponent],
  templateUrl: './experience-page.component.html',
})
export class ExperiencePageComponent {
  readonly portfolio = inject(PortfolioService);
}
