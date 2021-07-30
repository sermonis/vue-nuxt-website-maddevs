import TechnologyStack from '@/components/Cases/peklo/Technologies'
import { render, screen } from '@testing-library/vue'

const stubs = ['ListTechnologiesItem']

describe('Technologies component', () => {
  it('should render correctly', () => {
    const { container } = render(TechnologyStack, {
      stubs,
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(TechnologyStack, {
      stubs,
    })
    expect(screen.getByText(/Technology stack/i).className).toContain('case_title_h2')
  })
})