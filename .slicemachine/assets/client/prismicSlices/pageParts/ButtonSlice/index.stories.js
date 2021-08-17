import MyComponent from '../../../../../../client/prismicSlices/pageParts/ButtonSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/ButtonSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"button_slice","items":[],"primary":{"fullWidth":true,"alignment":"right","text":"whiteboard sticky technologies","link":{"link_type":"Web","url":"https://slicemachine.dev"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _OutlinedButton = () => ({
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
      mock: {"variation":"outlinedButton","name":"Outlined Button","slice_type":"button_slice","items":[],"primary":{"fullWidth":false,"alignment":"left","text":"unleash bleeding-edge solutions","link":{"link_type":"Web","url":"https://slicemachine.dev"}},"id":"_OutlinedButton"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_OutlinedButton.storyName = 'Outlined Button'

export const _LinkButton = () => ({
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
      mock: {"variation":"linkButton","name":"Link Button","slice_type":"button_slice","items":[],"primary":{"fullWidth":false,"alignment":"center","text":"transition interactive architectures","link":{"link_type":"Web","url":"https://prismic.io"}},"id":"_LinkButton"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_LinkButton.storyName = 'Link Button'