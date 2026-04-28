import { motion } from 'framer-motion'

const Welcome = ({ onStart }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative flex min-h-[72vh] flex-col justify-between gap-8"
    role="region"
    aria-labelledby="welcome-title"
  >
    <div>
      <p className="mb-5 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs tracking-[0.24em] text-slate-500 uppercase">
        Arquitect Studio Experience
      </p>
      <h1 id="welcome-title" className="max-w-3xl font-serif text-4xl leading-tight text-slate-800 md:text-6xl">
        Descubra a arquitetura que traduz sua história.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
        Uma jornada digital imersiva para mapear seu estilo de vida, memórias
        afetivas e preferências sensoriais, transformando tudo em uma pré-visualização
        arquitetônica assertiva.
      </p>
    </div>

    <div className="grid gap-5 text-sm text-slate-600 md:grid-cols-3" role="list" aria-label="Características da experiência">
      <motion.article
        whileHover={{ y: -2 }}
        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition"
        role="listitem"
      >
        <p className="font-medium text-slate-700">Onboarding Elegante</p>
        <p className="mt-2">Fluxo suave e acolhedor com micro-interações discretas.</p>
      </motion.article>
      <motion.article
        whileHover={{ y: -2 }}
        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition"
        role="listitem"
      >
        <p className="font-medium text-slate-700">Discovery Psicológico</p>
        <p className="mt-2">Perguntas step-by-step para captar comportamento e emoção.</p>
      </motion.article>
      <motion.article
        whileHover={{ y: -2 }}
        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition"
        role="listitem"
      >
        <p className="font-medium text-slate-700">Moodboard Inteligente</p>
        <p className="mt-2">Preview personalizado com cores, texturas e direção criativa.</p>
      </motion.article>
    </div>

    <div className="flex flex-col gap-3 sm:flex-row">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="button"
        onClick={onStart}
        className="rounded-full bg-slate-800 px-7 py-3 text-sm font-medium text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2"
        aria-describedby="start-description"
      >
        Iniciar Consultoria
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="button"
        className="rounded-full border border-slate-300 px-7 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
      >
        Ver Metodologia
      </motion.button>
    </div>
    <div id="start-description" className="sr-only">
      Clique para iniciar o questionário de descoberta do seu perfil arquitetônico
    </div>
  </motion.section>
)

export default Welcome