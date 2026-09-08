import HeroSlideshow from '@/components/HeroSlideshow';
import RouteLine from '@/components/RouteLine';
import StatsStrip from '@/components/StatsStrip';
import Card from '@/components/Card';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HeroSlideshow />
      <RouteLine />
      <StatsStrip />

      <section className="bg-sand py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2>What We Do</h2>
          <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="Wholesale Distribution" description="Bulk FMCG supply for retailers and wholesalers across the region." />
            <Card title="Retail Supply" description="Reliable stock for shops and outlets, from sugar to daily essentials." />
            <Card title="Logistics & Transport" description="Our own fleet ensures on-time delivery, county to county." />
            <Card title="Regional Reach" description="Serving Homa Bay, Kisumu, Migori, Kisii and Nyamira." />
          </div>
        </div>
      </section>

      <section className="bg-green/10 py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/branches/growth-story.jpg"
              alt="Timon Stores growth journey"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2>From a Small Kiosk to a Growing Fleet</h2>
            <p>
              Timon Stores began as a small kiosk selling sugar. Through
              resilience and a strong understanding of customer needs, it has
              grown into a regional distributor with its own transport fleet
              and a network spanning five counties.
            </p>
            <Link href="/about" className="inline-block mt-4 font-semibold text-navy hover:text-rust">
              Read Our Full Story →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2>Product Categories</h2>
          <div className="grid gap-6 mt-6 sm:grid-cols-3">
            <Card title="Sugar & Staples" imageSrc="/images/products/sugar.jpg" />
            <Card title="Dairy & Milk" imageSrc="/images/products/dairy.jpg" />
            <Card title="FMCG Goods" imageSrc="/images/products/fmcg.jpg" />
          </div>
          <Link href="/products" className="inline-block mt-6 font-semibold text-navy hover:text-rust">
            View All Products →
          </Link>
        </div>
      </section>

      <section className="bg-navy text-white text-center py-16 px-6">
        <h2>Where We Deliver</h2>
        <p className="opacity-90">Homa Bay · Kisumu · Migori · Kisii · Nyamira</p>
        <Link href="/distribution" className="inline-block mt-4 font-semibold text-gold hover:text-white">
          See Distribution & Coverage →
        </Link>
      </section>
    </>
  );
}