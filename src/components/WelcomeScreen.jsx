import { motion } from 'framer-motion'

const WelcomeScreen = ({ onStart }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background com arquitetura abstrata */}
      <div className="absolute inset-0">
        {/* Imagem de background com overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='1920' height='1080' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f5f3f0;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23e8f0f7;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f9f7f4;stop-opacity:1' /%3E%3C/linearGradient%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.02' numOctaves='4' result='noise' /%3E%3CfeDisplacementMap in='SourceGraphic' in2='noise' scale='15' /%3E%3C/filter%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23grad1)'/%3E%3Crect width='1920' height='1080' fill='%23c5d9eb' opacity='0.08' filter='url(%23noise)' /%3E%3Cline x1='0' y1='200' x2='1920' y2='180' stroke='%23b8cae0' stroke-width='1' opacity='0.15' /%3E%3Cline x1='0' y1='400' x2='1920' y2='420' stroke='%23b8cae0' stroke-width='0.5' opacity='0.1' /%3E%3Cline x1='0' y1='600' x2='1920' y2='590' stroke='%23b8cae0' stroke-width='1' opacity='0.12' /%3E%3Crect x='200' y='150' width='400' height='600' fill='%23e0e8f0' opacity='0.05' /%3E%3Crect x='1320' y='250' width='380' height='500' fill='%23d5e3f0' opacity='0.06' /%3E%3C/svg%3E")`,
          }}
        />
        {/* Overlay de cor sofisticada */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-stone-50" />
        <div className="absolute inset-0 backdrop-blur-3xl" style={{ backdropFilter: 'blur(0.5px)' }} />
      </div>

      {/* Elementos decorativos abstratos */}
      <motion.div
        className="absolute top-20 right-32 w-96 h-96 rounded-full bg-gradient-to-br from-slate-200/10 to-blue-200/5 blur-3xl"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-32 left-24 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-100/10 to-slate-100/5 blur-3xl"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Conteúdo Principal */}
      <motion.div
        className="relative z-10 flex items-center justify-center min-h-screen px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl text-center space-y-12">
          {/* Tipografia Principal */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Primeira linha com maior destaque */}
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-wide text-slate-900 leading-tight">
              <span className="text-slate-800 font-normal">Arquitetura</span>
              <br />
              <span className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 bg-clip-text text-transparent">
                que entende você.
              </span>
            </h1>

            {/* Linha secundária */}
            <p className="font-serif text-xl md:text-3xl font-light text-slate-500 tracking-wide">
              Seja bem-vindo à sua nova forma de viver.
            </p>
          </motion.div>

          {/* Descrição Opcional */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
              Uma jornada de descoberta pessoal através da inteligência artificial e design estratégico.
              Cada espaço conta uma história única sobre quem você é.
            </p>
          </motion.div>

          {/* Botão de Ação */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center pt-8"
          >
            <motion.button
              onClick={onStart}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(100, 116, 139, 0.15)',
              }}
              whileTap={{ scale: 0.98 }}
              className="relative px-12 py-4 text-lg font-light tracking-widest uppercase text-slate-700 border-2 border-slate-700/40 rounded-full transition-all duration-500 hover:border-slate-700/80 hover:text-slate-900 group overflow-hidden focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              {/* Background hover effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-slate-700/5 to-slate-700/10 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <span className="relative flex items-center justify-center gap-3">
                Iniciar Jornada
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
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

        </div>
      </motion.div>

      {/* Decoração de canto - linha fina */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/20 to-transparent" />
    </div>
  )
}

export default WelcomeScreen