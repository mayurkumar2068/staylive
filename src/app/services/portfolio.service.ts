import { Injectable, computed, signal } from '@angular/core';
import {
  ACHIEVEMENTS,
  AWARDS,
  CERTIFICATIONS,
  EXPERIENCES,
  NAV_LINKS,
  PROFILE,
  PROJECTS,
  PROJECT_CATEGORIES,
  SERVICES,
  SKILL_CATEGORIES,
  SOCIAL_LINKS,
  STATS,
  TESTIMONIALS,
  TECH_MARQUEE,
  HERO_TYPING_PHRASES,
  ABOUT_BIO,
  TIMELINE,
  CODE_SNIPPET,
  FLOATING_TECH,
  MAYUR_PHOTOS,
  PHOTO_GALLERY,
  EDUCATION,
  GITHUB,
} from '../data/portfolio.data';
import { PAGE_META, VALUE_PROPS, PROCESS_STEPS, SPECIALIZATIONS } from '../data/content.data';
import { ProjectCategory } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  readonly profile = PROFILE;
  readonly navLinks = NAV_LINKS;
  readonly socialLinks = SOCIAL_LINKS;
  readonly stats = STATS;
  readonly aboutBio = ABOUT_BIO;
  readonly timeline = TIMELINE;
  readonly skillCategories = SKILL_CATEGORIES;
  readonly techMarquee = TECH_MARQUEE;
  readonly experiences = EXPERIENCES;
  readonly projects = PROJECTS;
  readonly projectCategories = PROJECT_CATEGORIES;
  readonly services = SERVICES;
  readonly testimonials = TESTIMONIALS;
  readonly achievements = ACHIEVEMENTS;
  readonly heroTypingPhrases = HERO_TYPING_PHRASES;
  readonly codeSnippet = CODE_SNIPPET;
  readonly floatingTech = FLOATING_TECH;
  readonly photos = MAYUR_PHOTOS;
  readonly photoGallery = PHOTO_GALLERY;
  readonly pageMeta = PAGE_META;
  readonly valueProps = VALUE_PROPS;
  readonly processSteps = PROCESS_STEPS;
  readonly specializations = SPECIALIZATIONS;
  readonly awards = AWARDS;
  readonly certifications = CERTIFICATIONS;
  readonly education = EDUCATION;
  readonly github = GITHUB;
  readonly featuredProjects = this.projects.filter((p) => p.featured);

  readonly selectedCategory = signal<ProjectCategory>('all');

  readonly filteredProjects = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'all') return this.projects;
    return this.projects.filter((p) => p.category === cat);
  });

  setCategory(category: ProjectCategory): void {
    this.selectedCategory.set(category);
  }
}
