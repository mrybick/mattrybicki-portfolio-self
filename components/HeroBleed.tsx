"use client";

import { useEffect, useRef } from "react";

export default function HeroBleed() {
  const bleedRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const bleed = bleedRef.current;
    if (!bleed) return;
    const hero = bleed.closest("section");
    if (!hero) return;

    function fit() {
      if (!bleed || !hero) return;

      const target = hero.clientHeight - 8;
      let size = Math.floor(target * 0.95);
      bleed.style.fontSize = size + "px";
      // shrink loop: while text overflows, scale down 4%
      for (let i = 0; i < 60 && bleed.scrollHeight > target; i++) {
        size = Math.floor(size * 0.96);
        bleed.style.fontSize = size + "px";
      }

      //bump-up loop: if we have slack, grow 4% to maximize bleed
      for (let i = 0; i < 6 && bleed.scrollHeight < target * 0.94; i++) {
        size = Math.floor(size * 1.04);
        bleed.style.fontSize = size + "px";
        if (bleed.scrollHeight > target) {
          size = Math.floor(size * 0.96);
          bleed.style.fontSize = size + "px";
          break;
        }
      }
    }

    fit();
    window.addEventListener("resize", fit);

    return () => {
      window.removeEventListener("resize", fit);
    };
  }, []);
  return (
    <div
      ref={bleedRef}
      aria-hidden="true"
      className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] font-sans font-black text-[25vh] leading-[0.86] tracking-[-0.07em] text-foreground whitespace-nowrap select-none pointer-events-none"
    >
      Rybicki.
    </div>
  );
}
