'use client';

import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';

function extractYouTubeId(url: string) {
  const regex =
    /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/)([^&?/]+)/;
  const match = url.match(regex);
  return match ? match[1] : '';
}

export default function AdminPodcastForm() {
  const [title, setTitle] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage('');

    const videoId = extractYouTubeId(youtubeUrl);

    if (!videoId) {
      setMessage('Link do YouTube inválido.');
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, 'episodes'), {
        title,
        description,
        youtubeUrl,
        videoId,
        thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        createdAt: serverTimestamp(),
      });

      setTitle('');
      setYoutubeUrl('');
      setDescription('');
      setMessage('Episódio cadastrado com sucesso.');
    } catch (error) {
      console.error(error);
      setMessage('Erro ao salvar episódio.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-bold text-[#001A3F] mb-2">
          Título do episódio
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex: Episódio 12 - Proteção veicular vale a pena?"
          className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-red-600"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-[#001A3F] mb-2">
          Link do YouTube
        </label>
        <input
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
          placeholder="https://www.youtube.com/watch?v=..."
          className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-red-600"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-[#001A3F] mb-2">
          Descrição
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Resumo do episódio"
          rows={5}
          className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-red-600 resize-none"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full md:w-auto bg-red-600 text-white px-8 py-4 rounded-2xl font-black uppercase text-sm tracking-wider hover:bg-[#001A3F] transition disabled:opacity-60"
      >
        {loading ? 'Salvando...' : 'Salvar episódio'}
      </button>

      {message && (
        <p className="text-sm font-bold text-slate-600">{message}</p>
      )}
    </form>
  );
}