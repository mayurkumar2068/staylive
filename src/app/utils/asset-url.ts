/**
 * Paths for files under src/assets. Omit the leading slash so URLs resolve
 * against <base href> (works locally and on GitHub Pages /staylive/).
 */
export function asset(path: string): string {
  const normalized = path.replace(/^\/+/, '');
  return normalized.startsWith('assets/') ? normalized : `assets/${normalized}`;
}
