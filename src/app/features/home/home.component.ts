import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ServicesComponent } from './sections/services/services.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { AchievementsComponent } from './sections/achievements/achievements.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ServicesComponent,
    TestimonialsComponent,
    AchievementsComponent,
    ContactComponent,
  ],
  template: `
    <main>
      <app-hero />
      <app-about />
      <app-skills />
      <app-experience />
      <app-projects />
      <app-services />
      <app-testimonials />
      <app-achievements />
      <app-contact />
    </main>
  `,
})
export class HomeComponent {}
