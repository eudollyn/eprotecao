'use client';

import { useEffect, useState } from "react";

export default function MobileSplash() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const alreadySeen = sessionStorage.getItem("ep_splash_seen");

    if (isMobile && !alreadySeen) {
      setVisible(true);
      sessionStorage.setItem("ep_splash_seen", "1");

      const timer = setTimeout(() => {
        setVisible(false);
      }, 2400);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#020814]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,35,46,0.25),_transparent_35%),radial-gradient(circle_at_bottom,_rgba(0,153,255,0.18),_transparent_40%)]" />
      <div className="absolute inset-0 opacity-25">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
      </div>

      <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
        <div className="absolute h-64 w-64 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute h-72 w-72 rounded-full border border-cyan-400/20 animate-ping" />

        <img
          src="/assets/logos/logo.png"
          alt="eProteção"
          className="relative z-10 h-24 w-auto brightness-0 invert drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]"
        />

        <p className="relative z-10 mt-8 text-[11px] font-black uppercase tracking-[0.45em] text-red-500">
          Podcast • Notícias • Carros
        </p>

        <div className="relative z-10 mt-6 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse [animation-delay:200ms]" />
          <div className="h-2 w-2 rounded-full bg-white animate-pulse [animation-delay:400ms]" />
        </div>
      </div>
    </div>
  );
}