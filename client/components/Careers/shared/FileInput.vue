<template>
  <div class="file-input">
    <input
      id="file"
      ref="fileInput"
      data-testid="test-file"
      class="file-input__uploader"
      type="file"
      name="file"
      :accept="acceptedExtensions"
      @change="handleFileSelect"
    >
    <label
      data-testid="test-file-label"
      :class="`file-input__cv--${selectedFile ? 'selected' : 'attachable'}`"
      class="file-input__cv"
      for="file"
    >
      {{ selectedFilename }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'FileInput',

  props: {
    placeholder: {
      type: String,
      default: 'Select a file',
    },
  },

  data() {
    return {
      acceptedExtensions: '.pdf,.cv,.doc,.odt,.docx,.txt',
      selectedFile: null,
    }
  },

  computed: {
    selectedFilename() {
      if (!this.selectedFile) return this.placeholder
      const { name } = this.selectedFile
      if (!name) return ''
      if (name.length > 25) return `${name.substring(0, 25)}...`
      return name
    },
  },

  methods: {
    handleFileSelect(event) {
      const [file] = event.target.files
      this.selectedFile = file
      this.$emit('input', file)
    },

    reset() {
      this.selectedFile = null
      this.$refs.fileInput.value = null
    },
  },
}
</script>

<style lang="scss" scoped>
.file-input {
  position: relative;
  display: inline-flex;

  &__uploader {
    display: none;
  }

  &__cv {
    @include font('Inter', 22px, 400);
    min-width: max-content;
    color: $text-color--grey;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    text-decoration-line: none;
    cursor: pointer;

    @media only screen and (max-width: 550px) {
      font-size: 18px;
    }
  }
}
</style>
