"use client"

import { useEffect, useRef, useState } from "react";
import { SplineSceneBasic, NavBarDemo, DemoOne, DemoTwo } from "@/components/ui/demo";

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
      
      <DemoTwo />
      <section className="relative isolate overflow-hidden min-h-screen bg-black text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:6rem_5rem]"
        />
        <DemoOne />
     
      </section>
    </main>
  );
}
