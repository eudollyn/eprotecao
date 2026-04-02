import Link from 'next/link';
import { getPublishedEvents } from '@/lib/content';

export default async function EventosPage() {
  const events = await getPublishedEvents();

  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-14">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-red-600 hover:text-[#001A3F] transition"
          >
            ← Voltar para a página inicial
          </Link>
        </div>

        <div className="mb-10">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-red-600">
            Agenda
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-black text-[#001A3F] tracking-tight">
            Eventos
          </h1>
          <p className="mt-3 text-slate-500 max-w-2xl">
            Acompanhe os próximos eventos, gravações especiais, encontros e ações editoriais da eProteção.
          </p>
        </div>

        {events.length === 0 ? (
          <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-10 text-center text-slate-500 shadow-sm">
            Nenhum evento publicado no momento.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {events.map((event) => (
              <Link
                key={event.id}
                href={`/eventos/${event.slug}`}
                className="group bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={event.coverImage}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="p-6 md:p-7">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-red-600">
                    Evento
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-[#001A3F] group-hover:text-red-600 transition">
                    {event.title}
                  </h3>

                  <p className="mt-3 text-slate-500 leading-relaxed">
                    {event.excerpt}
                  </p>

                  {event.startDate && (
                    <p className="mt-4 text-sm font-bold text-slate-700">
                      {new Date(event.startDate).toLocaleString("pt-BR")}
                    </p>
                  )}

                  <p className="mt-5 text-[11px] font-black uppercase tracking-[0.2em] text-red-600">
                    Ver detalhes →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}	