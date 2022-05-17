<template>
  <a-dropdown :trigger="['click']">
    <a-button type="primary"> {{ title }} </a-button>
    <template #overlay>
      <a-menu class="content-wrapper">
        <slot />
        <action-buttons @accept-click="onClick"></action-buttons>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
import Vue from "vue";

import ActionButtons from "./ActionButtons.vue";

export default Vue.extend({
  components: { ActionButtons },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Filter",
    },
  },
  computed: {
    filterMenu: {
      get(): boolean {
        return this.value;
      },
      set(val: boolean): void {
        this.$emit("input", val);
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
.content-wrapper {
  height: 600px;
  padding: 2em;
  overflow: scroll;
}
</style>
