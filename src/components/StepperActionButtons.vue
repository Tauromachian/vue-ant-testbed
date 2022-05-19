<template>
  <div>
    <a-button
      v-if="!isFirstStep"
      text
      @click="clickCancel"
      :disabled="loading"
      :loading="loading"
    >
      Previous
    </a-button>

    <a-button
      v-if="!isLastStep"
      type="primary"
      @click="clickContinue"
      :disabled="loading"
      :loading="loading"
    >
      Next
    </a-button>
    <a-button v-else type="primary" @click="clickSubmit"> Submit </a-button>
  </div>
</template>

<script>
export default {
  name: "StepperActionButtons",
  props: {
    isLastStep: {
      type: Boolean,
      default: false,
    },
    isFirstStep: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickContinue() {
      this.$emit("click:continue");
    },
    clickCancel() {
      this.$emit("click:previous");
    },
    clickSubmit() {
      this.$emit("click:submit");
    },
  },
};
</script>

<style></style>
