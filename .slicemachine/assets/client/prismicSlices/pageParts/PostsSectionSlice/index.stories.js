import MyComponent from '../../../../../../client/prismicSlices/pageParts/PostsSectionSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/PostsSectionSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"posts_section_slice","items":[{"theme":"light","uid":"utilize ubiquitous web-readiness","type":"post","url":"repurpose best-of-breed ROI","dimensionWidth":"maximize next-generation markets","dimensionHeight":"integrate collaborative e-business","alt":"extend web-enabled mindshare","date":"2013-10-14"},{"theme":"light","uid":"repurpose B2C e-business","type":"tag","url":"scale e-business partnerships","dimensionWidth":"deploy customized synergies","dimensionHeight":"brand frictionless convergence","alt":"aggregate cross-media niches","date":"2017-05-19"},{"theme":"dark","uid":"seize synergistic blockchains","type":"tag","url":"unleash vertical technologies","dimensionWidth":"optimize customized partnerships","dimensionHeight":"strategize scalable relationships","alt":"seize bleeding-edge bandwidth","date":"2018-10-13"}],"primary":{"animation":"fade-up"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
