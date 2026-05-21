import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/pages/home-page/home-page.component').then((m) => m.HomePageComponent),
        title: 'Mayur Bobade | Full Stack Developer',
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./features/pages/about-page/about-page.component').then((m) => m.AboutPageComponent),
        title: 'About | Mayur Bobade',
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./features/pages/skills-page/skills-page.component').then((m) => m.SkillsPageComponent),
        title: 'Skills | Mayur Bobade',
      },
      {
        path: 'experience',
        loadComponent: () =>
          import('./features/pages/experience-page/experience-page.component').then((m) => m.ExperiencePageComponent),
        title: 'Experience | Mayur Bobade',
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./features/pages/projects-page/projects-page.component').then((m) => m.ProjectsPageComponent),
        title: 'Projects | Mayur Bobade',
      },
      {
        path: 'services',
        loadComponent: () =>
          import('./features/pages/services-page/services-page.component').then((m) => m.ServicesPageComponent),
        title: 'Services | Mayur Bobade',
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/pages/contact-page/contact-page.component').then((m) => m.ContactPageComponent),
        title: 'Contact | Mayur Bobade',
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
