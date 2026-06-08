import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginERegistro() {
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [mensagem, setMensagem] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)
  const navigate = useNavigate()

  // Função que envia os dados de login para o backend
  async function handleLogin(evento) {
    evento.preventDefault()
    setErro('')
    setMensagem('')
    setCarregando(true)

    try {
      const resposta = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: loginData.email,
          senha: loginData.password
        })
      })

      const dados = await resposta.json()

      if (resposta.ok) {
        // Login deu certo!
        setMensagem(dados.mensagem)
        // Salva os dados do usuário no localStorage
        localStorage.setItem('usuario', JSON.stringify(dados.usuario))
        // Redireciona para a home depois de 1 segundo
        setTimeout(() => navigate('/'), 1000)
      } else {
        // Algo deu errado (email/senha errados, etc)
        setErro(dados.erro)
      }
    } catch (error) {
      setErro('Não foi possível conectar ao servidor. Verifique se o backend está rodando.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-240px)] flex items-center justify-center font-nunito px-6 py-8">
      <div className="w-full max-w-5xl">
        <section className="grid lg:grid-cols-2 rounded-3xl overflow-hidden bg-white shadow-2xl">

          {/* LADO ESQUERDO */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('assets/images/nature_login_bg.png')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-green-900/20" />
          </div>

          {/* LADO DIREITO */}
          <div className="py-16 px-6 md:py-20 md:px-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-1">Bem-vindo de volta</h2>
              <p className="text-xs md:text-sm text-slate-500 mb-6">Acesse sua conta para continuar.</p>

                {/* SUCESSO */}
                {mensagem && (
                  <div className="mt-4 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
                    {mensagem}
                  </div>
                )}

                {/* ERRO */}
                {erro && (
                  <div className="mt-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                    {erro}
                  </div>
                )}

                <form className="mt-4 md:mt-6 space-y-3 md:space-y-4" onSubmit={handleLogin}>

                  <label className="block text-sm text-slate-700">
                    <span className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-slate-500">
                      Email
                    </span>

                    <input
                      type="email"
                      value={loginData.email}
                      onChange={(event) =>
                        setLoginData({ ...loginData, email: event.target.value })
                      }
                      placeholder="seu@email.com"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                    />
                  </label>

                  <label className="block text-sm text-slate-700">
                    <span className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-slate-500">
                      Senha
                    </span>

                    <input
                      type="password"
                      value={loginData.password}
                      onChange={(event) =>
                        setLoginData({ ...loginData, password: event.target.value })
                      }
                      placeholder="••••••••"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={carregando}
                    className="w-full rounded-xl bg-green-900 px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base font-semibold text-white hover:bg-green-800 disabled:opacity-50"
                  >
                    {carregando ? 'Entrando...' : 'Entrar'}
                  </button>

                  <div className="text-center text-xs sm:text-sm text-slate-500">
                    <a href="#" className="font-medium text-green-800 hover:text-green-700">
                      Esqueci minha senha
                    </a>
                  </div>

                  <div className="text-center text-xs sm:text-sm text-slate-500 pt-3 border-t border-slate-100">
                    Não tem conta?{" "}
                    <a href="/cadastro" className="font-bold text-green-700 hover:text-green-600 transition-colors">
                      Cadastre-se aqui
                    </a>
                  </div>

                </form>
              </div>
            </div>

        </section>
      </div>
    </div>
  );
}
