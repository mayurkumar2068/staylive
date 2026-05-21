import { isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { PortfolioService } from '../../../../services/portfolio.service';
import { Project, ProjectCategory } from '../../../../models/portfolio.models';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { TiltCardDirective } from '../../../../shared/directives/tilt-card.directive';
import { modalAnimation } from '../../../../animations/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionHeaderComponent, ButtonComponent, RevealOnScrollDirective, TiltCardDirective],
  animations: [modalAnimation],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly portfolio = inject(PortfolioService);
  private readonly platformId = inject(PLATFORM_ID);
  readonly selectedProject = signal<Project | null>(null);
  readonly spotlightX = signal(50);
  readonly spotlightY = signal(50);

  setCategory(cat: ProjectCategory): void {
    this.portfolio.setCategory(cat);
  }

  openProject(project: Project): void {
    this.selectedProject.set(project);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(): void {
    this.selectedProject.set(null);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  onCardMove(event: MouseEvent, card: HTMLElement): void {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    this.spotlightX.set(x);
    this.spotlightY.set(y);
  }
}
