interface MetricCardProps {
  label: string;
  value: string;
}

export function MetricCard({ label, value }: MetricCardProps) {
  return (
    <article className="rounded-xl border border-slate-700 bg-slate-900 p-4">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-teal-400">{value}</p>
    </article>
  );
}
