import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import profilePic from "@/app/public/profile-pic.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold">Noah Diderich</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 flex flex-col items-center text-center">
        <Image
          src={profilePic} // Replace with your image path
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

      {/* About Me Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center">About Me</h2>
          <p className="mt-4 text-gray-600 text-center">
            I’m a passionate software developer specializing in building
            engaging and scalable web applications. My goal is to create
            seamless user experiences while continuously learning and growing in
            the tech industry.
          </p>
        </div>
      </section>

      {/* Career Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center">My Career</h2>
          <div className="mt-6 space-y-4">
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">
                Software Engineer at XYZ
              </h3>
              <p className="text-gray-600">2021 - Present</p>
              <p className="mt-2 text-gray-700">
                Developing robust web applications and APIs using modern
                frameworks and tools.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Intern at ABC Corp</h3>
              <p className="text-gray-600">2020 - 2021</p>
              <p className="mt-2 text-gray-700">
                Worked on a mobile application to streamline task assignment
                processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center">Contact Me</h2>
          <form className="mt-6 space-y-4 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none"
              rows={4}
            ></textarea>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
