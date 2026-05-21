import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PageHeroComponent } from '../../../shared/components/page-hero/page-hero.component';
import { PortfolioService } from '../../../services/portfolio.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ReactiveFormsModule, PageHeroComponent],
  templateUrl: './contact-page.component.html',
})
export class ContactPageComponent {
  readonly portfolio = inject(PortfolioService);
  private readonly fb = inject(FormBuilder);

  readonly submitted = signal(false);
  readonly submitting = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    projectType: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  readonly projectTypes = [
    'Flutter Mobile App',
    'Angular Web App',
    'Full Stack Project',
    'API Integration',
    'Consulting',
    'Other',
  ];

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting.set(true);
    setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
      this.form.reset();
    }, 1200);
  }
}
