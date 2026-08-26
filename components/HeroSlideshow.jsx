'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const slides = [
  { src: '/images/branches/hero-1.jpg', alt: 'Timon Stores branch' },
  { src: '/images/branches/hero-2.jpg', alt: 'Timon Stores delivery truck' },
  { src: '/images/branches/hero-3.jpg', alt: 'Timon Stores product stock' },
  { src: '/images/branches/hero-4.jpg', alt: 'Timon Stores team at work' },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reduceMotion.current) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[500px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 to-navy/15" />

      <div className="relative z-10 h-full flex flex-col justify-end max-w-4xl px-6 py-12 text-white">
        <h1>Trusted Regional Distribution, Delivered Reliably</h1>
        <p className="mt-4 mb-6 max-w-lg text-lg">
          From a single kiosk to a fleet serving five counties — quality
          products, dependable delivery.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="/request-quote" className="bg-gold text-navy font-semibold px-6 py-3 rounded-md hover:-translate-y-0.5 transition">
            Request a Quote
          </a>
          <a href="/distribution" className="border-2 border-white px-6 py-3 rounded-md hover:-translate-y-0.5 transition">
            Our Coverage
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition ${
              i === current ? 'bg-gold' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}