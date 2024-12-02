import { AboutMe } from "@/components/AboutMe";
import { Career } from "@/components/Career";
import { ContactMe } from "@/components/ContactMe";
import { HeroSection } from "@/components/HeroSection";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold">Noah Diderich</h1>
        </div>
      </header>

      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
      <Career></Career>
      <Skills></Skills>
      <ContactMe></ContactMe>

      <footer className="bg-gray-800 text-gray-200 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
