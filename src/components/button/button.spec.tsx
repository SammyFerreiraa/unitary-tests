import { fireEvent, render, screen } from '@testing-library/react'
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
  it('should render with green background if active', () => {
    const { getByText } = render(<Button disable={false}>Click Me</Button>)

    const button = getByText('Click Me')
    expect(button).toHaveClass('bg-green-500')
  })
  it('should call onClick prop onclick', () => {
    const onClick = jest.fn()

    render(<Button onclick={onClick}>Click Me</Button>)

    const button = screen.getByText('Click Me')

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
