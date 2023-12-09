import { render, screen } from '@testing-library/react'
import Button from '../button/Button'

describe('button', () => {
  it('should render Button correctly', () => {
    render(Button({ children: 'button' }))

    const button = screen.getByText('button')
    expect(button).toBeInTheDocument()
  })
})
