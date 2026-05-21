import { Directive, ElementRef, HostListener, inject } from '@angular/core';

/**
 * Cursor-following radial spotlight effect on cards.
 * The host element should set `position: relative` and include a
 * `::before` rule using `--spot-x`, `--spot-y` to render the glow.
 */
@Directive({
  selector: '[appSpotlight]',
  standalone: true,
  host: {
    '[class.spotlight-host]': 'true',
    '[style.--spot-x]': '"-200px"',
    '[style.--spot-y]': '"-200px"',
  },
})
export class SpotlightDirective {
  private readonly el = inject(ElementRef<HTMLElement>);

  @HostListener('pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    const host = this.el.nativeElement;
    const rect = host.getBoundingClientRect();
    host.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
    host.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
  }

  @HostListener('pointerleave')
  onPointerLeave(): void {
    this.el.nativeElement.style.setProperty('--spot-x', '-200px');
    this.el.nativeElement.style.setProperty('--spot-y', '-200px');
  }
}
