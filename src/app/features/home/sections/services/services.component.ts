import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../../services/portfolio.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { TiltCardDirective } from '../../../../shared/directives/tilt-card.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [SectionHeaderComponent, RevealOnScrollDirective, TiltCardDirective],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  readonly portfolio = inject(PortfolioService);
}
