<template>
  <section
    id="it-consulting"
    class="it-consulting"
  >
    <div class="container">
      <h2 class="it-consulting__main-title">
        IT Consulting
      </h2>
      <div class="it-consulting__content">
        <ItConsultingContent
          v-for="type in consultungTypes"
          :key="type.type"
          v-bind="type"
        />
      </div>
      <UIModalTriggerButton
        label="Get expert advice"
        color="black"
        class="it-consulting__button"
        @click="show"
      />
    </div>
    <!-- this id should be unique, because it used for google analytics -->
    <ModalGetExpertAdvice
      id="get-expert-advice-modal"
      ref="modalGetExpertAdvice"
      :location="'\'Get expert advice\' button, services page'"
    />
  </section>
</template>

<script>
import ItConsultingContent from '@/components/Services/ItConsultingContent'
import UIModalTriggerButton from '@/components/shared/UIModalTriggerButton'
import ModalGetExpertAdvice from '@/components/core/modals/ModalGetExpertAdvice'
import { consultungTypes } from '@/data/itConsulting'

export default {
  name: 'ItConsulting',
  components: {
    ItConsultingContent,
    UIModalTriggerButton,
    ModalGetExpertAdvice,
  },

  data() {
    return {
      consultungTypes,
    }
  },

  methods: {
    show() {
      if (!this.$refs?.modalGetExpertAdvice?.show) return
      this.$refs.modalGetExpertAdvice.show()
    },
  },
}
</script>

<style lang="scss" scoped>
.it-consulting {
  padding-bottom: 76px;
  background-color: $bgcolor--white-darken;

  &__content {
    margin-bottom: 22px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    @media screen and (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  }

  &__main-title {
    @include h2-title;
    padding-top: 76px;
    margin-bottom: 8px;
    text-align: center;

    @media screen and (max-width: 834px) {
      margin-bottom: 0;
    }
  }

  &__button {
    width: 100%;
    height: 56px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;

    &:active {
      background-color: $bgcolor--black !important;
      border-color: $border-color--black !important;
    }

    @media screen and (max-width: 1280px) {
      font-size: 14px;
    }

    @media screen and (max-width: 375px) {
      height: 48px;
    }
  }

  @media screen and (max-width: 576px) {
    padding-bottom: 48px;

    &__main-title {
      padding-top: 48px;
    }
  }
}
</style>
