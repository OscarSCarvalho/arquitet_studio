import { render, screen, fireEvent } from '@testing-library/react'
import WelcomeScreen from '../WelcomeScreen'

describe('WelcomeScreen', () => {
  it('renders the welcome screen component', () => {
    const mockOnStart = jest.fn()
    render(<WelcomeScreen onStart={mockOnStart} />)

    expect(screen.getByText(/Arquitetura que entende você/i)).toBeInTheDocument()
  })

  it('displays the subtitle text', () => {
    const mockOnStart = jest.fn()
    render(<WelcomeScreen onStart={mockOnStart} />)

    expect(screen.getByText(/Seja bem-vindo à sua nova forma de viver/i)).toBeInTheDocument()
  })

  it('renders the start button', () => {
    const mockOnStart = jest.fn()
    render(<WelcomeScreen onStart={mockOnStart} />)

    const button = screen.getByRole('button', { name: /Iniciar Jornada/i })
    expect(button).toBeInTheDocument()
  })

  it('calls onStart when the button is clicked', () => {
    const mockOnStart = jest.fn()
    render(<WelcomeScreen onStart={mockOnStart} />)

    const button = screen.getByRole('button', { name: /Iniciar Jornada/i })
    fireEvent.click(button)

    expect(mockOnStart).toHaveBeenCalledTimes(1)
  })

  it('has proper heading hierarchy', () => {
    const mockOnStart = jest.fn()
    render(<WelcomeScreen onStart={mockOnStart} />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('applies correct styling classes', () => {
    const mockOnStart = jest.fn()
    const { container } = render(<WelcomeScreen onStart={mockOnStart} />)

    const mainDiv = container.querySelector('.min-h-screen')
    expect(mainDiv).toBeInTheDocument()
  })
})
