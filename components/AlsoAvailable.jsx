'use client';

import Link from 'next/link';
import { useInquiry } from '@/context/InquiryContext';

const products = [
  'Salt',
  'Cooking oil',
  'Maize flour',
  'Wheat flour (unga ngano)',
  'Rice',
  'Bottled water',
  'Soft drinks',
  'Tissue paper',
];

export default function AlsoAvailable() {
  const { items, addItem, removeItem } = useInquiry();

  function toggle(name) {
    if (items.some((i) => i.name === name)) {
      removeItem(name);
    } else {
      addItem({ name });
    }
  }

  return (
    <section className="bg-green/10 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2>Also Available</h2>
        <p className="mt-4 opacity-85">
          Tap the products you need and send them in one quote request. Ask us about any product not listed here.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {products.map((name) => {
            const selected = items.some((i) => i.name === name);
            return (
              <button
                key={name}
                type="button"
                onClick={() => toggle(name)}
                aria-pressed={selected}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  selected
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white text-ink border-navy/30 hover:border-navy hover:-translate-y-0.5'
                }`}
              >
                <span aria-hidden="true">{selected ? '\u2713' : '+'}</span>
                {name}
              </button>
            );
          })}
        </div>
        {items.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 border-t border-navy/20 pt-6">
            <span className="text-sm">
              {items.length} {items.length === 1 ? 'item' : 'items'} in your inquiry list
            </span>
            <Link href="/request-quote" className="bg-gold text-navy font-semibold px-5 py-2 rounded-md hover:-translate-y-0.5 transition">
              Request a Quote
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}