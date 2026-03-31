import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Aspect ratio class like "aspect-video" or "aspect-[16/10]" */
  wrapperClassName?: string;
  /** Fallback content when no src */
  fallback?: React.ReactNode;
}

export function BlurImage({
  src,
  alt,
  className,
  wrapperClassName,
  fallback,
  ...props
}: BlurImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Reset state when src changes
  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [src]);

  // Handle already-cached images (complete before onLoad fires)
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  if (!src || error) {
    return (
      <div className={cn('bg-muted flex items-center justify-center', wrapperClassName)}>
        {fallback}
      </div>
    );
  }

  return (
    <div className={cn('bg-muted overflow-hidden relative', wrapperClassName)}>
      {/* Placeholder pulse - visible until image loads */}
      {!loaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt || ''}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={cn(
          'w-full h-full transition-opacity duration-300',
          loaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        {...props}
      />
    </div>
  );
}
