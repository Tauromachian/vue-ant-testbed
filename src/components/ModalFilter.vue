<template>
  <a-dropdown :trigger="['click']">
    <a-button type="primary"> {{ title }} </a-button>
    <template #overlay>
      <a-menu class="content-wrapper">
        <slot />
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
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
  padding: 2em;
}
</style>
