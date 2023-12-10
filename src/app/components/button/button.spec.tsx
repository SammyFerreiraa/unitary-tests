import { render, screen } from '@testing-library/react'
import Button from '../button/Button'

describe('button', () => {
  it('should render Button correctly', () => {
    render(<Button>Click Me</Button>)

    const button = screen.getByRole('button', { name: 'Click Me' })
    expect(button).toBeInTheDocument()
  })
  it('should render with red background if disable', () => {
    const { getByText } = render(<Button disable={true}>Click Me</Button>)

    const button = getByText('Click Me')
    expect(button).toHaveClass('bg-red-500')
  })
  it('should render with green background if false', () => {
    const { getByText } = render(<Button disable={false}>Click Me</Button>)

    const button = getByText('Click Me')
    expect(button).toHaveClass('bg-green-500')
  })
})
