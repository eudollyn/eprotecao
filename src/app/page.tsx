import Link from 'next/link';
import { getPublishedEpisodes, getPublishedPosts } from '@/lib/content';

const categories = [
  { label: 'Tecnologia', value: 'tecnologia' },
  { label: 'Carros', value: 'carros' },
  { label: 'Brasil', value: 'brasil' },
  { label: 'Mundo', value: 'mundo' },
  { label: 'Esporte', value: 'esporte' },
];

export default async function Home() {
  const posts = await getPublishedPosts();
  const episodes = await getPublishedEpisodes();

  const featuredPosts = posts.slice(0, 3);
  const featuredEpisodes = episodes.slice(0, 3);

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
              CONTEÚDO SOBRE
              <br />
              <span className="text-red-600">CARROS, MERCADO E PODCAST</span>
            </h1>
            <p className="max-w-2xl text-white/80 text-base md:text-lg leading-relaxed mb-8">
              O portal da eProteção reúne episódios, notícias, categorias editoriais e cobertura automotiva em um visual mais moderno, rápido e focado em conteúdo próprio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/episodios"
                className="bg-white text-black px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition shadow-2xl text-center"
              >
                Ver Episódios
              </Link>
              <Link
                href="/noticias"
                className="bg-red-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-red-600 transition text-center"
              >
                Ver Notícias
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 bg-[#001A3F] p-8 md:p-10 rounded-[2.5rem] border-b-[10px] border-red-600 shadow-2xl flex flex-col justify-end text-white">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 mb-4">
              Categorias
            </p>
            <h2 className="text-3xl md:text-4xl font-black italic tracking-tight mb-6 uppercase leading-tight">
              Conteúdo
              <br />
              segmentado
              <br />
              <span className="text-red-600 underline underline-offset-4">por tema</span>
            </h2>

            <div className="flex flex-wrap gap-3">
              {categories.map((item) => (
                <Link
                  key={item.value}
                  href={`/noticias?category=${item.value}`}
                  className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-red-600 transition text-[11px] font-black uppercase tracking-[0.2em]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-14">
        <div className="flex items-center gap-8 mb-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-[#000a1a] tracking-tight italic border-l-[10px] border-red-600 pl-6 leading-none">
            Últimos episódios
          </h2>
          <div className="flex-1 h-[2px] bg-slate-200 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredEpisodes.map((episode) => (
            <Link
              key={episode.id}
              href="/episodios"
              className="bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={episode.thumbnail}
                  alt={episode.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-red-600 mb-3">
                  Podcast
                </p>
                <h3 className="text-xl font-black text-[#001A3F] leading-snug">
                  {episode.title}
                </h3>
                <p className="mt-3 text-sm text-slate-500 line-clamp-3">
                  {episode.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-14 pb-20">
        <div className="flex items-center gap-8 mb-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-[#000a1a] tracking-tight italic border-l-[10px] border-red-600 pl-6 leading-none">
            Últimas notícias
          </h2>
          <div className="flex-1 h-[2px] bg-slate-200 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/noticias/${post.slug}`}
              className="bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-red-600 mb-3">
                  {post.category}
                </p>
                <h3 className="text-xl font-black text-[#001A3F] leading-snug">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-slate-500 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}