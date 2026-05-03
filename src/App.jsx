import { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import WelcomeScreen from './components/WelcomeScreen'
import Onboarding from './components/Onboarding'
import WelcomeForm from './components/WelcomeForm'
import Discovery from './components/Discovery'
import Result from './components/Result'
import RoomViewer from './components/RoomViewer'

const questions = [
  {
    id: 'lifeStyle',
    title: 'Seu ritmo social define como o espaço deve acolher.',
    subtitle: 'Você se identifica mais com qual energia no dia a dia?',
    options: ['Extrovertido', 'Equilibrado', 'Introspectivo'],
  },
  {
    id: 'palette',
    title: 'As cores guiam sensações e memória.',
    subtitle: 'Qual paleta traduz o que você deseja sentir em casa?',
    options: ['Neutros quentes', 'Monocromático sofisticado', 'Azuis e verdes suaves'],
  },
  {
    id: 'livingRoom',
    title: 'Vamos definir a intenção da área social.',
    subtitle: 'Qual sensação a sala principal deve entregar?',
    options: ['Energia criativa', 'Convívio elegante', 'Relaxamento contemplativo'],
  },
  {
    id: 'bedroom',
    title: 'No ambiente íntimo, buscamos regeneração.',
    subtitle: 'Como você imagina o quarto ideal?',
    options: ['Abrigo sereno', 'Hotel contemporâneo', 'Refúgio sensorial'],
  },
  {
    id: 'memory',
    title: 'Memórias afetivas são a base da narrativa.',
    subtitle: 'Qual lembrança melhor representa o lar dos seus sonhos?',
    options: ['Casa de praia ao amanhecer', 'Apartamento urbano com arte', 'Cabana sofisticada na serra'],
  },
]

const profileCatalog = {
  'Clássico Minimalista': {
    signature: 'Linhas limpas, materiais nobres e atmosfera silenciosa.',
    colors: ['#e8e1d6', '#cfd5df', '#f8f7f3', '#bec9d5'],
    textures: ['Pedra levigada', 'Linho off-white', 'Madeira carvalho claro'],
    concepts: ['Iluminação difusa', 'Mobília atemporal', 'Composição de arte discreta'],
  },
  'Modernista Orgânico': {
    signature: 'Contraste entre estrutura contemporânea e matéria natural.',
    colors: ['#dae2d6', '#9aa9b2', '#f4efe6', '#7f98ac'],
    textures: ['Concreto natural', 'Trama artesanal', 'Nogueira acetinada'],
    concepts: ['Vegetação integrada', 'Volumes fluidos', 'Layout de convívio aberto'],
  },
  'Contemporâneo Afetivo': {
    signature: 'Sofisticação emocional com equilíbrio entre acolhimento e design.',
    colors: ['#efe6dc', '#bcc8d3', '#f6f2ee', '#90a9bf'],
    textures: ['Bouclé texturizado', 'Freijó suave', 'Cerâmica artística'],
    concepts: ['Curvas elegantes', 'Rituais de bem-estar', 'Detalhes personalizados'],
  },
}

const semanticReferences = {
  'Clássico Minimalista': [
    'Residência com volumetria pura, boiseries discretas e marcenaria em carvalho claro',
    'Apartamento premium com paleta greige, iluminação indireta e obras de arte curatoriais',
    'Living com pedra natural, tapetes neutros e composição de mobília baixa',
  ],
  'Modernista Orgânico': [
    'Casa contemporânea com concreto aparente, jardins internos e grandes painéis de vidro',
    'Projeto de alto padrão com estrutura metálica e texturas naturais em tons de cerúleo',
    'Ambiente social com layout aberto, escultura em madeira e luz zenital',
  ],
  'Contemporâneo Afetivo': [
    'Suíte boutique com tecidos nobres, formas curvas e iluminação cenográfica',
    'Sala gourmet com tons claros, arte local e materiais de toque sensorial',
    'Home lounge com azul suave, marcenaria autoral e composição acolhedora',
  ],
}

function getProfile(answers) {
  const score = {
    'Clássico Minimalista': 0,
    'Modernista Orgânico': 0,
    'Contemporâneo Afetivo': 0,
  }

  if (answers.lifeStyle === 'Introspectivo') score['Clássico Minimalista'] += 2
  if (answers.lifeStyle === 'Extrovertido') score['Modernista Orgânico'] += 2
  if (answers.lifeStyle === 'Equilibrado') score['Contemporâneo Afetivo'] += 2

  if (answers.palette === 'Monocromático sofisticado') score['Clássico Minimalista'] += 2
  if (answers.palette === 'Azuis e verdes suaves') score['Modernista Orgânico'] += 2
  if (answers.palette === 'Neutros quentes') score['Contemporâneo Afetivo'] += 2

  if (answers.livingRoom === 'Convívio elegante') score['Clássico Minimalista'] += 1
  if (answers.livingRoom === 'Energia criativa') score['Modernista Orgânico'] += 1
  if (answers.livingRoom === 'Relaxamento contemplativo') score['Contemporâneo Afetivo'] += 1

  if (answers.bedroom === 'Hotel contemporâneo') score['Clássico Minimalista'] += 1
  if (answers.bedroom === 'Refúgio sensorial') score['Modernista Orgânico'] += 1
  if (answers.bedroom === 'Abrigo sereno') score['Contemporâneo Afetivo'] += 1

  if (answers.memory === 'Apartamento urbano com arte') score['Clássico Minimalista'] += 1
  if (answers.memory === 'Cabana sofisticada na serra') score['Modernista Orgânico'] += 1
  if (answers.memory === 'Casa de praia ao amanhecer') score['Contemporâneo Afetivo'] += 1

  return Object.entries(score).sort((a, b) => b[1] - a[1])[0][0]
}

function App() {
  const [stage, setStage] = useState('welcome')
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [userInfo, setUserInfo] = useState(null)

  const completed = Object.keys(answers).length
  const progress = Math.round((completed / questions.length) * 100)
  const activeQuestion = questions[step]
  const isDiscoveryDone = completed === questions.length

  const profile = useMemo(() => {
    if (!isDiscoveryDone) return ''
    return getProfile(answers)
  }, [answers, isDiscoveryDone])

  const profileData = profile ? profileCatalog[profile] : null
  const references = profile ? semanticReferences[profile] : []

  const handleSelect = (value) => {
    const updated = { ...answers, [activeQuestion.id]: value }
    setAnswers(updated)

    if (step < questions.length - 1) {
      setTimeout(() => setStep((current) => current + 1), 300)
    } else {
      setTimeout(() => setStage('result'), 400)
    }
  }

  const handleBack = () => {
    setStep((current) => Math.max(current - 1, 0))
  }

  const handleDiscoveryBack = () => {
    if (step === 0) {
      setStage('onboarding')
    } else {
      handleBack()
    }
  }

  const resetFlow = () => {
    setStage('welcome')
    setStep(0)
    setAnswers({})
  }

  const handleGoToOnboarding = () => {
    setStage('onboarding')
  }

  const handleOnboardingBack = () => {
    setStage('welcome')
  }

  const handleOnboardingContinue = () => {
    setStage('welcomeForm')
  }

  const handleWelcomeFormConfirm = (data) => {
    setUserInfo(data)
    setStage('discovery')
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {stage === 'welcome' && (
          <WelcomeScreen key="welcome" onStart={handleGoToOnboarding} />
        )}

        {stage === 'onboarding' && (
          <Onboarding key="onboarding" onContinue={handleOnboardingContinue} onBack={handleOnboardingBack} />
        )}

        {stage === 'welcomeForm' && (
          <WelcomeForm key="welcomeForm" onConfirm={handleWelcomeFormConfirm} onBack={handleOnboardingBack} />
        )}

        {stage !== 'welcome' && stage !== 'onboarding' && stage !== 'welcomeForm' && (
          <main className="mx-auto min-h-screen max-w-6xl px-4 py-6 md:px-10 md:py-10" role="main">
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/85 p-6 shadow-[0_30px_60px_-35px_rgba(80,102,130,0.45)] backdrop-blur md:p-12">
              <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-sky-100/60 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-slate-100/70 blur-3xl" />

              <AnimatePresence mode="wait">
                {stage === 'discovery' && (
                  <Discovery
                    key="discovery"
                    step={step}
                    progress={progress}
                    activeQuestion={activeQuestion}
                    answers={answers}
                    onSelect={handleSelect}
                    onBack={handleDiscoveryBack}
                    onReset={resetFlow}
                  />
                )}

                {stage === 'result' && profileData && (
                  <Result
                    key="result"
                    profile={profile}
                    profileData={profileData}
                    references={references}
                    answers={answers}
                    onReset={resetFlow}
                    onBack={() => setStage('welcome')}
                  />
                )}
              </AnimatePresence>
            </div>
          </main>
        )}
      </AnimatePresence>
    </>
  )
}

export default App