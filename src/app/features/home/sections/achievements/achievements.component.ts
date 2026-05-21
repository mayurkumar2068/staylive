import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../../services/portfolio.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [SectionHeaderComponent, RevealOnScrollDirective],
  templateUrl: './achievements.component.html',
})
export class AchievementsComponent {
  readonly portfolio = inject(PortfolioService);
}
