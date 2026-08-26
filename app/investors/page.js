import Image from 'next/image';

export const metadata = {
  title: 'Investors & Partnerships — Timon Stores Ltd',
  description: 'Growth trajectory, diversification strategy, and partnership opportunities with Timon Stores Ltd.',
};

export default function Investors() {
  return (
    <>
      <section className="bg-navy text-white text-center py-16 px-6">
        <h1>Investors & Partnerships</h1>
        <p className="mt-4 max-w-xl mx-auto opacity-85">
          A regional distributor built for sustainable, long-term growth.
        </p>
      </section>

      <section className="bg-sand py-16 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
      <Image
        src="/images/branches/fleet-operations.jpg"
        alt="Timon Stores fleet and operations"
        fill
        className="object-cover"
      />
    </div>
    <h2>Growth Trajectory</h2>
    <p>
      From a single kiosk to a regional distribution enterprise with its
      own transport fleet, Timon Stores Ltd has consistently reinvested
      in infrastructure, sourcing, and market reach — expanding steadily
      across Homa Bay, Kisumu, Migori, Kisii, and Nyamira counties.
    </p>
  </div>
</section>

      <section className="bg-green/10 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2>Diversification Strategy</h2>
          <p>
            Beyond FMCG distribution, Timon Stores Ltd is exploring real
            estate investment and development as part of a long-term
            diversification strategy, alongside continued investment in
            people, infrastructure, and supply-chain capability.
          </p>
        </div>
      </section>

      <section className="bg-sand py-16 px-6 text-center">
        <h2>Partnership Opportunities</h2>
        <p className="max-w-xl mx-auto">
          We welcome conversations with suppliers and partners interested in
          regional expansion and long-term collaboration.
        </p>
        <a href="mailto:PARTNERSHIP_EMAIL_HERE" className="inline-block mt-6 bg-gold text-navy font-semibold px-6 py-3 rounded-md">
          Get in Touch
        </a>
      </section>
    </>
  );
}