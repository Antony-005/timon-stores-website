import HeroSlideshow from '@/components/HeroSlideshow';
import RouteLine from '@/components/RouteLine';
import StatsStrip from '@/components/StatsStrip';
import Card from '@/components/Card';
import Testimonials from '@/components/Testimonials';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <HeroSlideshow />
      <RouteLine />
      <StatsStrip />

      <section className="bg-sand py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2>What We Supply</h2>
          <p className="mt-2 max-w-2xl opacity-85">
            Bulk and wholesale supply, with pricing and availability on request.
          </p>
          <div className="grid gap-6 mt-6 sm:grid-cols-3">
            <Card title="Sugar & Staples" description="SonySugar branded sugar in 50kg, 25kg and other pack sizes." imageSrc="/images/products/sugar.jpg" />
            <Card title="Dairy & Milk" description="Milk and dairy products, including supply sourced from Uganda." imageSrc="/images/products/dairy.jpg" />
            <Card title="FMCG Goods" description="Detergents, toothpaste, bar and liquid soaps, and household essentials." imageSrc="/images/products/fmcg.jpg" />
          </div>
          <p className="mt-6 opacity-85">
            Also available: salt, cooking oil, maize and wheat flour, rice, bottled water, soft drinks and tissue paper.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/products" className="font-semibold text-navy hover:text-rust">
              View All Products {'\u2192'}
            </Link>
            <Link href="/request-quote" className="font-semibold text-navy hover:text-rust">
              Request a Quote {'\u2192'}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-green/10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2>Why Businesses Choose Timon Stores</h2>
          <p className="mt-2 max-w-2xl opacity-85">
            A leading wholesale store in Oyugis, Homa Bay County, supplying bulk FMCG to retailers and wholesalers across Nyanza.
          </p>
          <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="Great Value" description="Strong purchasing power and established supplier relationships mean attractive rates for your business." />
            <Card title="Reliable Weekly Supply" description="Regular weekly deliveries from our own fleet help you maintain stock and avoid stock-outs." />
            <Card title="One-Stop FMCG Supply" description="From sugar and cooking oil to dairy, detergents and household goods, all from a single trusted supplier." />
            <Card title="Capacity to Support Your Growth" description="Substantial purchasing capacity means we can support businesses of different sizes as they grow." />
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="bg-navy text-white text-center py-16 px-6">
        <h2>Where We Deliver</h2>
        <p className="mt-2 opacity-90">Homa Bay {'\u00b7'} Kisumu {'\u00b7'} Migori {'\u00b7'} Kisii {'\u00b7'} Nyamira</p>
        <p className="mt-2 opacity-80">Main store in Oyugis, with branches in Kendu Bay, Katito and Rodi.</p>
        <Link href="/distribution" className="inline-block mt-4 font-semibold text-gold hover:text-white">
          See Distribution & Coverage {'\u2192'}
        </Link>
      </section>

      <section className="bg-green/10 py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/branches/growth-story.jpg"
              alt="Timon Stores wholesale business growth, from a small kiosk to a regional distributor in Oyugis"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2>From a Small Kiosk to a Growing Fleet</h2>
            <p>
              Timon Stores began as a small kiosk selling sugar. With more than
              15 years in the FMCG and sugar trade, it has grown into a
              wholesale and retail distributor with its own transport fleet and
              a network spanning five counties in Nyanza.
            </p>
            <Link href="/about" className="inline-block mt-4 font-semibold text-navy hover:text-rust">
              Read Our Full Story {'\u2192'}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gold text-navy text-center py-16 px-6">
        <h2>Ready to Order?</h2>
        <p className="mt-3 max-w-xl mx-auto">
          Request a quotation today. Tell us the products, quantities and delivery location you need, and our team will help arrange your supply.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="/request-quote" className="bg-navy text-white font-semibold px-6 py-3 rounded-md hover:-translate-y-0.5 transition">
            Request a Quote
          </Link>
          <a href="https://wa.me/254720873696" target="_blank" rel="noopener noreferrer" className="border-2 border-navy font-semibold px-6 py-3 rounded-md hover:-translate-y-0.5 transition">
            WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}