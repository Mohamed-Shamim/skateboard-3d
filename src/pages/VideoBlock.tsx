// VideoBlock.tsx
import React from "react";
import { LazyYouTubePlayer } from "@/components/LazyYouTubePlayer";
import clsx from "clsx";

const MASK_CLASSES =
  "[mask-image:url(/video-mask.png)] [mask-mode:alpha] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] ";

const VideoBlock = () => {
  return (
    <div className="bg-texture bg-zinc-900 py-8 overflow-hidden px-4">
      <h2 className="sr-only">Video Reel</h2>
      <div className="relative aspect-video max-w-7xl px-2 mx-auto">
        {/* mask */}
        <div
          className={clsx(
            MASK_CLASSES,
            "bg-brand-lime  absolute inset-0  translate-x-2 -translate-y-1 "
          )}
        />{" "}
        <div
          className={clsx(
            MASK_CLASSES,
            "bg-white absolute inset-0  translate-x-0.5 -translate-y-0.5 "
          )}
        />
        {/* Provide a valid YouTube video ID */}
        <div className={clsx(MASK_CLASSES, "relative h-full ")}>
          <LazyYouTubePlayer youTubeID="44I29krtxaw" />{" "}
          <img
            src="/image-texture.png"
            alt=""
            className="pointer-events-none object-center opacity-55  "
          />
        </div>
      </div>
    </div>
  );
};

export default VideoBlock;
