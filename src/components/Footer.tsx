import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/constants/siteConfig';

function YoutubeIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="#FF0000" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="#E4405F" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4.162 4.162 0 1 1 0-8.324 4.162 4.162 0 0 1 0 8.324zM18.406 4.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
    </svg>
  );
}

function SpotifyIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="#1DB954" aria-hidden="true">
      <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.513 17.307c-.22.355-.683.47-1.037.251-2.85-1.741-6.44-2.137-10.665-1.171-.402.091-.806-.164-.897-.565-.09-.401.164-.805.564-.896 4.623-1.057 8.591-.61 11.785 1.341.355.218.47.68.25 1.04zm1.47-3.254c-.276.45-.862.592-1.312.316-3.262-2.006-8.232-2.587-12.09-1.416-.508.154-1.041-.131-1.196-.639-.155-.508.13-1.04.64-1.196 4.41-1.34 9.894-.687 13.642 1.621.448.275.592.86.316 1.314zm.128-3.395c-.332.535-1.033.705-1.57.373-3.83-2.274-10.155-2.484-13.805-1.378-.616.185-1.26-.172-1.444-.788-.186-.615.172-1.258.788-1.444 4.29-1.302 11.272-1.057 15.656 1.547.535.318.707 1.018.374 1.57v-.001z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#000a1a] text-white pt-20 md:pt-24 pb-12 border-t-[12px] md:border-t-[16px] border-red-600">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 border-b border-white/5 pb-16 md:pb-20 items-start">
          <div className="md:col-span-4 space-y-8">
            <img
              src="/assets/logos/logo.png"
              className="h-16 w-auto brightness-0 invert"
              alt="Logo"
            />
            <div className="space-y-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              <p className="flex gap-4">
                <MapPin size={22} className="text-red-600 shrink-0" />
                {siteConfig.company.address}
              </p>
              <p className="flex items-center gap-4">
                <Mail size={22} className="text-red-600 shrink-0" />
                {siteConfig.company.email}
              </p>
              <p className="flex items-center gap-4">
                <Phone size={22} className="text-red-600 shrink-0" />
                {siteConfig.company.phone}
              </p>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col items-center">
            <h4 className="font-black mb-8 uppercase text-xs tracking-widest text-red-600 italic text-center">
              Podcast e redes oficiais
            </h4>

            <div className="grid grid-cols-4 gap-4">
              <Link href={siteConfig.social.youtube} target="_blank" className="bg-white p-4 rounded-2xl hover:scale-110 transition shadow-xl flex items-center justify-center" aria-label="YouTube">
                <YoutubeIcon />
              </Link>
              <Link href={siteConfig.social.instagram} target="_blank" className="bg-white p-4 rounded-2xl hover:scale-110 transition shadow-xl flex items-center justify-center" aria-label="Instagram">
                <InstagramIcon />
              </Link>
              <Link href={siteConfig.social.spotify} target="_blank" className="bg-white p-4 rounded-2xl hover:scale-110 transition shadow-xl flex items-center justify-center" aria-label="Spotify">
                <SpotifyIcon />
              </Link>
              <Link href={siteConfig.social.facebook} target="_blank" className="bg-white p-4 rounded-2xl hover:scale-110 transition shadow-xl flex items-center justify-center" aria-label="Facebook">
                <FacebookIcon />
              </Link>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col md:items-end gap-6 text-[10px] font-black uppercase tracking-widest text-slate-500 italic">
            <Link href="/politicas#termos" className="hover:text-red-600 transition">
              Políticas e Termos
            </Link>
            <Link href="/politicas#pagamento" className="hover:text-red-600 transition">
              Pagamento & Devolução
            </Link>
            <Link href="/politicas#privacidade" className="hover:text-red-600 transition underline decoration-red-600 underline-offset-4">
              Privacidade LGPD
            </Link>
          </div>
        </div>

        <p className="text-center mt-12 text-[9px] font-black text-gray-800 tracking-[0.25em] md:tracking-[0.4em] uppercase leading-loose">
          RGS SERVICOS LTDA • CNPJ 19.545.954/0001-08 • Belo Horizonte MG
          <br />
          <span className="text-red-600 italic">
            © 2026 E-PROTEÇÃO NETWORK • PODCAST E CONTEÚDO AUTOMOTIVO
          </span>
        </p>
      </div>
    </footer>
  );
}