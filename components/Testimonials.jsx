const testimonials = [
  {
    quote: "Adiedo Stores highly appreciates Timon Stores in Oyugis for their reliable and excellent service. They are professional, trustworthy, and always ensure timely delivery of quality products. We have had a great experience working with them and look forward to continuing our business relationship. Highly recommended!",
    author: 'Adiedo Stores',
    location: 'Adiedo',
  },
  {
    quote: "Timon Stores Limited plays a critical role in our supply chain by providing consistent access to key FMCG brands, ensuring timely deliveries, and offering competitive bulk pricing. Their dependable stock replenishment and streamlined ordering process have reduced stockouts, improved shelf availability, and supported greater procurement efficiency and profitability.",
    author: 'Mackaben Discount Store',
    location: '',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-sand py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center">What Our Customers Say</h2>
        <div className="grid gap-6 mt-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.author} className="bg-white rounded-lg p-8 flex flex-col justify-between">
              <blockquote className="text-lg italic opacity-90">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 font-mono text-sm text-green">
                {t.author}{t.location ? `, ${t.location}` : ''}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}