import AdminPodcastForm from '@/components/AdminPodcastForm';

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-14">
        <div className="max-w-3xl mx-auto bg-white rounded-[2rem] shadow-xl border border-slate-100 p-6 md:p-10">
          <div className="mb-8">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-red-600">
              Painel administrativo
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl font-black text-[#001A3F] tracking-tight">
              Adicionar episódio do podcast
            </h1>
            <p className="mt-3 text-slate-500">
              Cole o link do YouTube. A thumbnail e o player serão montados automaticamente.
            </p>
          </div>

          <AdminPodcastForm />
        </div>
      </section>
    </main>
  );
}