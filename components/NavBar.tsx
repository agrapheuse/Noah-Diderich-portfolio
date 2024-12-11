import { useEffect, useRef, useState } from "react";

export default function NavBar({
  word1,
  word2,
}: {
  word1: string;
  word2: string;
}) {
  const [isSticky, setIsSticky] = useState(false);
  const navBarRef = useRef(null);

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
    <>
      <header
        className={`min-h-10 ${isSticky ? "bg-background" : "bg-middleground"}`}
        style={{
          transition:
            "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        }}
      >
        <div className="container mx-auto px-6 py-10">
          <h1 className="h1-style">
            {word1}
            <br />
            {word2}
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
            <a href="#about-me" className="link-style">
              About Me
            </a>
            <a href="#career" className="link-style">
              My Career
            </a>
            <a href="#skills" className="link-style">
              My Skills
            </a>
            <a href="#contact-me" className="link-style">
              Contact Me
            </a>
          </div>
        </div>
        <div
          className={`divider h-[2px] bg-gradient-to-r from-gray-600 via-gray-300 to-gray-600 transition-all duration-500 ${
            isSticky ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
    </>
  );
}
