import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  readonly isLoading = signal(true);

  complete(): void {
    this.isLoading.set(false);
  }
}
