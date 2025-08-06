"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const images = [
  "https://source.unsplash.com/Pd8tLVGx2O4/200x250",
  "https://source.unsplash.com/CudNrzbsyZw/200x250",
  "https://source.unsplash.com/uEFombN3J5U/200x250",
  "https://source.unsplash.com/BjJP2TN8WoI/200x250",
];

export default function CustomCursor() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const boxes = containerRef.current?.querySelectorAll(".FollowBox");
    if (!boxes) return;

    gsap.set(boxes, { xPercent: -50, yPercent: -50, scale: 0 });

    const handleMove = (e: MouseEvent) => {
      gsap.to(boxes, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        stagger: 0.15,
        ease: "none",
      });

      const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "none" } });

      tl.to(boxes, {
        scale: 1,
        stagger: { amount: 0.15, from: "start" },
      });

      tl.to(
        boxes,
        {
          scale: 0,
          stagger: { amount: 0.15, from: "end" },
        },
        "<+=2.5"
      );
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      id="Wrap"
      ref={containerRef}
      className="fixed inset-0 overflow-hidden z-[9999] pointer-events-none"
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          className=" w-[200px] h-[250px] object-cover"
          alt=""
          style={{ zIndex: 4 - i }}
        />
      ))}
    </div>
  );
}
