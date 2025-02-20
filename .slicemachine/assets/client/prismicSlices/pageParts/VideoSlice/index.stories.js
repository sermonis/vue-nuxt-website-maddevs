import MyComponent from '../../../../../../client/prismicSlices/pageParts/VideoSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/VideoSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"video_slice","items":[],"primary":{"animation":"zoom-in","title":"scale granular content","subtitle":"matrix distributed networks","description":"utilize frictionless infomediaries","width":"small","video":"mesh cross-platform methodologies","poster":"extend robust e-commerce","link":"synergize open-source e-tailers","folder":"disintermediate 24/7 vortals","file":"innovate e-business initiatives","logoWidth":"embrace collaborative blockchains","logoHeight":"unleash dynamic eyeballs","alt":"reintermediate rich paradigms","colorTheme":"white"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
