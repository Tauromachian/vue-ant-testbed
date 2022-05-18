<template>
  <div>
    <mass-selection-filter-form v-model="form"></mass-selection-filter-form>
    <mass-selection-filter-images :filter="form"></mass-selection-filter-images>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import MassSelectionFilterForm from "./MassSelectionFilterForm.vue";
import MassSelectionFilterImages from "./MassSelectionFilterImages.vue";

import { FormMassSelectionFilter } from "@/types/formMassSelectionFilter";

export default Vue.extend({
  components: { MassSelectionFilterForm, MassSelectionFilterImages },
  props: {
    value: {
      type: Object as PropType<FormMassSelectionFilter>,
      required: true,
    },
  },
  data() {
    return {
      form: {
        nestedGroup: "",
        device: "",
        camera: "",
        project: "",
        job: "",
        useCase: "",
        model: "",
        tags: [],
        dateStart: "",
        dateFinish: "",
      },
    };
  },

  methods: {
    onClick(): void {
      this.$emit("click:accept");
    },
  },
});
</script>

<style></style>
