'use client';

import { useState } from 'react';
import Image from 'next/image';

const VISIBLE_PARAGRAPHS = 2;

export default function LeadershipProfile({ name, title, tagline, bio, imageSrc, quote, focusAreas, phone }) {
  const [open, setOpen] = useState(false);
  const hasMore = bio.length > VISIBLE_PARAGRAPHS;
  const showAll = open || !hasMore;

  return (
    <div className="grid gap-8 md:grid-cols-[300px_1fr] items-start">
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
        <Image src={imageSrc} alt={name} fill className="object-cover" />
      </div>
      <div>
        <h3>{name}</h3>
        <p className="text-green font-mono text-sm mb-1">{title}</p>
        {phone && <p className="font-mono text-sm opacity-70 mb-1">Direct Line: {phone}</p>}
        {tagline && <p className="italic opacity-80 mb-4">{tagline}</p>}
        {bio.map((para, i) => (
          <p
            key={i}
            className={`mb-4 opacity-90 ${!showAll && i >= VISIBLE_PARAGRAPHS ? 'hidden' : ''}`}
          >
            {para}
          </p>
        ))}
        {hasMore && (
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="font-semibold text-navy hover:text-rust"
          >
            {open ? 'Show less' : 'Read more'}
          </button>
        )}
        {showAll && focusAreas && <p className="font-mono text-sm text-green mt-4">{focusAreas}</p>}
        {showAll && quote && (
          <p className="font-display text-xl mt-6 border-l-4 border-gold pl-4">
            &ldquo;{quote}&rdquo;
          </p>
        )}
      </div>
    </div>
  );
}