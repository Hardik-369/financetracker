import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <h1 className="text-4xl font-semibold">Finance Tracker</h1>
        <p className="text-slate-300">
          Privacy-first behavioral finance app scaffold with emotion-aware spending
          workflows.
        </p>
        <div className="flex gap-3">
          <Link className="rounded-xl bg-teal-500 px-4 py-2 font-medium" href="/dashboard">
            Open Dashboard
          </Link>
          <Link className="rounded-xl border border-slate-600 px-4 py-2" href="/transactions/new">
            Add Transaction
          </Link>
        </div>
      </div>
    </main>
  );
}
