import BannerFaleConosco from '../assets/images/bannerFaleConosco.png'
import EmailSimbol from '../assets/images/o-email (2) 1.png'
import TelefoneSimbol from '../assets/images/telefone (2) 1.png'
import CheckIcon from '../assets/images/CheckIcon.png'

export default function Contato() {
  return (
    <section className="w-full bg-gray-50 pb-12 overflow-x-hidden">
      
      {/* Banner Simples no Topo */}
      <div className="w-full h-32 relative">
        <img
          src={BannerFaleConosco}
          alt="Fundo Fale Conosco"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Contato</h1>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        <p className="text-base text-gray-700 mb-10 text-center">
          Tem alguma sugestão ou problema? Entre em contato com a gente.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* COLUNA ESQUERDA: FORMULÁRIO */}
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-bold text-green-900">Envie uma mensagem</h2>
            
            <div className="flex flex-col gap-1.5">
              <label className="font-semibold text-sm text-gray-800">Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-green-600 text-sm bg-white shadow-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-semibold text-sm text-gray-800">Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-green-600 text-sm bg-white shadow-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-semibold text-sm text-gray-800">Mensagem</label>
              <textarea
                placeholder="Escreva sua mensagem"
                className="w-full border border-gray-300 rounded-lg p-2.5 h-28 outline-none resize-none focus:border-green-600 text-sm bg-white shadow-sm"
              />
            </div>

            <button className="bg-green-900 hover:bg-green-800 text-white px-8 py-3 rounded-full text-xs font-bold mt-2 w-full sm:w-auto uppercase tracking-widest transition-all shadow-md active:scale-95">
              Enviar mensagem
            </button>
          </div>

          {/* COLUNA DIREITA: INFORMAÇÕES */}
          <div className="flex flex-col gap-8 md:pl-12 md:border-l border-gray-200">
            <h2 className="text-xl font-bold text-green-900">Contato Direto</h2>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <img src={EmailSimbol} alt="E-mail" className="w-5 h-5" />
                <a href="mailto:contato@ecodenuncia.com" className="text-sm text-gray-800 hover:text-green-600">
                  contato@ecodenuncia.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <img src={TelefoneSimbol} alt="Telefone" className="w-5 h-5" />
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-800 hover:text-green-600">
                  (12) 99999-9999
                </a>
              </div>
            </div>

            <div className="pt-12 border-t border-gray-100 mt-4">
              <h3 className="text-xs font-bold text-green-900 uppercase tracking-widest mb-4">Nosso Compromisso</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                  <span className="text-green-600 font-bold">•</span>
                  Análise cuidadosa e humana das mensagens
                </li>
                <li className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                  <span className="text-green-600 font-bold">•</span>
                  Resposta rápida via e-mail ou canais oficiais
                </li>
                <li className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                  <span className="text-green-600 font-bold">•</span>
                  Encaminhamento aos órgãos responsáveis se necessário
                </li>
              </ul>
            </div>



          </div>

        </div>
      </div>

    </section>
  )
}
