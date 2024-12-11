"use client";

import { Card } from "./ui/card";

export function ContactMe() {
  return (
    <div id="contact-me" className="section-style m-4 py-12">
      <Card className="card-style p-12 m-4 lg:m-10">
        <div className="container mx-auto px-6">
          <h2 className="h2-style">Contact Me</h2>
          <div className="mt-6 text-center">
            <a
              href="https://www.linkedin.com/in/noah-diderich/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-style bg-blue-600 text-white hover:bg-blue-700"
            >
              Connect with me on LinkedIn
            </a>
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://github.com/agrapheuse"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-style bg-black text-white hover:bg-gray-950"
            >
              Follow me on GitHub
            </a>
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://gitlab.com/noah.diderich"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-style bg-white text-black hover:bg-gray-300"
            >
              Follow me on GitLab
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}
