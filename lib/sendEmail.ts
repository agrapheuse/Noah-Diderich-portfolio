"use server";

import nodemailer from "nodemailer";
import { FormData } from "@/components/ContactMe";

export async function sendContactMeEmail(data: FormData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USERNAME,
    to: process.env.GMAIL_USERNAME,
    subject: `Message from ${data.name} (${data.email})`,
    text: data.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email sending failed:", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
