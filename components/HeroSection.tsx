import Image from "next/image";
import profilePic from "@/app/public/profile-pic.jpg";
import { Card } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="section-style">
      <Card
        id="about-me"
        className="card-style mt-80 flex flex-col lg:flex-row pt-12 space-y-6 lg:space-y-0 lg:space-x-12"
      >
        <Image
          src={profilePic}
          alt="My Portfolio Image"
          width={isMobile ? 200 : 300}
          height={isMobile ? 200 : 300}
          className={`relative rounded-full lg:shadow-md w-auto h-auto m-8 lg:px-0 ${
            isMobile ? "px-8" : ""
          }`}
        />
        <div className="container mx-auto px-6">
          <h2 className="h2-style">About Me</h2>
          <p className="p-style">
            I am German and Luxembourgish but I was born and raised in Brussels.
            I was always passionate about science and technologies. I first
            wanted to become an astrophysicist so at school, I specialized in
            languages (French, English and German), but most importantly in
            physics and mathematics. When I graduated high school, I joined free
            University of Brussels (ULB) in the field of physics to follow my
            dream. I got to the second year and my passion for physics started
            to diminish, I however had a IT class where we discovered Python and
            I loved it.
          </p>
          <p className="p-style">
            I then decided to make a full 180 and applied to the Karel de Grote
            Hogeschol (KdG). I moved to Antwerp and started a new life as a
            developer. Now I have finished my degree and I am still just as
            invested in IT as I was when I first discovered it. I am specialized
            in full-stack development but I have good knowledge of data and AI.
          </p>
          <Link
            href="/projects"
            className="flex justify-center items-center font-[family-name:var(--font-geist-mono)]"
          >
            <Button className="mt-8 bg-black text-white hover:bg-gradient-to-r hover:-translate-y-1 hover:scale-110 hover:from-purple-500 hover:via-pink-500 hover:to-red-500 transition-all duration-300 ease-linear">
              Explore Projects
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
