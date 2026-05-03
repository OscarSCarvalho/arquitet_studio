import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

/** Mapeamento público de imagens ilustrativas por perfil e ambiente */
const ILLUSTRATIONS_BY_PROFILE = {
  'Clássico Minimalista': {
    'sala de estar': [
      'https://images.unsplash.com/photo-1560185127-6a8449f5ff96?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589987602925-a3a75c725c41?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop',
    ],
    'quarto': [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&auto=format&fit=crop',
    ],
    'cozinha': [
      'https://images.unsplash.com/photo-1586123456-0a0a1e5e2c5b?w=800&auto=format&fit=crop',
    ],
    'escritório': [
      'https://images.unsplash.com/photo-1582719478250-8c437b6d15ea?w=800&auto=format&fit=crop',
    ],
  },
  'Modernista Orgânico': {
    'sala de estar': [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop',
    ],
    'quarto': [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop',
    ],
    'cozinha': [
      'https://images.unsplash.com/photo-1559423537-855b254a59b5?w=800&auto=format&fit=crop',
    ],
    'escritório': [
      'https://images.unsplash.com/photo-1551406659-9a09d92f574d?w=800&auto=format&fit=crop',
    ],
  },
  'Contemporâneo Afetivo': {
    'sala de estar': [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&auto=format&fit=crop',
    ],
    'quarto': [
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562085263-8797a48e931b?w=800&auto=format&fit=crop',
    ],
    'cozinha': [
      'https://images.unsplash.com/photo-1622549088448-9c8e8c3d8c5c?w=800&auto=format&fit=crop',
    ],
    'escritório': [
      'https://images.unsplash.com/photo-1547442367-6ce7ff4ec718?w=800&auto=format&fit=crop',
    ],
  },
}

export const Illustrations = ({ profile, answers }) => {
  const [room, setRoom] = useState('sala de estar')
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [favorites, setFavorites] = useState([])
  const carouselRef = useRef(null)

  // 1. Carrega favoritos do localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(`favorites_${profile}`)
      if (stored) {
        setFavorites(JSON.parse(stored))
      }
    } catch {
      // ignora
    }
  }, [profile])

  // 2. Salva favoritos no localStorage sempre que mudam
  const toggleFavorite = (url) => {
    setFavorites((prev) => {
      const next = prev.includes(url) ? prev.filter((u) => u !== url) : [...prev, url]
      localStorage.setItem(`favorites_${profile}`, JSON.stringify(next))
      return next
    })
  }

  // 3. Busca imagens estáticas baseadas no perfil e ambiente
  const fetchImages = () => {
    const profilesImages = ILLUSTRATIONS_BY_PROFILE[profile] || {}
    const urls = profilesImages?.[room] ?? []
    if (urls && urls.length > 0) {
      setImages(urls.slice(0, 8)) // garante no máximo 8 imagens
      setLoading(false)
    } else {
      setImages([])
      setLoading(false)
      setError('Nenhuma imagem encontrada para o perfil/ambiente selecionado.')
    }
  }

  // 3. Inicializa a busca ao montar
  useEffect(() => {
    fetchImages()
  }, [profile, room])

  // 3. Scroll do carrossel
  const scrollCarousel = (dir) => {
    const el = carouselRef.current
    if (!el) return
    const scrollAmount = el.clientWidth * 0.8
    el.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' })
  }

  // 4. Aviso obrigatório
  const notice = (
    <p className="mb-4 flex items-center gap-2 text-xs italic text-slate-500">
      <span role="img" aria-label="aviso">⚠️</span>
      Estas imagens são apenas referências visuais e não correspondem ao projeto final.
    </p>
  )

  // 4. Renderização do carrossel
  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex gap-4 overflow-x-auto pb-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="h-48 w-72 flex-shrink-0 rounded-xl bg-slate-200 animate-pulse"
            />
          ))}
        </div>
      )
    }

    if (error) {
      return (
        <p className="text-sm text-slate-600">
          {error}
        </p>
      )
    }

    return (
      <div className="relative">
        {/* Botões de navegação */}
        <button
          type="button"
          onClick={() => scrollCarousel(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow hover:bg-white"
          aria-label="Anterior"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollCarousel(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow hover:bg-white"
          aria-label="Próximo"
        >
          →
        </button>

        {/* Carrossel */}
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
          style={{ scrollbarWidth: 'none' }}
        >
          {images.map((src, i) => (
            <motion.div
              key={src}
              className="relative flex-shrink-0 snap-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <motion.img
                src={src}
                alt={`${profile} – ${room} ${i + 1}`}
                loading="lazy"
                className="h-48 w-72 rounded-xl border border-slate-200 object-cover"
                whileHover={{ scale: 1.02 }}
              />
              {/* Botão de favorito */}
              <button
                type="button"
                onClick={() => toggleFavorite(src)}
                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 shadow hover:bg-white"
                aria-label={favorites.includes(src) ? 'Remover dos favoritos' : 'Favoritar'}
              >
                {favorites.includes(src) ? '❤️' : '🤍'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section className="mt-12">
      {notice}

      {/* Abas de seleção de ambiente */}
      <nav className="mb-4 flex gap-2 overflow-x-auto">
        {['sala de estar', 'quarto', 'cozinha', 'escritório'].map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRoom(r)}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
              room === r
                ? 'bg-slate-800 text-white'
                : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
            }`}
          >
            {r.charAt(0).toUpperCase() + r.slice(1)}
          </button>
        ))}
      </nav>

      {renderContent()}
    </section>
  )
}

export default Illustrations
