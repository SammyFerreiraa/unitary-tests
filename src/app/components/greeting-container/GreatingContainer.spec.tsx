import { fireEvent, render } from '@testing-library/react'
import GreatingContainer from './GreatingContainer'

describe('Greating Container', () => {
  it('should render the component', () => {
    const { getByText } = render(<GreatingContainer />)

    const buttonElement = getByText('Change Text')
    expect(buttonElement).toBeInTheDocument()

    fireEvent.click(buttonElement)

    const UpdateTextComponent = getByText('Bye World')

    expect(UpdateTextComponent).toBeInTheDocument()
  })
})
