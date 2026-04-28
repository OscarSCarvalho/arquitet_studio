import { motion } from 'framer-motion'

const Onboarding = ({ onContinue, onBack }) => {
  const steps = [
    {
      number: '01',
      title: 'Descoberta',
      description: 'Responda perguntas que revelam seu estilo, preferências e memórias afetivas.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Análise',
      description: 'Inteligência artificial processa suas respostas e identifica seu perfil arquitetônico único.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Personalização',
      description: 'Receba uma prévia visual com cores, texturas e conceitos que definem seu espaço ideal.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.5a2 2 0 00-1 .268m-4 0a2 2 0 00-1-.268H5a2 2 0 00-2 2v4a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.1 * index, ease: 'easeOut' },
    }),
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/20 to-stone-50">
      {/* Elementos decorativos de fundo */}
      <motion.div
        className="absolute top-32 right-20 w-80 h-80 rounded-full bg-gradient-to-br from-slate-200/10 to-blue-200/5 blur-3xl"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-32 w-72 h-72 rounded-full bg-gradient-to-tr from-blue-100/10 to-slate-100/5 blur-3xl"
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Conteúdo */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16 md:mb-24">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-wide">
            Como funciona a <span className="font-normal text-slate-800">jornada</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg font-light max-w-2xl mx-auto">
            Três etapas simples para descobrir o espaço que reflete verdadeiramente quem você é.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative h-full">
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 rounded-3xl border border-slate-200/50 backdrop-blur-sm group-hover:border-slate-300/70 transition-all duration-500" />

                {/* Line connector (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-300 to-transparent" />
                )}

                {/* Content */}
                <div className="relative p-8 md:p-10 h-full flex flex-col">
                  {/* Number Badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl md:text-5xl font-serif font-light text-slate-300 group-hover:text-slate-400 transition-colors duration-500">
                      {step.number}
                    </span>
                    <div className="w-1 h-12 bg-gradient-to-b from-slate-400 to-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Icon */}
                  <div className="mb-6 text-slate-600 group-hover:text-slate-800 transition-colors duration-500">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl md:text-xl font-light text-slate-800 mb-3 tracking-wide">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed flex-grow">
                    {step.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-6 h-1 w-8 bg-gradient-to-r from-slate-600 to-blue-400 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Characteristics Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-gradient-to-r from-white/60 to-white/30 rounded-3xl border border-slate-200/50 backdrop-blur-sm p-8 md:p-12">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-slate-900 mb-8 tracking-wide">
              Você receberá
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-200/50">
                    <svg className="h-6 w-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-serif text-slate-900 font-light">Moodboard Dinâmico</p>
                  <p className="text-slate-600 text-sm font-light">Paleta de cores e texturas personalizadas</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-200/50">
                    <svg className="h-6 w-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-serif text-slate-900 font-light">Conceitos de Design</p>
                  <p className="text-slate-600 text-sm font-light">Princípios e filosofia do seu espaço</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-200/50">
                    <svg className="h-6 w-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-serif text-slate-900 font-light">Referências Arquitetônicas</p>
                  <p className="text-slate-600 text-sm font-light">Inspirações baseadas em seu perfil</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-200/50">
                    <svg className="h-6 w-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-serif text-slate-900 font-light">Análise Personalizada</p>
                  <p className="text-slate-600 text-sm font-light">Insights únicos sobre sua arquitetura ideal</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Info */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="text-slate-600 font-light text-base">
            Tempo estimado: <span className="font-normal text-slate-800">5 minutos</span>
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBack}
            className="px-8 py-4 text-sm font-light tracking-widest uppercase text-slate-700 border border-slate-300/60 rounded-full hover:border-slate-400 hover:text-slate-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Voltar
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(100, 116, 139, 0.2)',
            }}
            whileTap={{ scale: 0.98 }}
            onClick={onContinue}
            className="px-8 py-4 text-sm font-light tracking-widest uppercase text-white bg-gradient-to-r from-slate-700 to-slate-800 rounded-full hover:from-slate-800 hover:to-slate-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-slate-50 group"
          >
            <span className="flex items-center justify-center gap-2">
              Começar Discovery
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Onboarding