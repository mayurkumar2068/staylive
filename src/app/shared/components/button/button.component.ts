import { Component, input, output } from '@angular/core';
import { MagneticDirective } from '../../directives/magnetic.directive';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MagneticDirective],
  template: `
    @if (href()) {
      <a
        [href]="href()"
        [target]="external() ? '_blank' : '_self'"
        [rel]="external() ? 'noopener noreferrer' : null"
        [class]="classes()"
        appMagnetic
      >
        <ng-content />
      </a>
    } @else {
      <button [type]="type()" [class]="classes()" appMagnetic (click)="clicked.emit()">
        <ng-content />
      </button>
    }
  `,
})
export class ButtonComponent {
  readonly variant = input<'primary' | 'secondary' | 'ghost' | 'outline'>('primary');
  readonly size = input<'sm' | 'md' | 'lg'>('md');
  readonly href = input<string | null>(null);
  readonly external = input(false);
  readonly type = input<'button' | 'submit'>('button');
  readonly clicked = output<void>();

  classes(): string {
    const base =
      'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer';
    const sizes = {
      sm: 'px-5 py-2 text-sm',
      md: 'px-7 py-3 text-base',
      lg: 'px-9 py-4 text-lg',
    };
    const variants = {
      primary:
        'bg-gradient-to-r from-accent to-accent-secondary text-bg-primary hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] hover:scale-105',
      secondary: 'glass text-text-primary hover:border-accent/50 hover:neon-glow',
      ghost: 'text-text-muted hover:text-accent',
      outline:
        'border border-accent/40 text-accent hover:bg-accent/10 hover:border-accent',
    };
    return `${base} ${sizes[this.size()]} ${variants[this.variant()]}`;
  }
}
