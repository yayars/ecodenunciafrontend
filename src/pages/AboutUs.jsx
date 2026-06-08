import { NavLink } from 'react-router'
import Banner from '../assets/images/bannerSobreNos.png'
import Banner2 from '../assets/images/banner2SobreNos.png'
import ImgQuemSomos from '../assets/images/QuemSomos.png'
import MissaoIcon from '../assets/images/Missao.png'
import VisaoIcon from '../assets/images/Visao.png'
import ValoresIcon from '../assets/images/Valores.png'

import Ana from '../assets/images/Ana.png'
import Sabrina from '../assets/images/Sabrina.png'
import Yasmin from '../assets/images/Yasmin.png'

export default function AboutUs() {
  return (
    <div className="w-full overflow-x-hidden">

      <div className="relative h-[25vh] min-h-[190px]">
        <img src={Banner} className="w-full h-full object-cover" alt="Banner Sobre Nós" />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl font-bold py-4">Sobre Nós</h1>
          <p className="mt-2 text-base max-w-xl">
            Nosso objetivo é combater o descarte irregular de lixo e promover um ambiente mais sustentável para todos.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-6 md:py-8 px-4 md:px-6 flex justify-center">
        <div className="max-w-5xl w-full bg-white rounded-2xl md:rounded-3xl shadow-md p-5 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <p className="bg-green-900 text-white px-4 py-1 rounded-2xl text-sm md:text-base font-semibold w-fit mx-auto md:mx-0 mb-3">
              Quem Somos?
            </p>

            <h2 className="font-bold text-xl md:text-2xl text-gray-800 mb-3">
              Somos uma plataforma dedicada a facilitar a denúncia de descarte irregular de resíduos.
            </h2>

            <p className="text-gray-600 text-sm md:text-base">
              Conectamos cidadãos, empresas e órgãos responsáveis para agir juntos por cidades mais limpas e sustentáveis.
            </p>
          </div>

          <img
            src={ImgQuemSomos}
            className="w-40 md:w-56 object-cover rounded-2xl shadow-sm order-1 md:order-2"
            alt="Quem Somos"
          />
        </div>
      </div>

      <div className="bg-gray-50 pb-12 px-6 flex justify-center">
        <div className="max-w-5xl w-full grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl p-3 shadow-md border-t-4 border-green-700 text-center flex flex-col items-center">
            <img src={MissaoIcon} className="w-16 mb-4" alt="Missão" />
            <h3 className="font-bold text-green-900 text-xl mb-2">Missão</h3>
            <p className="text-base text-gray-600">
              Promover o descarte correto de resíduos por meio da conscientização e da tecnologia.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-3 shadow-md border-t-4 border-green-700 text-center flex flex-col items-center">
            <img src={VisaoIcon} className="w-16 mb-4" alt="Visão" />
            <h3 className="font-bold text-green-900 text-xl mb-2">Visão</h3>
            <p className="text-base text-gray-600">
              Ser referência em soluções digitais para sustentabilidade.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-3 shadow-md border-t-4 border-green-700 text-center flex flex-col items-center">
            <img src={ValoresIcon} className="w-16 mb-4" alt="Valores" />
            <h3 className="font-bold text-green-900 text-xl mb-2">Valores</h3>
            <ul className="text-base text-gray-600 space-y-1">
              <li>• Colaboração</li>
              <li>• Responsabilidade</li>
              <li>• Consciência ambiental</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="relative py-12 text-white bg-green-950">
        <div className="absolute inset-0 bg-green-900/80"></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Nossa Equipe</h2>
          <p className="text-lg mb-12 text-green-100">Conheça as pessoas por trás do EcoDenúncia</p>

          <div className="flex flex-col md:flex-row justify-center gap-8">

            {/* ANA */}
            <div className="bg-white rounded-2xl p-6 w-full max-w-[280px] mx-auto text-center shadow-md">
              <img src={Ana} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-green-50" alt="Ana" />
              <h4 className="font-bold text-gray-900 text-sm">Ana Beatriz Santos Maia</h4>
              <p className="text-green-700 text-[10px] font-bold uppercase mb-4">Desenvolvedora & Designer</p>
              <div className="flex justify-center gap-6 pt-3 border-t border-gray-50">
                <a href="https://www.instagram.com/mayaabz._/" target="_blank" rel="noreferrer">
                  <img src="https://img.icons8.com/material-outlined/24/15803d/instagram-new.png" className="w-5 h-5" alt="Instagram" />
                </a>
                <a href="https://github.com/acomnene-source" target="_blank" rel="noreferrer">
                  <img src="https://img.icons8.com/material-outlined/24/000000/github.png" className="w-5 h-5" alt="GitHub" />
                </a>
              </div>
            </div>

            {/* SABRINA */}
            <div className="bg-white rounded-2xl p-6 w-full max-w-[280px] mx-auto text-center shadow-md">
              <img src={Sabrina} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-green-50" alt="Sabrina" />
              <h4 className="font-bold text-gray-900 text-sm">Sabrina Garcia Gonçalves</h4>
              <p className="text-green-700 text-[10px] font-bold uppercase mb-4">Desenvolvedora & Designer</p>
              <div className="flex justify-center gap-6 pt-3 border-t border-gray-50">
                <a href="https://www.instagram.com/sasawmit/" target="_blank" rel="noreferrer">
                  <img src="https://img.icons8.com/material-outlined/24/15803d/instagram-new.png" className="w-5 h-5" alt="Instagram" />
                </a>
                <a href="https://github.com/sabrinagarcia-byte" target="_blank" rel="noreferrer">
                  <img src="https://img.icons8.com/material-outlined/24/000000/github.png" className="w-5 h-5" alt="GitHub" />
                </a>
              </div>
            </div>

            {/* YASMIN */}
            <div className="bg-white rounded-2xl p-6 w-full max-w-[280px] mx-auto text-center shadow-md">
              <img src={Yasmin} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-green-50" alt="Yasmin" />
              <h4 className="font-bold text-gray-900 text-sm">Yasmin Rodrigues da Silva</h4>
              <p className="text-green-700 text-[10px] font-bold uppercase mb-4">Desenvolvedora & Designer</p>
              <div className="flex justify-center gap-6 pt-3 border-t border-gray-50">
                <a href="https://www.instagram.com/yasminrs.28/" target="_blank" rel="noreferrer">
                  <img src="https://img.icons8.com/material-outlined/24/15803d/instagram-new.png" className="w-5 h-5" alt="Instagram" />
                </a>
                <a href="https://github.com/yayars" target="_blank" rel="noreferrer">
                  <img src="https://img.icons8.com/material-outlined/24/000000/github.png" className="w-5 h-5" alt="GitHub" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="relative h-48 flex items-center justify-center text-white text-center">
        <img src={Banner2} className="absolute inset-0 w-full h-full object-cover" alt="Banner CTA" />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6">
          <h2 className="text-2xl font-bold mb-6">Faça parte da mudança!</h2>
          <NavLink to="/denunciar" className="inline-block bg-green-600 text-base px-6 py-2 rounded-full font-bold hover:bg-green-500 transition-colors shadow-lg">
            Denunciar agora
          </NavLink>
        </div>
      </div>

    </div>
  )
}