export default function StatCard({ label, value, accent }) {
  return (
    <div className="bg-white rounded-lg p-6">
      <p className="font-mono text-3xl" style={{ color: accent }}>{value}</p>
      <p className="text-sm opacity-70 mt-1">{label}</p>
    </div>
  );
}