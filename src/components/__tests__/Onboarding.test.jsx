import { render, screen, fireEvent } from '@testing-library/react'
import Onboarding from '../Onboarding'

describe('Onboarding', () => {
  it('renders the onboarding component', () => {
    const mockOnContinue = jest.fn()
    const mockOnBack = jest.fn()
    render(<Onboarding onContinue={mockOnContinue} onBack={mockOnBack} />)

    expect(screen.getByText(/Como funciona a jornada/i)).toBeInTheDocument()
  })

  it('displays three step cards', () => {
    const mockOnContinue = jest.fn()
    const mockOnBack = jest.fn()
    render(<Onboarding onContinue={mockOnContinue} onBack={mockOnBack} />)

    expect(screen.getByText(/Descoberta/i)).toBeInTheDocument()
    expect(screen.getByText(/Análise/i)).toBeInTheDocument()
    expect(screen.getByText(/Personalização/i)).toBeInTheDocument()
  })

  it('displays benefits section', () => {
    const mockOnContinue = jest.fn()
    const mockOnBack = jest.fn()
    render(<Onboarding onContinue={mockOnContinue} onBack={mockOnBack} />)

    expect(screen.getByText(/Você receberá/i)).toBeInTheDocument()
    expect(screen.getByText(/Moodboard Dinâmico/i)).toBeInTheDocument()
    expect(screen.getByText(/Conceitos de Design/i)).toBeInTheDocument()
  })

  it('renders back and continue buttons', () => {
    const mockOnContinue = jest.fn()
    const mockOnBack = jest.fn()
    render(<Onboarding onContinue={mockOnContinue} onBack={mockOnBack} />)

    expect(screen.getByRole('button', { name: /Voltar/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Começar Discovery/i })).toBeInTheDocument()
  })

  it('calls onBack when back button is clicked', () => {
    const mockOnContinue = jest.fn()
    const mockOnBack = jest.fn()
    render(<Onboarding onContinue={mockOnContinue} onBack={mockOnBack} />)

    const backButton = screen.getByRole('button', { name: /Voltar/i })
    fireEvent.click(backButton)

    expect(mockOnBack).toHaveBeenCalledTimes(1)
  })

  it('calls onContinue when continue button is clicked', () => {
    const mockOnContinue = jest.fn()
    const mockOnBack = jest.fn()
    render(<Onboarding onContinue={mockOnContinue} onBack={mockOnBack} />)

    const continueButton = screen.getByRole('button', { name: /Começar Discovery/i })
    fireEvent.click(continueButton)

    expect(mockOnContinue).toHaveBeenCalledTimes(1)
  })

  it('displays estimated time', () => {
    const mockOnContinue = jest.fn()
    const mockOnBack = jest.fn()
    render(<Onboarding onContinue={mockOnContinue} onBack={mockOnBack} />)

    expect(screen.getByText(/5 minutos/i)).toBeInTheDocument()
  })
})
