"use client"

import { useEffect, useRef, useState } from "react";
import { SplineSceneBasic, NavBarDemo, DemoOne } from "@/components/ui/demo";

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [isHeroInView, setIsHeroInView] = useState(false);

  useEffect(() => {
    if (!heroRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsHeroInView(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.35,
      }
    );
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <NavBarDemo variant={isHeroInView ? "hero" : "default"} />
      <SplineSceneBasic />
      <section ref={heroRef}>
        <DemoOne />
      </section>
    </main>
  );
}
