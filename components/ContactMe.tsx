import { Button } from "./ui/button";

export function ContactMe() {
  return (
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
  );
}
