import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getEventBySlug } from '@/lib/content';

export default async function EventoDetalhePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) notFound();

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-14">
        <div className="mb-8">
          <Link
            href="/eventos"
            className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-red-600 hover:text-[#001A3F] transition"
          >
            ← Voltar para eventos
          </Link>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100">
          <div className="aspect-[16/7] overflow-hidden">
            <img
              src={event.coverImage}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-red-600">
              Evento
            </p>

            <h1 className="mt-3 text-3xl md:text-5xl font-black text-[#001A3F] tracking-tight">
              {event.title}
            </h1>

            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              {event.excerpt}
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {event.startDate && (
                <div className="rounded-[1.5rem] bg-slate-50 p-5 border border-slate-100">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    Início
                  </p>
                  <p className="mt-2 font-bold text-slate-900">
                    {new Date(event.startDate).toLocaleString("pt-BR")}
                  </p>
                </div>
              )}

              {event.endDate && (
                <div className="rounded-[1.5rem] bg-slate-50 p-5 border border-slate-100">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    Fim
                  </p>
                  <p className="mt-2 font-bold text-slate-900">
                    {new Date(event.endDate).toLocaleString("pt-BR")}
                  </p>
                </div>
              )}

              {event.address && (
                <div className="rounded-[1.5rem] bg-slate-50 p-5 border border-slate-100 md:col-span-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    Endereço
                  </p>
                  <p className="mt-2 font-bold text-slate-900">
                    {event.address}
                  </p>
                </div>
              )}
            </div>

            {event.description && (
              <div className="mt-10">
                <h2 className="text-2xl font-black text-[#001A3F]">
                  Sobre o evento
                </h2>

                <div className="mt-4 prose prose-lg max-w-none text-slate-700">
                  {event.description.split('\n').map((paragraph, index) =>
                    paragraph.trim() ? <p key={index}>{paragraph}</p> : null
                  )}
                </div>
              </div>
            )}

            {event.ticketUrl && (
              <div className="mt-10">
                <a
                  href={event.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-8 py-4 rounded-2xl bg-red-600 text-white font-black uppercase text-sm tracking-[0.2em] hover:bg-[#001A3F] transition"
                >
                  Comprar ingresso
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}	