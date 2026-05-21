import { Component, ChangeDetectionStrategy, HostListener, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-aurora-background',
  standalone: true,
  template: `
    <div class="aurora-root" aria-hidden="true">
      <!-- Aurora layers -->
      <div class="aurora aurora--one"></div>
      <div class="aurora aurora--two"></div>
      <div class="aurora aurora--three"></div>

      <!-- Animated grid -->
      <div class="aurora-grid"></div>

      <!-- Mouse-reactive spotlight -->
      <div
        class="aurora-spotlight"
        [style.--mx.px]="mouseX()"
        [style.--my.px]="mouseY()"
      ></div>

      <!-- Floating particles -->
      <div class="aurora-particles">
        @for (i of particles; track i) {
          <span
            class="particle"
            [style.--i]="i"
            [style.--delay]="i * 0.4 + 's'"
            [style.--dur]="(12 + (i % 6) * 2) + 's'"
          ></span>
        }
      </div>
    </div>
  `,
  styles: `
    :host {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: -1;
      overflow: hidden;
    }

    .aurora-root {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }

    /* --- Aurora blobs --- */
    .aurora {
      position: absolute;
      border-radius: 50%;
      filter: blur(90px);
      mix-blend-mode: screen;
      will-change: transform, opacity;
      animation: aurora-drift 26s ease-in-out infinite;
    }

    .aurora--one {
      top: -10%;
      left: -10%;
      width: 56vw;
      height: 56vw;
      background: radial-gradient(circle, rgb(var(--accent) / 0.55), transparent 60%);
      animation-delay: 0s;
    }

    .aurora--two {
      top: 25%;
      right: -15%;
      width: 50vw;
      height: 50vw;
      background: radial-gradient(circle, rgb(var(--accent-secondary) / 0.45), transparent 60%);
      animation-delay: -8s;
      animation-duration: 32s;
    }

    .aurora--three {
      bottom: -10%;
      left: 25%;
      width: 60vw;
      height: 60vw;
      background: radial-gradient(circle, rgb(var(--accent-cyan) / 0.35), transparent 60%);
      animation-delay: -16s;
      animation-duration: 38s;
    }

    /* Light/Soft mode — lighter aurora */
    :host-context([data-theme='light']) .aurora,
    :host-context([data-theme='soft']) .aurora {
      filter: blur(110px);
      mix-blend-mode: multiply;
      opacity: 0.45;
    }

    @keyframes aurora-drift {
      0%, 100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.85;
      }
      33% {
        transform: translate(6%, -4%) scale(1.08);
        opacity: 1;
      }
      66% {
        transform: translate(-5%, 6%) scale(0.95);
        opacity: 0.7;
      }
    }

    /* --- Animated grid --- */
    .aurora-grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgb(var(--accent) / 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgb(var(--accent) / 0.05) 1px, transparent 1px);
      background-size: 80px 80px;
      mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, #000 30%, transparent 80%);
      -webkit-mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, #000 30%, transparent 80%);
      animation: grid-pan 60s linear infinite;
    }

    @keyframes grid-pan {
      from { background-position: 0 0; }
      to { background-position: 80px 80px; }
    }

    /* --- Mouse spotlight --- */
    .aurora-spotlight {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      background: radial-gradient(
        600px circle at var(--mx, 50%) var(--my, 50%),
        rgb(var(--accent) / 0.10),
        transparent 55%
      );
      transition: background 0.18s ease;
      opacity: 0.9;
    }

    /* --- Floating particles --- */
    .aurora-particles {
      position: absolute;
      inset: 0;
    }

    .particle {
      position: absolute;
      top: calc(var(--i) * 4.5%);
      left: calc(var(--i) * 4.3%);
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: rgb(var(--accent) / 0.6);
      box-shadow: 0 0 10px rgb(var(--accent) / 0.5);
      opacity: 0;
      animation: particle-float var(--dur, 14s) linear infinite;
      animation-delay: var(--delay, 0s);
    }

    .particle:nth-child(3n) { background: rgb(var(--accent-cyan) / 0.7); box-shadow: 0 0 10px rgb(var(--accent-cyan) / 0.5); }
    .particle:nth-child(5n) { background: rgb(var(--accent-secondary) / 0.7); box-shadow: 0 0 10px rgb(var(--accent-secondary) / 0.5); }

    @keyframes particle-float {
      0% {
        transform: translateY(20vh) translateX(0) scale(0);
        opacity: 0;
      }
      10% {
        opacity: 1;
        transform: translateY(10vh) translateX(0) scale(1);
      }
      90% {
        opacity: 1;
        transform: translateY(-80vh) translateX(40px) scale(0.6);
      }
      100% {
        transform: translateY(-100vh) translateX(60px) scale(0);
        opacity: 0;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .aurora, .aurora-grid, .particle { animation: none !important; }
      .aurora-spotlight { display: none; }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuroraBackgroundComponent {
  private readonly doc = inject(DOCUMENT);
  readonly mouseX = signal(0);
  readonly mouseY = signal(0);
  readonly particles = Array.from({ length: 22 }, (_, i) => i);

  @HostListener('document:pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    this.mouseX.set(event.clientX);
    this.mouseY.set(event.clientY);
  }
}
