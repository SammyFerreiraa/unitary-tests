import { fireEvent, render } from '@testing-library/react'
import GreatingContainer from './GreatingContainer'

describe('Greating Container', () => {
  it('should render the component', () => {
    const { getByText } = render(<GreatingContainer />)

    const textElement = getByText('Hello World')
    expect(textElement).toBeInTheDocument()
  })
  it('should render after click', () => {
    const { getByText } = render(<GreatingContainer />)

    const buttonElement = getByText('Change Text')
    fireEvent.click(buttonElement)

    const UpdateTextComponent = getByText('Bye World')

    expect(UpdateTextComponent).toBeInTheDocument()
  })
})
