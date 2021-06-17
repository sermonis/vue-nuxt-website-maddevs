import ModelProcess from '@/components/DeliveryModels/ModelProcess'
import { render } from '@testing-library/vue'

describe('ModelProcess component', () => {
  it('should render correctly', () => {
    const { container } = render(ModelProcess)

    expect(container).toMatchSnapshot()
  })
})
