import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import CaseListSlice from '@/prismicSlices/pageParts/CaseListSlice'
import '../../../__mocks__/intersectionObserverMock'

const stubs = ['CasesListItem', 'NuxtLink']

const apiData = {
  background: '#ffffff',
  animation: 'fade-up',
  items: [
    { width: 'full', caseId: 'citycam' },
    { width: 'big', caseId: 'veeqo' },
  ],
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
    items: [...params?.items],
  },
})

describe('CaseListSlice component', () => {
  it('should render correctly', () => {
    const { container } = render(CaseListSlice, {
      stubs,
      props: getProps(apiData),
    })

    expect(container).toMatchSnapshot()
  })

  it('should render three cards', () => {
    const { getAllByTestId } = render(CaseListSlice, {
      stubs,
      props: getProps(apiData),
    })

    expect(getAllByTestId('test-case-card')).toHaveLength(2)
  })

  describe('data-aos animation attribute', () => {
    it('should be fade-up', () => {
      render(CaseListSlice, {
        stubs,
        props: getProps(apiData),
      })

      expect(screen.getByTestId('test-case-container').getAttribute('data-aos')).toBe('fade-up')
    })

    it('should be null', () => {
      render(CaseListSlice, {
        stubs,
        props: getProps({ items: [] }),
      })

      expect(screen.getByTestId('test-case-container').getAttribute('data-aos')).toBeNull()
    })
  })

  describe('sliceBackground computed method', () => {
    it('should return #ffffff', () => {
      const wrapper = shallowMount(CaseListSlice, {
        stubs,
        propsData: getProps({
          ...apiData,
          background: 'white',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe('#ffffff')
    })

    it('should return null', () => {
      const wrapper = shallowMount(CaseListSlice, {
        stubs,
        propsData: getProps({
          ...apiData,
          background: 'unknown',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBeNull()
    })
  })
})
