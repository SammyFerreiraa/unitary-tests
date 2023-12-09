import { render } from '@testing-library/react'
import { Badge } from '@/components/ui/badge'

describe('badge', () => {
  it('should render Badge correctly', () => {
    const { getByText } = render(<Badge>Badge</Badge>)

    const badge = getByText('Badge')
    expect(badge).toBeInTheDocument()
  })
})
