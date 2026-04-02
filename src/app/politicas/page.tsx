import Link from 'next/link';

export default function PoliticasPage() {
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

        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-lg border border-slate-100 p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-black text-[#001A3F] tracking-tight">
            Políticas
          </h1>

          <div className="mt-10 space-y-10">
            <section id="termos">
              <h2 className="text-2xl font-black text-[#001A3F]">Termos</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Insira aqui os termos do portal, regras de uso, responsabilidades e diretrizes editoriais.
              </p>
            </section>

            <section id="pagamento">
              <h2 className="text-2xl font-black text-[#001A3F]">Pagamento & Devolução</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Caso existam produtos, assinaturas ou serviços, detalhe aqui as regras correspondentes.
              </p>
            </section>

            <section id="privacidade">
              <h2 className="text-2xl font-black text-[#001A3F]">Privacidade LGPD</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Informe como os dados são tratados, armazenados e usados, em conformidade com a LGPD.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}