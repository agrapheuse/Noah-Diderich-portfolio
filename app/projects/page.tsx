"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import { Card } from "@/components/ui/card";

import TTSS1 from "@/app/public/tasktroveSS1.png";

export default function Projects() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const navBarRef = useRef(null);

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
              href="#frontend"
              className="text-gray-200 font-[family-name:var(--font-geist-mono)] hover:underline hover:text-gray-300"
            >
              Frontend Projects
            </a>
            <a
              href="#backend"
              className="text-gray-200 font-[family-name:var(--font-geist-mono)] hover:underline hover:text-gray-300"
            >
              Backend Projects
            </a>
            <a
              href="#other"
              className="text-gray-200 font-[family-name:var(--font-geist-mono)] hover:underline hover:text-gray-300"
            >
              Other Projects
            </a>
          </div>
        </div>
        <div
          className={`divider h-[2px] bg-gradient-to-r from-gray-600 via-gray-300 to-gray-600 transition-all duration-500 ${
            isSticky ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
      <h2 className="text-2xl text-gray-200 font-bold text-center font-[family-name:var(--font-geist-mono)]">
        Frontend
      </h2>
      <div
        id="frontend"
        className="min-h-screen flex flex-row divide-x divide-gray-700"
      >
        <div id="left-column" className="flex-1 p-4">
          <Card className="bg-background my-4">
            <h3 className="text-2xl text-gray-200 font-bold text-center font-[family-name:var(--font-geist-mono)] m-4">
              TaskTrove
            </h3>
            <Image
              src={TTSS1}
              alt="TaskTrove ScreenShot 1"
              width={window.innerWidth / 6}
              height={200}
              className="relative lg:shadow-md w-auto h-auto m-8 lg:px-0"
            />
            <text className="text-gray-200 font-bold text-center font-[family-name:var(--font-geist-mono)]">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum
              conubia rhoncus ornare sollicitudin sociosqu primis porttitor
              nostra. Eros convallis at sodales convallis mus nascetur praesent
              ornare penatibus. Tempor lorem erat lorem euismod quis porttitor
              purus. Eget facilisis mauris interdum porta in elementum. Lobortis
              sociosqu curabitur dolor himenaeos conubia! Dictumst ipsum amet
              condimentum luctus litora ridiculus. Lacinia aenean per hac montes
              proin in vel quam ridiculus. Auctor dis est malesuada per nisi mi.
            </text>
          </Card>
          <Card className="bg-background my-4">
            <h3 className="text-2xl text-gray-200 font-bold text-center font-[family-name:var(--font-geist-mono)]">
              Techtopia
            </h3>
            <Image
              src=""
              alt="TaskTrove ScreenShot 1"
              width={window.innerWidth / 6}
              height={200}
              className="relative lg:shadow-md w-auto h-auto m-8 lg:px-0"
            />
            <text className="text-gray-200 font-bold text-center font-[family-name:var(--font-geist-mono)]">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum
              conubia rhoncus ornare sollicitudin sociosqu primis porttitor
              nostra. Eros convallis at sodales convallis mus nascetur praesent
              ornare penatibus. Tempor lorem erat lorem euismod quis porttitor
              purus. Eget facilisis mauris interdum porta in elementum. Lobortis
              sociosqu curabitur dolor himenaeos conubia! Dictumst ipsum amet
              condimentum luctus litora ridiculus. Lacinia aenean per hac montes
              proin in vel quam ridiculus. Auctor dis est malesuada per nisi mi.
            </text>
          </Card>
        </div>
        <div id="right-column" className="flex-1 p-4">
          <Card className="bg-background mt-96">
            <h3 className="text-2xl text-gray-200 font-bold text-center font-[family-name:var(--font-geist-mono)]">
              CineTracker
            </h3>
            <Image
              src=""
              alt="TaskTrove ScreenShot 1"
              width={window.innerWidth / 6}
              height={200}
              className="relative lg:shadow-md w-auto h-auto m-8 lg:px-0"
            />
            <text className="text-gray-200 font-bold text-center font-[family-name:var(--font-geist-mono)]">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum
              conubia rhoncus ornare sollicitudin sociosqu primis porttitor
              nostra. Eros convallis at sodales convallis mus nascetur praesent
              ornare penatibus. Tempor lorem erat lorem euismod quis porttitor
              purus. Eget facilisis mauris interdum porta in elementum. Lobortis
              sociosqu curabitur dolor himenaeos conubia! Dictumst ipsum amet
              condimentum luctus litora ridiculus. Lacinia aenean per hac montes
              proin in vel quam ridiculus. Auctor dis est malesuada per nisi mi.
            </text>
          </Card>
        </div>
      </div>
      <h2 className="text-2xl text-gray-200 font-bold text-center font-[family-name:var(--font-geist-mono)]">
        Backend
      </h2>
      <div
        id="backend"
        className="min-h-screen flex flex-row divide-x divide-gray-700"
      >
        <div id="left-column" className="flex-1 p-4">
          <Card className="bg-background my-4">
            <h3 className="text-2xl text-gray-200 font-bold text-center font-[family-name:var(--font-geist-mono)]">
              Techtopia
            </h3>
            <Image
              src=""
              alt="TaskTrove ScreenShot 1"
              width={window.innerWidth / 6}
              height={200}
              className="relative lg:shadow-md w-auto h-auto m-8 lg:px-0"
            />
            <text className="text-gray-200 font-bold text-center font-[family-name:var(--font-geist-mono)]">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum
              conubia rhoncus ornare sollicitudin sociosqu primis porttitor
              nostra. Eros convallis at sodales convallis mus nascetur praesent
              ornare penatibus. Tempor lorem erat lorem euismod quis porttitor
              purus. Eget facilisis mauris interdum porta in elementum. Lobortis
              sociosqu curabitur dolor himenaeos conubia! Dictumst ipsum amet
              condimentum luctus litora ridiculus. Lacinia aenean per hac montes
              proin in vel quam ridiculus. Auctor dis est malesuada per nisi mi.
            </text>
          </Card>
        </div>
        <div id="right-column" className="flex-1 p-4">
          <Card className="bg-background mt-96">
            <h3 className="text-2xl text-gray-200 font-bold text-center font-[family-name:var(--font-geist-mono)]">
              CineTracker
            </h3>
            <Image
              src=""
              alt="TaskTrove ScreenShot 1"
              width={window.innerWidth / 6}
              height={200}
              className="relative lg:shadow-md w-auto h-auto m-8 lg:px-0"
            />
            <text className="text-gray-200 font-bold text-center font-[family-name:var(--font-geist-mono)]">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum
              conubia rhoncus ornare sollicitudin sociosqu primis porttitor
              nostra. Eros convallis at sodales convallis mus nascetur praesent
              ornare penatibus. Tempor lorem erat lorem euismod quis porttitor
              purus. Eget facilisis mauris interdum porta in elementum. Lobortis
              sociosqu curabitur dolor himenaeos conubia! Dictumst ipsum amet
              condimentum luctus litora ridiculus. Lacinia aenean per hac montes
              proin in vel quam ridiculus. Auctor dis est malesuada per nisi mi.
            </text>
          </Card>
        </div>
      </div>
    </div>
  );
}
