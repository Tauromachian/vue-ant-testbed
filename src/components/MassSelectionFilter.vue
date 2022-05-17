<template>
  <modal-filter>
    <a-form>
      <label for="">Nested Groups</label>
      <a-auto-complete
        :options="options"
        style="width: 200px"
        placeholder="input here"
        @select="onSelect"
        @search="onSearch"
      />
      <label for="">Device</label>
      <a-auto-complete
        :options="options"
        style="width: 200px"
        placeholder="input here"
        @select="onSelect"
        @search="onSearch"
      />
      <label for="">Camera</label>
      <a-auto-complete
        :options="options"
        style="width: 200px"
        placeholder="input here"
        @select="onSelect"
        @search="onSearch"
      />
      <label for="">Project</label>
      <a-auto-complete
        :options="options"
        style="width: 200px"
        placeholder="input here"
        @select="onSelect"
        @search="onSearch"
      />
      <label for="">Job</label>
      <a-auto-complete
        :options="options"
        style="width: 200px"
        placeholder="input here"
        @select="onSelect"
        @search="onSearch"
      />
      <label for="">Use Case</label>
      <a-auto-complete
        :options="options"
        style="width: 200px"
        placeholder="input here"
        @select="onSelect"
        @search="onSearch"
      />
      <label for="">Model</label>
      <a-auto-complete
        :options="options"
        style="width: 200px"
        placeholder="input here"
        @select="onSelect"
        @search="onSearch"
      />
      <label for="">Tags</label>
      <a-auto-complete
        :options="options"
        style="width: 200px"
        placeholder="input here"
        @select="onSelect"
        @search="onSearch"
      />
      <label for="">Start Date</label>
      <a-date-picker v-model="form" />
      <label for="">Finish Date</label>
      <a-date-picker v-model="form" />
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
