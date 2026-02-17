const emotions = ['calm', 'stressed', 'bored', 'celebratory', 'regretful'];

export default function NewTransactionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <section className="mx-auto max-w-xl space-y-4 rounded-xl border border-slate-700 bg-slate-900 p-6">
        <h1 className="text-2xl font-semibold">Add Transaction</h1>
        <form className="space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm text-slate-400">Amount</span>
            <input className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2" type="number" />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm text-slate-400">Category</span>
            <input className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2" type="text" />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm text-slate-400">Emotion</span>
            <select className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2">
              {emotions.map((emotion) => (
                <option key={emotion} value={emotion}>
                  {emotion}
                </option>
              ))}
            </select>
          </label>
          <button className="rounded-lg bg-teal-500 px-4 py-2 font-medium text-slate-950" type="submit">
            Save transaction
          </button>
        </form>
      </section>
    </main>
  );
}
