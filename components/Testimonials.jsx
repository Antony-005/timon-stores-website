const testimonials = [
  {
    quote: "Adiedo Stores highly appreciates Timon Stores in Oyugis for their reliable and excellent service. They are professional, trustworthy, and always ensure timely delivery of quality products. We have had a great experience working with them and look forward to continuing our business relationship. Highly recommended!",
    author: 'Adiedo Stores',
    location: 'Oyugis',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-sand py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2>What Our Customers Say</h2>
        <div className="grid gap-8 mt-8">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-white rounded-lg p-8">
              <p className="text-lg italic opacity-90">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 font-mono text-sm text-gold">{t.author}, {t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}