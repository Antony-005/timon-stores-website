'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useInquiry } from '@/context/InquiryContext';

const inputClass = 'w-full mt-1 px-4 py-3 rounded-md border border-navy/20';

export default function RequestQuoteForm() {
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
        <h2>Thank You</h2>
        <p className="mt-4 max-w-md mx-auto">
          We&apos;ve received your request and will respond within 48 hours with pricing and availability.
        </p>
      </section>
    );
  }

  return (
    <section className="bg-sand py-16 px-6">
      <div className="max-w-3xl mx-auto grid gap-6">
        <div className="bg-white rounded-lg p-5 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm">We reply within 48 hours. Need an answer sooner?</p>
          <a
            href="https://wa.me/254720873696"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-green hover:text-navy"
          >
            Message us on WhatsApp
          </a>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="bg-white rounded-lg p-6 grid gap-5">
            <h2 className="text-xl">Your details</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="rq-name" className="font-mono text-sm">Name</label>
                <input id="rq-name" name="name" value={form.name} onChange={handleChange} className={inputClass} />
                {errors.name && <p className="text-rust text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="rq-business" className="font-mono text-sm">Business Name (optional)</label>
                <input id="rq-business" name="business" value={form.business} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="rq-phone" className="font-mono text-sm">Phone</label>
                <input id="rq-phone" type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass} />
                {errors.phone && <p className="text-rust text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="rq-email" className="font-mono text-sm">Email</label>
                <input id="rq-email" type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} />
                {errors.email && <p className="text-rust text-sm mt-1">{errors.email}</p>}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 grid gap-5">
            <h2 className="text-xl">What you need</h2>
            <div>
              <p className="font-mono text-sm">Your inquiry list</p>
              {items.length > 0 ? (
                <ul className="mt-2 flex flex-col gap-2">
                  {items.map((item) => (
                    <li key={item.name} className="flex justify-between items-center bg-sand rounded-md px-4 py-3">
                      <span>{item.name}</span>
                      <button type="button" onClick={() => removeItem(item.name)} className="text-rust font-semibold">
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm opacity-80">
                  No products selected yet. Browse{' '}
                  <Link href="/products" className="font-semibold text-green hover:text-navy">our products</Link>{' '}
                  and tap what you need, or describe it below.
                </p>
              )}
            </div>
            <div>
              <label htmlFor="rq-location" className="font-mono text-sm">Branch Preference / Location</label>
              <input id="rq-location" name="location" value={form.location} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="rq-notes" className="font-mono text-sm">Quantity Notes</label>
              <textarea id="rq-notes" name="notes" value={form.notes} onChange={handleChange} rows={3} className={inputClass} />
            </div>
            <div>
              <label htmlFor="rq-message" className="font-mono text-sm">Message</label>
              <textarea id="rq-message" name="message" value={form.message} onChange={handleChange} rows={3} className={inputClass} />
            </div>
          </div>

          {errors.submit && <p className="text-rust text-sm">{errors.submit}</p>}
          <button type="submit" className="bg-gold text-navy font-semibold py-3 rounded-md hover:-translate-y-0.5 transition">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}