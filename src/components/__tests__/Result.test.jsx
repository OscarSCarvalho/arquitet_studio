import { render, screen, fireEvent } from '@testing-library/react'
import Result from '../Result'

const mockProfileData = {
  signature: 'Linhas limpas, materiais nobres e atmosfera silenciosa.',
  colors: ['#e8e1d6', '#cfd5df', '#f8f7f3', '#bec9d5'],
  textures: ['Pedra levigada', 'Linho off-white', 'Madeira carvalho claro'],
  concepts: ['Iluminação difusa', 'Mobília atemporal', 'Composição de arte discreta'],
}

const mockReferences = [
  'Residência com volumetria pura, boiseries discretas e marcenaria em carvalho claro',
  'Apartamento premium com paleta greige, iluminação indireta e obras de arte curatoriais',
]

describe('Result', () => {
  it('renders the result component', () => {
    const mockOnReset = jest.fn()
    const mockOnBack = jest.fn()

    render(
      <Result
        profile="Clássico Minimalista"
        profileData={mockProfileData}
        references={mockReferences}
        onReset={mockOnReset}
        onBack={mockOnBack}
      />
    )

    expect(screen.getByText(/Dashboard de Prévia Personalizada/i)).toBeInTheDocument()
  })

  it('displays the identified profile', () => {
    const mockOnReset = jest.fn()
    const mockOnBack = jest.fn()

    render(
      <Result
        profile="Clássico Minimalista"
        profileData={mockProfileData}
        references={mockReferences}
        onReset={mockOnReset}
        onBack={mockOnBack}
      />
    )

    expect(screen.getByRole('heading', { level: 2, name: /Clássico Minimalista/i })).toBeInTheDocument()
  })

  it('displays the profile signature', () => {
    const mockOnReset = jest.fn()
    const mockOnBack = jest.fn()

    render(
      <Result
        profile="Clássico Minimalista"
        profileData={mockProfileData}
        references={mockReferences}
        onReset={mockOnReset}
        onBack={mockOnBack}
      />
    )

    expect(screen.getByText(/Linhas limpas, materiais nobres/i)).toBeInTheDocument()
  })

  it('displays moodboard title', () => {
    const mockOnReset = jest.fn()
    const mockOnBack = jest.fn()

    render(
      <Result
        profile="Clássico Minimalista"
        profileData={mockProfileData}
        references={mockReferences}
        onReset={mockOnReset}
        onBack={mockOnBack}
      />
    )

    expect(screen.getByText(/Moodboard Dinâmico/i)).toBeInTheDocument()
  })

  it('displays textures section', () => {
    const mockOnReset = jest.fn()
    const mockOnBack = jest.fn()

    render(
      <Result
        profile="Clássico Minimalista"
        profileData={mockProfileData}
        references={mockReferences}
        onReset={mockOnReset}
        onBack={mockOnBack}
      />
    )

    expect(screen.getByText(/Texturas/i)).toBeInTheDocument()
    expect(screen.getByText(/Pedra levigada/i)).toBeInTheDocument()
  })

  it('displays concepts section', () => {
    const mockOnReset = jest.fn()
    const mockOnBack = jest.fn()

    render(
      <Result
        profile="Clássico Minimalista"
        profileData={mockProfileData}
        references={mockReferences}
        onReset={mockOnReset}
        onBack={mockOnBack}
      />
    )

    expect(screen.getByText(/Conceitos/i)).toBeInTheDocument()
    expect(screen.getByText(/Iluminação difusa/i)).toBeInTheDocument()
  })

  it('displays semantic search section', () => {
    const mockOnReset = jest.fn()
    const mockOnBack = jest.fn()

    render(
      <Result
        profile="Clássico Minimalista"
        profileData={mockProfileData}
        references={mockReferences}
        onReset={mockOnReset}
        onBack={mockOnBack}
      />
    )

    expect(screen.getByText(/Busca Semântica/i)).toBeInTheDocument()
  })

  it('displays references', () => {
    const mockOnReset = jest.fn()
    const mockOnBack = jest.fn()

    render(
      <Result
        profile="Clássico Minimalista"
        profileData={mockProfileData}
        references={mockReferences}
        onReset={mockOnReset}
        onBack={mockOnBack}
      />
    )

    expect(screen.getByText(/Residência com volumetria pura/i)).toBeInTheDocument()
  })

  it('renders action buttons', () => {
    const mockOnReset = jest.fn()
    const mockOnBack = jest.fn()

    render(
      <Result
        profile="Clássico Minimalista"
        profileData={mockProfileData}
        references={mockReferences}
        onReset={mockOnReset}
        onBack={mockOnBack}
      />
    )

    expect(screen.getByRole('button', { name: /Refazer Discovery/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Voltar ao Início/i })).toBeInTheDocument()
  })

  it('calls onReset when refazer button is clicked', () => {
    const mockOnReset = jest.fn()
    const mockOnBack = jest.fn()

    render(
      <Result
        profile="Clássico Minimalista"
        profileData={mockProfileData}
        references={mockReferences}
        onReset={mockOnReset}
        onBack={mockOnBack}
      />
    )

    const refazerButton = screen.getByRole('button', { name: /Refazer Discovery/i })
    fireEvent.click(refazerButton)

    expect(mockOnReset).toHaveBeenCalledTimes(1)
  })

  it('calls onBack when voltar button is clicked', () => {
    const mockOnReset = jest.fn()
    const mockOnBack = jest.fn()

    render(
      <Result
        profile="Clássico Minimalista"
        profileData={mockProfileData}
        references={mockReferences}
        onReset={mockOnReset}
        onBack={mockOnBack}
      />
    )

    const voltarButton = screen.getByRole('button', { name: /Voltar ao Início/i })
    fireEvent.click(voltarButton)

    expect(mockOnBack).toHaveBeenCalledTimes(1)
  })

  it('displays all color values', () => {
    const mockOnReset = jest.fn()
    const mockOnBack = jest.fn()

    render(
      <Result
        profile="Clássico Minimalista"
        profileData={mockProfileData}
        references={mockReferences}
        onReset={mockOnReset}
        onBack={mockOnBack}
      />
    )

    expect(screen.getByText('#e8e1d6')).toBeInTheDocument()
    expect(screen.getByText('#cfd5df')).toBeInTheDocument()
  })
})
