import { Component, inject } from '@angular/core';
import { PageHeroComponent } from '../../../shared/components/page-hero/page-hero.component';
import { PortfolioService } from '../../../services/portfolio.service';

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [PageHeroComponent],
  templateUrl: './skills-page.component.html',
})
export class SkillsPageComponent {
  readonly portfolio = inject(PortfolioService);
}
