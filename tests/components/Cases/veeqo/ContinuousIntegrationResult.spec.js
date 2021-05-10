import ContinuousIntegrationResult from '@/components/Cases/veeqo/ContinuousIntegrationResult'
import { render, screen } from '@testing-library/vue'

describe('ContinuousIntegrationResult component', () => {
  it('should render correctly', () => {
    const { container } = render(ContinuousIntegrationResult)

    expect(screen.getByText('Result')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})