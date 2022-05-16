<template>
  <modal-filter>
    <a-form>
      <a-auto-complete
        :options="options"
        style="width: 200px"
        placeholder="input here"
        @select="onSelect"
        @search="onSearch"
      />
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
});
</script>

<style></style>
