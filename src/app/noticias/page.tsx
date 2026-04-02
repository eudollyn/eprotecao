import Link from 'next/link';
import { getPublishedPosts, type Category } from '@/lib/content';

const categoryLabels: Record<Category, string> = {
  tecnologia: 'Tecnologia',
  carros: 'Carros',
  brasil: 'Brasil',
  mundo: 'Mundo',
  esporte: 'Esporte',
};

export default async function NoticiasPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; category?: string }>;
}) {
  const params = (await searchParams) || {};
  const q = (params.q || '').toLowerCase().trim();
  const category = (params.category || '').toLowerCase().trim();

  const posts = await getPublishedPosts();

  const filtered = posts.filter((post) => {
    const matchesQuery =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.content.toLowerCase().includes(q);

    const matchesCategory = !category || post.category === category;

    return matchesQuery && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-slate-50">
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
            Conteúdo editorial
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-black text-[#001A3F] tracking-tight">
            Notícias
          </h1>
          <p className="mt-3 text-slate-500 max-w-2xl">
            Conteúdo próprio da empresa, organizado por categorias editoriais automotivas.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          <Link href="/noticias" className="px-4 py-3 rounded-2xl bg-white border border-slate-200 text-[11px] font-black uppercase tracking-[0.2em] hover:border-red-600 transition">
            Todas
          </Link>
          {Object.entries(categoryLabels).map(([value, label]) => (
            <Link
              key={value}
              href={`/noticias?category=${value}`}
              className="px-4 py-3 rounded-2xl bg-white border border-slate-200 text-[11px] font-black uppercase tracking-[0.2em] hover:border-red-600 transition"
            >
              {label}
            </Link>
          ))}
        </div>

        {q && (
          <p className="mb-6 text-sm text-slate-500">
            Resultado da busca para: <span className="font-bold text-[#001A3F]">{q}</span>
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <Link
              key={item.id}
              href={`/noticias/${item.slug}`}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 hover:-translate-y-1 hover:shadow-2xl transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-red-600 mb-3">
                  {item.category}
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

        {filtered.length === 0 && (
          <div className="bg-white rounded-[2rem] shadow-lg border border-slate-100 p-10 text-center text-slate-500 mt-8">
            Nenhuma notícia encontrada.
          </div>
        )}
      </section>
    </main>
  );
}