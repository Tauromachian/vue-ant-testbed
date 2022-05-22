<template>
  <a-form vertical>
    <a-form-item label="Number of Epochs" name="nested-groups">
      <a-input-number :min="10" :max="1000" v-model="form.epochNumber" />
    </a-form-item>
    <a-form-item label="Batch Size" name="nested-groups">
      <a-input-number :min="0" :max="50" v-model="form.batchSize" />
    </a-form-item>
    <a-form-item label="Test Size" name="nested-groups">
      <a-input-number :min="0.0" :max="1.0" v-model="form.testSize" />
    </a-form-item>
    <a-form-item label="Learning rate" name="nested-groups">
      <a-input-number :min="0.005" :max="1" v-model="form.learningRate" />
    </a-form-item>
    <a-form-item label="Max Depth" name="nested-groups">
      <a-input-number :min="1" :max="10" v-model="form.maxDepth" />
    </a-form-item>
    <a-form-item label="Momentum" name="nested-groups">
      <a-input-number :min="0" :max="1" v-model="form.momentum" />
    </a-form-item>
    <a-form-item label="Normalize image" name="nested-groups">
      <a-switch v-model="form.normalizeImage" />
    </a-form-item>
    <a-form-item label="Normalize Epoch End Shuffle" name="nested-groups">
      <a-switch v-model="form.epochEndShuffle" />
    </a-form-item>
    <a-form-item label="Stop training early" name="nested-groups">
      <a-switch v-model="form.earlyStop" />
    </a-form-item>
    <a-form-item label="RlR" name="nested-groups">
      <a-switch v-model="form.r1rFlag" />
    </a-form-item>
    <a-form-item label="Number of Offline augmentations" name="nested-groups">
      <a-input-number :min="0" :max="10" v-model="form.noOfOffAug" />
    </a-form-item>
    <a-form-item label="Training Machine" name="device">
      <a-auto-complete
        v-model="form.targetMachine"
        :options="trainingMachines"
        style="width: 200px"
        placeholder="input here"
      />
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { TrainingForm } from "@/types/trainingForm";

export default Vue.extend({
  name: "TrainingStepperForm",
  props: {
    value: {
      type: Object as PropType<TrainingForm>,
      required: true,
    },
  },
  data() {
    return {
      trainingMachines: [
        { value: "ml.c5.2xlarge", text: "Sagemaker: Small - ml.c5.2xlarge" },
        {
          value: "ml.g4dn.xlarge",
          text: "Sagemaker: Small (GPU) - ml.g4dn.xlarge",
        },
        { value: "ml.c5.4xlarge", text: "Sagemaker: Large - ml.c5.4xlarge" },
        {
          value: "ml.g4dn.4xlarge",
          text: "Sagemaker: Large (GPU) - ml.g4dn.4xlarge",
        },
        { value: "ml.c5.9xlarge", text: "Sagemaker: XLarge - ml.c5.9xlarge" },
        {
          value: "ml.g4dn.8xlarge",
          text: "Sagemaker: XLarge (GPU) - ml.g4dn.8xlarge",
        },
      ],
    };
  },
  computed: {
    form: {
      get(): TrainingForm {
        return this.value;
      },
      set(value: TrainingForm) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    onClick(): void {
      this.$emit("click:accept");
    },
  },
});
</script>

<style scoped>
.ant-form {
  text-align: left;
}
</style>
