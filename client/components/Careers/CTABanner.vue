<template>
  <div
    class="careers-cta-banner_container container"
  >
    <UIBanner
      :title="$t('careers.section-9.title')"
      :text="$t('careers.section-9.description')"
      :image="$getMediaFromS3(`/images/CTABanner/Daria.png`)"
      image-alt-text="Daria"
      :man-name="$t('careers.section-9.hr')"
      man-position="Head of HR Departament"
    >
      <a :href="mailTo">
        {{ $t('careers.section-9.btn') }}
      </a>
      <ul class="careers-cta-banner__links">
        <li>
          <a
            href="https://novosibirsk.hh.ru/employer/2861993/"
            target="_blank"
          >
            Headhunter
          </a>
        </li>
        <li>
          <a
            href="https://career.habr.com/companies/maddevs/cp/vacancies/"
            target="_blank"
          >
            Habr.com
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/mad-devs/"
            target="_blank"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </UIBanner>
  </div>
</template>

<script>
import UIBanner from '@/components/shared/UIBanner'

export default {
  name: 'CTABanner',
  components: {
    UIBanner,
  },

  computed: {
    mailTo() {
      return `mailto:${process.env.emailCV}`
    },
  },
}
</script>

<style lang="scss" scoped>
.careers-cta-banner {
  &_container {
    padding-bottom: 100px;
    /deep/ .ui-button {
      width: 193px;
      height: 52px;
      font-weight: 400;
      font-size: 18px;
      line-height: 18px;
      letter-spacing: -0.02em;
      img {
        transform: translateY(2.5px);
      }
      @media screen and (max-width: 900px) {
        font-size: 16px;
      }
    }
  }
  &__links {
    margin-top: 24.5px;
    display: flex;
    li {
      margin-right: 11.5px;
      a {
        letter-spacing: -0.013em;
        font-size: 14px;
        line-height: 19px;
        color: $text-color--black-oil;
        text-decoration: underline;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }

  @media screen and (max-width: 768px) {
    &_container {
      padding-bottom: 44px;
    }
  }
}

/deep/ .cta-banner__info > a {
  padding: 17px 31px 17px 28px;
  background-color: #EC1C24;
  border-radius: 4px;
  line-height: 100%;
  text-decoration: none;
  color: #fff;
  @include font('Inter', 18px, 400);

  &:active {
    background-color: #b11218;
  }
}
</style>
