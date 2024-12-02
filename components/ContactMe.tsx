"use client";

import { Card } from "./ui/card";

export function ContactMe() {
  return (
    <Card className="bg-foreground py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center">Contact Me</h2>
        <div className="mt-6 text-center">
          <a
            href="https://www.linkedin.com/in/noah-diderich/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Connect with me on LinkedIn
          </a>
        </div>
      </div>
    </Card>
  );
}
