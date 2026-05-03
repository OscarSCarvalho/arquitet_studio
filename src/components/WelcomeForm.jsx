import { useState } from 'react'
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export const WelcomeForm = ({ onConfirm, onBack }) => {
  const [data, setData] = useState({
    name: '',
    age: '',
    maritalStatus: '',
    children: '',
    hasPet: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  const requiredFilled =
    data.name && data.age && data.maritalStatus && data.hasPet !== ''

  const submit = () => {
    if (requiredFilled) onConfirm(data)
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/20 to-stone-50">
      {/* Elementos decorativos de fundo (consistentes com onboarding) */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-slate-200/10 to-blue-200/5 blur-3xl"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-32 left-24 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-100/10 to-slate-100/5 blur-3xl"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <motion.div
          className="w-full max-w-lg"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Cartão principal */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/50 p-8 md:p-10 shadow-[0_30px_60px_-35px_rgba(80,102,130,0.45)]">
            {/* Decorative gradient line top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-slate-400 to-blue-400 rounded-full" />

            <div className="space-y-6">
              {/* Cabeçalho */}
              <div className="text-center space-y-2">
                <h1 className="font-serif text-3xl md:text-4xl font-light text-slate-900 tracking-wide">
                  Bem‑vindo(a)
                </h1>
                <p className="text-slate-600 font-light text-base">
                  Conte‑nos um pouco sobre você antes de começarmos.
                </p>
              </div>

              {/* Campos do formulário */}
              <div className="space-y-4">
                {/* Nome */}
                <div className="relative">
                  <input
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full rounded-xl border border-slate-200 bg-gray-50/80 px-4 py-3 text-sm placeholder-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none transition"
                  />
                </div>

                {/* Idade */}
                <div className="relative">
                  <input
                    type="number"
                    name="age"
                    min={0}
                    value={data.age}
                    onChange={handleChange}
                    placeholder="Sua idade"
                    className="w-full rounded-xl border border-slate-200 bg-gray-50/80 px-4 py-3 text-sm placeholder-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none transition"
                  />
                </div>

                {/* Estado civil */}
                <div className="relative">
                  <input
                    name="maritalStatus"
                    value={data.maritalStatus}
                    onChange={handleChange}
                    placeholder="Estado civil (ex.: Solteiro, Casado)"
                    className="w-full rounded-xl border border-slate-200 bg-gray-50/80 px-4 py-3 text-sm placeholder-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none transition"
                  />
                </div>

                {/* Filhos (opcional) */}
                <div className="relative">
                  <input
                    type="number"
                    name="children"
                    min={0}
                    value={data.children}
                    onChange={handleChange}
                    placeholder="Número de filhos (opcional)"
                    className="w-full rounded-xl border border-slate-200 bg-gray-50/80 px-4 py-3 text-sm placeholder-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none transition"
                  />
                </div>

                {/* Possui pet? */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-slate-700">Possui pet?</span>
                  <div className="flex items-center gap-4">
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasPet"
                        value="sim"
                        checked={data.hasPet === 'sim'}
                        onChange={handleChange}
                        className="h-4 w-4 text-slate-600 border-slate-300 focus:ring-slate-500"
                      />
                      <span className="text-sm text-slate-700">Sim</span>
                    </label>
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasPet"
                        value="não"
                        checked={data.hasPet === 'não'}
                        onChange={handleChange}
                        className="h-4 w-4 text-slate-600 border-slate-300 focus:ring-slate-500"
                      />
                      <span className="text-sm text-slate-700">Não</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Botões */}
              <div className="flex flex-col md:flex-row gap-4 pt-4">
                {onBack && (
                  <button
                    onClick={onBack}
                    className="px-6 py-3 text-sm font-light tracking-widest uppercase text-slate-700 border border-slate-300/60 rounded-full hover:border-slate-400 hover:text-slate-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                  >
                    Voltar
                  </button>
                )}
                <button
                  onClick={submit}
                  disabled={!requiredFilled}
                  className="flex-1 px-6 py-3 text-sm font-light tracking-widest uppercase text-white bg-gradient-to-r from-slate-700 to-slate-800 rounded-full hover:from-slate-800 hover:to-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2"
                >
                  Continuar para o Quiz
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default WelcomeForm
