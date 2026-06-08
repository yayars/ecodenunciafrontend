import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginERegistro() {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  })

  const [mensagem, setMensagem] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  const navigate = useNavigate()

  // Função de cadastro
  async function handleCadastro(evento) {
    evento.preventDefault()

    setErro('')
    setMensagem('')

    // verificar senhas
    if (registerData.password !== registerData.confirm) {
      setErro('As senhas não coincidem!')
      return
    }

    // senha mínima
    if (registerData.password.length < 6) {
      setErro('A senha deve ter pelo menos 6 caracteres')
      return
    }

    setCarregando(true)

    try {
      const resposta = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: registerData.name,
          email: registerData.email,
          password: registerData.password
        })
      })

      const dados = await resposta.json()

      if (resposta.ok) {
        setMensagem('Usuário cadastrado com sucesso!')

        // limpar formulário
        setRegisterData({
          name: '',
          email: '',
          password: '',
          confirm: ''
        })

        // redirecionar
        setTimeout(() => {
          navigate('/login')
        }, 2000)

      } else {
        setErro(dados.message || 'Erro ao cadastrar')
      }

    } catch (error) {
      console.error(error)
      setErro('Erro ao conectar com o servidor')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-240px)] flex items-center justify-center font-nunito px-6 py-8">
      <div className="w-full max-w-5xl">
        <section className="grid lg:grid-cols-2 rounded-3xl overflow-hidden bg-white shadow-2xl">

          <div className="relative hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('assets/images/nature_login_bg.png')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-green-900/20" />
          </div>

          <div className="py-12 px-6 md:py-16 md:px-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">

              <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-1">
                Criar uma conta
              </h2>

              <p className="text-xs md:text-sm text-slate-500 mb-6">
                Preencha os dados abaixo para começar.
              </p>

              {/* sucesso */}
              {mensagem && (
                <div className="mt-4 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
                  {mensagem}
                </div>
              )}

              {/* erro */}
              {erro && (
                <div className="mt-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                  {erro}
                </div>
              )}

              <form className="mt-6 space-y-4" onSubmit={handleCadastro}>

                {/* nome */}
                <label className="block text-sm text-slate-700">
                  <span className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-slate-500">
                    Nome
                  </span>

                  <input
                    type="text"
                    value={registerData.name}
                    onChange={(event) =>
                      setRegisterData({
                        ...registerData,
                        name: event.target.value
                      })
                    }
                    placeholder="Seu nome"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
                  />
                </label>

                {/* email */}
                <label className="block text-sm text-slate-700">
                  <span className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-slate-500">
                    Email
                  </span>

                  <input
                    type="email"
                    value={registerData.email}
                    onChange={(event) =>
                      setRegisterData({
                        ...registerData,
                        email: event.target.value
                      })
                    }
                    placeholder="seu@email.com"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
                  />
                </label>

                {/* senha */}
                <label className="block text-sm text-slate-700">
                  <span className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-slate-500">
                    Senha
                  </span>

                  <input
                    type="password"
                    value={registerData.password}
                    onChange={(event) =>
                      setRegisterData({
                        ...registerData,
                        password: event.target.value
                      })
                    }
                    placeholder="••••••••"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
                  />
                </label>

                {/* confirmar senha */}
                <label className="block text-sm text-slate-700">
                  <span className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-slate-500">
                    Confirmar senha
                  </span>

                  <input
                    type="password"
                    value={registerData.confirm}
                    onChange={(event) =>
                      setRegisterData({
                        ...registerData,
                        confirm: event.target.value
                      })
                    }
                    placeholder="••••••••"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
                  />
                </label>

                {/* botão */}
                <button
                  type="submit"
                  disabled={carregando}
                  className="inline-flex w-full justify-center rounded-xl bg-green-900 px-5 py-2.5 text-base font-semibold text-white transition hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {carregando ? 'Criando conta...' : 'Criar conta'}
                </button>

                <div className="text-center text-sm text-slate-500 pt-3 border-t border-slate-100">
                  Já tem uma conta?{' '}
                  <a
                    href="/login"
                    className="font-bold text-green-700 hover:text-green-600 transition-colors"
                  >
                    Entrar
                  </a>
                </div>

              </form>
            </div>
          </div>

        </section>
      </div>
    </div>
  )
}