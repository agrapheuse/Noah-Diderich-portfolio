"use client";

import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

export default function Projects() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const navBarRef = useRef(null);

  const [projectType, setProjectType] = useState("frontend");

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
      if (vantaEffect) setVantaEffect(null);
    };
  }, [vantaEffect]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      {
        root: null,
        threshold: 1.0,
      }
    );

    const target = navBarRef.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <div ref={vantaRef}>
      <header
        className={`min-h-10 ${isSticky ? "bg-background" : "bg-middleground"}`}
        style={{
          transition:
            "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        }}
      >
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-6xl font-bold text-background-font-color text-center leading-relaxed text-gray-200 font-[family-name:var(--font-geist-mono)]">
            My
            <br />
            Projects
          </h1>
        </div>
      </header>
      <div ref={navBarRef}></div>
      <div className={`sticky top-0 z-10`}>
        <div
          className={`w-auto lg:px-48 py-2 lg:py-6 transition-all duration-300 ${
            isSticky ? "bg-background shadow-xl" : "bg-middleground shadow-none"
          }`}
          style={{
            transition:
              "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center py-2">
            <a
              href="#about-me"
              className="text-gray-200 font-[family-name:var(--font-geist-mono)] hover:underline hover:text-gray-300"
            >
              Frontend Projects
            </a>
            <a
              href="#career"
              className="text-gray-200 font-[family-name:var(--font-geist-mono)] hover:underline hover:text-gray-300"
            >
              Backend Projects
            </a>
          </div>
        </div>
        <div
          className={`divider h-[2px] bg-gradient-to-r from-gray-600 via-gray-300 to-gray-600 transition-all duration-500 ${
            isSticky ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
      {projectType === "frontend" && (
        <div className="min-h-screen flex flex-col">
          <div></div>
          <div></div>
        </div>
      )}
      {projectType === "backend" && (
        <div className="min-h-screen flex flex-col">
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
}
