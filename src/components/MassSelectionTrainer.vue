<template>
  <mass-selection-filter-form
    @click:accept="postTrainedAsset"
  ></mass-selection-filter-form>
</template>

<script>
import MassSelectionFilterForm from "./MassSelectionFilterForm.vue";

export default {
  name: "MassSelectionTrainer",
  components: {
    MassSelectionFilterForm,
  },
  methods: {
    postTrainedAsset() {
      return;
    },
  },
};
</script>

<style></style>
