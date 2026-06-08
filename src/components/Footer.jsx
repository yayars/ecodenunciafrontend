import { NavLink } from 'react-router'
import Logo from '../assets/images/logo.png'

function linkClass({ isActive }) {
  return isActive
    ? "text-green-500 font-semibold"
    : "text-gray-300 hover:text-green-400 transition-colors"
}

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white py-6">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-green-800 pt-6">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center mb-4">
              <NavLink to="/">
                <img src={Logo} alt="Logo" className="h-14 w-auto drop-shadow-md" />
              </NavLink>
            </div>

            <p className="text-green-100 text-sm leading-relaxed max-w-65.2">
              Cuidando do meio ambiente através do descarte consciente.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-lg font-bold mb-3 text-white">Links Rápidos</h1>

            <nav className="flex flex-col gap-2 text-sm items-center md:items-start">
              <NavLink to="/" className={linkClass}>Início</NavLink>
              <NavLink to="/denunciar" className={linkClass}>Denunciar</NavLink>
              <NavLink to="/noticias" className={linkClass}>Notícias</NavLink>
              <NavLink to="/aboutus" className={linkClass}>Sobre</NavLink>
              <NavLink to="/faleconosco" className={linkClass}>Contato</NavLink>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-lg font-bold mb-3 text-white">Fale Conosco</h1>

            <div className="flex flex-col gap-3 text-sm items-center md:items-start text-gray-300">
              <a href="mailto:contato@ecodenuncia.com" className="hover:text-green-400 transition-colors">
                contato@ecodenuncia.com
              </a>

              <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                (12) 99999-9999
              </a>
            </div>
          </div>

        </div>

        <div className="mt-6 pt-4 border-t border-green-800 text-center text-xs text-gray-400">
          &copy; 2026 Eco Denúncia <br className="md:hidden" /> - Todos os direitos reservados.
        </div>

      </div>
    </footer>
  )
}