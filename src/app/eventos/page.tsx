import Link from 'next/link';

const eventos = [
  {
    date: '15 MAR',
    title: 'Encontro eProteção + Parceiros',
    location: 'Belo Horizonte, MG',
    description:
      'Evento presencial para networking, apresentação de parceiros e novidades do setor.',
  },
  {
    date: '02 ABR',
    title: 'Painel sobre proteção veicular e tecnologia',
    location: 'Online',
    description:
      'Debate com convidados sobre rastreamento, atendimento e crescimento digital no setor.',
  },
  {
    date: '18 MAI',
    title: 'Especial Podcast ao vivo',
    location: 'São Paulo, SP',
    description:
      'Gravação ao vivo com convidados, plateia e cobertura especial nas redes da eProteção.',
  },
];

export default function EventosPage() {
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
            Veja os próximos encontros, gravações especiais, participações e ações da eProteção com o público, parceiros e convidados.
          </p>
        </div>

        <div className="space-y-6">
          {eventos.map((evento, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 bg-slate-50 border border-slate-100 rounded-[2rem] p-6 md:p-8 shadow-sm"
            >
              <div className="bg-[#001A3F] text-white rounded-[1.5rem] flex items-center justify-center min-h-[100px]">
                <span className="text-2xl md:text-3xl font-black tracking-tight">
                  {evento.date}
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-black text-[#001A3F]">
                  {evento.title}
                </h2>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                  {evento.location}
                </p>
                <p className="mt-4 text-slate-500 leading-relaxed">
                  {evento.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}