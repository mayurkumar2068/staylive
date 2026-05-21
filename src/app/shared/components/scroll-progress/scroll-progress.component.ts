import { Component, inject } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  template: `
    <div class="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-white/5">
      <div
        class="h-full bg-gradient-to-r from-accent to-accent-secondary transition-all duration-150"
        [style.width.%]="scroll.scrollProgress()"
      ></div>
    </div>
  `,
})
export class ScrollProgressComponent {
  readonly scroll = inject(ScrollService);
}
