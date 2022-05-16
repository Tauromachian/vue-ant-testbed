<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <mass-selection-filter></mass-selection-filter>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MassSelectionFilter from "@/components/MassSelectionFilter.vue";

export default Vue.extend({
  components: { MassSelectionFilter },
});
</script>
