'use client';

import { useState } from 'react';
import { useInquiry } from '@/context/InquiryContext';

export default function RequestQuote() {
  const { items, removeItem, clearItems } = useInquiry();
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    location: '',
    notes: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please enter your name.';
    if (!form.phone.trim()) errs.phone = 'Enter a phone number we can reach you on.';
    if (!form.email.trim()) errs.email = 'Enter your email address.';
    return errs;
  }

    async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          business_name: form.business,
          phone: form.phone,
          email: form.email,
          location: form.location,
          notes: form.notes,
          message: form.message,
          items: items.map((item) => item.name),
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitted(true);
      clearItems();
    } catch (err) {
      console.error(err);
      setErrors({ submit: 'Something went wrong submitting your request. Please try again.' });
    }
  }

  if (submitted) {
    return (
      <section className="bg-sand py-24 px-6 text-center">
        <h1>Thank You</h1>
        <p className="mt-4 max-w-md mx-auto">
          We&apos;ve received your request and will respond within 24 hours with pricing and availability.
        </p>
      </section>
    );
  }

  return (
    <>
      <section className="bg-navy text-white text-center py-16 px-6">
        <h1>Request a Quote</h1>
        <p className="mt-2 opacity-85 max-w-xl mx-auto">
         Tell us what you need, and our team will respond within 24 hours.
        </p>
      </section>

      <section className="bg-sand py-16 px-6">
        <div className="max-w-3xl mx-auto grid gap-10">
          {items.length > 0 && (
            <div>
              <h2>Your Inquiry List</h2>
              <ul className="mt-4 flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item.name} className="flex justify-between items-center bg-white rounded-md px-4 py-3">
                    <span>{item.name}</span>
                    <button onClick={() => removeItem(item.name)} className="text-rust font-semibold">
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid gap-5">
            <div>
              <label className="font-mono text-sm">Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="w-full mt-1 px-4 py-3 rounded-md border border-navy/20" />
              {errors.name && <p className="text-rust text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="font-mono text-sm">Business Name (optional)</label>
              <input name="business" value={form.business} onChange={handleChange} className="w-full mt-1 px-4 py-3 rounded-md border border-navy/20" />
            </div>
            <div>
              <label className="font-mono text-sm">Phone</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full mt-1 px-4 py-3 rounded-md border border-navy/20" />
              {errors.phone && <p className="text-rust text-sm mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="font-mono text-sm">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full mt-1 px-4 py-3 rounded-md border border-navy/20" />
              {errors.email && <p className="text-rust text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="font-mono text-sm">Branch Preference / Location</label>
              <input name="location" value={form.location} onChange={handleChange} className="w-full mt-1 px-4 py-3 rounded-md border border-navy/20" />
            </div>
            <div>
              <label className="font-mono text-sm">Quantity Notes</label>
              <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className="w-full mt-1 px-4 py-3 rounded-md border border-navy/20" />
            </div>
            <div>
              <label className="font-mono text-sm">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={3} className="w-full mt-1 px-4 py-3 rounded-md border border-navy/20" />
            </div>
                        {errors.submit && <p className="text-rust text-sm">{errors.submit}</p>}
            <button type="submit" className="bg-gold text-navy font-semibold py-3 rounded-md hover:-translate-y-0.5 transition">
              Submit Request
            </button>
          </form>

          <a href="https://wa.me/YOUR_TIMON_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" className="text-center font-semibold text-green hover:text-navy">
            Prefer WhatsApp? Message us directly →
          </a>
        </div>
      </section>
    </>
  );
}