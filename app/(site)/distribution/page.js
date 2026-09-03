import Image from 'next/image';

export const metadata = {
  title: 'Distribution & Coverage — Timon Stores Ltd',
  description: 'Timon Stores Ltd branches and regional distribution coverage across five counties.',
};

const branches = [
  { name: 'Kendu Bay', address: 'Address here', phone: 'Phone here' },
  { name: 'Katito', address: 'Address here', phone: 'Phone here' },
];

const counties = ['Homa Bay', 'Kisumu', 'Migori', 'Kisii', 'Nyamira'];

export default function Distribution() {
  return (
    <>
      <section className="bg-navy text-white text-center py-16 px-6">
        <h1>Distribution & Coverage</h1>
        <p className="mt-4 max-w-xl mx-auto opacity-85">
          Two branches, five counties, and a fleet that keeps deliveries on schedule.
        </p>
      </section>

      <section className="bg-sand py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2>Counties We Serve</h2>
          <p className="mt-2 text-lg">{counties.join(' · ')}</p>
        </div>
      </section>

      <section className="bg-green/10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2>Our Branches</h2>
          <div className="grid gap-6 sm:grid-cols-2">
  {branches.map((b) => (
    <div key={b.name} className="bg-white rounded-lg overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image
          src={`/images/branches/branch-${b.name.toLowerCase().replace(' ', '-')}.jpg`}
          alt={`${b.name} branch`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3>{b.name}</h3>
        <p className="mt-2 opacity-85">{b.address}</p>
        <p className="opacity-85">{b.phone}</p>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      <section className="bg-sand py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2>Logistics Capability</h2>
          <p className="max-w-2xl">
            Our own fleet — including FH trucks and prime movers — ensures
            reliable, on-time delivery across the region, backed by an
            expanding sourcing network including imported milk from Uganda.
          </p>
        </div>
      </section>

      <section className="bg-navy text-white text-center py-16 px-6">
        <h2>Become a Retail Partner</h2>
        <a href="/request-quote" className="inline-block mt-4 bg-gold text-navy font-semibold px-6 py-3 rounded-md">
          Request a Quote
        </a>
      </section>
    </>
  );
}