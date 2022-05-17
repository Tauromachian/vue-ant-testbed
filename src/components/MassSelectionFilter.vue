<template>
  <modal-filter>
    <a-form>
      <label for="">Nested Groups</label>
      <a-auto-complete
        v-model="form.nestedGroup"
        :options="options"
        style="width: 200px"
        placeholder="input here"
      />
      <label for="">Device</label>
      <a-auto-complete
        v-model="form.device"
        :options="options"
        style="width: 200px"
        placeholder="input here"
      />
      <label for="">Camera</label>
      <a-auto-complete
        v-model="form.camera"
        :options="options"
        style="width: 200px"
        placeholder="input here"
      />
      <label for="">Project</label>
      <a-auto-complete
        v-model="form.project"
        :options="options"
        style="width: 200px"
        placeholder="input here"
      />
      <label for="">Job</label>
      <a-auto-complete
        v-model="form.job"
        :options="options"
        style="width: 200px"
        placeholder="input here"
      />
      <label for="">Use Case</label>
      <a-auto-complete
        v-model="form.useCase"
        :options="options"
        style="width: 200px"
        placeholder="input here"
      />
      <label for="">Model</label>
      <a-auto-complete
        v-model="form.model"
        :options="options"
        style="width: 200px"
        placeholder="input here"
      />
      <label for="">Tags</label>
      <a-auto-complete
        v-model="form.tags"
        :options="options"
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
