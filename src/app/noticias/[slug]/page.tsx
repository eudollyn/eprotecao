import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { getPostBySlug } from '@/lib/content';

export default async function NoticiaDetalhePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="bg-slate-50 border-b border-gray-100 py-3">
        <div className="container mx-auto px-6 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <ChevronRight size={12} />
          <Link href="/noticias" className="hover:text-red-600">Notícias</Link>
          <ChevronRight size={12} />
          <span className="text-slate-600">{post.category}</span>
        </div>
      </nav>

      <article className="container mx-auto px-6 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/noticias"
              className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-red-600 hover:text-[#001A3F] transition"
            >
              ← Voltar para notícias
            </Link>
          </div>

          <header className="mb-10">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-red-600 mb-4">
              {post.category}
            </p>

            <h1 className="text-4xl md:text-5xl font-black text-[#001A3F] leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-slate-500 mb-8 leading-relaxed italic">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-6 border-y border-gray-100 py-6">
              <div className="flex items-center gap-4 text-sm">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs uppercase">
                  EP
                </div>
                <div>
                  <p className="font-bold text-[#001A3F]">Redação eProteção</p>
                  <p className="text-slate-400 text-xs flex items-center gap-2">
                    <Calendar size={12} /> Publicado
                    <span>•</span>
                    <Clock size={12} /> Leitura rápida
                  </p>
                </div>
              </div>
            </div>
          </header>

          <figure className="mb-12">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </figure>

          <section className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            {post.content.split('\n').map((paragraph, index) =>
              paragraph.trim() ? <p key={index}>{paragraph}</p> : null
            )}
          </section>
        </div>
      </article>
    </main>
  );
}