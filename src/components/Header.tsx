import Link from 'next/link';
import { siteConfig } from '@/constants/siteConfig';

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] w-full border-b border-white/5">
      {/* BARRA DE PARCERIA & SPOTIFY */}
      <div className="bg-[#000a1a] text-white py-2 px-6 flex flex-col md:flex-row justify-between items-center gap-2 border-b border-white/5">
        <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest italic">
          <span className="opacity-50 font-medium lowercase">em parceria com:</span>
          <span className="text-red-600 drop-shadow-[0_0_8px_rgba(217,35,46,0.5)]">DIGICAR SEGUROS</span>
        </div>
        <Link href={siteConfig.social.spotify} target="_blank" className="flex items-center gap-3 hover:scale-105 transition group">
          <span className="text-[9px] font-bold opacity-60">OUÇA O PODCAST NO</span>
          <div className="flex items-center gap-1.5 text-[#1DB954]">
             <div className="w-3.5 h-3.5 bg-[#1DB954] rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-black rounded-full" />
             </div>
             <span className="text-[10px] font-black tracking-[0.2em]">SPOTIFY</span>
          </div>
        </Link>
      </div>

      {/* NAVEGAÇÃO GLASSMORPHISM */}
      <nav className="bg-white/80 backdrop-blur-xl py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <img src="/assets/logos/logo.png" alt="eProteção" className="h-11 w-auto contrast-125 hover:brightness-125 transition duration-500" />
          </Link>

          <div className="hidden lg:flex space-x-10 text-[#001A3F] font-black text-[10px] tracking-[0.3em] uppercase">
            <Link href="#" className="hover:text-red-600 transition">Notícias</Link>
            <Link href="#" className="hover:text-red-600 transition">Episódios</Link>
            <Link href="#" className="hover:text-red-600 transition">Eventos</Link>
            <Link href="#" className="hover:text-red-600 transition">Fipe</Link>
          </div>

          <Link 
  href="https://www.digicar.org.br" 
  target="_blank"
  rel="noopener noreferrer"
  className="bg-red-600 text-white px-8 py-3 rounded-xl font-black text-[10px] tracking-widest shadow-2xl shadow-red-500/20 hover:bg-[#001A3F] transition-all duration-500 uppercase flex items-center gap-2 group"
>
  Cotar Proteção Digicar 
  <span className="group-hover:translate-x-1 transition-transform">→</span>
</Link>
        </div>
      </nav>
    </header>
  );
}