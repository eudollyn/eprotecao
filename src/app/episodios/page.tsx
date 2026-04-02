'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../../firebase';

type Episode = {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
  videoId: string;
  thumbnail: string;
};

export default function EpisodiosPage() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [selected, setSelected] = useState<Episode | null>(null);

  useEffect(() => {
    async function fetchEpisodes() {
      try {
        const q = query(collection(db, 'episodes'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Episode[];

        setEpisodes(data);
        if (data.length > 0) setSelected(data[0]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchEpisodes();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-14">
        <div className="mb-10">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-red-600">
            Podcast eProteção
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-black text-[#001A3F] tracking-tight">
            Episódios
          </h1>
          <p className="mt-3 text-slate-500 max-w-2xl">
            Assista aos episódios direto no site. Ao cadastrar um novo vídeo no painel admin, ele aparece aqui automaticamente.
          </p>
        </div>

        {selected && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-8 bg-black rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selected.videoId}`}
                  title={selected.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-[2rem] shadow-xl border border-slate-100 p-6 md:p-8">
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-red-600">
                Tocando agora
              </p>
              <h2 className="mt-3 text-2xl font-black text-[#001A3F]">
                {selected.title}
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                {selected.description}
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {episodes.map((episode) => (
            <button
              key={episode.id}
              onClick={() => setSelected(episode)}
              className="text-left bg-white rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 hover:-translate-y-1 hover:shadow-2xl transition"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={episode.thumbnail}
                  alt={episode.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-black text-[#001A3F] leading-snug">
                  {episode.title}
                </h3>
                <p className="mt-3 text-sm text-slate-500 line-clamp-3">
                  {episode.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {episodes.length === 0 && (
          <div className="bg-white rounded-[2rem] shadow-lg border border-slate-100 p-10 text-center text-slate-500">
            Nenhum episódio cadastrado ainda.
          </div>
        )}
      </section>
    </main>
  );
}