import { shallowMount } from '@vue/test-utils'
import { render, screen } from '@testing-library/vue'
import KeyMetricsSlice from '@/prismicSlices/pageParts/KeyMetricsSlice'

const stubs = ['FirstVariation', 'SecondVariation', 'ThirdVariation']

const backgrounds = {
  white: '#ffffff',
  black: '#111213',
  grey: '#f5f7f9',
}

const apiData = {
  background: 'black',
  animation: 'fade-up',
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
  },
})

describe('KeyMetrics slice', () => {
  it('should render correctly with FirstVariation component', () => {
    const props = getProps(apiData)
    props.slice.variation = 'default-slice'
    const { container } = render(KeyMetricsSlice, {
      stubs,
      props,
    })

    expect(screen.queryByTestId('key-metrics-slice__first')).not.toBeNull()
    expect(screen.queryByTestId('key-metrics-slice__second')).toBeNull()
    expect(screen.queryByTestId('key-metrics-slice__third')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with SecondVariation component', () => {
    const props = getProps(apiData)
    props.slice.variation = 'secondVariation'
    const { container } = render(KeyMetricsSlice, {
      stubs,
      props,
    })

    expect(screen.queryByTestId('key-metrics-slice__first')).toBeNull()
    expect(screen.queryByTestId('key-metrics-slice__second')).not.toBeNull()
    expect(screen.queryByTestId('key-metrics-slice__third')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with ThirdVariation component', () => {
    const props = getProps(apiData)
    props.slice.variation = 'thirdVariation'
    const { container } = render(KeyMetricsSlice, {
      stubs,
      props,
    })

    expect(screen.queryByTestId('key-metrics-slice__first')).toBeNull()
    expect(screen.queryByTestId('key-metrics-slice__second')).toBeNull()
    expect(screen.queryByTestId('key-metrics-slice__third')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  describe('data-aos animation attribute', () => {
    it(`should be '${apiData.animation}'`, () => {
      render(KeyMetricsSlice, {
        stubs,
        props: getProps(apiData),
      })

      expect(screen.getByTestId('key-metrics-slice__container').getAttribute('data-aos')).toBe(apiData.animation)
    })

    it('should be null', () => {
      render(KeyMetricsSlice, {
        stubs,
        props: getProps({}),
      })

      expect(screen.getByTestId('key-metrics-slice__container').getAttribute('data-aos')).toBeNull()
    })
  })

  describe('sliceBackground computed method', () => {
    it(`should return ${backgrounds.white} (white)`, () => {
      const wrapper = shallowMount(KeyMetricsSlice, {
        stubs,
        propsData: getProps({
          ...apiData,
          background: 'white',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.white)
    })

    it(`should return ${backgrounds.grey} (grey)`, () => {
      const wrapper = shallowMount(KeyMetricsSlice, {
        stubs,
        propsData: getProps({
          ...apiData,
          background: 'grey',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.grey)
    })

    it(`should return ${backgrounds.black} (black)`, () => {
      const wrapper = shallowMount(KeyMetricsSlice, {
        stubs,
        propsData: getProps({
          ...apiData,
          background: 'black',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.black)
    })

    it('should return null', () => {
      const wrapper = shallowMount(KeyMetricsSlice, {
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
