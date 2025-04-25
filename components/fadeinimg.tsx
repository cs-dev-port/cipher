"use client";

import { animate, cubicBezier } from "motion";
import { useEffect, useRef } from "react";

export default function FadeInImage() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    animate(
      imgRef.current,
      {
        opacity: [0, 5, 1],
        transform: ["translateY(20px)", "translateY(0)"],
      },
      {
        duration: 1,
        easing: cubicBezier(0.0, 0.0, 0.2, 1), // ease-out
      } as any
    );
  }, []);

  return (
    <img
      ref={imgRef}
      src="/ces.png"
      alt="CES Logo"
      className="w-64 h-auto max-w-full mx-auto mt-6"
    />
  );
}
