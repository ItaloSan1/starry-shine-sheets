/**
 * Generate a thumbnail URL via wsrv.nl image proxy.
 * Resizes on-the-fly and converts to WebP for smaller payloads.
 * Only proxies GCS signed URLs; passes through everything else unchanged.
 */
export function thumbUrl(src: string | undefined, width = 400): string {
  if (!src) return '';
  // Only proxy GCS storage URLs (our signed URLs)
  if (!src.includes('storage.googleapis.com/')) return src;
  return `https://wsrv.nl/?url=${encodeURIComponent(src)}&w=${width}&output=webp&q=75`;
}
