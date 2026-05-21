import { isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../../shared/components/page-hero/page-hero.component';
import { PortfolioService } from '../../../services/portfolio.service';
import { Project, ProjectCategory } from '../../../models/portfolio.models';
import { modalAnimation } from '../../../animations/animations';
import { SpotlightDirective } from '../../../shared/directives/spotlight.directive';
import { MagneticDirective } from '../../../shared/directives/magnetic.directive';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [PageHeroComponent, RouterLink, SpotlightDirective, MagneticDirective],
  animations: [modalAnimation],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
})
export class ProjectsPageComponent {
  readonly portfolio = inject(PortfolioService);
  private readonly platformId = inject(PLATFORM_ID);
  readonly selectedProject = signal<Project | null>(null);

  setCategory(cat: ProjectCategory): void {
    this.portfolio.setCategory(cat);
  }

  openProject(project: Project): void {
    this.selectedProject.set(project);
    if (isPlatformBrowser(this.platformId)) document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProject.set(null);
    if (isPlatformBrowser(this.platformId)) document.body.style.overflow = '';
  }
}
