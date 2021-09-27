import { render } from '@testing-library/vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import CaseYourcast from '@/pages/clients/case-studies/yourcast'
import formBaseProps from '../../__mocks__/formBaseProps'

const localVue = createLocalVue()
localVue.use(Vuex)

const DESCRIPTION = 'OTT-like streaming platform case study. Read how Mad Devs developed an online video streaming service for isolated groups of people feeling homesick.'

const META_DATA = {
  description: DESCRIPTION,
  title: 'Mad Devs: Software & Mobile App Development Company | Blog Author',
  'og:url': 'https://maddevs.io/clients/case-studies/yourcast/',
  'og:type': 'website',
  'og:site_name': 'Custom Software Development Company',
  'og:title': 'Mad Devs Case Study: YourcastTV - online video streaming platform',
  'og:description': DESCRIPTION,
  'og:image': 'https://maddevs.io/yourcast.jpg',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Mad Devs Case Study: YourcastTV - online video streaming platform',
  'twitter:description': DESCRIPTION,
  'twitter:image:src': 'https://maddevs.io/yourcast.jpg',
  'twitter:url': 'https://maddevs.io/clients/case-studies/yourcast/',
  metaTitle: '',
  url: '',
  jsonLd: '{"@context": "http://www.schema.org", "@type": "Organization", "name": "Mad Devs Group LTD - Custom Software Development Company", "url": "https://maddevs.io", "logo": "https://maddevs.io/Open-Graph.png", "foundingDate": "2016", "email": "team@maddevs.io", "description": "Mad Devs Group LTD is a software development company headquartered in London, which specializes in developing highly scalable, enterprise-level software solutions. Since the year 2016, the Mad Devs Group LTD team has developed 50+ projects and online services for finance, transportation & logistics, security, edtech, and advertising industries. The company’s customers are based in the United States, Australia, United Kingdom, France, Germany, Switzerland, Austria, Poland, Vietnam, Singapore, Russia, and CIS countries.", "address": {"@type": "PostalAddress", "streetAddress": "27 Old Gloucester Street", "addressLocality": "London", "addressRegion": "UK", "postalCode": "WC1N3AX"}, "contactPoint": {"@type": "ContactPoint", "contactType": "customer service", "telephone": "+442039848555"}, "sameAs": ["https://www.facebook.com/maddevsllc", "http://www.linkedin.com/company/mad-devs", "https://blog.maddevs.io", "https://clutch.co/profile/mad-devs", "https://www.glassdoor.com/Overview/Working-at-Mad-Devs-EI_IE2507466.11,19.htm", "https://twitter.com/MadDevsIO", "https://www.insAuthorram.com/maddevsio", "https://www.crunchbase.com/organization/mad-devs", "https://github.com/maddevsio", "https://www.behance.net/maddevs"]}',
  image: 'https://maddevs.io/blog.png',
}

const mocks = {
  ...formBaseProps,
  $nuxt: {
    $route: {
      push: jest.fn(),
      path: '/godee',
    },
  },
  $getMediaFromS3: () => 'img.jpg',
  $lazyLoad: {
    init: jest.fn(),
  },
}

const stubs = ['NuxtLink', 'Main', 'CaseHeader']

const directives = {
  'lazy-load': () => {},
}

const actions = {
  setHeaderTransparentArea: () => {},
  setHeaderTransparent: () => {},
}

const getters = {
  homePageContent: () => ({ description: DESCRIPTION }),
}

const store = new Vuex.Store({
  actions,
  getters,
})

describe('CaseYourcast _uid component', () => {
  global.$nuxt = {
    $route: {
      name: null,
    },
  }

  it('should render correctly', () => {
    const { container } = render(CaseYourcast, {
      localVue,
      store,
      mocks,
      stubs,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(CaseYourcast, {
      localVue,
      store,
      mocks,
      stubs,
      directives,
    })

    const actual = wrapper.vm.$options.head.call(wrapper.vm)

    actual.meta.forEach(meta => {
      expect(META_DATA[meta.name] || META_DATA[meta.property]).toBe(meta.content)
    })
  })
})