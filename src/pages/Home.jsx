import { NavLink } from "react-router-dom";

import Banner from '../assets/images/banner.png'
import SimboloTriangulo from '../assets/images/reciclar-simbolo-triangular-de-rotacao-de-tres-setas 1.png'
import SimboloAgua from '../assets/images/reutilizar-agua 1.png'
import SimboloLixo from '../assets/images/saco-de-lixo 1.png'
import Engrenagem from '../assets/images/engrenagem 1.png'
import Nota from '../assets/images/nota 1.png'
import PesquisaLupa from '../assets/images/pesquisa-de-lupa 1.png'
import MapaIlustrativo from '../assets/images/imagem mapinha.png'
import PlantinhaIcone from '../assets/images/plantar.png'
import img1 from '../assets/images/imagemCard1.png'
import img2 from '../assets/images/imagemCard2.png'
import img3 from '../assets/images/imagemCard3.png'
import img4 from '../assets/images/imagemCard4.png'
import BannerDenunciarAgora from '../assets/images/fundoDenunciarAgora.png'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative w-full h-[40vh] md:h-[50vh] min-h-[400px] md:min-h-[500px]">
        <img src={Banner} alt="Banner" className="w-full h-full object-cover object-center" />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center md:justify-start">
          <div className="max-w-5xl w-full mx-auto px-4 text-white text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-normal tracking-wider drop-shadow-lg">
              Combate ao <br className="hidden md:block" /> descarte irregular de lixo
            </h1>

            <p className="text-sm md:text-base mb-10 max-w-2xl tracking-wider drop-shadow-md mx-auto md:mx-0">
              Denuncie práticas ilegais e ajude a preservar o meio ambiente para as futuras gerações.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <NavLink 
                to="/denunciar" 
                className="bg-green-600 text-white hover:bg-green-500 px-6 py-2 rounded-full font-bold text-base transition-colors w-full sm:w-auto text-center shadow-lg"
              >
                Denunciar agora
              </NavLink>

              <NavLink to="/aboutus" className="bg-white text-green-700 hover:bg-gray-100 px-6 py-2 rounded-full font-bold text-base transition-colors w-full sm:w-auto text-center shadow-lg">
                Saiba mais
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* OS 3 Rs */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-gray-800">
            Conheça os 3 Rs do{" "}
            <span className="text-green-600">descarte consciente</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-3 border-t-4 border-green-600 rounded-2xl shadow-md hover:-translate-y-1 transition-transform flex flex-col items-center">
              <img src={SimboloLixo} alt="Reduzir" className="w-10 h-10 object-contain mb-4" />
              <h3 className="font-bold text-xl text-green-950 mb-3">Reduzir</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Diminua o consumo no dia a dia. Evite desperdícios e escolha apenas o necessário.
              </p>
            </div>

            <div className="bg-white p-3 border-t-4 border-green-600 rounded-2xl shadow-md hover:-translate-y-1 transition-transform flex flex-col items-center">
              <img src={SimboloAgua} alt="Reutilizar" className="w-10 h-10 object-contain mb-4" />
              <h3 className="font-bold text-xl text-green-950 mb-3">Reutilizar</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Dê uma nova vida aos materiais. Reaproveite antes de descartar para o lixo comum.
              </p>
            </div>

            <div className="bg-white p-3 border-t-4 border-green-600 rounded-2xl shadow-md hover:-translate-y-1 transition-transform flex flex-col items-center">
              <img src={SimboloTriangulo} alt="Reciclar" className="w-10 h-10 object-contain mb-4" />
              <h3 className="font-bold text-xl text-green-950 mb-3">Reciclar</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Separe corretamente os resíduos e ajude a transformar lixo em novos recursos.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-green-950 text-white py-10 relative">
        <div className="absolute inset-0 bg-green-900/40"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
            Como funciona?
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">

            {/* LADO ESQUERDO (PASSOS) */}
            <div className="flex-1 space-y-4 w-full">

              <div className="bg-white text-gray-800 p-5 rounded-2xl flex items-center gap-4 shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <img src={Nota} alt="Anotar" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-green-950">Faça sua denúncia</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Descreva o problema ambiental, informe o local e envie uma foto se tiver.
                  </p>
                </div>
              </div>

              <div className="bg-white text-gray-800 p-5 rounded-2xl flex items-center gap-4 shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <img src={PesquisaLupa} alt="Lupa" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-green-950">Análise da equipe</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Nossa equipe avalia todas as informações da denúncia com responsabilidade.
                  </p>
                </div>
              </div>

              <div className="bg-white text-gray-800 p-5 rounded-2xl flex items-center gap-4 shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <img src={Engrenagem} alt="Engrenagem" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-green-950">Encaminhamento</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    A denúncia é encaminhada para os órgãos públicos e ambientais responsáveis.
                  </p>
                </div>
              </div>

            </div>

            {/* LADO DIREITO (IMAGEM) */}
            <div className="flex-1 flex flex-col items-center">
              <img src={MapaIlustrativo} alt="Mapa ilustrativo" className="w-full max-w-md drop-shadow-xl mb-4" />
              <p className="text-green-100 text-sm text-center font-medium">
                Sua participação é essencial para proteger a cidade.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ÚLTIMAS NOTÍCIAS */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-green-950 mb-4">
              Últimas Notícias
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Acompanhe as principais novidades e dicas sobre sustentabilidade em nossa comunidade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full border border-gray-100">
              <div className="overflow-hidden h-36">
                <img src="https://loremflickr.com/640/360/storm,clouds,weather?lock=1" className="w-full h-full object-cover" alt="Frente fria no Brasil" />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="text-[9px] font-bold text-green-600 uppercase tracking-widest mb-1">16 Mai 2026</span>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Frente fria avança e traz chuva para Centro-Sul
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-3">
                  Previsão indica queda brusca nos termômetros e formação de geada em várias áreas do país.
                </p>
                <a 
                  href="https://g1.globo.com/meio-ambiente/noticia/2026/05/16/frente-fria-avanca-e-traz-chuva-e-baixas-temperaturas-para-centro-sul-veja-previsao-para-o-fim-de-semana.ghtml" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto text-green-700 text-sm font-bold hover:underline"
                >
                  Ler mais
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full border border-gray-100">
              <div className="overflow-hidden h-36">
                <img src="https://loremflickr.com/640/360/amazon,jungle,river?lock=11" className="w-full h-full object-cover" alt="Preservação da Amazônia" />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="text-[9px] font-bold text-green-600 uppercase tracking-widest mb-1">Abril 2026</span>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Amazônia: Monitoramento e Sustentabilidade
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-3">
                  Acompanhe os dados mais recentes sobre a preservação da maior floresta tropical do mundo.
                </p>
                <a 
                  href="https://g1.globo.com/meio-ambiente/amazonia/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto text-green-700 text-sm font-bold hover:underline"
                >
                  Ler mais
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full border border-gray-100">
              <div className="overflow-hidden h-36">
                <img src="https://loremflickr.com/640/360/solar,panels,energy?lock=14" className="w-full h-full object-cover" alt="Energia Solar no Brasil" />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="text-[9px] font-bold text-green-600 uppercase tracking-widest mb-1">Abril 2026</span>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Brasil bate recorde de geração de energia solar
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-3">
                  O país avança na transição energética e consolida o uso de fontes limpas e renováveis.
                </p>
                <a 
                  href="https://g1.globo.com/economia/agronegocios/globo-rural/noticia/2024/04/14/geracao-de-energia-solar-no-brasil-bate-recorde.ghtml" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto text-green-700 text-sm font-bold hover:underline"
                >
                  Ler mais
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full border border-gray-100">
              <div className="overflow-hidden h-36">
                <img src="https://loremflickr.com/640/360/electronics,recycling,ewaste?lock=16" className="w-full h-full object-cover" alt="Reciclagem de eletrônicos" />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="text-[9px] font-bold text-green-600 uppercase tracking-widest mb-1">Maio 2026</span>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                  Logística reversa de eletrônicos em vigor
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-3">
                  Entenda as novas regras para o descarte correto de celulares e baterias no Brasil.
                </p>
                <a 
                  href="https://www.gov.br/meioambiente/pt-br/assuntos/noticias/governo-regulamenta-logistica-reversa-de-eletroeletronicos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto text-green-700 text-sm font-bold hover:underline"
                >
                  Ler mais
                </a>
              </div>
            </div>
          
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-48 flex items-center justify-center text-white text-center">
        <img src={BannerDenunciarAgora} className="absolute inset-0 w-full h-full object-cover" alt="Banner CTA" />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6">
          <h2 className="text-2xl font-bold mb-6">Faça parte da mudança!</h2>
          <NavLink 
            to="/denunciar" 
            className="inline-block bg-green-600 text-white text-base px-6 py-2 rounded-full font-bold shadow-lg hover:bg-green-500 transition-colors"
          >
            Denunciar agora
          </NavLink>
        </div>
      </section>

    </main>
  );
}