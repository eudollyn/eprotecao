import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, Share2, Clock, ChevronRight } from 'lucide-react';

export default function NoticiaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* BREADCRUMBS - Navegação interna */}
      <nav className="bg-slate-50 border-b border-gray-100 py-3">
        <div className="container mx-auto px-6 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <a href="/" className="hover:text-red-600">Home</a>
          <ChevronRight size={12} />
          <a href="#" className="hover:text-red-600">Notícias</a>
          <ChevronRight size={12} />
          <span className="text-slate-600">Segurança Automotiva</span>
        </div>
      </nav>

      <article className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-12 gap-12">
          
          {/* COLUNA PRINCIPAL DE LEITURA */}
          <div className="col-span-12 lg:col-span-8">
            
            {/* CABEÇALHO DA MATÉRIA */}
            <header className="mb-10">
              <h1 className="text-4xl md:text-5xl font-black text-[#001A3F] leading-tight mb-6">
                Os 10 modelos de carros mais visados para roubo e furto no Brasil em 2024
              </h1>
              <p className="text-xl text-slate-500 mb-8 leading-relaxed italic">
                Relatório atualizado da Confederação Nacional de Seguros aponta crescimento em roubos de modelos SUV. Confira se o seu veículo está na lista.
              </p>
              
              <div className="flex flex-wrap items-center justify-between gap-6 border-y border-gray-100 py-6">
                <div className="flex items-center gap-4 text-sm">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs uppercase">EP</div>
                  <div>
                    <p className="font-bold text-[#001A3F]">Redação eProteção</p>
                    <p className="text-slate-400 text-xs flex items-center gap-2">
                       <Calendar size={12} /> 05 de Março, 2024 • <Clock size={12} /> 6 min de leitura
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                   <span className="text-[10px] font-black uppercase text-slate-400">Compartilhar:</span>
                   <button className="p-2 bg-slate-100 rounded-full hover:bg-red-600 hover:text-white transition"><Share2 size={18}/></button>
                </div>
              </div>
            </header>

            {/* IMAGEM DE CAPA */}
            <figure className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200" 
                alt="Carro de Luxo em perigo" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <figcaption className="text-center text-slate-400 text-xs mt-4 italic font-medium">
                Impostos e Seguros: Especialistas explicam o aumento de incidentes em áreas metropolitanas. (Foto: Reprodução/eProteção)
              </figcaption>
            </figure>

            {/* CORPO DO TEXTO */}
            <section className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8">
              <p className="font-medium text-lg text-[#001A3F]">
                O cenário da segurança automotiva no Brasil vem sofrendo mutações significativas. O que antes era focado apenas em veículos populares, agora abrange uma vasta gama de SUVs e carros de luxo.
              </p>
              <h2 className="text-2xl font-black text-[#001A3F] pt-4">Por que os roubos estão aumentando?</h2>
              <p>
                De acordo com especialistas em segurança da <strong>eProteção</strong>, a alta demanda por peças no mercado paralelo e a falta de rastreadores modernos são os principais motivadores. Muitas vezes, o proprietário só percebe a vulnerabilidade quando já é tarde demais.
              </p>
              
              {/* BANNER DE CTA NO MEIO DO TEXTO */}
              <div className="bg-[#001A3F] p-8 my-12 rounded-3xl text-white relative overflow-hidden group">
                 <div className="relative z-10">
                   <h4 className="text-2xl font-black mb-2 uppercase">Evite o Prejuízo!</h4>
                   <p className="text-slate-300 text-sm mb-6 max-w-md italic">Sabia que 70% dos motoristas que perdem o carro para o roubo não possuem qualquer tipo de proteção? Não seja essa estatística.</p>
                   <button className="px-6 py-3 bg-red-600 rounded-xl font-bold uppercase text-xs hover:bg-white hover:text-red-600 transition-all scale-105 group-hover:scale-110 shadow-xl">
                      Cote Proteção agora de graça
                   </button>
                 </div>
                 <div className="absolute top-0 right-0 opacity-10 -rotate-12 translate-x-12 translate-y-12">
                   <img src="/assets/logos/logo.png" className="w-64 grayscale brightness-200" alt="Logo BG" />
                 </div>
              </div>

              <p>
                Os modelos Volkswagen Gol, Hyundai HB20 e o Toyota Corolla seguem liderando as listas nacionais. No entanto, o fenômeno das SUVs de médio porte em capitais como Rio de Janeiro e São Paulo preocupa as seguradoras e associações.
              </p>

              <ul className="list-disc pl-6 space-y-4 marker:text-red-600 italic">
                <li>Instale rastreadores com tecnologia 5G;</li>
                <li>Evite estacionar em vias mal iluminadas;</li>
                <li>Verifique se o seu modelo está no "top 10" mais visado.</li>
              </ul>
            </section>
          </div>

          {/* BARRA LATERAL (SIDEBAR) */}
          <aside className="col-span-12 lg:col-span-4 space-y-10">
            
            {/* BOX DO AUTOR / SOBRE A EPROTECAO */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100">
               <h4 className="text-xs font-black text-[#001A3F] uppercase tracking-widest mb-6">Podcast EP de Hoje</h4>
               <div className="relative h-40 bg-gray-200 rounded-2xl overflow-hidden mb-4 group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=500" className="w-full h-full object-cover transition group-hover:scale-105" alt="Spotify" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center text-white">▶</div>
                  </div>
               </div>
               <p className="text-sm font-bold text-[#001A3F] hover:text-red-600 transition cursor-pointer">Ep. 42: A era dos rastreadores inteligentes no Brasil</p>
            </div>

            {/* MAIS LIDAS (Fica colado enquanto o usuario faz o scroll) */}
            <div className="sticky top-28">
              <h4 className="text-xs font-black text-[#001A3F] uppercase tracking-widest mb-6 border-b-2 border-red-600 pb-2 inline-block">Mundo Automotivo</h4>
              <div className="space-y-8">
                 {[1,2,3].map(i => (
                    <div key={i} className="flex gap-4 group cursor-pointer">
                       <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden shrink-0 shadow-sm">
                          <img src={`https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=200&index=${i}`} className="w-full h-full object-cover transition group-hover:scale-110" />
                       </div>
                    </div>
                 ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
      <Footer />
    </main>
  );
}