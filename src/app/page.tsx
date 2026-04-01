import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NOTICIAS_REAIS = [
  {
    title: "COMO ESCOLHER ASSOCIACAO DE PROTECAO VEICULAR",
    link: "https://www.digicar.org.br/post/como-escolher-associação-de-proteção-veicular-guia-completo-para-tomar-a-melhor-decisão",
    img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "PROTECAO VEICULAR VALE A PENA EM 2026?",
    link: "https://www.digicar.org.br/post/proteção-veicular-vale-a-pena-descubra-se-é-uma-boa-opção-para-você",
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "OS PRINCIPAIS BENEFICIOS DA DIGICAR",
    link: "https://www.digicar.org.br/post/os-principais-benefícios-de-uma-associação-de-proteção-veicular",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "CUIDADOS VITAIS AO CONTRATAR PROTECAO",
    link: "https://www.digicar.org.br/post/cuidados-ao-contratar-proteção-veicular-o-que-você-precisa-saber",
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600"
  }
];

export default function Home() {
  const linkDigicar = "https://www.digicar.org.br";

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* BANNER PODCAST HERO */}
        <div className="lg:col-span-8 group relative rounded-[3rem] overflow-hidden h-[600px] shadow-2xl flex items-end">
           <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover transition-all duration-[4s] group-hover:scale-105 brightness-50" alt="Podcast" />
           <div className="relative p-12 lg:p-16">
              <span className="bg-red-600 text-white font-black text-[10px] px-6 py-2 rounded mb-8 inline-block tracking-[0.4em] italic shadow-2xl">STREAMING AGORA</span>
              <h1 className="text-6xl font-black text-white leading-none uppercase italic mb-8 tracking-tighter">O FUTURO DA PROTECAO <br/><span className="text-red-600">É HOJE</span></h1>
              <div className="flex gap-4">
                 <button className="bg-white text-black px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-110 transition shadow-2xl">Ouça no Spotify</button>
                 <a href={linkDigicar} className="bg-red-600 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-red-600 transition">Assinar Proteção</a>
              </div>
           </div>
        </div>

        {/* COTAÇÃO LATERAL */}
        <div className="lg:col-span-4 bg-[#001A3F] p-12 rounded-[3.5rem] border-b-[12px] border-red-600 shadow-2xl flex flex-col justify-end text-white group overflow-hidden">
           <div className="relative z-10">
              <h3 className="text-4xl font-black italic tracking-tighter mb-8 uppercase leading-tight italic uppercase italic">SIMULE SUA <br/>PROTECAO COM A <br/><span className="text-red-600 decoration-8 decoration-white underline-offset-4 underline">DIGICAR</span></h3>
              <a href={linkDigicar} target="_blank" className="w-full py-7 bg-red-600 rounded-[2rem] flex items-center justify-center font-black uppercase text-[11px] tracking-widest shadow-2xl hover:bg-white hover:text-[#001A3F] transition-all">Cotar Agora →</a>
           </div>
        </div>
      </section>

      {/* FEED NOTÍCIAS REAIS FUNCIONANDO */}
      <section className="container mx-auto px-6 py-24 bg-slate-50 mt-12 rounded-[4rem] border border-gray-100 shadow-inner">
        <div className="flex items-center gap-10 mb-20">
           <h2 className="text-5xl font-black uppercase text-[#000a1a] tracking-tighter italic border-l-[12px] border-red-600 pl-10 leading-none">Guia eProteção</h2>
           <div className="flex-1 h-[2px] bg-slate-200 hidden md:block" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-20">
           {NOTICIAS_REAIS.map((item, i) => (
             <a key={i} href={item.link} target="_blank" className="group">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl mb-8 relative border-4 border-white transition-all group-hover:border-red-600 group-hover:rotate-1">
                   <img src={item.img} className="w-full h-full object-cover transition duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" />
                   <div className="absolute top-4 left-4 bg-red-600 px-3 py-1 rounded font-black text-white text-[9px] uppercase italic italic tracking-[0.2em] shadow-xl">Digicar News</div>
                </div>
                <h4 className="text-[20px] font-black text-[#001A3F] leading-tight group-hover:text-red-600 transition tracking-tighter uppercase italic italic tracking-tighter leading-snug">{item.title}</h4>
                <p className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] text-red-600 border-b-2 border-red-600 w-fit">Ler Artigo Completo</p>
             </a>
           ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}