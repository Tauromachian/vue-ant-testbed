<template>
  <modal-filter>
    <a-form>
      <label for="">Nested Groups</label>
      <a-auto-complete
        v-model="form.nestedGroup"
        :options="nestedGroups"
        style="width: 200px"
        placeholder="input here"
      />
      <label for="">Device</label>
      <a-auto-complete
        v-model="form.device"
        :options="devices"
        style="width: 200px"
        placeholder="input here"
      />
      <label for="">Camera</label>
      <a-auto-complete
        v-model="form.camera"
        :options="cameras"
        style="width: 200px"
        placeholder="input here"
      />
      <label for="">Project</label>
      <a-auto-complete
        v-model="form.project"
        :options="projects"
        style="width: 200px"
        placeholder="input here"
      />
      <label for="">Job</label>
      <a-auto-complete
        v-model="form.job"
        :options="jobs"
        style="width: 200px"
        placeholder="input here"
      />
      <label for="">Use Case</label>
      <a-auto-complete
        v-model="form.useCase"
        :options="useCases"
        style="width: 200px"
        placeholder="input here"
      />
      <label for="">Model</label>
      <a-auto-complete
        v-model="form.model"
        :options="models"
        style="width: 200px"
        placeholder="input here"
      />
      <label for="">Tags</label>
      <a-auto-complete
        v-model="form.tags"
        :options="tags"
        style="width: 200px"
        placeholder="input here"
      />
      <label for="">Start Date</label>
      <a-date-picker v-model="form.dateStart" />
      <label for="">Finish Date</label>
      <a-date-picker v-model="form.dateFinish" />
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
