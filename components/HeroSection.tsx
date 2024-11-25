import Image from "next/image";
import Link from "next/link";
import profilePic from "@/app/public/profile-pic.jpg";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-12 flex flex-col items-center text-center">
      <Image
        src={profilePic}
        alt="My Portfolio Image"
        width={300}
        height={300}
        className="rounded-full shadow-lg max-h-80"
      />
      <h2 className="text-4xl font-bold mt-6">Welcome to my digital CV</h2>
      <p className="text-gray-600 mt-2">Come get to know me :)</p>
      <Link href="/projects">
        <Button className="mt-4">Explore Projects</Button>
      </Link>
    </section>
  );
}
