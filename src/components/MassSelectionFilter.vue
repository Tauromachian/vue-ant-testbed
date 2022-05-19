<template>
  <div>
    <div class="filter-wrapper">
      <mass-selection-filter-form
        v-model="form"
        class="mb-1"
      ></mass-selection-filter-form>
    </div>
    <mass-selection-filter-assets :filter="form"></mass-selection-filter-assets>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import MassSelectionFilterForm from "./MassSelectionFilterForm.vue";
import MassSelectionFilterAssets from "./MassSelectionFilterAssets.vue";

import { FormMassSelectionFilter } from "@/types/formMassSelectionFilter";

export default Vue.extend({
  components: { MassSelectionFilterForm, MassSelectionFilterAssets },
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

<style scoped>
.mb-1 {
  margin-bottom: 1em;
}

.filter-wrapper {
  display: flex;
  justify-content: left;
}
</style>
