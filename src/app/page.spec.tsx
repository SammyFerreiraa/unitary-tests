import { render, screen } from '@testing-library/react'
import Home from './page'

describe('page', () => {
  it('should have templates', () => {
    render(<Home />)

    const verifyTemplate = screen.getByText('Templates')
    expect(verifyTemplate).toBeInTheDocument()
  })
})
