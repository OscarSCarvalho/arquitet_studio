import { motion } from 'framer-motion'

const Discovery = ({ step, progress, activeQuestion, answers, onSelect, onBack, onReset }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative min-h-[72vh]"
    role="region"
    aria-labelledby="discovery-title"
    aria-describedby="progress-description"
  >
    <header className="mb-12 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs tracking-[0.22em] text-slate-500 uppercase">
          Discovery Imersivo
        </p>
        <p className="text-sm text-slate-500">
          Etapa {step + 1} de 5
        </p>
      </div>
      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Progresso do questionário"
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-sky-200 via-slate-300 to-sky-300"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div id="progress-description" className="sr-only">
        Você completou {progress}% do questionário
      </div>
    </header>

    <motion.article
      key={step}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-3xl space-y-8"
    >
      <div className="space-y-4">
        <h2 id="discovery-title" className="font-serif text-3xl leading-tight text-slate-800 md:text-4xl">
          {activeQuestion.title}
        </h2>
        <p className="text-base text-slate-600 md:text-lg">{activeQuestion.subtitle}</p>
      </div>

      <div className="grid gap-4" role="radiogroup" aria-labelledby="discovery-title">
        {activeQuestion.options.map((option, index) => {
          const selected = answers[activeQuestion.id] === option
          return (
            <motion.button
              key={option}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="button"
              onClick={() => onSelect(option)}
              className={`rounded-2xl border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 ${
                selected
                  ? 'border-slate-500 bg-slate-50 text-slate-900'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50/80'
              }`}
              role="radio"
              aria-checked={selected}
            >
              <span className="text-sm md:text-base">{option}</span>
            </motion.button>
          )
        })}
      </div>

      <div className="flex justify-between pt-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={onBack}
          className="rounded-full border border-slate-300 px-5 py-2 text-sm text-slate-600 transition hover:border-slate-400 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        >
          Voltar
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={onReset}
          className="rounded-full border border-transparent px-5 py-2 text-sm text-slate-500 transition hover:border-slate-200 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        >
          Reiniciar
        </motion.button>
      </div>
    </motion.article>
  </motion.section>
)

export default Discovery