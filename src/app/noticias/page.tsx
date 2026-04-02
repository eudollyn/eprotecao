import Link from 'next/link';

const noticias = [
  {
    title: 'Proteção veicular vale a pena em 2026?',
    excerpt: 'Entenda quando a proteção veicular pode ser uma alternativa interessante para quem busca economia e suporte no dia a dia.',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200',
    href: '/noticia'
  },
  {
    title: 'Os cuidados mais importantes ao contratar proteção',
    excerpt: 'Veja os pontos essenciais para analisar antes de fechar com uma associação ou empresa parceira.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200',
    href: '/noticia'
  },
  {
    title: 'Como escolher uma associação confiável',
    excerpt: 'Da reputação ao atendimento, descubra como avaliar melhor uma proposta antes de assinar.',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200',
    href: '/noticia'
  },
  {
    title: 'Tecnologia e rastreamento: o novo cenário automotivo',
    excerpt: 'Rastreadores, monitoramento e comportamento do consumidor estão moldando o futuro da proteção veicular.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    href: '/noticia'
  }
];

export default function NoticiasPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-14">
        <div className="mb-10">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-red-600">
            Conteúdo editorial
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-black text-[#001A3F] tracking-tight">
            Notícias
          </h1>
          <p className="mt-3 text-slate-500 max-w-2xl">
            Acompanhe conteúdos sobre proteção veicular, segurança automotiva, mercado, mobilidade e tendências que impactam motoristas e associações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {noticias.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 hover:-translate-y-1 hover:shadow-2xl transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-red-600 mb-3">
                  eProteção News
                </p>
                <h2 className="text-xl font-black text-[#001A3F] leading-snug">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                  {item.excerpt}
                </p>
                <p className="mt-5 text-[11px] font-black uppercase tracking-[0.2em] text-[#001A3F]">
                  Ler matéria →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}