import { motion } from 'framer-motion'

const Result = ({ profile, profileData, references, onReset, onBack }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative min-h-[72vh]"
    role="region"
    aria-labelledby="result-title"
  >
    <header className="mb-10">
      <p className="text-xs tracking-[0.22em] text-slate-500 uppercase">
        Dashboard de Prévia Personalizada
      </p>
      <h2 id="result-title" className="mt-3 font-serif text-3xl text-slate-800 md:text-5xl">
        Perfil identificado: {profile}
      </h2>
      <p className="mt-4 max-w-3xl text-slate-600">{profileData.signature}</p>
    </header>

    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <motion.article
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6"
        role="region"
        aria-labelledby="moodboard-title"
      >
        <p id="moodboard-title" className="text-sm font-medium text-slate-700">Moodboard Dinâmico</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-4" role="list" aria-label="Paleta de cores">
          {profileData.colors.map((color, index) => (
            <motion.div
              key={color}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="space-y-2"
              role="listitem"
            >
              <div
                className="h-20 rounded-2xl border border-white/80"
                style={{ backgroundColor: color }}
                aria-label={`Cor ${color}`}
              />
              <p className="text-xs text-slate-500">{color}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.16em] text-slate-500 uppercase">Texturas</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600" role="list" aria-label="Lista de texturas">
              {profileData.textures.map((texture, index) => (
                <motion.li
                  key={texture}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  role="listitem"
                >
                  - {texture}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.16em] text-slate-500 uppercase">Conceitos</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600" role="list" aria-label="Lista de conceitos">
              {profileData.concepts.map((concept, index) => (
                <motion.li
                  key={concept}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  role="listitem"
                >
                  - {concept}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="rounded-3xl border border-slate-200 bg-white p-6"
        role="region"
        aria-labelledby="semantic-title"
      >
        <p id="semantic-title" className="text-sm font-medium text-slate-700">Busca Semântica + IA (Mockup)</p>
        <p className="mt-3 text-sm text-slate-600">
          Simulação de query inteligente baseada no perfil, preferências cromáticas e
          memórias afetivas.
        </p>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-500">
          query:
          <span className="ml-1 text-slate-700">
            "{profile} arquitetura residencial luxo materiais naturais paleta serena"
          </span>
        </div>

        <ul className="mt-5 space-y-3 text-sm" role="list" aria-label="Referências semânticas">
          {references.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-slate-50/80 p-3 text-slate-600"
              role="listitem"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.article>
    </div>

    <footer className="mt-8 flex flex-col gap-3 sm:flex-row">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="button"
        onClick={onReset}
        className="rounded-full bg-slate-800 px-7 py-3 text-sm font-medium text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2"
        aria-describedby="reset-description"
      >
        Refazer Discovery
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="button"
        onClick={onBack}
        className="rounded-full border border-slate-300 px-7 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
      >
        Voltar ao Início
      </motion.button>
    </footer>
    <div id="reset-description" className="sr-only">
      Clique para refazer o questionário e obter um novo perfil
    </div>
  </motion.section>
)

export default Result