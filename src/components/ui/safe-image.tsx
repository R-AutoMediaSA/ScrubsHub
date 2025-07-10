"use client";

import { useState, useEffect } from "react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function SafeImage({ src, alt, className = "" }: SafeImageProps) {
  // Only load the image on the client side to avoid hydration issues
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // During SSR and early client rendering, use a placeholder
  if (!isClient) {
    return (
      <div
        className={`${className} bg-muted`}
        aria-label={alt}
      />
    );
  }

  // Once mounted on client, render the image properly
  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  );
}
