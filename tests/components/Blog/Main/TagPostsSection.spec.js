import { render } from '@testing-library/vue'
import TagPostsSection from '@/components/Blog/Main/TagPostsSection'
import tagPosts from '../../../__mocks__/tagPosts'

const mocks = {
  $prismic: {
    asText: () => 'img.png',
  },
}

const store = {
  getters: {
    blogTag: () => 'Blog tag',
    tagPostsCount: () => 5,
    tagPostsLoaded: () => true,
    allAuthors: () => [
      {
        id: '1',
      }, {
        id: '2',
      }, {
        id: '3',
      },
    ],
    tagPostsPage: () => 1,
    tagPosts: () => tagPosts,
  },
}

const stubs = ['FeaturedPost', 'NuxtLink']

describe('TagPostsSection component', () => {
  it('should render correctly', () => {
    const { container } = render(TagPostsSection, {
      store,
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
