import { Component, input } from '@angular/core';

@Component({
  selector: 'app-photo-frame',
  standalone: true,
  template: `
    <figure
      class="photo-frame group relative overflow-hidden rounded-3xl"
      [class.photo-frame--tall]="tall()"
    >
      <!-- Theme-aware bottom gradient (dark in dark mode, light in light mode) -->
      <div class="photo-overlay absolute inset-0 z-10 pointer-events-none"></div>

      <!-- Corner accent decoration -->
      <div class="photo-corner-tl"></div>
      <div class="photo-corner-br"></div>

      <img
        [src]="src()"
        [alt]="alt()"
        class="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.04]"
        [style.object-position]="objectPosition()"
        loading="lazy"
      />

      @if (caption()) {
        <figcaption class="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-6">
          <div class="caption-card">
            @if (location()) {
              <p class="caption-location">
                <span class="caption-dot"></span>
                {{ location() }}
              </p>
            }
            <p class="caption-title">{{ caption() }}</p>
          </div>
        </figcaption>
      }
    </figure>
  `,
  styles: `
    .photo-frame {
      min-height: 320px;
      background: rgb(var(--bg-elevated));
      box-shadow: 0 0 0 1px var(--line), 0 16px 48px rgba(0, 0, 0, 0.25);
      transition: box-shadow 0.4s ease, transform 0.4s ease;
    }

    .photo-frame--tall {
      min-height: 500px;
    }

    .photo-frame img {
      min-height: inherit;
    }

    .photo-frame:hover {
      box-shadow:
        0 0 0 1px rgb(var(--accent) / 0.3),
        0 24px 60px rgba(0, 0, 0, 0.3);
    }

    /* Dark mode bottom fade */
    .photo-overlay {
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.85) 0%,
        rgba(0, 0, 0, 0.35) 35%,
        transparent 65%
      );
    }

    /* Light + Soft modes: subtle white/cream fade so caption stays readable without dirty purple wash */
    :host-context([data-theme='light']) .photo-overlay,
    :host-context([data-theme='soft']) .photo-overlay {
      background: linear-gradient(
        to top,
        rgba(15, 23, 42, 0.78) 0%,
        rgba(15, 23, 42, 0.25) 35%,
        transparent 65%
      );
    }

    /* Decorative corner accents */
    .photo-corner-tl,
    .photo-corner-br {
      position: absolute;
      width: 32px;
      height: 32px;
      z-index: 15;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .photo-corner-tl {
      top: 12px;
      left: 12px;
      border-top: 2px solid rgb(var(--accent-cyan) / 0.7);
      border-left: 2px solid rgb(var(--accent-cyan) / 0.7);
      border-top-left-radius: 8px;
    }

    .photo-corner-br {
      bottom: 12px;
      right: 12px;
      border-bottom: 2px solid rgb(var(--accent) / 0.7);
      border-right: 2px solid rgb(var(--accent) / 0.7);
      border-bottom-right-radius: 8px;
    }

    .photo-frame:hover .photo-corner-tl,
    .photo-frame:hover .photo-corner-br {
      opacity: 1;
    }

    /* Caption pill */
    .caption-card {
      display: inline-flex;
      flex-direction: column;
      gap: 2px;
      padding: 12px 16px;
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border: 1px solid rgba(255, 255, 255, 0.15);
    }

    .caption-location {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #67e8f9;
    }

    .caption-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #67e8f9;
      box-shadow: 0 0 8px #67e8f9;
    }

    .caption-title {
      font-size: 14px;
      font-weight: 600;
      color: #fff;
      letter-spacing: -0.01em;
    }
  `,
})
export class PhotoFrameComponent {
  readonly src = input.required<string>();
  readonly alt = input('Mayur Bobade');
  readonly caption = input('');
  readonly location = input('');
  readonly tall = input(false);
  readonly objectPosition = input('center center');
}
