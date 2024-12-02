import Image from "next/image";
import profilePic from "@/app/public/profile-pic.jpg";
import { Card } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <div className="flex justify-center items-center relative m-12">
      <div className="absolute w-full h-full inset-0 rounded-lg bg-gradient-to-br from-pink-500 via-cyan-500 to-violet-500"></div>
      <Card className="relative w-[96%] h-[96%] rounded-lg bg-foreground py-12 flex justify-center items-center pt-12">
        <Image
          src={profilePic}
          alt="My Portfolio Image"
          width={300}
          height={300}
          className="relative rounded-full shadow-md max-h-80 m-8 border-gradient-to-r from-purple-500 via-pink-500 to-red-500"
        />

        <div className="container mx-auto px-6">
          <h2 className="text-2xl text-gray-200 font-bold text-center font-[family-name:var(--font-geist-mono)]">
            About Me
          </h2>
          <p className="mt-4 text-center font-[family-name:var(--font-geist-mono)] text-gray-400">
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
          <p className="mt-4 text-center font-[family-name:var(--font-geist-mono)] text-gray-400">
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
            <Button className="m-4 ">Explore Projects</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
