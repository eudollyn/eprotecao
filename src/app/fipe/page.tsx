'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FipePage() {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');

  const podeConsultar = marca.trim() && modelo.trim() && ano.trim();
  const query = encodeURIComponent(`${marca} ${modelo} ${ano}`);

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

        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-red-600">
              Consulta rápida
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl font-black text-[#001A3F] tracking-tight">
              Fipe
            </h1>
            <p className="mt-3 text-slate-500 max-w-2xl">
              Pesquise rapidamente o veículo e avance para a consulta externa da tabela FIPE com o nome do modelo já preparado.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-sm font-bold text-[#001A3F] mb-2">
                  Marca
                </label>
                <input
                  value={marca}
                  onChange={(e) => setMarca(e.target.value)}
                  placeholder="Ex: Fiat"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#001A3F] mb-2">
                  Modelo
                </label>
                <input
                  value={modelo}
                  onChange={(e) => setModelo(e.target.value)}
                  placeholder="Ex: Argo"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#001A3F] mb-2">
                  Ano
                </label>
                <input
                  value={ano}
                  onChange={(e) => setAno(e.target.value)}
                  placeholder="Ex: 2022"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-red-600"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <Link
                href={
                  podeConsultar
                    ? `https://www.google.com/search?q=tabela+fipe+${query}`
                    : '#'
                }
                target="_blank"
                className={`px-8 py-4 rounded-2xl font-black uppercase text-sm tracking-wider text-center transition ${
                  podeConsultar
                    ? 'bg-red-600 text-white hover:bg-[#001A3F]'
                    : 'bg-slate-200 text-slate-400 pointer-events-none'
                }`}
              >
                Consultar agora
              </Link>

              <p className="text-sm text-slate-500 self-center">
                Preencha marca, modelo e ano para liberar a consulta.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}