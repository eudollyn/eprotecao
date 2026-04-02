import Link from 'next/link';
import { siteConfig } from '@/constants/siteConfig';

function SpotifyLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#1DB954" aria-hidden="true">
      <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.513 17.307c-.22.355-.683.47-1.037.251-2.85-1.741-6.44-2.137-10.665-1.171-.402.091-.806-.164-.897-.565-.09-.401.164-.805.564-.896 4.623-1.057 8.591-.61 11.785 1.341.355.218.47.68.25 1.04zm1.47-3.254c-.276.45-.862.592-1.312.316-3.262-2.006-8.232-2.587-12.09-1.416-.508.154-1.041-.131-1.196-.639-.155-.508.13-1.04.64-1.196 4.41-1.34 9.894-.687 13.642 1.621.448.275.592.86.316 1.314zm.128-3.395c-.332.535-1.033.705-1.57.373-3.83-2.274-10.155-2.484-13.805-1.378-.616.185-1.26-.172-1.444-.788-.186-.615.172-1.258.788-1.444 4.29-1.302 11.272-1.057 15.656 1.547.535.318.707 1.018.374 1.57v-.001z"/>
    </svg>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] w-full border-b border-white/5">
      <div className="bg-[#000a1a] text-white py-2 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-2 border-b border-white/5">
        <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest italic text-center md:text-left">
          <span className="opacity-50 font-medium lowercase">em parceria com:</span>
          <span className="text-red-600 drop-shadow-[0_0_8px_rgba(217,35,46,0.5)]">
            DIGICAR SEGUROS
          </span>
        </div>

        <Link
          href={siteConfig.social.spotify}
          target="_blank"
          className="flex items-center gap-3 hover:scale-105 transition group"
        >
          <span className="text-[9px] font-bold opacity-60">OUÇA O PODCAST NO</span>
          <div className="flex items-center gap-2 text-[#1DB954]">
            <SpotifyLogo />
            <span className="text-[10px] font-black tracking-[0.2em]">SPOTIFY</span>
          </div>
        </Link>
      </div>

      <nav className="bg-white/90 backdrop-blur-xl py-4">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0">
            <img
              src="/assets/logos/logo.png"
              alt="eProteção"
              className="h-11 w-auto contrast-125 hover:brightness-125 transition duration-500"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-10 text-[#001A3F] font-black text-[10px] tracking-[0.3em] uppercase">
            <Link href="/noticias" className="hover:text-red-600 transition">Notícias</Link>
            <Link href="/episodios" className="hover:text-red-600 transition">Episódios</Link>
            <Link href="/eventos" className="hover:text-red-600 transition">Eventos</Link>
            <Link href="/fipe" className="hover:text-red-600 transition">Fipe</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="hidden md:inline-flex bg-blue-600 text-white px-5 py-3 rounded-xl font-black text-[10px] tracking-widest shadow-lg hover:bg-blue-700 transition-all uppercase"
            >
              Administração
            </Link>

            <Link
              href="https://www.digicar.org.br"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-5 md:px-8 py-3 rounded-xl font-black text-[10px] tracking-widest shadow-2xl shadow-red-500/20 hover:bg-[#001A3F] transition-all duration-500 uppercase flex items-center gap-2 group text-center"
            >
              Cotar Proteção Digicar
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        <div className="lg:hidden container mx-auto px-4 pt-3 flex items-center justify-center gap-5 text-[#001A3F] font-black text-[10px] tracking-[0.15em] uppercase flex-wrap">
          <Link href="/noticias" className="hover:text-red-600 transition">Notícias</Link>
          <Link href="/episodios" className="hover:text-red-600 transition">Episódios</Link>
          <Link href="/eventos" className="hover:text-red-600 transition">Eventos</Link>
          <Link href="/fipe" className="hover:text-red-600 transition">Fipe</Link>
          <Link href="/admin" className="hover:text-red-600 transition">Admin</Link>
        </div>
      </nav>
    </header>
  );
}