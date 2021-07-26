import TestimonialBlock from '@/components/DeliveryModels/shared/TestimonialBlock'
import { render } from '@testing-library/vue'

const props = {
  text: 'Testimonial text',
  author: {
    image: 'ruslan',
    name: 'Ruslan',
    position: 'CTO',
  },
}

describe('TestimonialBlock component', () => {
  it('should render correctly', () => {
    const { container } = render(TestimonialBlock, {
      props,
    })

    expect(container).toMatchSnapshot()
  })
})
