import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PoliticasPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <Header />
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-5xl font-black text-[#001A3F] mb-16 uppercase italic">Informações Legais</h1>
        
        <div className="space-y-16">
          <section id="termos" className="border-l-4 border-red-600 pl-8">
            <h2 className="text-2xl font-black uppercase mb-6 italic">1. Termos de Uso do Portal</h2>
            <div className="prose prose-slate leading-relaxed font-medium">
              <p>Bem-vindo ao e-proteção. Este portal é de propriedade e operado pela <strong>Rgs Servicos de Escritorio Administrativo LTDA</strong> (CNPJ 19.545.954/0001-08), Belo Horizonte – MG.</p>
              <p>Ao acessar, você concorda com o uso de nossos canais informativos e plataforma de eventos...</p>
            </div>
          </section>

          <section id="privacidade" className="border-l-4 border-red-600 pl-8">
            <h2 className="text-2xl font-black uppercase mb-6 italic">2. Privacidade (LGPD)</h2>
            <div className="prose prose-slate leading-relaxed font-medium">
              <p>Sua privacidade é nossa prioridade conforme a Lei 13.709/2018. Coletamos nome, e-mail e CPF para garantir sua segurança em transações de eventos...</p>
            </div>
          </section>

          <section id="pagamento" className="border-l-4 border-red-600 pl-8">
            <h2 className="text-2xl font-black uppercase mb-6 italic">3. Pagamento e Cancelamento</h2>
            <div className="prose prose-slate leading-relaxed font-medium">
              <p>Arrependimento em até 7 dias conforme Art. 49 do CDC. Para cancelamentos após o prazo, aplicam-se taxas de gateway e reserva de vaga...</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}