<template>
  <div>
    <a-steps :current="step">
      <a-step title="First" class="first-step"></a-step>
      <a-step title="Second"></a-step>
    </a-steps>
    <div class="steps-content">
      {{ steps[step].content }}
    </div>
    <div class="steps-action">
      <stepper-action-buttons
        @click:continue="next"
        @click:previous="prev"
        @click:submit="submitTraining"
        :is-first-step="step < steps.length - 1"
        :is-last-step="step == steps.length - 1"
      ></stepper-action-buttons>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

import StepperActionButtons from "./StepperActionButtons.vue";

export default Vue.extend({
  name: "TrainingStepper",
  components: {
    StepperActionButtons,
  },
  data() {
    return {
      step: 0,
      steps: [
        {
          title: "First",
          content: "First-content",
        },
        {
          title: "Second",
          content: "Second-content",
        },
      ],
    };
  },

  methods: {
    next() {
      this.step++;
    },
    prev() {
      this.step--;
    },
  },
});
</script>
<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
</style>
