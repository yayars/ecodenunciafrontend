import { useEffect } from "react"
import banner from "../assets/images/bannerDenunciar.png"
import img1 from "../assets/images/imagemCard1.png"
import img2 from "../assets/images/imagemCard2.png"
import img3 from "../assets/images/imagemCard3.png"
import img4 from "../assets/images/imagemCard4.png"
import img5 from "../assets/images/imagemCard5.png"
import img6 from "../assets/images/imagemCard6.png"
import img7 from "../assets/images/imagemCard7.png"
import img8 from "../assets/images/imagemCard8.png"
import img9 from "../assets/images/imagemCard9.png"
import img10 from "../assets/images/imagemCard10.png"
import img11 from "../assets/images/imagemCard11.png"
import img12 from "../assets/images/imagemCard12.png"
import Planta from "../assets/images/plantar.png"
import Lupa from "../assets/images/pesquisa-de-lupa 1.png"

// Isso deixa o código mais organizado e fácil de ler.
const LISTA_NOTICIAS = [
  { 
    img: "https://loremflickr.com/640/360/storm,clouds,weather?lock=1", 
    data: "16 Mai 2026", 
    titulo: "Frente fria avança e traz chuva para Centro-Sul; veja previsão", 
    desc: "Previsão indica que o ar gelado terá trajetória continental e deve favorecer a formação de geada em várias áreas.",
    url: "https://g1.globo.com/meio-ambiente/noticia/2026/05/16/frente-fria-avanca-e-traz-chuva-e-baixas-temperaturas-para-centro-sul-veja-previsao-para-o-fim-de-semana.ghtml"
  },
  { 
    img: "https://loremflickr.com/640/360/earth,planet,space?lock=2", 
    data: "15 Mai 2026", 
    titulo: "Por que precisamos tratar a Terra como uma nave espacial", 
    desc: "A ciência climática é o antídoto contra os mitos: cientistas observam como o cérebro humano lida com ameaças distantes.",
    url: "https://g1.globo.com/meio-ambiente/noticia/2026/05/15/por-que-precisamos-tratar-a-terra-como-uma-nave-espacial.ghtml"
  },
  { 
    img: "https://loremflickr.com/640/360/mosquito,insect?lock=3", 
    data: "15 Mai 2026", 
    titulo: "Por que mosquitos são mais perigosos que leões", 
    desc: "Mosquitos transmitem doenças que causam 760 mil mortes por ano. Cientistas avaliam os prós e contras do extermínio.",
    url: "https://g1.globo.com/meio-ambiente/noticia/2026/05/15/por-que-mosquitos-sao-mais-perigosos-que-leoes.ghtml"
  },
  { 
    img: "https://loremflickr.com/640/360/snow,winter,cold?lock=4", 
    data: "15 Mai 2026", 
    titulo: "Nova massa de ar frio chega ao Sul do Brasil no domingo", 
    desc: "Previsão indica queda brusca nos termômetros e formação de geada em várias áreas da região Sul na próxima semana.",
    url: "https://g1.globo.com/meio-ambiente/noticia/2026/05/15/nova-massa-de-ar-frio-chega-ao-sul-do-brasil.ghtml"
  },
  { 
    img: "https://loremflickr.com/640/360/ocean,waves,climate?lock=5", 
    data: "14 Mai 2026", 
    titulo: "EUA elevam para 82% a chance de El Niño se formar em maio", 
    desc: "Segundo a NOAA, a probabilidade de continuidade do fenômeno até o início de 2027 também chegou a 96%.",
    url: "https://g1.globo.com/meio-ambiente/noticia/2026/05/14/el-nino-noaa-2026.ghtml"
  },
  { 
    img: "https://loremflickr.com/640/360/plastic,pollution,trash?lock=6", 
    data: "14 Mai 2026", 
    titulo: "Cientistas detectam microplásticos na chuva na Indonésia", 
    desc: "Chuva de Jacarta transporta de 15 a 40 partículas por metro quadrado. Perigos da inalação ainda são estudados.",
    url: "https://g1.globo.com/meio-ambiente/noticia/2026/05/14/cientistas-detectam-microplasticos-na-chuva-na-indonesia-veja-video.ghtml"
  },
  { 
    img: "https://loremflickr.com/640/360/narwhal,whale,arctic?lock=7", 
    data: "14 Mai 2026", 
    titulo: "O mistério dos unicórnios-do-mar; veja VÍDEO", 
    desc: "Navios podem estar interferindo na ecolocalização dos narvais e forçando animais a abandonar seu habitat.",
    url: "https://g1.globo.com/meio-ambiente/noticia/2026/05/14/o-misterio-dos-unicornios-do-mar-veja-video.ghtml"
  },
  { 
    img: "https://loremflickr.com/640/360/snake,forest,python?lock=8", 
    data: "14 Mai 2026", 
    titulo: "Machos com 'útero'? Descoberta inusitada sobre jiboias", 
    desc: "Estudo da USP identifica machos com vestígios de ovidutos em espécie do Cerrado. Caso inédito de intersexualidade.",
    url: "https://g1.globo.com/meio-ambiente/noticia/2026/05/14/pesquisa-da-usp-faz-descoberta-sobre-biologia-reprodutiva-de-jiboias-arco-iris-do-cerrado.ghtml"
  },
  { 
    img: "https://loremflickr.com/640/360/soccer,stadium,heat?lock=9", 
    data: "14 Mai 2026", 
    titulo: "Copa 2026: 25% dos jogos podem ter níveis de calor preocupantes", 
    desc: "Análise revela que os riscos relacionados ao calor e à umidade extremos são muito maiores neste ano do que em 1994.",
    url: "https://g1.globo.com/meio-ambiente/noticia/2026/05/14/copa-do-mundo-2026-cerca-de-25percent-dos-jogos-devem-ser-disputados-em-niveis-preocupantes-de-calor-alertam-especialistas.ghtml"
  },
  { 
    img: "https://loremflickr.com/640/360/rain,umbrella,wet?lock=10", 
    data: "14 Mai 2026", 
    titulo: "Novas frentes frias trazem chuva de volta ao Centro-Sul", 
    desc: "Nova massa de ar de origem polar vai avançar pelo Sul do país na próxima semana e derrubar ainda mais os termômetros.",
    url: "https://g1.globo.com/meio-ambiente/noticia/2026/05/14/novas-frentes-frias-trazem-chuva-de-volta-ao-centro-sul-temperaturas-caem-no-sudeste-e-frio-intenso-retorna-ao-sul.ghtml"
  },
  { 
    img: "https://loremflickr.com/640/360/amazon,jungle,river?lock=11", 
    data: "Abril 2026", 
    titulo: "Amazônia: Monitoramento de Áreas Protegidas e Sustentabilidade", 
    desc: "Acompanhe as ações e os dados mais recentes sobre a preservação da maior floresta tropical do mundo.",
    url: "https://g1.globo.com/meio-ambiente/amazonia/"
  },
  { 
    img: "https://loremflickr.com/640/360/nature,landscape,wildlife?lock=12", 
    data: "Março 2026", 
    titulo: "Globo Natureza: O Futuro da Conservação no Brasil", 
    desc: "Explore documentários e reportagens exclusivas sobre a biodiversidade brasileira e os esforços para salvá-la.",
    url: "https://g1.globo.com/meio-ambiente/globo-natureza/"
  },
  { 
    img: "https://loremflickr.com/640/360/pantanal,wetlands?lock=13", 
    data: "Maio 2025", 
    titulo: "Desmatamento no Pantanal cai 75%, aponta monitoramento", 
    desc: "Dados mostram uma redução expressiva na supressão de vegetação nativa no bioma entre 2024 e 2025.",
    url: "https://agenciabrasil.ebc.com.br/geral/noticia/2024-11/desmatamento-no-pantanal-cai-75-em-um-ano"
  },
  { 
    img: "https://loremflickr.com/640/360/solar,panels,energy?lock=14", 
    data: "Abril 2026", 
    titulo: "Brasil bate recorde de geração de energia solar fotovoltaica", 
    desc: "A expansão das usinas solares reforça a posição do país como líder em fontes de energia limpa e renovável.",
    url: "https://g1.globo.com/economia/agronegocios/globo-rural/noticia/2024/04/14/geracao-de-energia-solar-no-brasil-bate-recorde.ghtml"
  },
  { 
    img: "https://loremflickr.com/640/360/humpback,whale,sea?lock=15", 
    data: "Junho 2024", 
    titulo: "Baleia-jubarte deixa lista de espécies ameaçadas de extinção", 
    desc: "O sucesso das medidas de proteção permitiu a recuperação da população desses gigantes dos oceanos.",
    url: "https://g1.globo.com/meio-ambiente/noticia/2023/05/22/baleia-jubarte-deixa-lista-de-especies-ameacadas-no-brasil.ghtml"
  },
  { 
    img: "https://loremflickr.com/640/360/recycling,bins,ecology?lock=16", 
    data: "Maio 2026", 
    titulo: "Novas regras para logística reversa de eletrônicos entram em vigor", 
    desc: "Medida visa aumentar a taxa de reciclagem de celulares, computadores e baterias em todo o território nacional.",
    url: "https://www.gov.br/meioambiente/pt-br/assuntos/noticias/governo-regulamenta-logistica-reversa-de-eletroeletronicos"
  },
  { 
    img: "https://loremflickr.com/640/360/blue,macaw,parrot?lock=17", 
    data: "Agosto 2025", 
    titulo: "Ararinha-azul volta a voar na Caatinga após 20 anos de extinção", 
    desc: "Projeto de reintrodução da espécie na natureza marca um marco histórico para a conservação da fauna brasileira.",
    url: "https://g1.globo.com/meio-ambiente/noticia/2022/06/11/ararinhas-azuis-sao-soltas-na-caatinga-apos-20-anos-de-extincao-na-natureza.ghtml"
  },
  { 
    img: "https://loremflickr.com/640/360/wind,turbines,renewable?lock=18", 
    data: "Maio 2026", 
    titulo: "Energia Eólica: Parques offshore são a nova aposta do Brasil", 
    desc: "Investimentos em usinas eólicas no mar prometem revolucionar a matriz energética e reduzir emissões de carbono.",
    url: "https://www.cnnbrasil.com.br/economia/brasil-tem-potencial-para-ser-lider-mundial-em-energia-eolica-offshore-diz-especialista/"
  },
  { 
    img: "https://loremflickr.com/640/360/vegetable,garden,plants?lock=19", 
    data: "Abril 2026", 
    titulo: "Escolas públicas adotam hortas comunitárias como ferramenta de ensino", 
    desc: "Projeto une educação ambiental, alimentação saudável e engajamento da comunidade escolar.",
    url: "https://agenciabrasil.ebc.com.br/educacao/noticia/2023-06/hortas-escolares-ajudam-na-educacao-ambiental-e-alimentar"
  },
  { 
    img: "https://loremflickr.com/640/360/city,park,sustainable?lock=20", 
    data: "Março 2026", 
    titulo: "Cidades Sustentáveis: Curitiba recebe prêmio internacional de inovação", 
    desc: "A capital paranaense é reconhecida por seus projetos de mobilidade urbana e gestão de resíduos sólidos.",
    url: "https://g1.globo.com/pr/parana/noticia/2023/11/08/curitiba-e-eleita-a-cidade-mais-inteligente-do-mundo-em-premio-na-espanha.ghtml"
  },
  { 
    img: "https://loremflickr.com/640/360/mangrove,roots,swamp?lock=21", 
    data: "Maio 2026", 
    titulo: "Importância dos Manguezais no combate à erosão costeira", 
    desc: "Estudos reforçam o papel vital dessas áreas como 'berçários da vida marinha' e barreiras naturais contra o mar.",
    url: "https://www.sosma.org.br/noticias/importancia-dos-manguezais/"
  },
  { 
    img: "https://loremflickr.com/640/360/farming,organic,soil?lock=22", 
    data: "Abril 2026", 
    titulo: "Agricultura Regenerativa cresce entre pequenos produtores", 
    desc: "Técnicas que recuperam o solo e aumentam a biodiversidade ganham força no interior do Brasil.",
    url: "https://www.wwf.org.br/natureza_brasileira/reducao_de_impactos2/agricultura/"
  },
  { 
    img: "https://loremflickr.com/640/360/satellite,space,earth?lock=23", 
    data: "Maio 2026", 
    titulo: "IA e Satélites: Tecnologia de ponta detecta queimadas em segundos", 
    desc: "Novo sistema permite uma resposta muito mais rápida das brigadas de incêndio em áreas remotas.",
    url: "https://imazon.org.br/imprensa/tecnologia-ajuda-a-monitorar-a-amazonia/"
  },
  { 
    img: "https://loremflickr.com/640/360/sea,turtle,beach?lock=24", 
    data: "Março 2026", 
    titulo: "Projeto Tamar celebra recorde de soltura de tartarugas marinhas", 
    desc: "Milhares de filhotes chegaram ao mar nesta temporada, fruto de décadas de trabalho de conservação.",
    url: "https://www.tamar.org.br/noticias.php"
  }
];

export default function Noticias() {
  // Garantir que a página comece do topo ao carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full overflow-x-hidden">

      {/* Banner Simples no Topo */}
      <div className="w-full h-32 relative">
        <img
          src={banner}
          alt="Banner Notícias"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Notícias</h1>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">

          {/* CABEÇALHO DA SEÇÃO: Texto de Introdução e Busca */}
          <div className="flex flex-col items-center text-center mb-10">
            <p className="text-base text-gray-700 mb-8 max-w-2xl">
              Fique por dentro das últimas atualizações, dicas de sustentabilidade e ações ambientais do EcoDenúncia.
            </p>

            <div className="relative w-full max-w-md group">
              <img src={Lupa} alt="Lupa" className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 opacity-40 group-focus-within:opacity-80 transition-opacity" />
              <input
                type="text"
                placeholder="Pesquisar notícias..."
                className="w-full bg-white text-gray-700 p-3.5 pl-11 rounded-full border border-gray-200 shadow-sm outline-none focus:border-green-600 focus:ring-4 focus:ring-green-600/5 transition-all text-sm"
              />
            </div>
          </div>

          {/* GRID DE NOTÍCIAS (As notícias aparecem aqui) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
            {LISTA_NOTICIAS.map((noticia, index) => (
              <article 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-gray-100"
              >
                <div className="overflow-hidden h-36">
                  <img 
                    src={noticia.img} 
                    alt={noticia.titulo} 
                    className="w-full h-full object-cover" 
                  />
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <span className="text-[9px] font-bold text-green-600 uppercase tracking-widest mb-1">
                    {noticia.data}
                  </span>
                  
                  <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                    {noticia.titulo}
                  </h3>
                  
                  <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-3">
                    {noticia.desc}
                  </p>

                  <a 
                    href={noticia.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto text-green-700 text-sm font-bold hover:underline"
                  >
                    Ler mais
                  </a>
                </div>
              </article>
            ))}

          </div>

        </div>
      </div>

    </main>
  );
}