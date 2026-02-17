import { MetricCard } from '@/components/MetricCard';

const METRICS = [
  { label: 'Stability Index', value: '78' },
  { label: 'Emotional Spending %', value: '34%' },
  { label: 'Savings Momentum', value: '65' },
  { label: 'Impulse Risk', value: '29' },
  { label: 'Finance Score', value: '74' },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-slate-100">
      <section className="mx-auto max-w-5xl space-y-6">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {METRICS.map((metric) => (
            <MetricCard key={metric.label} label={metric.label} value={metric.value} />
          ))}
        </div>
      </section>
    </main>
  );
}
