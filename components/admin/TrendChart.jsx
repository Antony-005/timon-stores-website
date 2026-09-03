export default function TrendChart({ records }) {
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d;
  });

  const counts = days.map((day) => {
    return records.filter((r) => {
      const recordDate = new Date(r.submitted_at);
      return recordDate.toDateString() === day.toDateString();
    }).length;
  });

  const max = Math.max(...counts, 1);

  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="mb-4">Last 7 Days</h3>
      <div className="flex items-end gap-3 h-32">
        {counts.map((count, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2">
            <div
              className="w-full bg-gold rounded-t-md transition-all"
              style={{ height: `${(count / max) * 100}%`, minHeight: count > 0 ? '4px' : '0' }}
            />
            <span className="text-xs opacity-60 font-mono">
              {days[i].toLocaleDateString('en-GB', { weekday: 'short' })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}