"use client";

import { Button } from "./ui/button";
import { sendContactMeEmail } from "@/lib/sendEmail";
import { useForm } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export function ContactMe() {
  const { register, handleSubmit } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    await sendContactMeEmail(data);
  }

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center">Contact Me</h2>
        <form
          className="mt-6 space-y-4 max-w-lg mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            id={`name-input`}
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none"
            {...register("name", { required: true })}
          />
          <input
            id={`email-input`}
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none"
            {...register("email", { required: true })}
          />
          <textarea
            id={`message-input`}
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none"
            {...register("message", { required: true })}
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
