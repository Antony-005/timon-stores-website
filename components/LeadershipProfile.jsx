import Image from 'next/image';

export default function LeadershipProfile({ name, title, tagline, bio, imageSrc, quote, focusAreas }) {
  return (
    <div className="grid gap-8 md:grid-cols-[300px_1fr] items-start">
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
        <Image src={imageSrc} alt={name} fill className="object-cover" />
      </div>
      <div>
        <h3>{name}</h3>
        <p className="text-gold font-mono text-sm mb-1">{title}</p>
        {tagline && <p className="italic opacity-80 mb-4">{tagline}</p>}
        {bio.map((para, i) => (
          <p key={i} className="mb-4 opacity-90">{para}</p>
        ))}
        {focusAreas && <p className="font-mono text-sm text-green mt-2">{focusAreas}</p>}
        {quote && (
          <p className="font-display text-xl mt-6 border-l-4 border-gold pl-4">
            &ldquo;{quote}&rdquo;
          </p>
        )}
      </div>
    </div>
  );
}