'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useInquiry } from '@/context/InquiryContext';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/distribution', label: 'Distribution' },
  { href: '/investors', label: 'Investors' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { items } = useInquiry();

  return (
    <header className="sticky top-0 z-50 bg-navy text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center">
        <img src="/images/nav-logo.svg" alt="Timon Stores" className="h-10 w-auto" />
      </Link>

        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="opacity-85 hover:opacity-100 hover:text-gold transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
  href="/request-quote"
  className="hidden md:inline-flex items-center gap-2 bg-gold text-navy font-semibold px-6 py-3 rounded-md hover:-translate-y-0.5 transition"
>
  Request a Quote
  {items.length > 0 && (
    <span className="bg-navy text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      {items.length}
    </span>
  )}
</Link>

        <button
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col bg-navy px-6 pb-4 gap-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/request-quote"
            className="bg-gold text-navy font-semibold px-6 py-3 rounded-md text-center mt-2"
          >
            Request a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}