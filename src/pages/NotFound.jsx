import { Link } from "react-router-dom";
import Planta from "../assets/images/plantar.png";

export default function NotFound() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-white px-6 py-12 text-center overflow-x-hidden">
      
      <h1 className="text-6xl md:text-7xl font-bold text-green-900">
        404
      </h1>

      <h2 className="text-xl md:text-2xl font-semibold mt-4 text-black">
        Página não encontrada
      </h2>

      <p className="text-sm md:text-base text-gray-700 mt-4 mb-8 flex flex-col sm:flex-row items-center justify-center gap-2">
        Essa página não existe... mas você ainda pode ajudar o planeta
        <img src={Planta} alt="Símbolo de Planta" className="w-6 h-6" />
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
        <Link
          to="/"
          className="bg-gray-200 text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition-colors text-center w-full sm:w-auto text-sm"
        >
          Voltar ao Início
        </Link>
        
        <Link
          to="/denunciar"
          className="bg-green-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-800 transition-colors text-center w-full sm:w-auto text-sm"
        >
          Fazer uma Denúncia
        </Link>
      </div>

    </section>
  );
}