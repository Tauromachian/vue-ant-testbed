<template>
  <modal-filter v-model="opened" vertical>
    <a-form>
      <a-form-item label="Nested Groups" name="nested-groups">
        <a-auto-complete
          v-model="form.nestedGroup"
          :options="nestedGroups"
          style="width: 200px"
          placeholder="input here"
        />
      </a-form-item>
      <a-form-item label="Device" name="device">
        <a-auto-complete
          v-model="form.device"
          :options="devices"
          style="width: 200px"
          placeholder="input here"
        />
      </a-form-item>
      <a-form-item label="Camera" name="camera">
        <a-auto-complete
          v-model="form.camera"
          :options="cameras"
          style="width: 200px"
          placeholder="input here"
        />
      </a-form-item>
      <a-form-item label="Project" name="project">
        <a-auto-complete
          v-model="form.project"
          :options="projects"
          style="width: 200px"
          placeholder="input here"
        />
      </a-form-item>
      <a-form-item label="Job" name="job">
        <a-auto-complete
          v-model="form.job"
          :options="jobs"
          style="width: 200px"
          placeholder="input here"
        />
      </a-form-item>
      <a-form-item label="Use Case" name="use-case">
        <a-auto-complete
          v-model="form.useCase"
          :options="useCases"
          style="width: 200px"
          placeholder="input here"
        />
      </a-form-item>
      <a-form-item label="Model" name="model">
        <a-auto-complete
          v-model="form.model"
          :options="models"
          style="width: 200px"
          placeholder="input here"
        />
      </a-form-item>
      <a-form-item label="Tags" name="tags">
        <a-auto-complete
          v-model="form.tags"
          :options="tags"
          style="width: 200px"
          placeholder="input here"
        />
      </a-form-item>
      <a-form-item label="Start Date" name="start-date">
        <a-date-picker v-model="form.dateStart" />
      </a-form-item>
      <a-form-item label="Finish Date" name="finish-date">
        <a-date-picker v-model="form.dateFinish" />
      </a-form-item>
    </a-form>
  </modal-filter>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import ModalFilter from "./ModalFilter.vue";

import { FormMassSelectionFilter } from "@/types/formMassSelectionFilter";

export default Vue.extend({
  components: { ModalFilter },
  props: {
    value: {
      type: Object as PropType<FormMassSelectionFilter>,
      required: true,
    },
  },
  data() {
    return {
      opened: false,
      nestedGroups: [],
      devices: [],
      cameras: [],
      projects: [],
      jobs: [],
      useCases: [],
      models: [],
      tags: [],
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
});
</script>

<style></style>
