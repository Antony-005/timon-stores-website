import Image from 'next/image';

export default function Card({ title, description, imageSrc, imageAlt }) {
  return (
    <div className="bg-white rounded-lg p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/15 hover:border-b-4 hover:border-gold">
      {imageSrc && (
        <div className="relative aspect-[4/3] mb-4 rounded-md overflow-hidden">
          <Image src={imageSrc} alt={imageAlt || title} fill className="object-cover" />
        </div>
      )}
      <h3>{title}</h3>
      {description && <p className="mt-2 opacity-85">{description}</p>}
    </div>
  );
}