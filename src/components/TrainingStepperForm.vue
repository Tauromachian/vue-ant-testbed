<template>
  <a-form vertical>
    <a-form-item label="Number of Epochs" name="nested-groups">
      <a-input-number :min="10" :max="1000" />
    </a-form-item>
    <a-form-item label="Batch Size" name="nested-groups">
      <a-input-number :min="0" :max="50" />
    </a-form-item>
    <a-form-item label="Test Size" name="nested-groups">
      <a-input-number :min="0.0" :max="1.0" />
    </a-form-item>
    <a-form-item label="Learning rate" name="nested-groups">
      <a-input-number :min="0.005" :max="1" />
    </a-form-item>
    <a-form-item label="Max Depth" name="nested-groups">
      <a-input-number :min="1" :max="10" />
    </a-form-item>
    <a-form-item label="Momentum" name="nested-groups">
      <a-input-number :min="0" :max="1" />
    </a-form-item>
    <a-form-item label="Normalize image" name="nested-groups">
      <a-switch />
    </a-form-item>
    <a-form-item label="Normalize Epoch End Shuffle" name="nested-groups">
      <a-switch />
    </a-form-item>
    <a-form-item label="Stop training early" name="nested-groups">
      <a-switch />
    </a-form-item>
    <a-form-item label="RlR" name="nested-groups">
      <a-switch />
    </a-form-item>
    <a-form-item label="Number of Offline augmentations" name="nested-groups">
      <a-input-number :min="0" :max="10" />
    </a-form-item>
    <a-form-item label="Training Machine" name="device">
      <a-auto-complete
        v-model="form.device"
        :options="trainingMachines"
        style="width: 200px"
        placeholder="input here"
      />
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { FormMassSelectionFilter } from "@/types/formMassSelectionFilter";

export default Vue.extend({
  name: "TrainingStepperForm",
  props: {
    value: {
      type: Object as PropType<FormMassSelectionFilter>,
      required: true,
    },
  },
  data() {
    return {
      trainingMachines: [
        { value: "Sagemaker: Small - ml.c5.2xlarge" },
        { value: "Sagemaker: Small (GPU) - ml.g4dn.xlarge" },
        { value: "Sagemaker: Large - ml.c5.4xlarge" },
        { value: "Sagemaker: Large (GPU) - ml.g4dn.4xlarge" },
        { value: "Sagemaker: XLarge - ml.c5.9xlarge" },
        { value: "Sagemaker: XLarge (GPU) - ml.g4dn.8xlarge" },
      ],
    };
  },
  computed: {
    form: {
      get(): FormMassSelectionFilter {
        return this.value;
      },
      set(value: FormMassSelectionFilter) {
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
