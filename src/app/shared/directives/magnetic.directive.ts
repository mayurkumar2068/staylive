import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

/**
 * Adds a magnetic hover effect to any element — the target gently moves
 * toward the cursor on hover and animates back to rest on leave.
 */
@Directive({
  selector: '[appMagnetic]',
  standalone: true,
  host: {
    '[style.transition]': "'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)'",
    '[style.will-change]': "'transform'",
  },
})
export class MagneticDirective {
  private readonly el = inject(ElementRef<HTMLElement>);
  readonly strength = input<number>(0.35);

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const host = this.el.nativeElement;
    const rect = host.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    const s = this.strength();
    host.style.transform = `translate(${x * s}px, ${y * s}px)`;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.transform = 'translate(0, 0)';
  }
}
