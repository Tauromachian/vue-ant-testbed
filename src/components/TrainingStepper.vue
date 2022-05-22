<template>
  <div>
    <a-steps :current="step">
      <a-step title="First" class="first-step"></a-step>
      <a-step title="Second"></a-step>
    </a-steps>
    <div class="steps-content">
      <training-stepper-form
        v-if="step == 0"
        v-model="form"
      ></training-stepper-form>
      <mass-selection-filter
        v-model="assetsForTraining"
        v-if="step == 1"
      ></mass-selection-filter>
    </div>
    <div class="steps-action">
      <stepper-action-buttons
        @click:continue="next"
        @click:previous="prev"
        :is-first-step="step < steps.length - 1"
        :is-last-step="step == steps.length - 1"
      ></stepper-action-buttons>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

import StepperActionButtons from "./StepperActionButtons.vue";
import MassSelectionFilter from "./MassSelectionFilter.vue";
import TrainingStepperForm from "./TrainingStepperForm.vue";

export default Vue.extend({
  name: "TrainingStepper",
  components: {
    StepperActionButtons,
    MassSelectionFilter,
    TrainingStepperForm,
  },
  data() {
    return {
      step: 0,
      form: {
        epoch0: 10,
        batchSize: 0,
        testSize: 0,
        learningRate: 0.005,
        maxDepth: 1,
        momentum: 0,
        normalizeImage: true,
        epochEndShuffle: true,
        earlyStop: true,
        r1rFlag: true,
        noOfOffAug: 0,
        targetMachine: "ml.c5.2xlarge",
      },
      assetsForTraining: {},
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
