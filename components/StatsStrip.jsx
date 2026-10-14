const stats = [
  { number: '15+', label: 'Years in FMCG' },
  { number: '5', label: 'Counties Served' },
  { number: '3', label: 'Branches' },
  { number: '5+', label: 'Fleet Vehicles' },
];

export default function StatsStrip() {
  return (
    <section className="bg-navy text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-around gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <span className="block font-mono text-3xl text-gold">
              {stat.number}
            </span>
            <span className="font-mono text-sm opacity-85">{stat.label}</span>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center font-mono text-sm opacity-70">
        Working with SonySugar since 2009
      </p>
    </section>
  );
}