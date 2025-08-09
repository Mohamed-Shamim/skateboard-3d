// LazyYouTubePlayer.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type VideoProps = {
  youTubeID: string;
};

export function LazyYouTubePlayer({ youTubeID }: VideoProps) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainerRef = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0, rootMargin: "1500px" }
    );

    if (currentContainerRef) {
      observer.observe(currentContainerRef);
    }

    return () => {
      if (currentContainerRef) {
        observer.unobserve(currentContainerRef);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full aspect-video">
      {isInView && (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youTubeID}?autoplay=1&mute=1&loop=1&playlist=${youTubeID}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="pointer-events-none h-full w-full border-0"
        />
      )}
    </div>
  );
}
