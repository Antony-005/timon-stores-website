import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'Products & Categories — Timon Stores Ltd',
  description: 'Browse Timon Stores Ltd product categories — sugar, dairy, and FMCG goods distributed across five counties.',
};

const categories = [
  { name: 'Sugar & Staples', description: 'Our founding product line — reliable bulk sugar supply.', imageSrc: '/images/products/sugar.jpg' },
  { name: 'Dairy & Milk', description: 'Including imported milk sourced from Uganda.', imageSrc: '/images/products/dairy.jpg' },
  { name: 'FMCG Goods', description: 'A broad, growing range of fast-moving consumer goods.', imageSrc: '/images/products/fmcg.jpg' },
];

export default function Products() {
  return (
    <>
      <section className="bg-navy text-white text-center py-16 px-6">
        <h1>Products & Categories</h1>
        <p className="mt-4 max-w-xl mx-auto opacity-85">
          Pricing and availability provided on request, built around bulk and wholesale orders.
        </p>
      </section>

      <section className="bg-sand py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <ProductCard key={cat.name} {...cat} />
          ))}
        </div>
      </section>
    </>
  );
}