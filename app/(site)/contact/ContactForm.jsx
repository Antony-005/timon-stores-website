'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert('Something went wrong sending your message. Please try again.');
    }
  }

  return (
    <div>
      {submitted ? (
        <p className="font-display text-xl">Thank you, we&apos;ll be in touch shortly.</p>
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
  );
}