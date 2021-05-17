import Main from '@/components/Careers/Main'
import { render } from '@testing-library/vue'

const stubs = ['Banner', 'ProjectsCountries', 'Benefits', 'KeyMetrics', 'EmployeesBenefits']

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
