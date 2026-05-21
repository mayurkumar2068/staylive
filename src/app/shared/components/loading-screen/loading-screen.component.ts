import { Component, inject } from '@angular/core';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  template: `
    @if (loading.isLoading()) {
      <div class="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-bg-primary transition-opacity duration-500">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center text-white font-bold mb-6 animate-pulse">
          M
        </div>
        <p class="font-display text-lg font-semibold text-text-primary">Mayur Bobade</p>
        <p class="text-text-subtle text-sm mt-1">Loading...</p>
      </div>
    }
  `,
})
export class LoadingScreenComponent {
  readonly loading = inject(LoadingService);
}
