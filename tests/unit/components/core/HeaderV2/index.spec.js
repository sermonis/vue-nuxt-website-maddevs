import { fireEvent, render, screen } from '@testing-library/vue'

import { createLocalVue, RouterLinkStub, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Header from '@/components/core/HeaderV2'

import headerContent from '../../../__mocks__/headerContent'

const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
  setHeaderTransparentArea: () => {},
  setHeaderTransparent: () => {},
}

const getters = {
  headerTransparentArea: () => '.selector',
  headerTransparent: () => false,
  headerContent: () => headerContent,
}

const store = new Vuex.Store({
  actions,
  getters,
})

const stubs = ['ModalContactMe', 'HeaderPost', 'HeaderMobile']

const mocks = {
  $nuxt: {
    $route: {
      path: '/',
      name: '',
    },
  },
  $prismic: {
    asText: name => name,
  },
  $route: () => 'blog',
  $router: {
    push: jest.fn(),
  },
}

const containerToRender = document.createElement('div')
containerToRender.setAttribute('id', 'case-scroll-container')
containerToRender.setAttribute('data-testid', 'test-container')

const caseHeaderForRender = document.createElement('div')
caseHeaderForRender.setAttribute('id', 'case-header')
caseHeaderForRender.setAttribute('data-testid', 'test-case-header')
containerToRender.append(caseHeaderForRender)

const mobileScrollBar = document.createElement('div')
mobileScrollBar.setAttribute('id', 'mobile-header-scrollbar')
mobileScrollBar.setAttribute('data-testid', 'test-mobile-header-scrollbar')
containerToRender.append(mobileScrollBar)

containerToRender.append(caseHeaderForRender)
describe('Header component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(window, 'removeEventListener').mockImplementation(() => {})
  })

  it('should render correctly', () => {
    const { container } = render(Header, {
      localVue,
      mocks,
      stubs,
      store,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work navigation click', async () => {
    const SCROLL_POSITION = 100
    window.scrollTo = (x, y) => {
      document.documentElement.scrollTop = y
    }
    await render(Header, {
      localVue,
      mocks,
      stubs,
      store,
    })

    await fireEvent.scroll(document.documentElement, { target: { scrollTop: SCROLL_POSITION } })
    expect(document.documentElement.scrollTop).toBe(SCROLL_POSITION)

    await fireEvent.click(screen.getAllByTestId('test-navigation-link')[0])
    expect(document.body.scrollTop).toBe(0)
  })

  it('should correct work burger click handler', async () => {
    render(Header, {
      localVue,
      mocks,
      stubs,
      store,
    })

    const burgerButton = screen.getByTestId('test-burger')
    await fireEvent.click(burgerButton)
    await fireEvent.touchMove(document.body)

    expect(screen.queryByTestId('test-burger--close')).toBeTruthy()

    await fireEvent.click(burgerButton)
    expect(screen.queryByTestId('test-burger--close')).toBeFalsy()
  })

  it('should correct work scroll handler', async () => {
    render(Header, {
      localVue,
      store,
      mocks,
      stubs,
      container: document.body.appendChild(containerToRender),
    })

    await fireEvent.scroll(window, { target: { scrollTop: 50 } })

    expect(screen.queryByTestId('test-header-wrapper').className).toContain('header-wrapper')
  })

  it('if call method "show" and ref modalContactMe is undefined > "show" method in ref modalContactMe not call', () => {
    const mockShow = jest.fn()
    const wrapper = shallowMount(Header, {
      localVue,
      mocks,
      stubs,
      store,
      container: document.body.appendChild(containerToRender),
    })
    wrapper.vm.showModal()
    expect(mockShow).not.toHaveBeenCalled()
  })

  it('if call method "show" and ref modalContactMe exist > "show" method in ref modalContactMe call', () => {
    const mockShow = jest.fn()
    const wrapper = shallowMount(Header, {
      localVue,
      mocks,
      container: document.body.appendChild(containerToRender),
      store,
      stubs: {
        NuxtLink: RouterLinkStub,
        ModalContactMe: {
          render(h) { return h('div') },
          methods: {
            show: mockShow,
          },
        },
      },
    })
    wrapper.vm.showModal()
    expect(mockShow).toHaveBeenCalledTimes(1)
  })
})
