import { fireEvent, render, screen } from '@testing-library/react'
import GreatingContainer from './GreatingContainer'

describe('Greating Container', () => {
  it('should render the component', () => {
    const { getByText } = render(<GreatingContainer />)

    const textElement = getByText('Hello World')
    expect(textElement).toBeInTheDocument()
  })
  it('should render after click', () => {
    const { getByText } = render(<GreatingContainer />)
    screen.getByText('Hello World')

    const buttonElement = getByText('Change Text')

    fireEvent.click(buttonElement)

    const UpdateTextComponent = getByText('Bye World')
    screen.queryByText('Hello World')

    const oldMessage = screen.queryByText('Hello World')
    expect(oldMessage).toBeNull()
    expect(oldMessage).not.toBeInTheDocument()

    expect(UpdateTextComponent).toBeInTheDocument()
  })
})
