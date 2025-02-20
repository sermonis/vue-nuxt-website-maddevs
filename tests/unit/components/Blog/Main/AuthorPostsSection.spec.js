import { render } from '@testing-library/vue'
import AuthorPostsSection from '@/components/Blog/Main/AuthorPostsSection'
import allPosts from '../../../__mocks__/allPosts'

const mocks = {
  $prismic: {
    asText: () => 'img.png',
  },
}

const store = {
  getters: {
    blogAuthor: () => ({
      name: 'Maddevs',
      postition: 'position',
      image: {
        alt: 'alt',
        url: 'someurl',
      },
    }),
    authorPosts: () => allPosts,
    authorPostsLoaded: () => true,
    authorPostsPage: () => 1,
  },
}

const stubs = ['PrismicImage', 'NuxtLink', 'FeaturedPost', 'PostCard']

describe('AuthorPostsSection component', () => {
  it('should render correctly', () => {
    const { container } = render(AuthorPostsSection, {
      stubs,
      mocks,
      store,
    })

    expect(container).toMatchSnapshot()
  })
})
