import { render, screen, fireEvent } from '@testing-library/react'
import Discovery from '../Discovery'

const mockQuestion = {
  id: 'lifeStyle',
  title: 'Seu ritmo social define como o espaço deve acolher.',
  subtitle: 'Você se identifica mais com qual energia no dia a dia?',
  options: ['Extrovertido', 'Equilibrado', 'Introspectivo'],
}

describe('Discovery', () => {
  it('renders the discovery component', () => {
    const mockOnSelect = jest.fn()
    const mockOnBack = jest.fn()
    const mockOnReset = jest.fn()

    render(
      <Discovery
        step={0}
        progress={0}
        activeQuestion={mockQuestion}
        answers={{}}
        onSelect={mockOnSelect}
        onBack={mockOnBack}
        onReset={mockOnReset}
      />
    )

    expect(screen.getByText(/Discovery Imersivo/i)).toBeInTheDocument()
  })

  it('displays the active question title', () => {
    const mockOnSelect = jest.fn()
    const mockOnBack = jest.fn()
    const mockOnReset = jest.fn()

    render(
      <Discovery
        step={0}
        progress={0}
        activeQuestion={mockQuestion}
        answers={{}}
        onSelect={mockOnSelect}
        onBack={mockOnBack}
        onReset={mockOnReset}
      />
    )

    expect(screen.getByText(/Seu ritmo social define como o espaço deve acolher/i)).toBeInTheDocument()
  })

  it('displays the question subtitle', () => {
    const mockOnSelect = jest.fn()
    const mockOnBack = jest.fn()
    const mockOnReset = jest.fn()

    render(
      <Discovery
        step={0}
        progress={0}
        activeQuestion={mockQuestion}
        answers={{}}
        onSelect={mockOnSelect}
        onBack={mockOnBack}
        onReset={mockOnReset}
      />
    )

    expect(screen.getByText(/Você se identifica mais com qual energia no dia a dia/i)).toBeInTheDocument()
  })

  it('renders all answer options', () => {
    const mockOnSelect = jest.fn()
    const mockOnBack = jest.fn()
    const mockOnReset = jest.fn()

    render(
      <Discovery
        step={0}
        progress={0}
        activeQuestion={mockQuestion}
        answers={{}}
        onSelect={mockOnSelect}
        onBack={mockOnBack}
        onReset={mockOnReset}
      />
    )

    expect(screen.getByText('Extrovertido')).toBeInTheDocument()
    expect(screen.getByText('Equilibrado')).toBeInTheDocument()
    expect(screen.getByText('Introspectivo')).toBeInTheDocument()
  })

  it('calls onSelect when an option is clicked', () => {
    const mockOnSelect = jest.fn()
    const mockOnBack = jest.fn()
    const mockOnReset = jest.fn()

    render(
      <Discovery
        step={0}
        progress={0}
        activeQuestion={mockQuestion}
        answers={{}}
        onSelect={mockOnSelect}
        onBack={mockOnBack}
        onReset={mockOnReset}
      />
    )

    const button = screen.getByRole('button', { name: /Extrovertido/i })
    fireEvent.click(button)

    expect(mockOnSelect).toHaveBeenCalledWith('Extrovertido')
  })

  it('displays correct progress text', () => {
    const mockOnSelect = jest.fn()
    const mockOnBack = jest.fn()
    const mockOnReset = jest.fn()

    render(
      <Discovery
        step={2}
        progress={60}
        activeQuestion={mockQuestion}
        answers={{}}
        onSelect={mockOnSelect}
        onBack={mockOnBack}
        onReset={mockOnReset}
      />
    )

    expect(screen.getByText(/Etapa 3 de 5/i)).toBeInTheDocument()
  })

  it('renders back and reset buttons', () => {
    const mockOnSelect = jest.fn()
    const mockOnBack = jest.fn()
    const mockOnReset = jest.fn()

    render(
      <Discovery
        step={0}
        progress={0}
        activeQuestion={mockQuestion}
        answers={{}}
        onSelect={mockOnSelect}
        onBack={mockOnBack}
        onReset={mockOnReset}
      />
    )

    expect(screen.getByRole('button', { name: /Voltar/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Reiniciar/i })).toBeInTheDocument()
  })

  it('calls onBack when back button is clicked', () => {
    const mockOnSelect = jest.fn()
    const mockOnBack = jest.fn()
    const mockOnReset = jest.fn()

    render(
      <Discovery
        step={0}
        progress={0}
        activeQuestion={mockQuestion}
        answers={{}}
        onSelect={mockOnSelect}
        onBack={mockOnBack}
        onReset={mockOnReset}
      />
    )

    const backButton = screen.getByRole('button', { name: /Voltar/i })
    fireEvent.click(backButton)

    expect(mockOnBack).toHaveBeenCalledTimes(1)
  })

  it('calls onReset when reset button is clicked', () => {
    const mockOnSelect = jest.fn()
    const mockOnBack = jest.fn()
    const mockOnReset = jest.fn()

    render(
      <Discovery
        step={0}
        progress={0}
        activeQuestion={mockQuestion}
        answers={{}}
        onSelect={mockOnSelect}
        onBack={mockOnBack}
        onReset={mockOnReset}
      />
    )

    const resetButton = screen.getByRole('button', { name: /Reiniciar/i })
    fireEvent.click(resetButton)

    expect(mockOnReset).toHaveBeenCalledTimes(1)
  })

  it('highlights selected answer', () => {
    const mockOnSelect = jest.fn()
    const mockOnBack = jest.fn()
    const mockOnReset = jest.fn()

    render(
      <Discovery
        step={0}
        progress={0}
        activeQuestion={mockQuestion}
        answers={{ lifeStyle: 'Extrovertido' }}
        onSelect={mockOnSelect}
        onBack={mockOnBack}
        onReset={mockOnReset}
      />
    )

    const selectedButton = screen.getByRole('radio', { checked: true })
    expect(selectedButton).toHaveClass('border-slate-500')
  })
})
