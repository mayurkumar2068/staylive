import { isPlatformBrowser } from '@angular/common';
import { Component, OnDestroy, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  template: `
    @if (visible()) {
      <div
        class="fixed pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        [style.left.px]="x() - 8"
        [style.top.px]="y() - 8"
      >
        <div
          class="w-4 h-4 rounded-full bg-accent transition-transform duration-150"
          [class.scale-150]="hovering()"
        ></div>
      </div>
      <div
        class="fixed pointer-events-none z-[9998] hidden md:block"
        [style.left.px]="glowX() - 150"
        [style.top.px]="glowY() - 150"
      >
        <div
          class="w-[300px] h-[300px] rounded-full opacity-20 blur-3xl transition-opacity duration-300"
          [style.background]="'radial-gradient(circle, rgba(0,245,255,0.4) 0%, transparent 70%)'"
        ></div>
      </div>
    }
  `,
})
export class CustomCursorComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);

  readonly x = signal(0);
  readonly y = signal(0);
  readonly glowX = signal(0);
  readonly glowY = signal(0);
  readonly hovering = signal(false);
  readonly visible = signal(false);

  private moveHandler = (e: MouseEvent) => this.onMove(e);
  private overHandler = () => this.hovering.set(true);
  private outHandler = () => this.hovering.set(false);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.visible.set(true);
    document.addEventListener('mousemove', this.moveHandler);
    document.querySelectorAll('a, button, [appMagnetic]').forEach((el) => {
      el.addEventListener('mouseenter', this.overHandler);
      el.addEventListener('mouseleave', this.outHandler);
    });
  }

  ngOnDestroy(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    document.removeEventListener('mousemove', this.moveHandler);
  }

  private onMove(e: MouseEvent): void {
    this.x.set(e.clientX);
    this.y.set(e.clientY);
    this.glowX.set(e.clientX);
    this.glowY.set(e.clientY);
  }
}
