import Timeline from '@/components/Timeline';
import Card from '@/components/Card';
import LeadershipProfile from '@/components/LeadershipProfile';

export const metadata = {
  title: 'About Us | Timon Stores Ltd',
  description:
    'From a small kiosk to a regional distributor: the Timon Stores Ltd growth story, vision, mission and fleet.',
};

export default function About() {
  return (
    <>
      <section className="bg-navy text-white text-center py-20 px-6">
        <h1>From Humble Beginnings to a Growing Regional Enterprise</h1>
        <p className="mt-4 max-w-xl mx-auto opacity-85">
          Vision, resilience, and a commitment to reliable service define the Timon Stores story.
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
  <div className="max-w-5xl mx-auto flex flex-col gap-16">
    <h2>Our Leadership</h2>
    <LeadershipProfile
      name="Linda Arara"
      title="Managing Director, Timon Stores Ltd"
      tagline="Driving Growth. Delivering Excellence. Building a Sustainable Future."
      imageSrc="/images/branches/leadership-linda.jpg"
      bio={[
        "Linda Arara is a results-driven business leader and the Managing Director of Timon Stores Ltd, where she provides strategic direction and executive leadership in advancing the company's growth, operational excellence, and market leadership.",
        "With a Bachelor's Degree in Marketing from Maseno University and more than ten years of professional experience across the public and private sectors, Linda brings a strong blend of strategic thinking, commercial insight, and practical leadership to the organization.",
        "Since taking on the leadership of Timon Stores Ltd, Linda has championed a range of strategic and tactical business initiatives aimed at strengthening the company's operational capacity, expanding its market reach, enhancing customer experience, and sustaining long-term competitiveness.",
        "Her leadership has been central to the development of Timon Stores Ltd into a recognized and trusted enterprise in Homa Bay County, with an increasingly established presence within the wider region.",
        "A key focus of Linda's leadership is the continued strengthening of the company's distribution and supply network, positioning Timon Stores Ltd to serve its growing customer base with reliability, efficiency, and consistency.",
        "Linda is committed to building a high-performing organization founded on integrity, innovation, accountability, customer centricity, and sustainable growth, with strong emphasis on lasting relationships with customers, suppliers, employees, and partners.",
        "As Timon Stores Ltd looks to the future, Linda remains focused on strategic expansion, operational excellence, market development, and sustainable value creation for customers, partners, employees, and the communities it serves.",
      ]}
      focusAreas="Leadership Focus: Strategic Growth | Market Expansion | Customer Excellence | Operational Efficiency | Sustainable Business Development"
      quote="Building a stronger business today, while creating sustainable value for tomorrow."
    />
    <LeadershipProfile
      name="Timon Norrington Omollo"
      title="Executive Chairman, Founder & Owner, Timon Stores Ltd"
      imageSrc="/images/branches/leadership-norrington.jpg"
      bio={[
        "Norrington Omollo is the Executive Chairman, Owner and founder of Timon Stores Ltd, and the entrepreneur behind the company's remarkable transformation from a humble kiosk into a regional wholesale and retail distribution business.",
        "A graduate of Economics and Statistics from Egerton University, Mr. Omollo is a visionary and strategic entrepreneur with a strong business mindset and a proven ability to identify opportunities, navigate challenges, and drive sustainable growth.",
        "His strategic partnership with SonySugar in the distribution of branded sugar has been instrumental in strengthening Timon Stores' market presence and regional reach, with a growing distribution network serving Nyamira, Kisii, Homa Bay, Migori and Kisumu Counties.",
        "Mr. Omollo's entrepreneurial journey is defined by resilience, strategic foresight, innovation and opportunity-driven growth, positioning Timon Stores Ltd for sustained success in an increasingly competitive FMCG market.",
      ]}
    />
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
    </>
  );
}