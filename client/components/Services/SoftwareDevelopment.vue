<template>
  <section
    id="software-development"
    class="software-development"
  >
    <div class="container">
      <h2 class="software-development__main-title">
        Software Development
      </h2>
      <div class="software-development__content">
        <SoftwareDevelopmentContent
          v-for="category in developmentCategories"
          :key="category.type"
          v-bind="category"
        />
      </div>
      <UIModalTriggerButton
        label="Get your trusted IT partner"
        color="grey"
        class="software-development__button"
        @click="show"
      />
    </div>
    <!-- this id should be unique, because it used for google analytics -->
    <ModalGetYourTrustedItPartner
      id="get-your-trusted-it-partner-modal"
      ref="modalGetYourTrustedItPartner"
      :location="'\'Get your trusted IT partner\' button, services page'"
    />
  </section>
</template>

<script>
import SoftwareDevelopmentContent from '@/components/Services/SoftwareDevelopmentContent'
import UIModalTriggerButton from '@/components/shared/UIModalTriggerButton'
import ModalGetYourTrustedItPartner from '@/components/core/modals/ModalGetYourTrustedItPartner'
import { developmentCategories } from '@/data/softwareDevelopment'

export default {
  name: 'SoftwareDevelopment',
  components: {
    SoftwareDevelopmentContent,
    UIModalTriggerButton,
    ModalGetYourTrustedItPartner,
  },

  data() {
    return {
      developmentCategories,
    }
  },

  methods: {
    show() {
      if (!this.$refs?.modalGetYourTrustedItPartner?.show) return
      this.$refs.modalGetYourTrustedItPartner.show()
    },
  },
}
</script>

<style lang="scss" scoped>
.software-development {
  &__main-title {
    text-align: center;
    @include h2-title;
  }

  &__main-title,
  &__button {
    color: $text-color--white;
  }

  &__button {
    width: 100%;
    height: 56px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    border-color: $button-border--white-opacity;

    &:hover {
      background-color: $bgcolor--white;
      color: $text-color--black !important;
    }

    &:active {
      background-color: $bgcolor--white !important;
      border-color: $button-border--white-opacity !important;
    }

    @media screen and (max-width: 1280px) {
      font-size: 14px;
    }

    @media screen and (max-width: 375px) {
      height: 48px;
    }
  }

  &__content {
    margin-bottom: 22px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

    @media screen and (max-width: 991px) {
      grid-template-columns: 1fr;
    }

    @media screen and (min-width: 400px) and (max-width: 1023px) {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 834px) {
    padding-bottom: 25px;
  }

  @media screen and (max-width: 578px) {
    padding-bottom: 47px;
  }
}
</style>
