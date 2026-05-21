import { Component, input } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: `
    <div class="text-center mb-16 md:mb-20" appRevealOnScroll>
      @if (badge()) {
        <span
          class="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full border border-accent/30 text-accent bg-accent/5"
        >
          {{ badge() }}
        </span>
      }
      <h2 class="font-display text-3xl md:text-5xl font-bold mb-4">
        <span class="gradient-text">{{ title() }}</span>
      </h2>
      @if (subtitle()) {
        <p class="text-text-muted text-lg max-w-2xl mx-auto">{{ subtitle() }}</p>
      }
    </div>
  `,
})
export class SectionHeaderComponent {
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
  readonly badge = input<string>('');
}
