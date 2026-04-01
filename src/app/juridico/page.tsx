import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Juridico() {
  return (
    <main className="bg-white min-h-screen text-slate-800">
      <Header />
      <div className="container mx-auto px-6 py-20 max-w-4xl font-serif">
        <h1 className="text-4xl font-black mb-10 text-[#001A3F] uppercase tracking-tighter">Políticas e Termos Oficiais</h1>
        <div className="prose prose-slate lg:prose-xl space-y-8">
           <section>
              <h2 className="text-2xl font-bold text-red-600 mb-4">1. Termos de Uso do Portal e-Proteção</h2>
              <p>Este portal é operado pela Rgs Servicos de Escritorio Administrativo LTDA. Ao acessar, você concorda com os termos...</p>
           </section>
           <section>
              <h2 className="text-2xl font-bold text-red-600 mb-4">2. Parceria e Proteção Digicar</h2>
              <p>O portal atua como braço de mídia e divulgação da Proteção Veicular Digicar...</p>
           </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}