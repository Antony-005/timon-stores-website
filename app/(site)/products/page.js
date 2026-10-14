import ProductCard from '@/components/ProductCard';
import AlsoAvailable from '@/components/AlsoAvailable';

export const metadata = {
  title: 'Products & Categories | Timon Stores Ltd',
  description: 'Browse Timon Stores Ltd product categories: sugar, dairy, and FMCG goods distributed across five counties.',
  alternates: { canonical: '/products' },
};

const categories = [
  { name: 'Sugar & Staples', description: 'SonySugar branded sugar in 50kg, 25kg and other pack sizes, the product that started it all.', imageSrc: '/images/products/sugar.jpg' },
  { name: 'Dairy & Milk', description: 'Milk and dairy products, including supply sourced from Uganda and established brands such as KCC.', imageSrc: '/images/products/dairy.jpg' },
  { name: 'FMCG Goods', description: 'A broad range of fast-moving consumer goods, including Omo and other detergents, Colgate and other toothpaste brands, and bar and liquid soaps.', imageSrc: '/images/products/fmcg.jpg' },
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

      <AlsoAvailable />

      <section className="bg-sand py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2>Brands and Suppliers</h2>
          <p className="mt-4 opacity-85">
            We work with SonySugar, Bidco, Vipingo, Menengai and KCC, and stock brands such as Colgate and Omo.
          </p>
        </div>
      </section>
    </>
  );
}