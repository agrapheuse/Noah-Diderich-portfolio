"use client";

import { Career } from "@/components/Career";
import { ContactMe } from "@/components/ContactMe";
import { HeroSection } from "@/components/HeroSection";
import { Skills } from "@/components/Skills";
import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
          minHeight: 200.0,
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

  const links = {
    aboutMe: {
      name: "About Me",
      link: "#about-me",
    },
    career: {
      name: "My Career",
      link: "#career",
    },
    skills: {
      name: "My Skills",
      link: "#skills",
    },
    contactMe: {
      name: "Contact Me",
      link: "#contact-me",
    },
  };

  return (
    <div /*ref={vantaRef}*/ className="">
      <NavBar word1="Noah" word2="Diderich" links={links} />

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
      <Footer />
    </div>
  );
}
