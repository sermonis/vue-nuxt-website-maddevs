import MyComponent from '../../../../../../client/prismicSlices/pageParts/CardGridSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/CardGridSlice'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"card_grid_slice","items":[{"title":"streamline innovative paradigms","description":"synergize collaborative supply-chains","btnLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=900&h=500&fit=crop"},"fullWidth":false},{"title":"e-enable open-source convergence","description":"disintermediate value-added schemas","btnLink":{"link_type":"Web","url":"https://prismic.io"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"},"fullWidth":false},{"title":"deliver plug-and-play partnerships","description":"matrix leading-edge relationships","btnLink":{"link_type":"Web","url":"http://twitter.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"},"fullWidth":true}],"primary":{"colorTheme":"white"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _CardGridWithList = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"cardGridWithList","name":"Card Grid With List","slice_type":"card_grid_slice","items":[{"title":"grow open-source paradigms","description":[{"type":"paragraph","text":"Eiusmod ad eiusmod sit laborum amet qui pariatur. Dolore qui deserunt sunt proident cillum cillum consectetur veniam laborum non consequat aliquip.","spans":[]}],"list":"maximize robust blockchains"},{"title":"monetize web-enabled platforms","description":[{"type":"paragraph","text":"Reprehenderit reprehenderit amet eu consectetur id mollit laborum nulla laborum enim cupidatat.","spans":[]}],"list":"drive impactful e-services"},{"title":"extend integrated platforms","description":[{"type":"paragraph","text":"Reprehenderit enim ex ad id aliqua laboris ea enim non excepteur nulla occaecat est laborum minim. Do adipisicing sunt ea ea nisi ipsum anim ipsum tempor ex.","spans":[]}],"list":"empower holistic channels"}],"primary":{"colorTheme":"black"},"id":"_CardGridWithList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_CardGridWithList.storyName = 'Card Grid With List'
