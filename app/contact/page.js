'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire to your form-handler endpoint here
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-navy text-white text-center py-16 px-6">
        <h1>Contact Us</h1>
      </section>

      <section className="bg-sand py-16 px-6">
        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">

          <div>
  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
    <Image
      src="/images/branches/contact-branch.jpg"
      alt="Timon Stores branch"
      fill
      className="object-cover"
    />
  </div>
  <h2>Get in Touch</h2>
  ...
            <p><strong>Kendu Bay</strong><br />Address / Phone here</p>
            <p className="mt-4"><strong>Katito</strong><br />Address / Phone here</p>
            <p className="mt-4">Email: your-email-here</p>
            <p>WhatsApp: link-here</p>
            <p className="mt-4">Business Hours: Mon–Sat, 8am–6pm</p>
          </div>

          <div>
            {submitted ? (
              <p className="font-display text-xl">Thank you — we&apos;ll be in touch shortly.</p>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4">
                <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="px-4 py-3 rounded-md border border-navy/20" />
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="px-4 py-3 rounded-md border border-navy/20" />
                <textarea name="message" placeholder="Message" rows={4} value={form.message} onChange={handleChange} className="px-4 py-3 rounded-md border border-navy/20" />
                <button type="submit" className="bg-gold text-navy font-semibold py-3 rounded-md">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}