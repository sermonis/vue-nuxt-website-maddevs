<template>
  <section>
    <div class="container_regular">
      <h3 class="case_title_h3 m-12_bottom">
        Development workflow
      </h3>
      <TextParagraph class="m-48_bottom media-m-24_bottom">
        Our workflow is thoroughly collaborative and transparent. The various tools we employ help us make sure that
        everyone on the team is on the same page, that tasks get properly tracked and finalised on time, and that issues
        are quickly spotted and resolved.
      </TextParagraph>
    </div>
    <div class="container_full case_image-container background-color-blue-grey m-96_bottom media-m-48_bottom">
      <div class="case_image-wrapp">
        <Picture
          folder="clutch"
          file="workflow"
          extension="png"
          alt="Workflow"
          :width="1440"
          :height="335"
        />
      </div>
    </div>
    <div
      class="container_regular m-48_bottom"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom"
    >
      <h3 class="case_title_h3 m-12_bottom">
        DEV Workflow for Project DEV with UI test step
      </h3>
      <LottieMad
        id="workflow-dev"
        height="480px"
        class="case_lottie"
        :lottie-link="$getMediaFromS3(`/images/Cases/clutch/lottie/workflow.json`)"
        :autoplay="true"
      />
      <TextParagraph class="m-48_top media-m-24_top m-48_bottom media-m-24_bottom">
        At Mad Devs, the use of the agile method is a standard way to maintain transparency throughout all company
        processes. Established development workflows and communication processes positively impact teamwork and help the
        team reach the above-stated goals. All information is stored in Jira, a task-tracking solution.
      </TextParagraph>
    </div>
  </section>
</template>

<script>
import LottieMad from '@/components/shared/LottieMad'
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'Workflow',
  components: {
    TextParagraph,
    LottieMad,
    Picture,
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_lottie {
    max-width: 813px;
  }

  &_image{
    &-container{
      overflow: hidden;
      @media screen and (max-width: 870px) {
        height: 370px;
      }
    }
    &-wrapp {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (max-width: 870px) {
      width: 1200px;
      left: unset;
      top:-44px;
      right: 210px;
      transform: none;
    }
  }
  }
}
</style>
