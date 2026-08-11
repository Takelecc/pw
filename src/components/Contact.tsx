import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../data/portfolio";

// ✅ Correct: Initialize with public key (safe - it's meant to be public)
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement & { _gotcha?: { value: string } };
    
    // honeypot spam check
    if (form._gotcha && form._gotcha.value) {
      return;
    }

    if (!formRef.current) return;

    try {
      // ✅ Correct: Using VITE_ prefix for Vite environment variables
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Failed to send message");
    }
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <div className="mt-2 h-1 w-12 rounded bg-accent" />
        <p className="mt-4 max-w-lg text-muted">
          Have a project in mind or want to collaborate? I'd love to hear from you.
          Send me a message and I'll get back to you as soon as possible.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <input type="text" name="_gotcha" style={{ display: "none" }} />
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-surface-border bg-surface-raised px-4 py-3 text-text outline-none transition-colors focus:border-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-surface-border bg-surface-raised px-4 py-3 text-text outline-none transition-colors focus:border-accent"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-surface-border bg-surface-raised px-4 py-3 text-text outline-none transition-colors focus:border-accent"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-accent py-3 text-sm font-medium text-surface transition-colors hover:bg-accent-dim sm:w-auto sm:px-8"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>

          <div className="flex flex-col justify-center gap-6">
            <div className="rounded-xl border border-surface-border bg-surface-raised p-6">
              <p className="text-sm text-muted">Email me directly</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="mt-2 block text-lg font-medium text-accent transition-colors hover:text-accent-dim"
              >
                {personalInfo.email}
              </a>
            </div>
            <div className="rounded-xl border border-surface-border bg-surface-raised p-6">
              <p className="text-sm text-muted">Phone</p>
              <a
                href={`tel:${personalInfo.phone}`}
                className="mt-2 block text-lg font-medium text-accent transition-colors hover:text-accent-dim"
              >
                {personalInfo.phone}
              </a>
            </div>
            <div className="rounded-xl border border-surface-border bg-surface-raised p-6">
              <p className="text-sm text-muted">Based in</p>
              <p className="mt-2 text-lg font-medium">{personalInfo.location}</p>
            </div>
            <div className="flex gap-4">
              {Object.entries(personalInfo.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-surface-border px-4 py-2 text-sm capitalize text-muted transition-all hover:border-accent/40 hover:text-accent"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
