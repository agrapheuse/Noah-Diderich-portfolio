"use client";

import { Career } from "@/components/Career";
import { ContactMe } from "@/components/ContactMe";
import { HeroSection } from "@/components/HeroSection";
import { Skills } from "@/components/Skills";
import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 400.0,
          minWidth: 200.0,
          highlightColor: 0x6a5717,
          midtoneColor: 0xbd250d,
          lowlightColor: 0x3719b8,
          baseColor: 0x292929,
          blurFactor: 0.4,
          speed: 1.5,
          zoom: 3.0,
        })
      );
    }
    return () => {
      if (vantaEffect) setVantaEffect(null);
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="">
      <header className="bg-middleground">
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-6xl font-bold text-background-font-color text-center leading-relaxed text-gray-200 font-[family-name:var(--font-geist-mono)]">
            Noah
            <br />
            Diderich
          </h1>
        </div>
        <div className="sticky top-10 flex justify-between items-center w-auto px-48 m-6 mt-20 bg-middleground ">
          <a
            href="#about-me"
            className="text-gray-200 font-[family-name:var(--font-geist-mono)] hover:underline hover:text-gray-300"
          >
            About Me
          </a>
          <a
            href="#career"
            className="text-gray-200 font-[family-name:var(--font-geist-mono)] hover:underline hover:text-gray-300"
          >
            My Career
          </a>
          <a
            href="#skills"
            className="text-gray-200 font-[family-name:var(--font-geist-mono)] hover:underline hover:text-gray-300"
          >
            My Skills
          </a>
          <a
            href="#contact-me"
            className="text-gray-200 font-[family-name:var(--font-geist-mono)] hover:underline hover:text-gray-300"
          >
            Contact Me
          </a>
        </div>
      </header>

      <section className="py-80">
        <HeroSection />
      </section>
      <section className="py-80">
        <Career />
      </section>
      <section className="py-80">
        <Skills />
      </section>
      <section className="pt-80 pb-40">
        <ContactMe />
      </section>

      <footer className="bg-middleground text-gray-200 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
