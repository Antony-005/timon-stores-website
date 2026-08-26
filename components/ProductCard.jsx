'use client';

import Image from 'next/image';
import { useInquiry } from '@/context/InquiryContext';

export default function ProductCard({ name, description, imageSrc }) {
  const { items, addItem } = useInquiry();
  const added = items.some((i) => i.name === name);

  return (
    <div className="bg-white rounded-lg p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/15">
      <div className="relative aspect-[4/3] mb-4 rounded-md overflow-hidden">
        <Image src={imageSrc} alt={name} fill className="object-cover" />
      </div>
      <h3>{name}</h3>
      {description && <p className="mt-2 opacity-85">{description}</p>}
      <button
        onClick={() => addItem({ name })}
        disabled={added}
        className={`mt-4 w-full py-2 rounded-md font-semibold transition ${
          added
            ? 'bg-green text-white cursor-default'
            : 'bg-gold text-navy hover:-translate-y-0.5'
        }`}
      >
        {added ? 'Added to Inquiry' : 'Add to Inquiry'}
      </button>
    </div>
  );
}