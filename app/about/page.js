import Timeline from '@/components/Timeline';
import Card from '@/components/Card';

export const metadata = {
  title: 'About Us — Timon Stores Ltd',
  description:
    'From a small kiosk to a regional distributor — the Timon Stores Ltd growth story, vision, mission and fleet.',
};

export default function About() {
  return (
    <>
      <section className="bg-navy text-white text-center py-20 px-6">
        <h1>From Humble Beginnings to a Growing Regional Enterprise</h1>
        <p className="mt-4 max-w-xl mx-auto opacity-85">
          Vision, resilience, and a commitment to reliable service — this is
          the Timon Stores story.
        </p>
      </section>

      <section className="bg-sand py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-rust">Our Vision</h2>
            <p>
              To be a trusted leading regional distributor and diversified
              investment company.
            </p>
          </div>
          <div>
            <h2 className="text-rust">Our Mission</h2>
            <p>
              To deliver quality products through reliable distribution while
              creating lasting value for customers, partners and communities.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green/10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2>Our Growth Journey</h2>
          <Timeline />
        </div>
      </section>

      <section className="bg-sand py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2>Where We&apos;re Headed</h2>
          <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="Expand Our Reach" description="Growing our distribution network and market reach." />
            <Card title="Diversify Our Portfolio" description="Meeting changing customer needs with a broader product range." />
            <Card title="Strengthen Logistics" description="Improving transport and supply-chain efficiency." />
            <Card title="Build Lasting Relationships" description="With customers and suppliers alike." />
            <Card title="Invest in Sustainable Growth" description="Including real estate and other viable opportunities." />
          </div>
        </div>
      </section>

      <section className="bg-navy text-white text-center py-16 px-6">
        <p className="font-display text-xl max-w-2xl mx-auto">
          Timon Stores Ltd continues to grow under leadership committed to
          reliability, customer focus, and long-term community value — the
          same principles the business was founded on.
        </p>
      </section>
    </>
  );
}