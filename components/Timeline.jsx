import Image from 'next/image';

const milestones = [
  {
    title: 'The Kiosk',
    text: 'Timon Stores began as a small kiosk primarily selling sugar, built on a strong understanding of customer needs.',
    src: '/images/branches/timeline-kiosk.jpg',
  },
  {
    title: 'The Container',
    text: 'Growing demand led to expansion into a 40-foot container, the first major step in scaling operations.',
    src: '/images/branches/timeline-container.jpg',
  },
  {
    title: 'A Larger Shop',
    text: 'The business moved into a larger shop with dedicated storage, diversifying beyond sugar into a broad range of FMCGs.',
    src: '/images/branches/timeline-shop.jpg',
  },
  {
    title: 'Building a Fleet',
    text: 'Starting with a pick-up, then a Canter truck, and later three FH trucks and prime movers — strengthening distribution across the region.',
    src: '/images/branches/timeline-fleet.jpg',
  },
];

export default function Timeline() {
  return (
    <div className="relative flex flex-col gap-12 mt-8 pl-6 border-l-[3px] border-gold">
      {milestones.map((m) => (
        <div
          key={m.title}
          className="relative grid gap-4 md:grid-cols-[300px_1fr] md:items-center"
        >
          <span className="absolute -left-[1.95rem] top-1 w-3 h-3 rounded-full bg-gold" />
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image src={m.src} alt={m.title} fill className="object-cover" />
          </div>
          <div>
            <h3>{m.title}</h3>
            <p className="mt-1 opacity-85">{m.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}