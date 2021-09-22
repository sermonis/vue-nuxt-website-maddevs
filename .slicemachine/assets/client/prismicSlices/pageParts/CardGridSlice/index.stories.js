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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"card_grid_slice","items":[{"title":"visualize sticky models","description":"cultivate synergistic interfaces","btnLink":{"link_type":"Web","url":"https://prismic.io"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"},"fullWidth":false},{"title":"facilitate end-to-end communities","description":"productize cross-platform partnerships","btnLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=900&h=500&fit=crop"},"fullWidth":true},{"title":"reintermediate dynamic architectures","description":"recontextualize scalable networks","btnLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"},"fullWidth":false}],"primary":{"colorTheme":"black","animation":"none"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _CardGridWithIcon = () => ({
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
      mock: {"variation":"cardGridWithIcon","name":"Card Grid With Icon","slice_type":"card_grid_slice","items":[{"link":{"link_type":"Web","url":"http://google.com"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"},"title":"seize visionary e-markets","description":"envisioneer interactive experiences"},{"link":{"link_type":"Web","url":"http://google.com"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"},"title":"scale sexy metrics","description":"embrace front-end synergies"},{"link":{"link_type":"Web","url":"https://prismic.io"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&h=500&fit=crop"},"title":"innovate intuitive schemas","description":"engineer extensible niches"}],"primary":{"displayButtons":true,"background":"white","colorTheme":"white","animation":"zoom-in"},"id":"_CardGridWithIcon"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_CardGridWithIcon.storyName = 'Card Grid With Icon'

export const _RichTextCards = () => ({
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
      mock: {"variation":"richTextCards","name":"RichTextCards","slice_type":"card_grid_slice","items":[{"fullWidth":true,"background":"#c6b185","title":"strategize world-class networks","content":[{"type":"paragraph","text":"Cupidatat excepteur qui exercitation aute dolore cupidatat esse.","spans":[]}],"alignText":"left"},{"fullWidth":true,"background":"#5653ca","title":"whiteboard extensible bandwidth","content":[{"type":"paragraph","text":"Incididunt cillum sit anim fugiat culpa proident nulla amet non veniam. Ullamco labore aliquip aliqua.","spans":[]}],"alignText":"center"}],"primary":{"animation":"none"},"id":"_RichTextCards"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RichTextCards.storyName = 'RichTextCards'

export const _RichTextCardsAnimation = () => ({
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
      mock: {"variation":"richTextCardsAnimation","name":"RichTextCardsAnimation","slice_type":"card_grid_slice","items":[{"fullWidth":true,"background":"#24804d","title":"disintermediate turn-key experiences","content":[{"type":"paragraph","text":"Commodo elit non ad nisi excepteur. Culpa laboris sunt ad ut cillum consequat ad. Consectetur velit est eu occaecat proident et ex irure in Lorem nostrud.","spans":[]}],"alignText":"left","lottie-animations":"development-stage"},{"fullWidth":true,"background":"#41f0f0","title":"cultivate killer e-tailers","content":[{"type":"paragraph","text":"Ullamco fugiat ullamco adipisicing laboris enim do. Reprehenderit cillum velit id duis sit sit qui aliquip elit occaecat deserunt cillum aliqua officia labore. Tempor qui magna irure quis exercitation.","spans":[]}],"alignText":"left","lottie-animations":"testing-stage"},{"fullWidth":true,"background":"#bcfb06","title":"deliver extensible bandwidth","content":[{"type":"paragraph","text":"Aliqua pariatur commodo cupidatat aliqua nostrud aute quis minim exercitation elit.","spans":[]}],"alignText":"left","lottie-animations":"research-animate"}],"primary":{"animation":"fade-down-left"},"id":"_RichTextCardsAnimation"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RichTextCardsAnimation.storyName = 'RichTextCardsAnimation'

export const _RichTextCardsBottomAnimation = () => ({
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
      mock: {"variation":"richTextCardsBottomAnimation","name":"RichTextCardsBottomAnimation","slice_type":"card_grid_slice","items":[{"fullWidth":true,"background":"#3ed0f5","title":"facilitate end-to-end action-items","content":[{"type":"paragraph","text":"Sint Lorem et enim dolore deserunt nisi minim est. Voluptate dolore eiusmod pariatur enim voluptate elit veniam. Labore elit nulla id consectetur sunt aute.","spans":[]}],"alignText":"left","lottie-animations":"infrastructure-animation"},{"fullWidth":false,"background":"#1a5e5e","title":"synergize one-to-one web-readiness","content":[{"type":"paragraph","text":"Occaecat officia eiusmod magna. Officia eu anim Lorem.","spans":[]}],"alignText":"left","lottie-animations":"-"},{"fullWidth":true,"background":"#90ab05","title":"recontextualize back-end architectures","content":[{"type":"paragraph","text":"Aliquip pariatur incididunt sunt do amet qui proident duis cillum veniam laborum do nulla ex.","spans":[]}],"alignText":"left","lottie-animations":"-"},{"fullWidth":true,"background":"#f0ad59","title":"evolve next-generation e-commerce","content":[{"type":"paragraph","text":"Dolor eu cupidatat ex officia reprehenderit ut Lorem. Amet sint ut proident veniam laboris ut dolore aliquip labore minim tempor excepteur nisi.","spans":[]}],"alignText":"left","lottie-animations":"infrastructure-animation"}],"primary":{"animation":"fade-up"},"id":"_RichTextCardsBottomAnimation"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RichTextCardsBottomAnimation.storyName = 'RichTextCardsBottomAnimation'
