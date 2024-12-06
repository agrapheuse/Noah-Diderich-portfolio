"use client";

import { Career } from "@/components/Career";
import { ContactMe } from "@/components/ContactMe";
import { HeroSection } from "@/components/HeroSection";
import { Skills } from "@/components/Skills";
import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x6a5717,
          midtoneColor: 0xbd250d,
          lowlightColor: 0x3719b8,
          baseColor: 0x292929,
          blurFactor: 0.4,
          speed: 2,
          zoom: 3.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="min-h-screen">
      <header className="bg-foreground shadow">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-6xl font-bold text-background-font-color text-center leading-relaxed text-gray-200 font-[family-name:var(--font-geist-mono)]">
            Noah
            <br />
            Diderich
          </h1>
        </div>
      </header>

      <HeroSection></HeroSection>
      <Career></Career>
      <Skills></Skills>
      <ContactMe></ContactMe>

      <footer className="bg-foreground text-gray-200 py-6">
        <div className="bg-foreground container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
