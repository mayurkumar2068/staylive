import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../../services/portfolio.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { TiltCardDirective } from '../../../../shared/directives/tilt-card.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeaderComponent, RevealOnScrollDirective, TiltCardDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly portfolio = inject(PortfolioService);
}
