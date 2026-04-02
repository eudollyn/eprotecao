import Link from 'next/link';

const destaques = [
  {
    title: 'Notícias',
    description: 'Matérias, análises e conteúdo editorial sobre proteção veicular e mercado automotivo.',
    href: '/noticias',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Eventos',
    description: 'Agenda de encontros, painéis, gravações especiais e ações da comunidade eProteção.',
    href: '/eventos',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Fipe',
    description: 'Área rápida para pesquisa e apoio à consulta de valores de referência de veículos.',
    href: '/fipe',
    image: 'https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 md:px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-8 group relative rounded-[2.5rem] overflow-hidden min-h-[420px] md:min-h-[560px] shadow-2xl flex items-end">
          <img
            src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1400"
            className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-105 transition duration-700"
            alt="Podcast eProteção"
          />
          <div className="relative p-8 md:p-14">
            <span className="bg-red-600 text-white font-black text-[10px] px-5 py-2 rounded-full mb-6 inline-block tracking-[0.35em] italic shadow-2xl">
              PODCAST NO AR
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-none uppercase italic mb-6 tracking-tight">
              O FUTURO DA
              <br />
              <span className="text-red-600">PROTEÇÃO É HOJE</span>
            </h1>
            <p className="max-w-2xl text-white/80 text-base md:text-lg leading-relaxed mb-8">
              O portal da eProteção reúne podcast, notícias, eventos e conteúdo relevante para quem acompanha o universo da proteção veicular e da mobilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/episodios"
                className="bg-white text-black px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition shadow-2xl text-center"
              >
                Ver Episódios
              </Link>
              <Link
                href="https://www.digicar.org.br"
                target="_blank"
                className="bg-red-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-red-600 transition text-center"
              >
                Assinar Proteção
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 bg-[#001A3F] p-8 md:p-10 rounded-[2.5rem] border-b-[10px] border-red-600 shadow-2xl flex flex-col justify-end text-white">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 mb-4">
              Destaque
            </p>
            <h2 className="text-3xl md:text-4xl font-black italic tracking-tight mb-6 uppercase leading-tight">
              Simule sua
              <br />
              proteção com a
              <br />
              <span className="text-red-600 underline underline-offset-4">Digicar</span>
            </h2>
            <p className="text-white/75 leading-relaxed mb-8">
              Uma área direta para quem quer conhecer melhor as possibilidades de proteção veicular com praticidade.
            </p>
            <Link
              href="https://www.digicar.org.br"
              target="_blank"
              className="w-full py-5 bg-red-600 rounded-[1.5rem] flex items-center justify-center font-black uppercase text-[11px] tracking-widest shadow-2xl hover:bg-white hover:text-[#001A3F] transition-all"
            >
              Cotar Agora →
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex items-center gap-8 mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-[#000a1a] tracking-tight italic border-l-[10px] border-red-600 pl-6 leading-none">
            Explore o portal
          </h2>
          <div className="flex-1 h-[2px] bg-slate-200 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destaques.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="text-2xl font-black text-[#001A3F] group-hover:text-red-600 transition">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-500 leading-relaxed">
                  {item.description}
                </p>
                <p className="mt-5 text-[11px] font-black uppercase tracking-[0.2em] text-red-600">
                  Acessar →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}