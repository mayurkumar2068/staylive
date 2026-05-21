import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, HostListener, PLATFORM_ID, inject } from '@angular/core';

@Directive({
  selector: '[appTiltCard]',
  standalone: true,
})
export class TiltCardDirective {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);

  @HostListener('mousemove', ['$event'])
  onMove(event: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const card = this.el.nativeElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }

  @HostListener('mouseleave')
  onLeave(): void {
    this.el.nativeElement.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  }
}
